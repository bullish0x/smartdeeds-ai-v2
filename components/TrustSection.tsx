import { Fragment } from "react";
import { COMPANY_INFO } from "@/lib/constants";
import { COMPANIES } from "@/lib/companies";
import Image from "next/image";
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
        </div>
      </div>
    </section>
  );
}
