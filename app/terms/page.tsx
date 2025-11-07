import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title:
    "VOUCHER FOR SMARTDEED™ NFT AND MEMBERSHIP PRE‑LAUNCH AGREEMENT (U.S.)",
  description:
    "Full terms controlling the SmartDeed™ NFT and Membership Pre‑Launch program, including key facts, definitions, membership terms, pre‑launch commitment & escrow, confidentiality, digital primacy, dispute resolution, and schedules.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8">
            VOUCHER FOR SMARTDEED™ NFT AND MEMBERSHIP PRE‑LAUNCH AGREEMENT
            (U.S.)
          </h1>

          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
            <section className="not-prose mb-6 rounded-lg border border-yellowish/30 bg-yellowish/10 dark:bg-yellowish/20 p-4">
              <p className="text-sm text-black dark:text-white">
                This Agreement governs the SmartDeed™ NFT and Membership
                Pre‑Launch program (the “Agreement”). It controls over any other
                website messaging, summaries, marketing, or communications. In
                the event of any inconsistency, conflict, or ambiguity between
                this Agreement and any other content on this site or related
                channels, this Agreement governs and prevails in all respects.
              </p>
            </section>

            {/* Preamble */}
            <section>
              <p>
                <strong>Date:</strong> [DATE]
              </p>
              <p>
                <strong>Company:</strong> ________________., a Delaware
                corporation (“Company”)
              </p>
              <p>
                <strong>Applicant:</strong> ___________________ (“Applicant”)
              </p>
              <p>
                <strong>Property / Project:</strong> Project Malibu — a
                design‑led restoration (the “Property”)
              </p>
              <p>
                <strong>Primary Purpose:</strong> Private membership with
                optional pre‑launch commitment documented by a SmartDeed NFT—an
                on‑chain digital assignment (implemented via smart contract)
                evidencing Applicant’s economic interest in the Property at a
                discount at entry if the SmartDeed launches for the Property.
              </p>
            </section>

            {/* Key Facts */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                KEY FACTS & CHECKBOXES (Company completes; Applicant initials)
              </h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>
                    Tier Assignment (Company‑assigned; check one):
                  </strong>{" "}
                  ☐ Founders ☐ Diamond ☐ Platinum ☐ Gold
                  <div>
                    Assigned by Company. Applicant acknowledges the Tier
                    selected above. Applicant initials: _______
                  </div>
                </li>
                <li>
                  <strong>Membership Application Fee (non‑refundable):</strong>{" "}
                  $_________ (due at signing). Applicant initials: _______
                </li>
                <li>
                  <strong>
                    Pre‑Launch Commitment Amount (escrowed; refundable only as
                    stated):
                  </strong>{" "}
                  $________________ (Aligned to Tier; see Schedule 1). Applicant
                  initials: _______
                </li>
                <li>
                  <strong>
                    Entry Discount (locked at commitment; details in Private
                    Materials):
                  </strong>{" "}
                  [______] (“Entry Discount”). Applicant initials: _______
                </li>
                <li>
                  <strong>Launch Deadline:</strong> __________ (the “Launch
                  Deadline”).
                </li>
                <li>
                  <strong>Escrow Agent:</strong> Closeo Escrow, 2330 East
                  Bidwell St, Ste 160, Folsom CA 95630, karla@closeoescrow.com,
                  Trust/Account #[____________] (the “Escrow Agent”).
                </li>
                <li>
                  <strong>Belwood Investment Circle:</strong> ☐ Applicant
                  confirms Belwood Investment Circle status. If checked,
                  Schedule 4 (Belwood Addendum) applies. Applicant initials:
                  _______
                </li>
              </ol>
            </section>

            {/* Definitions */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                DEFINITIONS
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Membership</strong> means private, invite‑only access
                  to education, curated content, briefings, private events,
                  gifts, community, and the ability (in the U.S.) to be
                  considered for a SmartDeed NFT relating to the Property.
                  Members may also submit ideas and, if approved, effort for
                  events and content, particularly as pertains to the Property.
                </li>
                <li>
                  <strong>SmartDeed NFT</strong> means the binding on‑chain
                  digital assignment—implemented as a smart contract on the
                  Chain of Record specified in Schedule 5—that documents
                  Applicant’s economic interest for this Agreement. The
                  SmartDeed NFT may reference or incorporate off‑chain
                  PDFs/terms by cryptographic hash.
                </li>
                <li>
                  <strong>Lifetime</strong> means either (1) for the life of the
                  signatory to this Agreement or (2) the existence of the
                  Company or any successor maintaining rights to the Membership,
                  whichever is shorter.
                </li>
                <li>
                  <strong>Launch</strong> means Company’s written Launch Notice
                  that the SmartDeed NFT for the Property is live for
                  execution/issuance, with final parameters (Schedule 5) and
                  escrow release instructions.
                </li>
                <li>
                  <strong>Private Materials</strong> means non‑public documents
                  Company shares with Applicant under confidentiality (e.g.,
                  discount mechanics, process papers, restoration briefs,
                  timelines).
                </li>
                <li>
                  <strong>Chain of Record</strong> means the blockchain network
                  designated in Schedule 5 (including its canonical chain per
                  §6.5).
                </li>
                <li>
                  <strong>Tier</strong> means a level of Membership granting
                  specific privileges, access and rights, with specific fees
                  associated.
                </li>
              </ul>
            </section>

            {/* Membership Terms */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                MEMBERSHIP TERMS (Private, invite‑only; clarity‑first)
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>U.S. Access Gate.</strong> In the U.S., Membership is
                  required to be considered for a SmartDeed NFT relating to the
                  Property.
                </li>
                <li>
                  <strong>Tier Is Assigned.</strong> Company assigns the Tier.
                  Applicant cannot self‑select or transfer Tiers.
                </li>
                <li>
                  <strong>What Membership Is / Is Not.</strong>
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>
                      Membership includes, but is not limited to, various
                      privileges, including access to education, briefings,
                      curated experiences, gifts, access to events, and
                      behind‑the‑scenes restoration coverage as reasonably made
                      available. Membership Tiers dictate access level,
                      privileges, discount type and amount, and type of benefit
                      available.
                    </li>
                    <li>
                      Membership does not by itself create ownership, voting,
                      control, or management rights in the Company or the
                      Property. Company may, at its discretion, offer future
                      utility or access (e.g., governance/utility tokens,
                      members‑only opportunities, priority windows) by Property
                      and/or Tier; such benefits are optional, not guaranteed,
                      and confer no financial return or ownership beyond what’s
                      expressly documented for a SmartDeed NFT.
                    </li>
                    <li>
                      Membership is non‑transferable and intended to be Lifetime
                      unless terminated under §3.6 or as amended by the Company
                      as pertains to other later Tiers or other categorizations
                      or subcategorizations.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Digital‑First; Paper Optional.</strong> This program
                  is digital‑first. The SmartDeed NFT (on‑chain) is the
                  authoritative record of Applicant’s economic interest once
                  launched. Company may provide paper copies
                  (ink‑signed/notarized) for convenience or regulatory/escrow
                  purposes.
                </li>
                <li>
                  <strong>Membership Application Fee.</strong> The Membership
                  Application Fee in §1.2 is earned on acceptance and
                  non‑refundable, except where prohibited by applicable law.
                </li>
                <li>
                  <strong>Conduct; Termination for Cause.</strong> Company may
                  suspend or terminate Membership for cause, including but not
                  limited to breach of this Agreement, confidentiality breach,
                  non‑payment, or conduct that materially disrupts Applicant,
                  Member or Company events or operations). Termination does not
                  entitle Applicant to a refund of any fees, including but not
                  limited to the Membership Fee, already paid.
                </li>
                <li>
                  <strong>No Public Offer; Invite‑Only.</strong> This is a
                  private, invitation‑only program. No public communications of
                  deal‑specific terms are made. Details are shared privately
                  with Applicants. Failure to abide by this paragraph 3.7 shall
                  result in removal from consideration for Membership or from
                  Membership if already granted.
                </li>
                <li>
                  <strong>Cohort/Tier Caps; No Dilution.</strong> Each Tier is
                  capped at 99 Applicants (maximum). Company will not increase
                  the Membership count for the Property beyond the initial caps.
                  Company will not issue additional economic interests for this
                  Property that dilute the proportional economics allocated to
                  the capped tier(s).
                </li>
                <li>
                  <strong>Not a Conveyance of Rights.</strong> Neither this
                  Agreement nor the Voucher NFT convey Membership or obligation
                  on the part of the Parties other than as described. Membership
                  is granted on Launch.
                </li>
                <li>
                  <strong>Membership Fees.</strong> Lifetime Membership Fees are
                  waived for the _______ and _______ tiers in [top two tiers].
                  Membership Fees are waived for the ______ and ______ [bottom
                  two tiers] for the remaining calendar year following Launch
                  Date and the six months following, until June 30, 2026.
                  Membership Fees renew for those specific Tiers at the Tier
                  rates on July 1, 2026.
                </li>
              </ol>
            </section>

            {/* Pre‑Launch Commitment & Escrow */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                PRE‑LAUNCH COMMITMENT & ESCROW
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>
                    Commitment Amount; Funding, Pre‑Launch Voucher NFT.
                  </strong>{" "}
                  Applicant agrees to a Pre‑Launch Commitment in the amount
                  shown in §1.3 (the “Commitment”). Applicant shall fund the
                  Commitment in US dollars by wire or ACH to the Escrow Agent,
                  using the payment information in Schedule ______. Such payment
                  shall be made no later than three (3) business days after
                  execution of this Agreement. Once payment is made and
                  application approved, Applicant shall be issued a Voucher NFT
                  in their wallet, which shall represent their indication of
                  interest in the Membership up to Launch, which shall be
                  indicated by release of the Launch Notice. See Section 6.8
                  regarding post‑Launch procedures and Membership.
                </li>
                <li>
                  <strong>Discount.</strong> By making the Commitment and
                  funding escrow, Applicant locks the Entry Discount stated in
                  §1.4, as further described in the Private Materials. No public
                  or private promises of returns or profits are made.
                </li>
                <li>
                  <strong>Refund Prior to or If No Launch.</strong> Applicant
                  may request refund at any time prior to the Company issuing
                  Launch Notice, and shall receive the Commitment in full less a
                  2% escrow fee within five (5) business days. Requesting refund
                  occurs by informing Company at the address indicated on
                  Schedule_______. If Launch does not occur on or before the
                  Launch Deadline, the Commitment is refunded in full from
                  escrow less a 2% escrow fee to Applicant within five (5)
                  business days after the earlier of (i) the Launch Deadline’s
                  expiry or (ii) Company’s written notice that the Property will
                  not proceed. Applicant must affirmatively act within the
                  period before the Launch Notice is filed in order to request
                  refund.
                </li>
                <li>
                  <strong>Apply Funds If Launch Occurs.</strong> Upon Launch,
                  the Escrow Agent releases the Commitment to Company to be
                  applied to Applicant’s SmartDeed NFT per the final parameters
                  (Schedule 5) and closing documents. Any revisions to any of
                  the Applicant’s information must be made in writing to the
                  Company and acknowledged as accepted.
                </li>
                <li>
                  <strong>Outside the Refund Rule.</strong> Except for §4.3, the
                  Commitment is not revocable by Applicant and is not refundable
                  for change of mind or convenience. If Applicant fails to
                  timely fund, Company may (without limiting other remedies) (i)
                  reassign the Tier, (ii) cancel Applicant’s discount, and/or
                  (iii) terminate Membership for cause.
                </li>
                <li>
                  <strong>Escrow Mechanics.</strong> Detailed instructions
                  appear in Schedule 2 and are incorporated here. Company and
                  Applicant will issue joint written instructions to the Escrow
                  Agent for release events consistent with this Agreement.
                </li>
                <li>
                  <strong>KYC/AML Cooperation.</strong> Applicant will promptly
                  provide information reasonably requested by Company or Escrow
                  Agent to comply with KYC/AML and related U.S. requirements,
                  including but not limited to investor questionnaire. Failure
                  to cooperate may remove Applicant from consideration from
                  Membership Launch or require return of funds.
                </li>
                <li>
                  <strong>Not a Security.</strong> No agency or other authority
                  has approved or otherwise indicated this particular Membership
                  offered by the Company is not a security or other regulated
                  product. However, Applicant understands that it is Company’s
                  intention that no part of this Membership, nor the Membership
                  itself, be a security. That is, no part of Applicant’s
                  decision to purchase a Membership and/or pay the Membership
                  Fee should be construed in any way as an interest in a
                  speculative venture for profit. No future revenues or benefits
                  are promised to any Applicants other than as described by the
                  Forward Sale and the Membership Agreement.
                </li>
                <li>
                  <strong>Risk Factors.</strong> There are risks involved with
                  any purchase decision. This Membership involves blockchain
                  technology, communal membership, and a number of innovative
                  strategies. You are strongly recommended to read through the
                  risk factors located at ____________ carefully when
                  considering your decision to purchase a Membership.
                </li>
              </ol>
            </section>

            {/* Confidentiality (NDA) */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                CONFIDENTIALITY (NDA)
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>What’s Confidential.</strong> “Confidential
                  Information” means all non‑public information about the
                  Property or Company disclosed to Applicant, including without
                  limitation: pricing, discount mechanics, SmartDeed NFT
                  parameters, restoration plans/materials, schedules, budgets,
                  vendor/architect information (including the original firm),
                  processes, subscriber lists, strategies, intellectual
                  property, and any documents marked or reasonably understood as
                  confidential (the Private Materials).
                </li>
                <li>
                  <strong>Applicant’s Obligations.</strong> Applicant will (a)
                  keep Confidential Information secret, (b) use it only to
                  evaluate and participate in this program, and (c) not share it
                  except with professional advisors bound to confidentiality;
                  Applicant remains responsible for their compliance.
                </li>
                <li>
                  <strong>Exceptions.</strong> Confidential Information does not
                  include information that: (a) becomes public through no breach
                  by Applicant; (b) was known to Applicant without restriction
                  before disclosure; (c) is independently developed without use
                  of Confidential Information; or (d) must be disclosed by
                  law/court order (with prompt notice when lawful so Company may
                  seek protective treatment).
                </li>
                <li>
                  <strong>Term.</strong> Confidentiality runs until the later of
                  three (3) years from the date of execution of this Agreement,
                  or one (1) year after final disposition of the Property,
                  unless earlier released in writing by Company.
                </li>
                <li>
                  <strong>Remedies.</strong> Unauthorized use/disclosure may
                  cause irreparable harm. Company is entitled to injunctive
                  relief and other remedies at law or equity, and is not limited
                  by either.
                </li>
                <li>
                  <strong>No Publicity.</strong> Applicant will not make public
                  statements, posts, or announcements concerning the Property,
                  the SmartDeed NFT, discounts, or this program without
                  Company’s written consent, or shall lose the right to be
                  considered for Membership, or shall lose Membership if already
                  obtained.
                </li>
              </ol>
            </section>

            {/* SmartDeed NFT — Digital Primacy; On‑Chain Consent */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SMARTDEED NFT — DIGITAL PRIMACY; ON‑CHAIN CONSENT
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Company Canon.</strong> The Company maintains
                  canonical records to ensure all contact, wallet, holding, and
                  Membership information for Applicants and Members remains
                  complete and correct. It is the obligation of each Applicant
                  and Member to ensure written changes are sent to the Company
                  at the address in Schedule __________ for the appropriate
                  change, and confirm it has been received. Assistance with
                  onboarding, wallet use, recordkeeping, tax records, and the
                  like is always available by the Company and Escrow Agent for
                  Members.
                </li>
                <li>
                  <strong>Entire Scope.</strong> All Property‑related
                  participation is documented as an economic interest with an
                  entry discount, as is typical of a forward sale agreement.
                  This Agreement and the SmartDeed NFT constitute the entire
                  understanding regarding Applicant’s Membership, incorporating
                  all information as noted herein by reference; no other terms
                  outside this Agreement and the SmartDeed NFT apply. The
                  Agreement avoids and does not rely on terminology associated
                  with regulated investment instruments or public market
                  nomenclature.
                </li>
                <li>
                  <strong>Electronic Records & Signatures.</strong> Applicant
                  consents to the use of electronic records and signatures
                  (including wallet signatures/approvals) under UETA/E‑SIGN
                  equivalents. Wallet signature, click‑accept, or similar
                  electronic acceptance is as effective as ink signatures.
                </li>
                <li>
                  <strong>SmartDeed Composition.</strong> The SmartDeed NFT may
                  (a) implement operational logic via smart contract code, and
                  (b) reference attached/off‑chain terms by cryptographic hash
                  (e.g., PDF hash). The code + hashed terms together form the
                  SmartDeed NFT.
                </li>
                <li>
                  <strong>Chain of Record; Canonical Chain.</strong> The Chain
                  of Record is specified in Schedule 5. In the event of a chain
                  fork/outage/migration, the canonical chain is the chain
                  recognized by the network’s widely‑adopted consensus or, if
                  ambiguity persists, the chain designated by Company shall
                  determine ownership.
                </li>
                <li>
                  <strong>Gas/Keys.</strong> Applicant is responsible for
                  gas/fees related to their wallet actions and for safeguarding
                  private keys. Loss of keys does not void Applicant’s
                  obligations; Company may, at its discretion and subject to
                  compliance checks, issue remedial procedures (e.g.,
                  re‑issuance or re‑assignment) consistent with this Agreement.
                </li>
                <li>
                  <strong>Transfer Limits.</strong> The SmartDeed NFT is not
                  intended for public trading or listing. Any transfer requires
                  Company’s written consent and compliance with this Agreement
                  and applicable law.
                </li>
                <li>
                  <strong>Post‑Launch Transfer.</strong> On Launch, Launch
                  Notice will appear on the Company website, as well as
                  ________________ [wallet/wherever else]. The Voucher NFT shall
                  then be removed from Applicant’s wallet and a new SmartDeed
                  NFT will be added, indicating their level of Membership.
                  Applicant does not need to do anything to convert the Voucher
                  NFT to the SmartDeed NFT.
                </li>
              </ol>
            </section>

            {/* Belwood Investment Circle */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                BELWOOD INVESTMENT CIRCLE
              </h2>
              <p>
                If §1.7 is checked, Schedule 4 (Belwood Addendum) applies and
                may provide a special arrangement. In the event of a direct
                conflict between this Agreement and Schedule 4, Schedule 4
                controls solely with respect to the special arrangement.
              </p>
            </section>

            {/* Representations */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                REPRESENTATIONS
              </h2>
              <p>
                Each party represents it has authority to enter this Agreement.
                Applicant represents funds used for the Commitment are lawfully
                sourced, and Applicant is not the subject of
                sanctions/prohibited‑party lists.
              </p>
            </section>

            {/* Governing Law; Dispute Resolution; No Class Action */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                GOVERNING LAW; DISPUTE RESOLUTION; NO CLASS ACTION
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Governing Law.</strong> Delaware law governs, without
                  regard to conflicts rules.
                </li>
                <li>
                  <strong>Venue; Relief.</strong> Both parties agree to use
                  their best efforts to resolve any disagreements to their
                  mutual satisfaction. Both parties agree to fully participate
                  in the process of resolution and, if necessary, arbitration.
                  Any controversy or claim arising out of or relating to this
                  Agreement, or the breach thereof, shall be conclusively
                  resolved through binding arbitration under the Commercial
                  Arbitration Rules of the American Arbitration Association, by
                  a single arbitrator agreeable by both parties acting in good
                  faith. Judgment on the award rendered by the arbitrator(s) may
                  be entered in any court having jurisdiction thereof. Each
                  party shall bear its own costs and attorney fees, unless the
                  arbitration award specifically provides otherwise. If unable
                  to resolve through arbitration even though using best efforts,
                  relief shall be sought via courts located in Los Angeles
                  County, California.
                </li>
                <li>
                  <strong>No Class Actions / No Consolidation.</strong> Claims
                  must be brought individually and not as a class, collective,
                  consolidated, or representative action, and any arbitration
                  may resolve only Applicant’s individual claims.
                </li>
                <li>
                  <strong>Jury Trial Waiver.</strong> To the extent not
                  arbitrated, each party waives jury trial for any dispute
                  arising out of or related to this Agreement.
                </li>
              </ol>
            </section>

            {/* Miscellaneous */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                MISCELLANEOUS (Customary Protections)
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong>Entire Agreement; Amendments.</strong> This Agreement
                  (with Schedules) and all incorporated references, including
                  but not limited to the SmartDeed NFT, constitute the entire
                  agreement and supersede prior discussions. Amendments must be
                  in a record (including on‑chain references) and
                  signed/approved electronically.
                </li>
                <li>
                  <strong>Further Assurances; Supplemental Docs.</strong> Each
                  party shall execute further documents and take reasonable
                  actions requested by Company to implement this Agreement
                  (including but not limited to SmartDeed NFT issuance, on‑chain
                  updates consistent with economic terms, compliance
                  acknowledgments, tax/KYC forms). Company may require standard
                  supplemental disclosures/acknowledgments consistent with this
                  Agreement; Applicant agrees not to unreasonably withhold or
                  delay execution.
                </li>
                <li>
                  <strong>Assignment.</strong> Applicant may not assign,
                  designate, delegate, gift, offer, or otherwise transfer
                  Membership or this Agreement without Company’s written
                  consent.
                </li>
                <li>
                  <strong>Notices.</strong> Notices must be in writing and
                  delivered by reputable courier, certified mail, or email to
                  the addresses below (or via on‑chain message to the wallet in
                  Schedule 5 if expressly permitted by Company).
                </li>
                <li>
                  <strong>Force Majeure.</strong> Neither party is liable for
                  delay/failure (except payment obligations) due to events
                  beyond reasonable control (including natural disasters, war,
                  civil unrest, government orders, strikes, epidemics, or major
                  network/Internet outages). The affected party shall notify and
                  resume performance when feasible.
                </li>
                <li>
                  <strong>Survival.</strong> Confidentiality (§5), SmartDeed NFT
                  digital primacy (§6), transfer limits (§6.7), governing
                  law/dispute resolution/class waiver (§9), attorneys’ fees
                  (§10.7), and any provision that by its nature should survive
                  remain in effect after termination or expiration.
                </li>
                <li>
                  <strong>No Third‑Party Beneficiaries.</strong> No person other
                  than the signatories or parties indicated have rights under
                  this Agreement.
                </li>
              </ol>
            </section>

            {/* Signatures */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SIGNATURES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                <div className="p-4 border border-gray-300 dark:border-gray-700 rounded">
                  <h3 className="font-semibold text-black dark:text-white">
                    Company: Smart Deed, Inc.
                  </h3>
                  <p>By: _______________________________</p>
                  <p>Name: _____________________________</p>
                  <p>Title: _____________________________</p>
                  <p>Address: __________________________</p>
                  <p>Email: ____________________________</p>
                  <p>Date: _____________________________</p>
                </div>
                <div className="p-4 border border-gray-300 dark:border-gray-700 rounded">
                  <h3 className="font-semibold text-black dark:text-white">
                    Applicant: [FULL LEGAL NAME]
                  </h3>
                  <p>Signature: _________________________</p>
                  <p>Name (print): ______________________</p>
                  <p>Address: __________________________</p>
                  <p>Email: ____________________________</p>
                  <p>Date: _____________________________</p>
                </div>
              </div>
            </section>

            {/* Schedules */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SCHEDULE 1 — TIER & PRICING SUMMARY (Assigned)
              </h2>
              <p>Applicant: [NAME] Date: [DATE]</p>
              <p>
                <strong>Assigned Tier (check one):</strong>
              </p>
              <ul className="list-disc pl-6">
                <li>☐ Founders  Commitment: $[ ]  Entry Discount: [ ]</li>
                <li>☐ Diamond   Commitment: $[ ]  Entry Discount: [ ]</li>
                <li>☐ Platinum   Commitment: $[ ]  Entry Discount: [ ]</li>
                <li>☐ Gold     Commitment: $[ ]  Entry Discount: [ ]</li>
              </ul>
              <p>Membership Fee: $[ ] (non‑refundable)</p>
              <p>Launch Deadline: [DATE]</p>
              <p>Cohort/Tier Caps: 99 Applicants max per Tier (no dilution).</p>
              <p>
                Notes / Cohort Label (if any): [e.g., “Initial Cohort —
                non‑transferable, lifetime”]
              </p>
              <p>Company initials: ____ Applicant initials: ____</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SCHEDULE 2 — ESCROW INSTRUCTIONS (Summary; binding)
              </h2>
              <p>
                <strong>Escrow Agent:</strong> Closeo Escrow, 2330 East Bidwell
                St, Ste 160, Folsom CA 95630 • karla@closeoescrow.com •
                Trust/Acct #[—]
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Funding. Applicant sends $[AMOUNT] by wire or ACH, or
                  Escrow‑Agent‑provided payment link, within 3 business days of
                  signing, using the instructions provided directly by the
                  Escrow Agent.
                </li>
                <li>
                  Holding. Escrow Agent holds funds in trust pending (a) Launch
                  release or (b) refund under §4.3. Interest (if any) follows
                  principal unless law requires otherwise.
                </li>
                <li>
                  Release on Launch. Upon Company’s Launch Notice and joint
                  written instruction (Company + Applicant), Escrow Agent
                  releases funds per closing documents to apply to Applicant’s
                  SmartDeed.
                </li>
                <li>
                  Refund If No Launch. If Launch has not occurred by the Launch
                  Deadline, or Company cancels earlier, Company and Applicant
                  will issue a joint refund instruction; Escrow Agent returns
                  the full Commitment to Applicant within 5 business days
                  thereafter.
                </li>
                <li>
                  Disputes. If instructions conflict, Escrow Agent may hold
                  funds pending mutual instructions or a court/arbitration
                  order.
                </li>
                <li>Fees. Escrow fees: [Company] [Applicant] [Split /].</li>
                <li>
                  KYC/AML. Applicant will deliver identification and compliance
                  documents reasonably requested and before Launch.
                </li>
              </ol>
              <p>Company initials: ____ Applicant initials: ____</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SCHEDULE 3 — CONFIDENTIALITY DETAILS
              </h2>
              <p>
                <strong>
                  Examples of Confidential Information (non‑exhaustive):
                </strong>{" "}
                discount terms, pricing mechanics, SmartDeed parameters,
                economic‑interest paperwork, restoration plans/materials,
                architectural/vendor info (including the original firm), design
                reviews, schedules, budgets, source documents, subscriber lists,
                curated content/briefings, and any information marked or
                reasonably understood as confidential.
              </p>
              <p>
                <strong>Return/Destroy.</strong> Upon request or if Applicant
                declines to proceed, Applicant will promptly return or destroy
                Confidential Information and certify completion, except one
                archival copy may be retained by counsel for compliance.
              </p>
              <p>
                <strong>No License.</strong> No rights are granted by disclosure
                except the limited right to evaluate and participate in this
                program.
              </p>
              <p>
                <strong>Injunctive Relief.</strong> Breach may cause irreparable
                harm; injunction and other remedies are available.
              </p>
              <p>
                <strong>Term.</strong> As stated in §5.4.
              </p>
              <p>Company initials: ____ Applicant initials: ____</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SCHEDULE 4 — BELWOOD INVESTMENT CIRCLE ADDENDUM (If Applicable)
              </h2>
              <p>
                <strong>Applies only if §1.7 is checked.</strong>
              </p>
              <p>
                <strong>Special Arrangement.</strong> In recognition of
                Applicant’s participation in the Belwood Investment Circle, the
                following applies:
              </p>
              <ul className="list-disc pl-6">
                <li>
                  Adjustment:
                  _________________________________________________________________
                </li>
                <li>
                  Scope: Applies only to Project Malibu unless otherwise stated
                  in writing by Company.
                </li>
              </ul>
              <p>
                <strong>No Conflict.</strong> If conflict arises between this
                Schedule and the main Agreement, this Schedule controls solely
                with respect to the special arrangement.
              </p>
              <p>
                <strong>No Publicity.</strong> Applicant will not publicly
                reference this special arrangement without Company’s written
                consent.
              </p>
              <p>Company initials: ____ Applicant initials: ____</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                SCHEDULE 5 — SMARTDEED ON‑CHAIN PARAMETERS (to be completed
                at/after Launch)
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Chain of Record: [e.g., Ethereum mainnet / Base / Polygon /
                  other]
                </li>
                <li>Smart Contract Address: [0x________]</li>
                <li>Token/Deed ID (if applicable): []</li>
                <li>Off‑Chain Terms Hash (SHA‑256 or similar): []</li>
                <li>Applicant Wallet Address (Owner): [0x________]</li>
                <li>Block/Tx Reference (issuance): [________]</li>
                <li>
                  Transfer Restrictions: [Consent‑required / non‑transferable
                  until [event]/etc.]
                </li>
                <li>Notes: [Any cohort/tier‑specific flags or Belwood tag]</li>
              </ul>
              <p>Company initials: ____ Applicant initials: ____</p>
            </section>

            {/* Exhibit A */}
            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-10">
                Exhibit A (Template) — Launch Notice
              </h2>
              <p>
                <strong>To:</strong> [Applicant] <strong>From:</strong>{" "}
                [Company] <strong>Date:</strong> [ ]
              </p>
              <p>
                <strong>Subject:</strong> Launch Notice — SmartDeed for Project
                Malibu
              </p>
              <p>
                Company hereby provides Launch Notice that the SmartDeed for the
                Property is live on the Chain of Record per Schedule 5. Enclosed
                are/linked are final parameters and closing documents. Upon
                receipt of executed closing documents, Company and Applicant
                will provide joint instructions to the Escrow Agent to apply
                Applicant’s escrowed Commitment to the SmartDeed issuance.
              </p>
              <p>— [Company sign‑block]</p>
            </section>

            <div className="mt-12 p-6 bg-yellowish/10 dark:bg-yellowish/20 rounded-lg">
              <p className="text-black dark:text-white font-semibold">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
