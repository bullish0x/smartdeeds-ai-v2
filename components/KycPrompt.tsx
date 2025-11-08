"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { createVerificationSession } from "@/lib/kyc";
import { createPortal } from "react-dom";

/**
 * Reusable KYC Prompt modal and helpers.
 *
 * Goal:
 * - Instead of gating the whole app, show this modal only when the user
 *   attempts protected actions (e.g., connect or mint).
 *
 * Typical usage:
 *   const [kycOpen, setKycOpen] = useState(false);
 *   const { kycEnabled, verified, refresh } = useKycStatus();
 *
 *   const handleMintClick = () => {
 *     if (kycEnabled && !verified) {
 *       setKycOpen(true);
 *       return;
 *     }
 *     // proceed with mint action...
 *   };
 *
 *   <KycPrompt
 *     open={kycOpen}
 *     onOpenChange={(o) => {
 *       setKycOpen(o);
 *       if (!o) refresh(); // sync status after close
 *     }}
 *   />
 */

/**
 * Returns whether KYC feature is enabled (compile-time public env var).
 * When disabled, the prompt should not be required.
 */
export function getKycEnabled(): boolean {
  // NEXT_PUBLIC_ vars are replaced at build-time and safe to read on client.
  return process.env.NEXT_PUBLIC_KYC_ENABLED === "true";
}

/**
 * Returns whether the current user is KYC verified (via localStorage flag).
 */
export function getKycVerified(): boolean {
  if (
    typeof window === "undefined" ||
    typeof window.localStorage === "undefined"
  ) {
    return false;
  }
  return window.localStorage.getItem("kycVerified") === "true";
}

/**
 * Convenience: whether KYC must be enforced for the current user/session.
 */
export function shouldEnforceKyc(): boolean {
  return getKycEnabled() && !getKycVerified();
}

/**
 * React hook to track KYC status and respond to localStorage changes.
 */
export function useKycStatus() {
  const [kycEnabled] = useState<boolean>(getKycEnabled());
  const [verified, setVerified] = useState<boolean>(getKycVerified());

  // Allow manual refresh (e.g., after closing modal or returning from flow)
  const refresh = useCallback(() => {
    setVerified(getKycVerified());
  }, []);

  // Respond to cross-tab or same-tab localStorage updates
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "kycVerified") {
        setVerified(e.newValue === "true");
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return { kycEnabled, verified, refresh, setVerified };
}

/**
 * Initiates the KYC verification flow by creating a session on the backend
 * and redirecting the user to the hosted KYC page.
 *
 * Note:
 * - The user will be redirected away from the current page.
 * - Ensure your KYC backend whitelists `${origin}/kyc/return` as a return URL.
 */
export async function startKycFlow(): Promise<void> {
  const origin =
    typeof window !== "undefined" && window.location
      ? window.location.origin
      : "";
  const returnUrl = `${origin}/kyc/return`;

  const resp = await createVerificationSession(returnUrl);
  const sessionId = resp.session_id;
  const redirectUrl = resp.url || resp.verification_url || resp.redirect_url;

  if (!sessionId) {
    throw new Error("No session_id returned from /create-verification-session");
  }
  if (!redirectUrl) {
    throw new Error(
      "No verification URL returned. The backend should include a URL to redirect the user.",
    );
  }

  // Persist the session id to recover it on the return page if needed
  if (typeof window !== "undefined") {
    window.localStorage.setItem("kycSessionId", sessionId);
    // Redirect to the hosted flow
    window.location.href = redirectUrl;
  }
}

export interface KycPromptProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  title?: string;
  description?: string;

  // Labels
  startLabel?: string; // default: "Start verification"
  cancelLabel?: string; // default: "Not now"

  // Callbacks
  onStarted?: () => void; // before redirect
  onCancelled?: () => void;
}

/**
 * KycPrompt
 * A controlled modal that prompts the user to complete KYC.
 *
 * Render this component near the root (so it's above content) and toggle `open`
 * when a protected action is attempted by an unverified user.
 */
export default function KycPrompt({
  open,
  onOpenChange,

  title = "Identity verification required",
  description = "To continue, please complete a quick KYC check. This helps keep members and the project safe.",
  startLabel = "Start verification",
  cancelLabel = "Not now",

  onStarted,
  onCancelled,
}: KycPromptProps) {
  const { kycEnabled, verified, refresh } = useKycStatus();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Auto-close if KYC becomes verified while modal is open
  useEffect(() => {
    if (open && verified) {
      onOpenChange(false);
    }
  }, [open, verified, onOpenChange]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const canShow = useMemo(
    () => open && mounted && kycEnabled && !verified,
    [open, mounted, kycEnabled, verified],
  );

  const handleCancel = () => {
    if (busy) return;
    onOpenChange(false);
    onCancelled?.();
  };

  const handleStart = async () => {
    if (busy) return;
    setBusy(true);
    setError(null);
    try {
      onStarted?.();
      await startKycFlow();
    } catch (e: any) {
      const message =
        e?.message || "Failed to start verification. Please try again.";
      setError(message);
      setBusy(false);
    }
  };

  if (!canShow) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby="kyc-prompt-title"
      aria-describedby="kyc-prompt-description"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={busy ? undefined : handleCancel}
      />

      {/* Modal Panel */}
      <div className="relative z-50 mx-4 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-2xl dark:border-gray-800 dark:bg-gray-900">
        <div className="mb-4">
          <h2
            id="kyc-prompt-title"
            className="text-xl font-bold text-black dark:text-white text-center"
          >
            {title}
          </h2>
          <p
            id="kyc-prompt-description"
            className="mt-2 text-sm text-gray-700 dark:text-gray-300 text-center"
          >
            {description}
          </p>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
            {error}
          </div>
        )}

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={handleCancel}
            disabled={busy}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:w-auto"
          >
            {cancelLabel}
          </button>

          <button
            type="button"
            onClick={handleStart}
            disabled={busy}
            className="w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:w-auto"
          >
            {busy ? "Starting…" : startLabel}
          </button>
        </div>

        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
          You’ll be redirected to our verification provider. On completion,
          you’ll return here automatically.
        </div>
      </div>
    </div>,
    document.body,
  );
}

/**
 * Utility to wrap an action with a KYC check.
 *
 * Example:
 *   const [promptOpen, setPromptOpen] = useState(false);
 *   const onClick = guardWithKyc(() => doMint(), () => setPromptOpen(true));
 *
 *   <button onClick={onClick}>Mint</button>
 *   <KycPrompt open={promptOpen} onOpenChange={setPromptOpen} />
 */
export function guardWithKyc(action: () => void, openPrompt: () => void) {
  return () => {
    if (!getKycEnabled() || getKycVerified()) {
      action();
      return;
    }
    openPrompt();
  };
}
