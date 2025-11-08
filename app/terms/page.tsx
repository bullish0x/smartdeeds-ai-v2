"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Shield, Scale, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeInUp, staggerContainer } from "@/lib/motion";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6 text-yellowish" />
              <Badge variant="outline" className="border-yellowish/50 text-yellowish bg-yellowish/10">
                Legal Agreement
              </Badge>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              VOUCHER FOR SMARTDEED™ NFT AND MEMBERSHIP PRE‑LAUNCH AGREEMENT (U.S.)
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <Alert className="bg-yellowish/10 border-yellowish/30">
                <AlertCircle className="w-5 h-5 text-yellowish" />
                <AlertDescription className="text-white">
                  This Agreement governs the SmartDeed™ NFT and Membership Pre‑Launch program. It controls over any
                  other website messaging, summaries, marketing, or communications. In the event of any inconsistency,
                  conflict, or ambiguity between this Agreement and any other content on this site or related channels,
                  this Agreement governs and prevails in all respects.
                </AlertDescription>
              </Alert>
            </motion.div>
          </motion.div>

          {/* Preamble */}
          <Card className="bg-zinc-950 border-white/10 mb-8">
            <CardContent className="p-6 space-y-4 text-gray-300">
              <p><strong className="text-white">Date:</strong> [DATE]</p>
              <p><strong className="text-white">Company:</strong> ________________., a Delaware corporation ("Company")</p>
              <p><strong className="text-white">Applicant:</strong> ___________________ ("Applicant")</p>
              <p><strong className="text-white">Property / Project:</strong> Project Malibu — a design‑led restoration (the "Property")</p>
              <p>
                <strong className="text-white">Primary Purpose:</strong> Private membership with optional pre‑launch
                commitment documented by a SmartDeed NFT—an on‑chain digital assignment (implemented via smart contract)
                evidencing Applicant's economic interest in the Property at a discount at entry if the SmartDeed launches
                for the Property.
              </p>
            </CardContent>
          </Card>

          {/* Main Content with Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {/* Key Facts */}
            <AccordionItem value="key-facts" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-yellowish" />
                  KEY FACTS & CHECKBOXES
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-4 pt-4">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <strong className="text-white">Tier Assignment (Company‑assigned; check one):</strong> ☐ Founders ☐
                    Diamond ☐ Platinum ☐ Gold
                    <div className="mt-2">Assigned by Company. Applicant acknowledges the Tier selected above. Applicant
                      initials: _______
                    </div>
                  </li>
                  <li>
                    <strong className="text-white">Membership Application Fee (non‑refundable):</strong> $_________
                    (due at signing). Applicant initials: _______
                  </li>
                  <li>
                    <strong className="text-white">Pre‑Launch Commitment Amount (escrowed; refundable only as stated):</strong>
                    $________________ (Aligned to Tier; see Schedule 1). Applicant initials: _______
                  </li>
                  <li>
                    <strong className="text-white">Entry Discount (locked at commitment; details in Private Materials):</strong>
                    [______] ("Entry Discount"). Applicant initials: _______
                  </li>
                  <li><strong className="text-white">Launch Deadline:</strong> __________ (the "Launch Deadline").</li>
                  <li>
                    <strong className="text-white">Escrow Agent:</strong> Closeo Escrow, 2330 East Bidwell St, Ste 160,
                    Folsom CA 95630, karla@closeoescrow.com, Trust/Account #[____________] (the "Escrow Agent").
                  </li>
                  <li>
                    <strong className="text-white">Belwood Investment Circle:</strong> ☐ Applicant confirms Belwood
                    Investment Circle status. If checked, Schedule 4 (Belwood Addendum) applies. Applicant initials: _______
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Definitions */}
            <AccordionItem value="definitions" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                DEFINITIONS
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-3 pt-4">
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">Membership</strong> means private, invite‑only access to education,
                    curated content, briefings, private events, gifts, community, and the ability (in the U.S.) to be
                    considered for a SmartDeed NFT relating to the Property.
                  </li>
                  <li>
                    <strong className="text-white">SmartDeed NFT</strong> means the binding on‑chain digital assignment—
                    implemented as a smart contract on the Chain of Record specified in Schedule 5—that documents
                    Applicant's economic interest for this Agreement.
                  </li>
                  <li>
                    <strong className="text-white">Lifetime</strong> means either (1) for the life of the signatory to
                    this Agreement or (2) the existence of the Company or any successor maintaining rights to the
                    Membership, whichever is shorter.
                  </li>
                  <li>
                    <strong className="text-white">Launch</strong> means Company's written Launch Notice that the
                    SmartDeed NFT for the Property is live for execution/issuance, with final parameters (Schedule 5)
                    and escrow release instructions.
                  </li>
                  <li>
                    <strong className="text-white">Private Materials</strong> means non‑public documents Company shares
                    with Applicant under confidentiality (e.g., discount mechanics, process papers, restoration briefs,
                    timelines).
                  </li>
                  <li>
                    <strong className="text-white">Chain of Record</strong> means the blockchain network designated in
                    Schedule 5 (including its canonical chain per §6.5).
                  </li>
                  <li>
                    <strong className="text-white">Tier</strong> means a level of Membership granting specific privileges,
                    access and rights, with specific fees associated.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Membership Terms */}
            <AccordionItem value="membership" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                MEMBERSHIP TERMS
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-3 pt-4">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-white">U.S. Access Gate.</strong> In the U.S., Membership is required to be
                    considered for a SmartDeed NFT relating to the Property.
                  </li>
                  <li>
                    <strong className="text-white">Tier Is Assigned.</strong> Company assigns the Tier. Applicant cannot
                    self‑select or transfer Tiers.
                  </li>
                  <li>
                    <strong className="text-white">What Membership Is / Is Not.</strong>
                    <ul className="list-disc pl-6 mt-2 space-y-2">
                      <li>
                        Membership includes, but is not limited to, various privileges, including access to education,
                        briefings, curated experiences, gifts, access to events, and behind‑the‑scenes restoration
                        coverage as reasonably made available.
                      </li>
                      <li>
                        Membership does not by itself create ownership, voting, control, or management rights in the
                        Company or the Property.
                      </li>
                      <li>
                        Membership is non‑transferable and intended to be Lifetime unless terminated under §3.6 or as
                        amended by the Company.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-white">Digital‑First; Paper Optional.</strong> This program is digital‑first.
                    The SmartDeed NFT (on‑chain) is the authoritative record of Applicant's economic interest once launched.
                  </li>
                  <li>
                    <strong className="text-white">Membership Application Fee.</strong> The Membership Application Fee is
                    earned on acceptance and non‑refundable, except where prohibited by applicable law.
                  </li>
                  <li>
                    <strong className="text-white">Conduct; Termination for Cause.</strong> Company may suspend or terminate
                    Membership for cause, including but not limited to breach of this Agreement, confidentiality breach,
                    non‑payment, or disruptive conduct.
                  </li>
                  <li>
                    <strong className="text-white">No Public Offer; Invite‑Only.</strong> This is a private,
                    invitation‑only program. No public communications of deal‑specific terms are made.
                  </li>
                  <li>
                    <strong className="text-white">Cohort/Tier Caps; No Dilution.</strong> Each Tier is capped at 99
                    Applicants (maximum). Company will not increase the Membership count for the Property beyond the
                    initial caps.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Pre-Launch Commitment & Escrow */}
            <AccordionItem value="escrow" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                PRE‑LAUNCH COMMITMENT & ESCROW
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-3 pt-4">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-white">Commitment Amount; Funding, Pre‑Launch Voucher NFT.</strong> Applicant
                    agrees to a Pre‑Launch Commitment. Applicant shall fund the Commitment in US dollars by wire or ACH
                    to the Escrow Agent. Once payment is made and application approved, Applicant shall be issued a
                    Voucher NFT in their wallet.
                  </li>
                  <li>
                    <strong className="text-white">Discount.</strong> By making the Commitment and funding escrow,
                    Applicant locks the Entry Discount, as further described in the Private Materials.
                  </li>
                  <li>
                    <strong className="text-white">Refund Prior to or If No Launch.</strong> Applicant may request refund
                    at any time prior to the Company issuing Launch Notice, and shall receive the Commitment in full less
                    a 2% escrow fee within five (5) business days.
                  </li>
                  <li>
                    <strong className="text-white">Apply Funds If Launch Occurs.</strong> Upon Launch, the Escrow Agent
                    releases the Commitment to Company to be applied to Applicant's SmartDeed NFT per the final parameters.
                  </li>
                  <li>
                    <strong className="text-white">KYC/AML Cooperation.</strong> Applicant will promptly provide
                    information reasonably requested by Company or Escrow Agent to comply with KYC/AML and related U.S.
                    requirements.
                  </li>
                  <li>
                    <strong className="text-white">Risk Factors.</strong> There are risks involved with any purchase
                    decision. This Membership involves blockchain technology, communal membership, and a number of
                    innovative strategies. You are strongly recommended to read through the risk factors carefully.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Confidentiality */}
            <AccordionItem value="confidentiality" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                CONFIDENTIALITY (NDA)
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-3 pt-4">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-white">What's Confidential.</strong> "Confidential Information" means all
                    non‑public information about the Property or Company disclosed to Applicant, including without
                    limitation: pricing, discount mechanics, SmartDeed NFT parameters, restoration plans/materials,
                    schedules, budgets, vendor/architect information, processes, subscriber lists, strategies, and
                    intellectual property.
                  </li>
                  <li>
                    <strong className="text-white">Applicant's Obligations.</strong> Applicant will (a) keep Confidential
                    Information secret, (b) use it only to evaluate and participate in this program, and (c) not share
                    it except with professional advisors bound to confidentiality.
                  </li>
                  <li>
                    <strong className="text-white">Exceptions.</strong> Confidential Information does not include
                    information that: (a) becomes public through no breach by Applicant; (b) was known to Applicant
                    without restriction before disclosure; or (c) must be disclosed by law/court order.
                  </li>
                  <li>
                    <strong className="text-white">Term.</strong> Confidentiality runs until the later of three (3) years
                    from execution, or one (1) year after final disposition of the Property.
                  </li>
                  <li>
                    <strong className="text-white">No Publicity.</strong> Applicant will not make public statements,
                    posts, or announcements concerning the Property, the SmartDeed NFT, or this program without Company's
                    written consent.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* SmartDeed NFT */}
            <AccordionItem value="smartdeed" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                SMARTDEED NFT — DIGITAL PRIMACY
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-3 pt-4">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-white">Company Canon.</strong> The Company maintains canonical records to
                    ensure all contact, wallet, holding, and Membership information for Applicants and Members remains
                    complete and correct.
                  </li>
                  <li>
                    <strong className="text-white">Electronic Records & Signatures.</strong> Applicant consents to the
                    use of electronic records and signatures (including wallet signatures/approvals) under UETA/E‑SIGN
                    equivalents.
                  </li>
                  <li>
                    <strong className="text-white">Chain of Record; Canonical Chain.</strong> The Chain of Record is
                    specified in Schedule 5. In the event of a chain fork/outage/migration, the canonical chain is the
                    chain recognized by the network's widely‑adopted consensus.
                  </li>
                  <li>
                    <strong className="text-white">Gas/Keys.</strong> Applicant is responsible for gas/fees related to
                    their wallet actions and for safeguarding private keys.
                  </li>
                  <li>
                    <strong className="text-white">Transfer Limits.</strong> The SmartDeed NFT is not intended for public
                    trading or listing. Any transfer requires Company's written consent and compliance with this Agreement.
                  </li>
                  <li>
                    <strong className="text-white">Post‑Launch Transfer.</strong> On Launch, Launch Notice will appear
                    on the Company website. The Voucher NFT shall then be removed from Applicant's wallet and a new
                    SmartDeed NFT will be added, indicating their level of Membership.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Governing Law */}
            <AccordionItem value="governing-law" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-yellowish" />
                  GOVERNING LAW & DISPUTE RESOLUTION
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-3 pt-4">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong className="text-white">Governing Law.</strong> Delaware law governs, without regard to
                    conflicts rules.
                  </li>
                  <li>
                    <strong className="text-white">Venue; Relief.</strong> Any controversy or claim arising out of or
                    relating to this Agreement, or the breach thereof, shall be conclusively resolved through binding
                    arbitration under the Commercial Arbitration Rules of the American Arbitration Association.
                  </li>
                  <li>
                    <strong className="text-white">No Class Actions / No Consolidation.</strong> Claims must be brought
                    individually and not as a class, collective, consolidated, or representative action, and any
                    arbitration may resolve only Applicant's individual claims.
                  </li>
                  <li>
                    <strong className="text-white">Jury Trial Waiver.</strong> To the extent not arbitrated, each party
                    waives jury trial for any dispute arising out of or related to this Agreement.
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            {/* Schedules */}
            <AccordionItem value="schedules" className="bg-zinc-950 border border-white/10 rounded-lg px-6">
              <AccordionTrigger className="text-xl font-bold text-white hover:text-yellowish hover:no-underline">
                SCHEDULES & EXHIBITS
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 space-y-6 pt-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">SCHEDULE 1 — TIER & PRICING SUMMARY</h3>
                  <p>Applicant: [NAME] Date: [DATE]</p>
                  <p className="mt-2"><strong>Assigned Tier (check one):</strong></p>
                  <ul className="list-disc pl-6 mt-2">
                    <li>☐ Founders  Commitment: $[ ]  Entry Discount: [ ]</li>
                    <li>☐ Diamond   Commitment: $[ ]  Entry Discount: [ ]</li>
                    <li>☐ Platinum   Commitment: $[ ]  Entry Discount: [ ]</li>
                    <li>☐ Gold     Commitment: $[ ]  Entry Discount: [ ]</li>
                  </ul>
                  <p className="mt-2">Company initials: ____ Applicant initials: ____</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">SCHEDULE 2 — ESCROW INSTRUCTIONS</h3>
                  <p>
                    <strong>Escrow Agent:</strong> Closeo Escrow, 2330 East Bidwell St, Ste 160, Folsom CA 95630 •
                    karla@closeoescrow.com • Trust/Acct #[—]
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 mt-2">
                    <li>Funding: Applicant sends $[AMOUNT] by wire or ACH within 3 business days of signing.</li>
                    <li>Holding: Escrow Agent holds funds in trust pending Launch release or refund.</li>
                    <li>Release on Launch: Upon Company's Launch Notice, Escrow Agent releases funds per closing documents.</li>
                    <li>Refund If No Launch: If Launch has not occurred by the Launch Deadline, funds are returned within 5 business days.</li>
                  </ol>
                  <p className="mt-2">Company initials: ____ Applicant initials: ____</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">SCHEDULE 5 — SMARTDEED ON‑CHAIN PARAMETERS</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Chain of Record: [e.g., Ethereum mainnet / Base / Polygon]</li>
                    <li>Smart Contract Address: [0x________]</li>
                    <li>Token/Deed ID (if applicable): []</li>
                    <li>Applicant Wallet Address (Owner): [0x________]</li>
                    <li>Transfer Restrictions: [Consent‑required / non‑transferable]</li>
                  </ul>
                  <p className="mt-2">Company initials: ____ Applicant initials: ____</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Last Updated */}
          <div className="mt-12">
            <Card className="bg-yellowish/10 border-yellowish/30">
              <CardContent className="p-4">
                <p className="text-white font-semibold text-center">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
