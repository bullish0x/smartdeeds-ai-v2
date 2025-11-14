"use client";

import { CONTRACT_CONFIG } from "@/lib/constants";
import {
  useActiveAccount,
  useActiveWalletChain,
  NFTProvider,
  NFTMedia,
  NFTName,
  ClaimButton,
  ConnectButton,
} from "thirdweb/react";
import { getContract } from "thirdweb/contract";
import { useState, useMemo, useEffect, useRef } from "react";
import { base } from "thirdweb/chains";
import { motion } from "framer-motion";
import { Minus, Plus, Shield, ExternalLink } from "lucide-react";
import { getThirdwebClient } from "@/lib/thirdweb-client";
import { toast } from "@/hooks/use-toast";
import { getActiveClaimCondition } from "thirdweb/extensions/erc1155";
import { getCurrencyMetadata } from "thirdweb/extensions/erc20";
import KycPrompt from "@/components/KycPrompt";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { cn } from "@/lib/ui";

interface NFTTierCardProps {
  tokenId: number;
}

interface ClaimCondition {
  startTimestamp: bigint;
  maxClaimableSupply: bigint;
  supplyClaimed: bigint;
  quantityLimitPerWallet: bigint;
  merkleRoot: string;
  pricePerToken: bigint;
  currency: string;
  metadata: string;
}

