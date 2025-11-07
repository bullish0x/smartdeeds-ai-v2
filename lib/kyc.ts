/**
 * Minimal KYC API client
 *
 * Supports Next.js environment variables (NEXT_PUBLIC_KYC_API_BASE).
 * Falls back to the provided default base URL.
 */

const RAW_API_BASE =
  (typeof process !== "undefined" &&
    process.env?.NEXT_PUBLIC_KYC_API_BASE) ||
  "http://leonard.mothsoft.com:8888";

// Normalize: remove trailing slash if present.
const API_BASE = String(RAW_API_BASE).replace(/\/+$/, "");

export type KycStatus = "verified" | "requires_input" | "processing";

export interface CreateVerificationResponse {
  session_id?: string;
  verification_session_id?: string;
  url?: string;
  verification_url?: string;
  redirect_url?: string;
}

/**
 * Creates a verification session on the KYC server.
 * Expects the server to return at least a session_id and ideally a redirect URL
 * (one of: url, verification_url, redirect_url).
 */
export async function createVerificationSession(
  returnUrl: string,
): Promise<CreateVerificationResponse> {
  const r = await fetch(`${API_BASE}/create-verification-session`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // If your server needs credentials/cookies, uncomment:
    // credentials: 'include',
    body: JSON.stringify({ return_url: returnUrl }),
  });

  if (!r.ok) {
    const text = await safeText(r);
    throw new Error(
      `create-verification-session failed: ${r.status} ${r.statusText}${
        text ? ` - ${text}` : ""
      }`,
    );
  }

  const raw = (await r.json()) as CreateVerificationResponse;
  return {
    ...raw,
    // Normalize alternate key from backend to the expected `session_id`
    session_id: raw?.session_id ?? raw?.verification_session_id,
  } as CreateVerificationResponse;
}

/**
 * Checks the verification status for a given session id.
 * The server should respond with: { status: "verified" | "requires_input" | "processing" }
 */
export async function checkVerificationStatus(
  sessionId: string,
): Promise<KycStatus> {
  const r = await fetch(
    `${API_BASE}/check-verification-session/${encodeURIComponent(sessionId)}`,
    {
      // credentials: 'include',
    },
  );

  if (!r.ok) {
    const text = await safeText(r);
    throw new Error(
      `check-verification-session failed: ${r.status} ${r.statusText}${
        text ? ` - ${text}` : ""
      }`,
    );
  }

  const data = (await r.json()) as { status: KycStatus };
  return data.status;
}

// Helper: best-effort to read response body as text.
async function safeText(r: Response): Promise<string | null> {
  try {
    return await r.text();
  } catch {
    return null;
  }
}

export { API_BASE };

