import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateMetadata as generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "SmartDeed IOI Voucher Short‑Form Presale License",
  description:
    "SmartDeed IOI Voucher Short‑Form Presale License governing the presale participation rights, definitions, go‑live conversion, eligibility/KYC, risks, dispute resolution, and related terms for the SmartDeed program on Base.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />

      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-8">
            SmartDeed IOI Voucher Short‑Form Presale License
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <section>
              <p>
                Issuer: Sols Lot Inc. d/b/a SmartDeed (the “Company”)
                <br />
                Network/Rail: Base blockchain; consideration in USDC (on Base)
              </p>
              <p>
                Purpose: This short‑form presale license (this “License”)
                governs the purchase and holding of an indication‑of‑interest
                (“IOI”) presale voucher (the “Voucher”). It is not the Forward
                Sale &amp; Exchange Agreement and not the final SmartDeed
                Digital Assignment Contract (“DAC”). The only rights granted
                under this License are those associated with presale
                participation—specifically, the Purchaser’s paid reservation and
                expression of interest in acquiring, at go‑live, (i) a SmartDeed
                DAC and (ii) membership activation as described in Schedule A
                and the applicable program terms. No additional property,
                membership, or settlement rights are granted at this time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                1) Parties; Effective Date
              </h2>
              <p>
                This License is made between the Company and the
                purchaser/holder of the Voucher (the “Purchaser”). It becomes
                effective upon the Purchaser’s on‑chain digital signature
                (wallet transaction), which constitutes acceptance of all terms
                of this License.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                2) Definitions
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Voucher: A presale instrument evidencing only a paid
                  reservation and the right to receive, at go‑live, (i)
                  membership activation and (ii) a DAC at the Exchange Rate for
                  the Purchaser’s tier (see Schedule A).
                </li>
                <li>
                  Go‑Live Notice: A notice posted on the Company’s website or
                  app (and optionally delivered via email or in‑app
                  notification) stating that go‑live conditions have been met
                  and that DAC issuance will commence.
                </li>
                <li>
                  DAC: SmartDeed Digital Assignment Contract to be issued at
                  go‑live. The DAC packages: (i) an Assignment of Rights
                  representing a minority contractual economic assignment under
                  the program’s Forward Sale &amp; Exchange Agreement (the
                  “Forward Agreement”)—not title or governance in any property;
                  and (ii) a Global Digital Membership Grant that provides
                  access‑and‑use benefits (e.g., insider updates, token‑gated
                  community channels, virtual events, members‑only content) as
                  further described in Schedule M (Global Digital Membership
                  Terms) and subject to the Code of Conduct. The DAC is
                  evidenced on‑chain by a token/record on the Chain of Record
                  (see §1(h)) and administered via the Canonical Registry (see
                  §1(i)). Membership is non‑financial and does not convey
                  dividends, profit‑sharing, voting, or control rights.
                </li>
                <li>
                  U.S. Person: A person as defined under applicable U.S. law
                  (e.g., as defined for purposes of Regulation S under the
                  Securities Act or under OFAC regulations).
                </li>
                <li>
                  Sanctioned Person / Sanctioned Jurisdiction: Any person or
                  jurisdiction that is subject to comprehensive sanctions under
                  applicable law (for example, sanctions administered by the
                  U.S. Treasury’s OFAC).
                </li>
                <li>
                  Exchange Rate: The tier‑specific multiplier listed in Schedule
                  A, used to convert the Purchaser’s Presale Amount into the DAC
                  interest at go‑live.
                </li>
                <li>
                  Presale Amount: The total amount paid by the Purchaser for the
                  Voucher.
                </li>
                <li>
                  Outside Date: November 16. The date by which, if Go‑Live has
                  not occurred, the Company will cancel the Voucher and issue a
                  refund pursuant to Section 5(1), unless the Purchaser
                  affirmatively re‑consents on‑chain to an extension.
                </li>
                <li>
                  Chain of Record: The blockchain network on which the
                  authoritative state of a given DAC is maintained for this
                  offer. For this presale, the Chain of Record is Base, unless
                  changed by Go‑Live Notice under §6(d).
                </li>
                <li>
                  Canonical Registry: The Company‑maintained registry that
                  records DAC state (owner of record, tx hash, chain,
                  redemption/settlement status). The Canonical Registry controls
                  in the event of token custody anomalies, subject to
                  manifest‑error correction.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                3) Nature of the Voucher (No Present Rights)
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Presale Only: The Voucher represents solely a presale right to
                  receive, at go‑live, the Purchaser’s DAC and accompanying
                  membership access. It is not the actual real estate contract
                  or DAC itself, but rather a placeholder of the Purchaser’s
                  intent and reservation.
                </li>
                <li>
                  No Current Benefits or Property Interest: Until go‑live occurs
                  and the DAC is issued, the Voucher confers no membership
                  privileges, no economic or property interest, and no right to
                  any settlement or proceeds. The Purchaser holds no ownership
                  or lien in any property at this stage.
                </li>
                <li>
                  No Dividends or Governance: The Voucher grants no dividends,
                  revenue share, voting rights, or management/control rights in
                  any entity or asset. It is a license for a future product, not
                  an equity or governance instrument.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                4) Exchange Rate; Illustrative Basis Points
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Conversion Formula: At go‑live, the Purchaser’s Presale Amount
                  multiplied by the applicable Exchange Rate (as set forth for
                  the Purchaser’s tier in Schedule A) will determine the
                  fractional interest to be embodied in the DAC issued to the
                  Purchaser. This conversion formula translates the Presale
                  Amount into the Purchaser’s proportional share of the forward
                  real estate interest (as defined in the DAC and program
                  documents).
                </li>
                <li>
                  Illustrative Values: Schedule A provides illustrative examples
                  of the effective percentage (basis points) of the property’s
                  future value corresponding to various Presale Amounts and
                  tiers. These figures assume a reference property valuation of
                  $35,000,000 and are for example purposes only. The final
                  calculation of the Purchaser’s DAC interest will be governed
                  by the actual DAC agreement and program terms at go‑live.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                5) Refund; Lock; Transfer
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Refund; Long‑Stop (Outside Date: November 16). You may cancel
                  and receive a full refund of your Presale Amount at any time
                  before the Go‑Live Notice, following the posted refund
                  workflow (which may include voucher burn/return). If Go‑Live
                  has not occurred by November 16 (the Outside Date), the
                  Company will automatically cancel your Voucher and issue a
                  refund of your Presale Amount within 15 business days, net of
                  non‑recoverable network fees and any legally required
                  withholding, unless you affirmatively re‑consent on‑chain to a
                  specific extension.
                </li>
                <li>
                  Non‑Transferable (“Soulbound”): The Voucher is
                  non‑transferable. The Purchaser may not sell, assign, or
                  otherwise transfer the Voucher to any other person or wallet.
                  Any attempted transfer of the Voucher (by sale or gift or
                  otherwise) prior to redemption will be null and void, and the
                  Company will not recognize any such purported transferee as a
                  valid holder. The Voucher is intended to remain in the
                  Purchaser’s control (like a soulbound token) until it is
                  redeemed at go‑live.
                </li>
                <li>
                  No Secondary Market Promised: The Purchaser understands and
                  agrees that the Company is not providing any platform or
                  mechanism for secondary trading of the Voucher. No secondary
                  market or liquidity is promised or expected for the Voucher.
                  Any potential transferability or trading functionality will
                  apply, if at all, only to the DAC or other instruments issued
                  at go‑live and only in compliance with the program terms and
                  applicable laws.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                6) Go‑Live; Redemption; Delivery Rail
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Conditions &amp; Notice: “Go‑live” will occur when the Company
                  determines that all prerequisites for launching the SmartDeed
                  DAC program have been satisfied (including legal,
                  technological, and operational prerequisites). The Company
                  will then issue a Go‑Live Notice, which will announce the
                  official start of DAC issuance and the conversion process for
                  Vouchers. The timing of go‑live is at the Company’s
                  discretion, and the Company makes no guarantee as to the date
                  by which go‑live will occur.
                </li>
                <li>
                  Redemption at Go‑Live: Upon go‑live, the Voucher will be
                  automatically redeemed and exchanged for the corresponding
                  SmartDeed DAC. Specifically, the Purchaser will receive a DAC
                  (on the Base network) representing the fractional interest
                  determined by Section 4, and the Purchaser’s SmartDeed
                  membership will commence. This exchange will typically occur
                  via an automated or semi‑automated smart contract process.
                  After redemption, the original Voucher token may be burned or
                  canceled since its purpose (presale reservation) has been
                  fulfilled.
                </li>
                <li>
                  Payout Delivery Rail (Future Settlement): Any future
                  settlement payment due to the Purchaser under the terms of the
                  DAC (for example, a payout upon the sale of the underlying
                  property) will be delivered in USDC on the Base network to the
                  Purchaser’s whitelisted wallet address. The Purchaser is
                  responsible for ensuring they have a compliant Base‑network
                  wallet capable of receiving USDC. If the Company, in its
                  discretion, offers an alternative payout method (such as a
                  wire transfer of USD or distribution on another blockchain),
                  the Purchaser may elect such method, but the Company may
                  deduct any additional costs, fees, or required tax
                  withholdings associated with that alternative delivery.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                7) Eligibility; KYC/AML; Sanctions
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Eligible Participants Only: By purchasing the Voucher, the
                  Purchaser represents that they are not a Sanctioned Person or
                  located in a Sanctioned Jurisdiction, and that they are
                  legally permitted to participate in this presale under the
                  laws applicable to them. The Company may refuse to issue or
                  may cancel (with refund) any Voucher sale that the Company, in
                  its sole discretion, determines would violate applicable law,
                  including sanctions laws or securities/commodities
                  regulations.
                </li>
                <li>
                  KYC/AML Compliance: The Purchaser agrees to comply with any
                  identity verification (KYC) and anti‑money‑laundering (AML)
                  requirements that the Company deems necessary. U.S. Persons,
                  and any Purchaser using U.S.‑based payment rails, will be
                  required to complete full KYC/AML screening. Non‑U.S.
                  Purchasers may be required to provide basic identifying
                  information and undergo screening to ensure compliance with
                  sanctions and other legal requirements. Failure to complete
                  required KYC/AML steps to the Company’s satisfaction may
                  result in the cancellation of the Voucher purchase and a
                  return of funds (minus any applicable fees).
                </li>
                <li>
                  Wallet Whitelisting: The Purchaser’s receiving wallet must be
                  whitelisted and approved by the Company as part of the KYC/AML
                  process. The DAC will only be delivered to, and any settlement
                  payments will only be made to, a whitelisted wallet address
                  controlled by the Purchaser. The Company is not obligated to
                  recognize any transfer of the Voucher or DAC to an unapproved
                  wallet or any holder who has not been KYC/AML verified.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                8) Membership Activation &amp; Regional Limits (Post‑Go‑Live)
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Activation Upon DAC Issuance: Upon DAC issuance at go‑live,
                  the Purchaser’s Global Digital Membership (a bundled,
                  consumptive component of the DAC—see Schedule M) activates.
                  Prior to go‑live, holding a Voucher does not entitle the
                  Purchaser to any membership privileges. After go‑live, the
                  Purchaser’s membership will include the consumptive benefits
                  described in the SmartDeed program (e.g. access to insider
                  updates, token‑gated community channels, virtual events,
                  etc.), subject to the terms and code of conduct applicable to
                  members.
                </li>
                <li>
                  Regional &amp; Logistical Limitations: The Purchaser
                  acknowledges that certain benefits or events may be limited to
                  members in specific regions (for example, some promotions or
                  physical events might be U.S.‑only due to regulatory or
                  logistical constraints). International members may not have
                  access to every benefit that U.S. members enjoy. The Company
                  will endeavor to provide reasonable alternative benefits of
                  equal or greater consumptive value for members who are unable
                  to participate in region‑specific offerings (for instance,
                  providing recordings or online access if a live event is
                  U.S.‑only). However, the availability of such alternatives is
                  not guaranteed for every benefit.
                </li>
                <li>
                  Tier‑Based Benefits; Capacity: Membership perks may differ by
                  tier (as set forth in program materials) and are offered on a
                  capacity‑managed basis. The Company reserves the right to
                  schedule events or release content in a manner that manages
                  attendance or server capacity (e.g., first‑come‑first‑served
                  sign‑ups for limited virtual sessions, or scheduling in
                  certain time zones). Members are responsible for their own
                  travel, accommodation, internet access, and any other
                  ancillary costs if they choose to participate in events or
                  opportunities.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                9) Risks &amp; Disclaimers
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Property and Market Risk: The potential future payout to the
                  Purchaser (if any) under the DAC will depend on the future
                  value or sale price of the underlying real estate. Real estate
                  market values can go down as well as up. There is no guarantee
                  that the property’s value will increase; it may decline due to
                  market conditions, property‑specific issues, natural
                  disasters, or other factors. The Purchaser’s eventual share
                  could be less than the Presale Amount paid (or even zero) if
                  the property does not appreciate or if its value is eroded by
                  costs or market downturns.
                </li>
                <li>
                  Blockchain and Operational Risk: The SmartDeed program relies
                  on blockchain technology (including the Base network and smart
                  contracts) as well as various third‑party service providers.
                  These systems may fail, be interrupted, or contain
                  vulnerabilities. The Purchaser bears the risk of technical
                  issues such as lost private keys, wallet hacks, incorrect
                  transactions, network outages or congestion, and smart
                  contract bugs. Such issues could result in the loss of the
                  Voucher or DAC, an inability to redeem the Voucher, delays in
                  receiving payouts, or other operational problems. The Company
                  will take reasonable security measures but cannot guarantee
                  that such risks will never materialize.
                </li>
                <li>
                  Timing and Liquidity Risk: The Purchaser should be prepared
                  for the possibility that go‑live could be significantly
                  delayed or, in an extreme scenario, that the project does not
                  go live at all (in which case refunds would be provided). Even
                  after go‑live, the DAC represents a forward‑looking interest
                  with an uncertain time horizon; a settlement event (such as a
                  property sale) might not occur for many years. The Voucher is
                  illiquid (non‑transferable), and even the DAC, once issued,
                  may have transfer restrictions or limited marketability. There
                  is no assurance of liquidity or any interim cash flows. The
                  Purchaser’s funds could be tied up for an indefinite period
                  without the ability to sell or exit the position.
                </li>
                <li>
                  No Income or Profits; No Guarantee: The Voucher and the DAC
                  (once issued) are not traditional investments and are not
                  designed to provide any income stream. The Purchaser will not
                  receive dividends, interest, rental income, or any other
                  periodic returns. Any potential profit would come only from a
                  one‑time payout upon a successful future settlement event, and
                  there is no guarantee any profit will materialize. The
                  Purchaser should not enter this program with an expectation of
                  profit derived from the efforts of the Company or others; any
                  value realized will be primarily from the eventual performance
                  of the real estate asset. The Company makes no representations
                  about future market conditions or legal/regulatory
                  developments, which could impact the value or even the
                  viability of the project. The Purchaser assumes full
                  responsibility for these risks.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                10) Payment Costs; Withholding
              </h2>
              <p>
                The Company may deduct or withhold certain amounts from any
                payment delivered to the Purchaser to cover applicable costs or
                legal requirements. Specifically, any distribution of funds to
                the Purchaser (whether a refund or a settlement payout under the
                DAC) may be net of: (i) transaction fees such as blockchain gas
                fees or bridge fees; (ii) additional costs incurred to
                accommodate an alternate payment method if the Purchaser
                requests a method other than the default USDC on Base (for
                example, bank wire fees or currency conversion costs); and (iii)
                any amounts the Company is required by law to withhold or block,
                such as U.S. federal or state tax withholding amounts, or
                amounts required to be withheld due to a garnishment order,
                court order, or sanctions law. Any deducted or withheld amounts
                will be duly accounted for, and any required tax documentation
                or notices will be provided to the Purchaser.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                11) Not a Security; No Advice
              </h2>
              <p>
                The parties agree that the Voucher is being sold as a
                consumptive presale product (a license for future delivery of a
                DAC and membership) and not as an investment contract or other
                security. The structure of this offering is intended to comply
                with applicable laws by avoiding the characteristics of a
                security: for example, there is no pooling of funds for others
                to manage for profit, and the primary expectation of value comes
                from the real estate asset’s performance, not the managerial
                efforts of the Company. The Purchaser is not acquiring an equity
                stake or any ownership in the Company or the property. In
                purchasing the Voucher, the Purchaser affirms that they are
                doing so for the anticipated use value (membership access and
                future contract rights) and not with an expectation of
                speculative profit from resale or efforts of the Company.
                Additionally, the Purchaser acknowledges that the Company has
                not given the Purchaser any legal, financial, or tax advice. The
                Purchaser has had the opportunity to consult with their own
                attorneys, financial advisors, and tax professionals to the
                extent they deemed necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                12) Notices; Go‑Live Notice
              </h2>
              <p>
                Any notice or communication to the Purchaser under this License
                (including the Go‑Live Notice or any other important
                announcement) will be provided through one or more of the
                following methods: (i) a posting on the Company’s official
                website or user portal; (ii) an in‑app notification or dashboard
                message within the SmartDeed platform; or (iii) an email sent to
                the Purchaser’s email address on record. The Company may use
                additional means, such as social media or community channels, to
                amplify important notices, but the Purchaser acknowledges that
                the primary official channel for notices is the Company’s
                website/app. The Purchaser is responsible for monitoring these
                channels for the Go‑Live Notice and other communications. A
                Go‑Live Notice, once posted on the official site/app, is deemed
                effectively delivered to all Purchasers as of the time of
                posting.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                13) Dispute Resolution; Governing Law
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Arbitration &amp; Class Action Waiver: Any dispute, claim, or
                  controversy arising out of or relating to this License or the
                  Voucher (including the validity, breach, or termination of
                  this License) shall be resolved by binding arbitration
                  administered by the American Arbitration Association (“AAA”)
                  (or a similar reputable arbitration organization) under its
                  Commercial Arbitration Rules. The arbitration will be
                  conducted by a single neutral arbitrator and, unless the
                  parties agree otherwise, will take place in New Castle County,
                  Delaware, USA. Class Action Waiver: The Purchaser and the
                  Company each agree that claims must be brought individually
                  and not as a plaintiff or class member in any purported class,
                  collective, or representative proceeding. The arbitrator shall
                  not consolidate more than one person’s claims or preside over
                  any form of a representative or class proceeding. If this
                  class action waiver is found to be unenforceable, then the
                  entirety of this arbitration clause shall be null and void for
                  that dispute.
                </li>
                <li>
                  Governing Law: This License and any dispute or claim arising
                  out of or related to it shall be governed by and construed in
                  accordance with the laws of the State of Delaware, USA,
                  without giving effect to any choice of law or conflict of law
                  provision that would result in the application of the laws of
                  a different jurisdiction.
                </li>
                <li>
                  Jury Trial Waiver: In the event any dispute arising out of
                  this License is found not subject to the arbitration clause
                  above and proceeds in court, the Purchaser and the Company
                  waive any right to a jury trial. All such court proceedings
                  shall be tried, to the extent permissible, before a judge
                  rather than a jury.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                14) Limitation of Liability; Force Majeure
              </h2>
              <p>
                To the maximum extent permitted by applicable law, the Company’s
                aggregate liability to the Purchaser for any and all claims
                arising out of or relating to this License, the Voucher, or the
                SmartDeed program shall not exceed the amount of the Purchaser’s
                Presale Amount. In no event shall the Company or its affiliates,
                officers, directors, or agents be liable for any indirect,
                special, incidental, consequential, exemplary, or punitive
                damages of any kind (including, but not limited to, lost
                profits, lost opportunities, or lost data) arising out of or in
                connection with this License or the Purchaser’s participation in
                the SmartDeed presale, even if advised of the possibility of
                such damages. The Company shall not be considered in breach of
                this License to the extent that any delay or failure in
                performance is attributable to force majeure or circumstances
                beyond the Company’s reasonable control. Such circumstances
                include, but are not limited to, acts of God, natural disasters,
                war, civil unrest, terrorism, labor strikes, electrical or
                telecommunications outages, cyberattacks or hacks, changes in
                law or government regulations, actions of government or
                regulators, and failures or outages of blockchain networks or
                related technology. In any such event, the Company will make
                commercially reasonable efforts to resume performance as soon as
                practicable, but shall not be liable for any losses or damages
                resulting from the force majeure event.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                15) Miscellaneous Provisions
              </h2>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Entire Agreement (Presale Only): This License, including any
                  Schedule and attachments referenced herein, constitutes the
                  entire agreement between the Company and the Purchaser
                  regarding the presale Voucher. It supersedes all prior and
                  contemporaneous agreements, understandings, negotiations, and
                  communications (whether oral or written) between the parties
                  relating to the presale of the SmartDeed DAC interest. The
                  Purchaser acknowledges that they are not relying on any
                  statement, representation, or warranty that is not expressly
                  included in this License. For clarity: the terms governing the
                  actual DAC and the forward sale interest (including any
                  economic rights in the real estate) will be provided in the
                  definitive DAC agreement at go‑live. This License governs only
                  the presale phase and conveys no economic rights beyond the
                  eventual issuance of the DAC.
                </li>
                <li>
                  Amendments: Any amendment or modification of this License must
                  be in writing and agreed by the Company and the Purchaser.
                  This can be accomplished by an electronic means: for example,
                  the Company may post an updated version of this License (or a
                  summary of changes with an updated version hash) on its
                  official website or on‑chain, and the Purchaser’s continued
                  holding of the Voucher or an on‑chain acknowledgment/signature
                  by the Purchaser (including through the act of redeeming the
                  Voucher for the DAC at go‑live) can serve as acceptance of the
                  updated terms. No oral agreements or modifications will be
                  effective. If a material change to this License is proposed
                  before go‑live, the Company will provide notice to the
                  Purchaser and an opportunity to request a refund if the
                  Purchaser does not agree to the new terms.
                </li>
                <li>
                  Assignment: The Purchaser may not assign, transfer, or
                  delegate any of their rights or obligations under this
                  License, except by operation of law (for instance, a transfer
                  to heirs upon the Purchaser’s death, subject to legal
                  documentation and KYC of the heir). Any attempted assignment
                  in violation of this clause is void. The Voucher being
                  non‑transferable reflects this restriction. The Company may
                  assign its rights and obligations under this License in
                  connection with a merger, acquisition, or sale of the
                  SmartDeed business or substantially all of its assets,
                  provided that the successor agrees to honor the obligations to
                  Purchaser as set forth in this License. This License will be
                  binding upon and inure to the benefit of the parties and their
                  permitted successors and assigns.
                </li>
                <li>
                  Severability: If any provision of this License is held by an
                  arbitrator or court of competent jurisdiction to be invalid,
                  illegal, or unenforceable, that provision shall be deemed
                  modified to the minimum extent necessary to make it
                  enforceable (if possible), and if it cannot be made
                  enforceable, then that provision shall be severed from this
                  License. All other provisions of this License shall remain in
                  full force and effect. In such a case, the parties shall
                  negotiate in good faith a valid, legal, and enforceable
                  substitute provision that most nearly reflects the original
                  intent of the parties.
                </li>
                <li>
                  Electronic Signature; Counterparts: The Purchaser acknowledges
                  and agrees that their electronic signature in the form of a
                  blockchain transaction (or similar digital acceptance)
                  constitutes a valid and legally binding signature. This
                  License may be executed in one or more counterparts, each of
                  which when executed and delivered shall be deemed an original,
                  and all of which together shall constitute the same agreement.
                  The records of the blockchain, including the transaction hash
                  evidencing the Purchaser’s acceptance and the Voucher’s
                  metadata reference to this License, shall serve as proof of
                  execution and binding effect of this License on the Purchaser
                  and the Company. The Purchaser consents to the use of
                  electronic means to deliver and sign this License and any
                  related documents.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white">
                Schedule A — Tiers &amp; Exchange Rates (Illustrative)
              </h2>
              <p>
                Illustrative example assuming a $35,000,000 reference property
                valuation. The actual DAC and program documents at go‑live will
                govern the final interest calculations.
              </p>
              <div className="not-prose mt-4">
                <ul className="divide-y divide-gray-200 dark:divide-gray-800 rounded-md border border-gray-200 dark:border-gray-800">
                  <li className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <span className="font-semibold">Gold</span>
                    <span>$1,000</span>
                    <span>1.20×</span>
                    <span>0.00343% (≈ 0.343 bps of property)</span>
                  </li>
                  <li className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <span className="font-semibold">Platinum</span>
                    <span>$10,000</span>
                    <span>1.25×</span>
                    <span>0.03571% (≈ 3.571 bps of property)</span>
                  </li>
                  <li className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <span className="font-semibold">Diamond</span>
                    <span>$100,000</span>
                    <span>1.30×</span>
                    <span>0.37143% (≈ 37.143 bps of property)</span>
                  </li>
                  <li className="p-4 grid grid-cols-1 sm:grid-cols-4 gap-2">
                    <span className="font-semibold">Founders</span>
                    <span>$300,000</span>
                    <span>1.33×</span>
                    <span>1.14000% (≈ 114.000 bps of property)</span>
                  </li>
                </ul>
              </div>
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