export default function NFTTierCard({ tokenId }: NFTTierCardProps) {
  const account = useActiveAccount();
  const chain = useActiveWalletChain();
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [claimCondition, setClaimCondition] = useState<ClaimCondition | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [currencyMeta, setCurrencyMeta] = useState<{
    symbol: string;
    decimals: number;
  } | null>(null);
  const [kycOpen, setKycOpen] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [connectModalOpen, setConnectModalOpen] = useState(false);
  const hasFetched = useRef(false);

  // client
  const client = useMemo(() => {
    try {
      return getThirdwebClient();
    } catch (error) {
      console.error("Failed to get thirdweb client:", error);
      return null;
    }
  }, []);

  const contract = client
    ? getContract({
        client,
        address: CONTRACT_CONFIG.address as `0x${string}`,
        chain: base,
      })
    : null;

  // fetch claim condition
  useEffect(() => {
    if (hasFetched.current) return;
    const fetchNFTData = async () => {
      if (
        !contract ||
        !client ||
        tokenId === undefined ||
        tokenId === null ||
        isNaN(tokenId)
      ) {
        setIsLoading(false);
        if (tokenId === undefined || tokenId === null || isNaN(tokenId)) {
          setError("Invalid token ID");
        }
        return;
      }

      hasFetched.current = true;
      setIsLoading(true);
      setError(null);

      // stagger to avoid rate limiting
      await new Promise((r) => setTimeout(r, 200 * tokenId));

      try {
        const activeCondition = await getActiveClaimCondition({
          contract,
          tokenId: BigInt(tokenId),
        });

        if (!activeCondition) {
          setClaimCondition(null);
          setIsLoading(false);
          return;
        }

        const condition: ClaimCondition = {
          startTimestamp: activeCondition.startTimestamp,
          maxClaimableSupply: activeCondition.maxClaimableSupply,
          supplyClaimed: activeCondition.supplyClaimed,
          quantityLimitPerWallet: activeCondition.quantityLimitPerWallet,
          merkleRoot: activeCondition.merkleRoot as string,
          pricePerToken: activeCondition.pricePerToken,
          currency: activeCondition.currency,
          metadata: activeCondition.metadata || "",
        };

        setClaimCondition(condition);
      } catch (err: any) {
        console.error(
          "Error fetching claim condition for token",
          tokenId,
          ":",
          err,
        );
        if (
          err?.message?.includes("Claim condition not found") ||
          err?.message?.includes("No active claim phase") ||
          err?.message?.includes("not found")
        ) {
          setClaimCondition(null);
        } else if (
          err?.message?.includes("rate limit") ||
          err?.message?.includes("429")
        ) {
          setError(
            "Rate limit exceeded. Please wait a moment and refresh the page.",
          );
        } else {
          console.warn(
            `Could not load claim condition for token ${tokenId}:`,
            err?.message,
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNFTData();
  }, [contract, client, tokenId]);

  // fetch currency metadata for dynamic price symbol/decimals
  useEffect(() => {
    if (!client || !claimCondition) return;
    const curr = claimCondition.currency;
    const isNative =
      curr === "0x0000000000000000000000000000000000000000" ||
      curr.toLowerCase() === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

    if (isNative) {
      setCurrencyMeta({ symbol: "ETH", decimals: 18 });
      return;
    }

    let canceled = false;
    (async () => {
      try {
        const erc20 = getContract({
          client,
          address: curr as `0x${string}`,
          chain: base,
        });
        const meta = await getCurrencyMetadata({ contract: erc20 }).catch(
          () => null,
        );
        if (!canceled) {
          setCurrencyMeta({
            symbol: (meta?.symbol as string) || "",
            decimals:
              typeof meta?.decimals === "number"
                ? meta.decimals
                : Number(meta?.decimals ?? 18),
          });
        }
      } catch {
        if (!canceled) setCurrencyMeta({ symbol: "", decimals: 18 });
      }
    })();

    return () => {
      canceled = true;
    };
  }, [client, claimCondition]);

  // helpers
  const isClaimPhaseActive = useMemo(() => {
    if (!claimCondition) return false;
    const currentTimestamp = BigInt(Math.floor(Date.now() / 1000));
    return claimCondition.startTimestamp <= currentTimestamp;
  }, [claimCondition]);

  const formatPrice = (price: bigint, currency: string) => {
    if (price === BigInt(0)) return "Free";
    const isNative =
      currency === "0x0000000000000000000000000000000000000000" ||
      currency.toLowerCase() === "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

    const usedDecimals = isNative ? 18 : (currencyMeta?.decimals ?? 18);
    const priceNumber = Number(price) / Math.pow(10, usedDecimals);
    const currencySymbol = isNative ? "ETH" : currencyMeta?.symbol || "";

    const formatNumber = (num: number) => {
      if (num < 0.01) return num.toFixed(6);
      if (num < 1) return num.toFixed(4);
      if (num < 1000) return num.toFixed(4);
      return num.toLocaleString("en-US", {
        maximumFractionDigits: 4,
        minimumFractionDigits: 0,
      });
    };

    return `${formatNumber(priceNumber)} ${currencySymbol}`.trim();
  };

  const totalPrice = claimCondition
    ? claimCondition.pricePerToken * BigInt(quantity)
    : BigInt(0);
  const kycEnabled = process.env.NEXT_PUBLIC_KYC_ENABLED === "true";
  const kycVerified =
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined" &&
    window.localStorage.getItem("kycVerified") === "true";

  if (!contract || !client) {
    return (
      <Card className="bg-zinc-900 border-white/10 overflow-hidden">
        <div className="relative aspect-square bg-zinc-800 flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
        <CardContent className="p-4">
          <div className="h-5 bg-zinc-800 rounded mb-2 animate-pulse"></div>
          <div className="h-7 bg-zinc-800 rounded mb-3 w-2/3 animate-pulse"></div>
          <div className="h-16 bg-zinc-800 rounded mb-3 animate-pulse"></div>
          <div className="h-11 bg-zinc-800 rounded animate-pulse"></div>
        </CardContent>
      </Card>
    );
  }

  return (
    <NFTProvider contract={contract} tokenId={BigInt(tokenId)}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="bg-zinc-900 border-white/10 overflow-hidden hover:border-yellowish/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-yellowish/20 group h-full">
          {/* NFT Image - Top (Clickable to expand) */}
          <div 
            className="relative aspect-square bg-zinc-800 flex items-center justify-center overflow-hidden cursor-pointer"
            onClick={() => setImageModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setImageModalOpen(true);
              }
            }}
            aria-label="Click to view full size image"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50 z-10 group-hover:bg-zinc-900/20 transition-colors" />
            {/* Hover overlay to indicate clickability */}
            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
              <div className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                Click to expand
              </div>
            </div>
            <NFTMedia
              className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
              loadingComponent={
                <div className="text-gray-500">
                  Loading image...
                </div>
              }
            />
          </div>

          {/* Content - Bottom (Compact) */}
          <CardContent className="p-4 flex flex-col">
            {/* Title & Price - Combined header */}
            <div className="mb-3 pb-3 border-b border-white/10">
              <h3 className="text-lg font-bold text-white mb-1.5 min-h-[3.5rem] flex items-center">
                <NFTName
                  loadingComponent={
                    <span className="text-gray-400">Loading...</span>
                  }
                />
              </h3>
              <div className="text-2xl font-bold text-yellowish">
                {isLoading && !claimCondition
                  ? "Loading..."
                  : claimCondition
                    ? formatPrice(
                        claimCondition.pricePerToken,
                        claimCondition.currency,
                      )
                    : "Price unavailable"}
              </div>
            </div>

          {/* ====== CLAIM CONDITION PRESENT ====== */}
          {claimCondition && (
            <>
              {/* Compact Details Panel */}
              <div className="mb-3 p-2.5 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-lg space-y-1.5 backdrop-blur-sm text-xs">
                {/* Availability */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Sold:</span>
                  <span className="text-white font-medium">
                    {claimCondition.maxClaimableSupply > BigInt(0)
                      ? `${claimCondition.supplyClaimed.toString()} / ${claimCondition.maxClaimableSupply.toString()}`
                      : "Unlimited"}
                  </span>
                </div>

                {/* Max per wallet */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Max per wallet:</span>
                  <span className="text-white font-medium">
                    {claimCondition.quantityLimitPerWallet > BigInt(0)
                      ? claimCondition.quantityLimitPerWallet.toString()
                      : "Unlimited"}
                  </span>
                </div>

                {/* Status and Allowlist */}
                {(() => {
                  const currentTimestamp = BigInt(Math.floor(Date.now() / 1000));
                  const hasStarted = claimCondition.startTimestamp <= currentTimestamp;
                  const startDate = new Date(Number(claimCondition.startTimestamp) * 1000);
                  const hasAllowlist = claimCondition.merkleRoot && 
                    claimCondition.merkleRoot !== "0x0000000000000000000000000000000000000000000000000000000000000000";

                  return (
                    <>
                      {/* Status */}
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Status:</span>
                        <Badge
                          variant={hasStarted ? "default" : "secondary"}
                          className={`text-[10px] py-0 h-4 px-2 ${hasStarted ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-orange-500/20 text-orange-400 border-orange-500/30"}`}
                        >
                          {hasStarted ? "Active" : `Starts ${startDate.toLocaleDateString()}`}
                        </Badge>
                      </div>

                      {/* Allowlist */}
                      {hasAllowlist && (
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Allowlist:</span>
                          <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-[10px] py-0 h-4 px-2">
                            Required
                          </Badge>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
            </>
          )}

          {/* ====== NO CLAIM CONDITION (configured later) ====== */}
          {!claimCondition && !isLoading && (
            <Alert className="mb-4 border-yellow-500/30 bg-yellow-500/10">
              <AlertDescription className="text-yellow-200">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">Not Available Yet</p>
                  <p className="text-xs text-yellow-300/90">
                    Claim conditions need to be configured. Visit the{" "}
                    <a
                      href={`https://thirdweb.com/${base.id}/${CONTRACT_CONFIG.address}/claim-conditions`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-400 hover:underline inline-flex items-center gap-1"
                    >
                      thirdweb dashboard
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert className="mb-4 border-red-500/30 bg-red-500/10">
              <AlertDescription className="text-red-200">
                {error}
              </AlertDescription>
            </Alert>
          )}

          {/* Spacer to push button to bottom */}
          <div className="flex-grow" />

          {/* Quantity Selector - Compact */}
          <div className="mb-3 w-full">
            <div className="flex items-center gap-2 w-full mb-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
                className="h-8 w-8 border-white/20 hover:bg-white/10"
              >
                <Minus className="w-3 h-3" />
              </Button>
              <input
                type="number"
                min="1"
                max={
                  claimCondition?.quantityLimitPerWallet &&
                  claimCondition.quantityLimitPerWallet > BigInt(0)
                    ? Number(claimCondition.quantityLimitPerWallet)
                    : undefined
                }
                value={quantity}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 1;
                  const max =
                    claimCondition?.quantityLimitPerWallet &&
                    claimCondition.quantityLimitPerWallet > BigInt(0)
                      ? Number(claimCondition.quantityLimitPerWallet)
                      : undefined;
                  setQuantity(max ? Math.min(val, max) : Math.max(1, val));
                }}
                className="flex-1 px-3 py-1.5 border border-white/20 bg-white/5 rounded-lg text-center text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellowish focus:border-transparent"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  const max =
                    claimCondition?.quantityLimitPerWallet &&
                    claimCondition.quantityLimitPerWallet > BigInt(0)
                      ? Number(claimCondition.quantityLimitPerWallet)
                      : undefined;
                  setQuantity(max ? Math.min(quantity + 1, max) : quantity + 1);
                }}
                disabled={
                  claimCondition?.quantityLimitPerWallet &&
                  claimCondition.quantityLimitPerWallet > BigInt(0)
                    ? quantity >= Number(claimCondition.quantityLimitPerWallet)
                    : false
                }
                className="h-8 w-8 border-white/20 hover:bg-white/10"
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            {claimCondition && totalPrice > BigInt(0) && (
              <div className="text-sm text-center text-gray-300 mb-2 font-medium">
                Total: <span className="text-yellowish">{formatPrice(totalPrice, claimCondition.currency)}</span>
              </div>
            )}
          </div>

          {/* Claim Button - Always consistent yellowish appearance */}
          {client &&
          contract &&
          account &&
          isClaimPhaseActive &&
          chain?.id === base.id ? (
            kycEnabled && !kycVerified ? (
              <>
                <Button
                  onClick={() => setKycOpen(true)}
                  variant="yellowish"
                  className="w-full h-11"
                >
                  <Shield className="w-4 h-4 mr-2" />
                  Verify to Mint
                </Button>
                <KycPrompt open={kycOpen} onOpenChange={setKycOpen} />
              </>
            ) : (
              <ClaimButton
                contractAddress={CONTRACT_CONFIG.address}
                chain={base}
                client={client}
                claimParams={{
                  type: "ERC1155",
                  quantity: BigInt(quantity),
                  tokenId: BigInt(tokenId),
                }}
                onTransactionConfirmed={() => {
                  toast({
                    title: "Mint Successful!",
                    description: `Successfully minted ${quantity} voucher${quantity > 1 ? "s" : ""}!`,
                  });
                  setQuantity(1);
                }}
                onError={(error) => {
                  toast({
                    title: "Mint Failed",
                    description:
                      error.message ||
                      "Failed to mint voucher. Please try again.",
                    variant: "destructive",
                  });
                }}
                className="w-full bg-yellowish text-black h-11 rounded-lg font-bold hover:bg-yellowish/90 transition-all shadow-md hover:shadow-glow"
              >
                Mint {quantity} Voucher{quantity > 1 ? "s" : ""}
              </ClaimButton>
            )
          ) : (
            <>
              <Button
                onClick={() => {
                  if (!account) {
                    setConnectModalOpen(true);
                  }
                }}
                variant="yellowish"
                className={cn(
                  "w-full h-11",
                  !account ? "cursor-pointer" : "opacity-60 cursor-not-allowed"
                )}
                disabled={!!account}
              >
                {!account
                  ? "Connect Wallet to Mint"
                  : chain?.id !== base.id
                    ? "Switch to Base Network"
                    : !isClaimPhaseActive
                      ? "Claim Phase Not Started"
                      : "Loading..."}
              </Button>
              {!account && client && (
                <Dialog open={connectModalOpen} onOpenChange={setConnectModalOpen}>
                  <DialogContent className="max-w-md w-full bg-zinc-900 border-white/10 p-6">
                    <VisuallyHidden>
                      <DialogTitle>Connect Wallet</DialogTitle>
                    </VisuallyHidden>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white mb-4 text-center">
                        Connect Your Wallet
                      </h3>
                      <div className="relative w-full [&_button]:!w-full [&_button]:!bg-yellowish [&_button]:!text-black [&_button:hover]:!bg-yellowish/90 [&_button]:!border-none [&_button]:!font-semibold [&_button]:!rounded-lg [&_button]:!h-12 [&_button]:!text-base">
                        <ConnectButton 
                          client={client} 
                          chain={base}
                        />
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              )}
            </>
          )}

          {/* Terms Link - Integrated footer */}
          <div className="mt-3 pt-2.5 border-t border-white/10 text-center">
            <Link 
              href="/terms" 
              className="text-xs text-gray-400 hover:text-yellowish transition-colors inline-flex items-center gap-1"
            >
              <Shield className="w-3 h-3" />
              View Terms & Conditions
            </Link>
          </div>
        </CardContent>
        </Card>
      </motion.div>

      {/* Image Expansion Modal */}
      <Dialog open={imageModalOpen} onOpenChange={setImageModalOpen}>
        <DialogContent className="max-w-4xl w-full bg-zinc-900 border-white/10 p-0">
          <VisuallyHidden>
            <DialogTitle>NFT Voucher Preview</DialogTitle>
          </VisuallyHidden>
          <div className="relative w-full aspect-square bg-zinc-950 flex items-center justify-center">
            <NFTMedia
              className="object-contain w-full h-full"
              loadingComponent={
                <div className="text-gray-500">
                  Loading full size image...
                </div>
              }
            />
          </div>
        </DialogContent>
      </Dialog>
    </NFTProvider>
  );
}
