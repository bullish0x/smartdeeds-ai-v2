import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "../styles/globals.css";
import { Providers } from "@/components/Providers";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body suppressHydrationWarning className={GeistSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
