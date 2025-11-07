import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms — SmartDeed™ NFT and Membership Pre‑Sale Agreement (U.S.)",
  description:
    "This page summarizes the controlling Voucher for SmartDeed™ NFT and Membership Pre‑Sale Agreement (U.S.). In the event of any inconsistency, the Agreement governs and prevails.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
            SmartDeed™ NFT and Membership Pre‑Sale — Terms & Summary
          </h1>

          {/* Control Notice */}
          <div className="rounded-lg border border-yellow-300/30 bg-yellow-50 dark:bg-yellow-900/10 p-4 md:p-6 mb-8">
            <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
              Control Notice
            </h2>
            <p className="text-gray-800 dark:text-gray-200">
              This page summarizes the{" "}
              <strong>
                Voucher for SmartDeed™ NFT and Membership Pre‑Sale Agreement
                (U.S.)
              </strong>{" "}
              (the “Agreement”). It is provided for convenience only. In the
              event of any inconsistency, conflict, or ambiguity between this
              summary and the Agreement,
              <strong>
                {" "}
                the Agreement governs and prevails in all respects
              </strong>
              .
            </p>
          </div>

          {/* Summary Intro */}
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <p>
              The SmartDeed™ program offers a private, invite‑only Membership
              with an optional pre‑sale commitment documented by a{" "}
              <strong>Pre‑Sale Voucher NFT</strong>. If Launch occurs, the
              Voucher NFT is replaced with a <strong>SmartDeed NFT</strong>, an
              on‑chain digital assignment reflecting a minority economic
              assignment (no title/governance) as further described in the
              Agreement. Membership benefits are consumptive (non‑financial) and
              do not grant ownership, voting, or control rights.
            </p>

            {/* Key Facts & Checkboxes (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Key Facts (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Parties:</strong> Company (a Delaware corporation) and
                  the Applicant.
                </li>
                <li>
                  <strong>Property / Project:</strong> Project Malibu — a
                  design‑led restoration.
                </li>
                <li>
                  <strong>Tier Assignment:</strong> Company‑assigned; Applicant
                  acknowledges the Tier selected. Tiers include Founders,
                  Diamond, Platinum, or Gold.
                </li>
                <li>
                  <strong>Membership Application Fee:</strong> Non‑refundable
                  upon acceptance (except where prohibited by law).
                </li>
                <li>
                  <strong>Pre‑Sale Commitment Amount:</strong> Escrowed;
                  refundable only as stated in the Agreement.
                </li>
                <li>
                  <strong>Entry Discount:</strong> Locked at commitment as
                  detailed in Private Materials.
                </li>
                <li>
                  <strong>Launch Deadline:</strong> If Launch does not occur by
                  the stated date, refunds apply as described (less stated
                  escrow fee).
                </li>
                <li>
                  <strong>Escrow Agent:</strong> Closeo Escrow, 2330 East
                  Bidwell St, Ste 160, Folsom CA 95630, karla@closeoescrow.com,
                  Trust/Account #[as stated in the Agreement].
                </li>
                <li>
                  <strong>Belwood Investment Circle:</strong> If checked, an
                  addendum (Schedule 4) applies.
                </li>
              </ul>
            </section>

            {/* Definitions (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Definitions (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Membership:</strong> Private, invite‑only access to
                  education, curated content, briefings, private events, gifts,
                  community, and the ability (in the U.S.) to be considered for
                  a SmartDeed NFT related to the Property. Members may submit
                  ideas and, if approved, effort for events and content.
                </li>
                <li>
                  <strong>SmartDeed NFT:</strong> An on‑chain digital assignment
                  recorded on the Chain of Record, documenting the Applicant’s
                  minority economic assignment (no title/governance) pursuant to
                  the Agreement. It may reference or incorporate off‑chain
                  PDFs/terms by cryptographic hash.
                </li>
                <li>
                  <strong>Lifetime:</strong> The shorter of (i) the life of the
                  signatory or (ii) the existence of the Company or successor
                  maintaining Membership rights.
                </li>
                <li>
                  <strong>Launch:</strong> The Company’s written Launch Notice
                  that SmartDeed NFTs for the Property are live for
                  execution/issuance with final parameters and escrow release
                  instructions.
                </li>
                <li>
                  <strong>Private Materials:</strong> Non‑public materials
                  shared under confidentiality (e.g., discount mechanics,
                  process papers, restoration briefs, timelines).
                </li>
                <li>
                  <strong>Chain of Record:</strong> The blockchain network
                  designated in Schedule 5 (including its canonical chain per
                  §6.5 of the Agreement).
                </li>
              </ul>
            </section>

            {/* Membership Terms (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Membership Terms (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>U.S. Access Gate:</strong> In the U.S., Membership is
                  required to be considered for a SmartDeed NFT relating to the
                  Property.
                </li>
                <li>
                  <strong>Tier Is Assigned:</strong> Company assigns the Tier;
                  Applicants cannot self‑select or transfer Tiers.
                </li>
                <li>
                  <strong>What Membership Is / Is Not:</strong> Membership
                  includes privileges such as education, briefings, curated
                  experiences, gifts, events, and behind‑the‑scenes coverage (as
                  made available). It does not create ownership, voting,
                  control, or management rights in the Company or the Property.
                  The Company may, at its discretion, offer future utility or
                  access (e.g., governance/utility tokens, members‑only
                  opportunities, priority windows) by Property and/or Tier; such
                  benefits are optional, not guaranteed, and confer no financial
                  return or ownership beyond what is expressly documented in the
                  Agreement.
                </li>
                <li>
                  <strong>Non‑Transferable & Intended Lifetime:</strong>{" "}
                  Membership is non‑transferable and intended to be Lifetime
                  unless terminated for cause or otherwise amended by Company
                  regarding later tiers/categories.
                </li>
                <li>
                  <strong>Private, Invite‑Only:</strong> No public
                  communications of deal‑specific terms are made. Details are
                  shared privately. Violations may result in removal from
                  consideration or termination.
                </li>
                <li>
                  <strong>Cohort/Tier Caps; No Dilution:</strong> Each Tier is
                  capped at <strong>99 Applicants</strong> (maximum). The
                  Company will not increase the Membership count for the
                  Property beyond initial caps or issue additional economic
                  interests that dilute the proportional economics allocated to
                  capped tiers.
                </li>
                <li>
                  <strong>Not a Conveyance of Rights:</strong> Neither the
                  Agreement nor the Voucher NFT itself conveys Membership or an
                  obligation beyond what is described. Membership is granted at
                  Launch.
                </li>
                <li>
                  <strong>Membership Fees:</strong> Certain Membership Fees may
                  be waived as described in the Agreement (including potential
                  tier‑specific waivers and timing).
                </li>
              </ul>
            </section>

            {/* Pre‑Sale Commitment & Escrow (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Pre‑Sale Commitment & Escrow (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Commitment & Funding:</strong> Applicant funds the
                  Pre‑Sale Commitment by wire/ACH to the Escrow Agent within the
                  timeframe stated in the Agreement.
                </li>
                <li>
                  <strong>Pre‑Launch Voucher NFT:</strong> Once payment is made
                  and the application is approved, a Voucher NFT is issued to
                  the Applicant’s wallet as an indication of interest up to
                  Launch.
                </li>
                <li>
                  <strong>Entry Discount:</strong> Locked at commitment as
                  specified in Private Materials. No promises of returns or
                  profits are made.
                </li>
                <li>
                  <strong>Refunds:</strong> Prior to Launch Notice, the
                  Applicant may request a refund; per the Agreement, refunds are
                  provided less the stated escrow fee and within the stated
                  timeframe. If Launch does not occur by the Launch Deadline,
                  refunds apply as specified (less the stated escrow fee).
                </li>
                <li>
                  <strong>Apply Funds at Launch:</strong> Upon Launch, the
                  Escrow Agent releases the Commitment to the Company to be
                  applied to the Applicant’s SmartDeed NFT per final parameters
                  and closing documents.
                </li>
                <li>
                  <strong>Outside the Refund Rule:</strong> Except as stated
                  above, the Commitment is not revocable and not refundable for
                  change of mind.
                </li>
                <li>
                  <strong>KYC/AML:</strong> Applicant agrees to provide
                  information reasonably requested by the Company or the Escrow
                  Agent to comply with KYC/AML and related requirements (which
                  may include an investor questionnaire).
                </li>
                <li>
                  <strong>Not a Security (Company’s intention):</strong> The
                  Company’s intention is that neither the Membership nor the
                  Membership Fees constitute a security or regulated investment
                  product; no future revenues or benefits are promised beyond
                  what is described in the Agreement.
                </li>
              </ul>
            </section>

            {/* Confidentiality (NDA) & Digital Primacy (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Confidentiality (NDA) & SmartDeed NFT — Digital Primacy
                (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Confidentiality:</strong> Confidential Information
                  includes pricing, discount mechanics, SmartDeed parameters,
                  restoration plans, schedules, budgets, vendor/architect
                  details, processes, subscriber lists, strategies, IP, and
                  other materials marked or reasonably understood as
                  confidential. Use is limited to evaluation and participation;
                  unauthorized disclosure may result in injunctive relief and
                  other remedies.
                </li>
                <li>
                  <strong>Digital Primacy:</strong> The SmartDeed NFT (on‑chain)
                  is the authoritative record post‑Launch. The Chain of Record
                  and canonical chain control in accordance with the Agreement.
                  Post‑Launch, the Voucher NFT is removed and the SmartDeed NFT
                  is issued to reflect Membership level; Applicants typically
                  need take no action to convert.
                </li>
                <li>
                  <strong>Transfer Limits:</strong> The SmartDeed NFT is not
                  intended for public trading or listing. Any transfer requires
                  Company consent and compliance with the Agreement and
                  applicable law.
                </li>
              </ul>
            </section>

            {/* Dispute Resolution & Governing Law (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Dispute Resolution & Governing Law (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Governing Law:</strong> Delaware law governs, without
                  regard to conflict of law rules.
                </li>
                <li>
                  <strong>Resolution:</strong> Parties will use best efforts to
                  resolve disputes and, if needed, proceed to binding
                  arbitration as outlined in the Agreement. Relief may be sought
                  in courts located in Los Angeles County, California where
                  specified.
                </li>
                <li>
                  <strong>No Class Actions:</strong> Claims must be brought
                  individually; no class, collective, consolidated, or
                  representative actions.
                </li>
                <li>
                  <strong>Jury Trial Waiver:</strong> To the extent any dispute
                  is not arbitrated, both parties waive jury trial rights as
                  stated in the Agreement.
                </li>
              </ul>
            </section>

            {/* Miscellaneous (Summary) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Miscellaneous (Summary)
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Entire Agreement; Amendments:</strong> The Agreement
                  (with schedules and incorporated references) constitutes the
                  entire agreement and supersedes prior discussions. Amendments
                  must be in a record and signed/approved electronically.
                </li>
                <li>
                  <strong>Further Assurances; Supplemental Docs:</strong>{" "}
                  Parties will execute documents and take reasonable actions
                  requested by Company to implement the Agreement (including
                  SmartDeed NFT issuance, on‑chain updates, compliance
                  acknowledgments, tax/KYC forms).
                </li>
                <li>
                  <strong>Assignment:</strong> Applicant may not assign,
                  delegate, gift, or transfer Membership or the Agreement
                  without Company’s written consent.
                </li>
                <li>
                  <strong>Force Majeure & Survival:</strong> Force majeure and
                  survival provisions apply as set forth in the Agreement.
                </li>
                <li>
                  <strong>No Third‑Party Beneficiaries:</strong> Except as
                  expressly stated, no person other than the signatories or
                  indicated parties has rights under the Agreement.
                </li>
              </ul>
            </section>

            {/* Contact & Notices */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10 mb-3">
                Contact & Notices
              </h2>
              <p>
                Notices must be delivered in accordance with the Agreement. For
                operational questions about this summary or the program, please
                contact the Company using the channels provided privately in
                your invitation or within your Account/Onboarding materials.
              </p>
            </section>

            {/* Footer note */}
            <div className="mt-10 p-4 rounded-lg bg-yellowish/10 dark:bg-yellowish/20">
              <p className="text-sm text-black dark:text-white">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                This page summarizes core terms for convenience only. In the
                event of any inconsistency, conflict, or ambiguity between this
                page and the{" "}
                <strong>
                  Voucher for SmartDeed™ NFT and Membership Pre‑Sale Agreement
                  (U.S.)
                </strong>
                , <strong>the Agreement governs and prevails</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
