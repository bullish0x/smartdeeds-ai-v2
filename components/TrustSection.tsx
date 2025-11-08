"use client";

import { Fragment } from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { COMPANIES } from "@/lib/companies";
import Image from "next/image";
import Link from "next/link";
import { getImagePath } from "@/lib/utils";

export default function TrustSection() {
  return (
    <section id="trust" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built by Proven <span className="text-yellowish">Real Estate</span>{" "}
            Innovators
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-300">
            SmartDeeds is founded by the team behind{" "}
            <strong>{COMPANY_INFO.founded}</strong>—with over{" "}
            <strong>{COMPANY_INFO.assets}</strong> and features in{" "}
            {COMPANY_INFO.mentions.map((mention, index, array) => (
              <Fragment key={index}>
                <em>{mention}</em>
                {index < array.length - 1 && " and "}
              </Fragment>
            ))}
            .
          </p>

          <p className="text-lg text-gray-300">
            SmartDeeds is membership‑first. At Launch, your SmartDeed is an
            on‑chain smart contract that grants a minority economic interest in
            Project Malibu plus membership access.
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {COMPANIES.map((company) => (
              <div
                key={company.id}
                className="px-6 py-4 bg-gray-800 rounded-lg shadow-md border border-gray-700 hover:border-yellowish transition-all flex items-center justify-center min-w-[120px]"
              >
                {company.logo ? (
                  <Image
                    src={getImagePath(company.logo)}
                    alt={company.name}
                    width={120}
                    height={40}
                    className="object-contain max-h-10"
                    unoptimized
                  />
                ) : (
                  <span className="text-white font-semibold text-sm">
                    {company.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Verifiable Trust Signals */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="rounded-xl bg-gray-800/60 border border-gray-700 hover:border-yellowish transition-all p-5">
              <h3 className="text-white font-semibold mb-2">
                Escrow & Refunds
              </h3>
              <p className="text-gray-300 text-sm">
                Pre‑launch funds are held in escrow. If you request a refund
                before Launch, we’ll process it promptly as described in the
                Terms.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/terms" className="text-yellowish underline">
                  Read Terms
                </Link>
                <a
                  href="#booking"
                  onClick={(e) => {
                    if (
                      typeof window !== "undefined" &&
                      (window as any).Intercom
                    ) {
                      e.preventDefault();
                      try {
                        (window as any).Intercom("show");
                      } catch {}
                    }
                  }}
                  className="text-yellowish underline"
                >
                  Contact Support
                </a>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/60 border border-gray-700 hover:border-yellowish transition-all p-5">
              <h3 className="text-white font-semibold mb-2">Compliance</h3>
              <p className="text-gray-300 text-sm">
                In the United States, purchases are subject to KYC verification
                and Terms. Outside the U.S., KYC may not apply. We take AML and
                sanctions screening seriously.
              </p>
              <div className="mt-3 flex flex-wrap gap-3">
                <Link href="/kyc/start" className="text-yellowish underline">
                  KYC
                </Link>
                <Link href="/terms" className="text-yellowish underline">
                  Terms
                </Link>
              </div>
            </div>

            <div className="rounded-xl bg-gray-800/60 border border-gray-700 hover:border-yellowish transition-all p-5">
              <h3 className="text-white font-semibold mb-2">
                On‑Chain Transparency
              </h3>
              <p className="text-gray-300 text-sm">
                Mints settle on Base. Your wallet and transaction history
                provide public proof. You can always verify activity in your own
                explorer.
              </p>
              <div className="mt-3">
                <Link href="/#tiers" className="text-yellowish underline">
                  View Mint Tiers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
