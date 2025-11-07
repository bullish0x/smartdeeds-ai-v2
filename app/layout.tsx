import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "@/components/Providers";
import { defaultMetadata } from "@/lib/metadata";
import KycRedirect from "@/components/KycRedirect";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body suppressHydrationWarning>
        <Providers>
          <KycRedirect>{children}</KycRedirect>
        </Providers>
      </body>
    </html>
  );
}
