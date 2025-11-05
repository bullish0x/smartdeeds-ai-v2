import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MULTISIG_INFO } from '@/lib/constants'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                1. Introduction
              </h2>
              <p>
                Welcome to SmartDeeds. These Terms of Service (&quot;Terms&quot;) govern your
                access to and use of SmartDeeds NFT membership platform. By accessing or
                using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                2. NFT Membership Tiers
              </h2>
              <p>
                SmartDeeds offers four NFT membership tiers: Founder ($1,000,000), Diamond
                ($100,000), Platinum ($10,000), and Gold ($1,000). Each tier provides
                different levels of access and benefits as described on our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                3. Blockchain Network
              </h2>
              <p>
                All SmartDeeds NFT transactions are processed on the{' '}
                <strong>Base network</strong>. You are responsible for ensuring you have
                the necessary wallet and network configuration to interact with Base
                network.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                4. Multi-Signature Wallet
              </h2>
              <p>
                {MULTISIG_INFO.description} This ensures the security of all funds and
                enables proper refund mechanisms when applicable.
              </p>
              <p>
                All funds collected from NFT purchases are held in a multi-signature wallet
                that requires multiple authorized signatures for any transaction. This
                provides enhanced security and transparency for all participants.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                5. Refund Policy
              </h2>
              <p>
                Refund requests must be submitted within 30 days of purchase and are subject
                to review. Refunds will be processed through the multi-signature wallet
                system and may take up to 14 business days to complete.
              </p>
              <p>
                Refunds are subject to KYC verification and may be denied if terms of
                service are violated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                6. KYC Requirements
              </h2>
              <p>
                All purchases require Know Your Customer (KYC) verification. You must
                complete the KYC process before purchasing any NFT membership tier. Failure
                to complete KYC may result in purchase cancellation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                7. Intellectual Property
              </h2>
              <p>
                All NFT artwork, designs, and content are the intellectual property of
                SmartDeeds. Ownership of an NFT grants you the rights specified in the NFT
                metadata, but does not transfer copyright or other intellectual property
                rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                SmartDeeds is not responsible for any losses incurred due to blockchain
                network issues, wallet security breaches, or other technical problems. You
                are solely responsible for the security of your wallet and private keys.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. Continued use of our
                services after changes constitutes acceptance of the new Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mt-8 mb-4">
                10. Contact Information
              </h2>
              <p>
                For questions about these Terms, please contact us through our official
                channels or schedule a private chat through our booking system.
              </p>
            </section>

            <div className="mt-12 p-6 bg-yellowish rounded-lg">
              <p className="text-black font-semibold">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

