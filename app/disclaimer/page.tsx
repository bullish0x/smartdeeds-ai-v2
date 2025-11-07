import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { generateMetadata as generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata({
  title: 'Disclaimer - SmartDeeds',
  description:
    'Important disclaimer for SmartDeeds NFT membership tiers. Learn about investment risks, regulatory compliance, technology risks, tax implications, and limitations of liability. NFTs are highly speculative investments.',
  path: '/disclaimer',
})

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
            Disclaimer
          </h1>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 dark:text-gray-300">
            <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-6 mb-8">
              <h2 className="text-xl font-bold text-red-800 dark:text-red-400 mb-2">Important Notice</h2>
              <p className="text-red-700 dark:text-red-300">
                Please read this disclaimer carefully before participating in SmartDeeds
                NFT membership tiers. By purchasing any NFT, you acknowledge that you have
                read, understood, and agree to be bound by this disclaimer.
              </p>
            </div>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                1. Investment Risk Warning
              </h2>
              <p>
                <strong>NFTs are highly speculative investments.</strong> The value of
                SmartDeeds NFT membership tiers may fluctuate significantly and may result
                in total loss of your investment. Past performance does not guarantee
                future results.
              </p>
              <p>
                You should only invest funds that you can afford to lose entirely. The
                prices of NFTs are subject to market conditions and may decrease as well as
                increase.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                2. No Financial Advice
              </h2>
              <p>
                The information provided on SmartDeeds platform does not constitute
                financial, investment, legal, or tax advice. You should consult with
                qualified professionals before making any investment decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                3. Regulatory Compliance
              </h2>
              <p>
                NFTs and cryptocurrency regulations vary by jurisdiction. It is your
                responsibility to ensure that your participation in SmartDeeds complies
                with all applicable laws and regulations in your jurisdiction.
              </p>
              <p>
                SmartDeeds does not guarantee that its NFTs are legal in all jurisdictions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                4. Technology Risks
              </h2>
              <p>
                Blockchain technology, including the Base network, is subject to various
                technical risks including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Network congestion and transaction delays</li>
                <li>Smart contract vulnerabilities</li>
                <li>Hardware or software failures</li>
                <li>Cyberattacks and security breaches</li>
                <li>Loss of private keys or wallet access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                5. No Guarantees
              </h2>
              <p>
                SmartDeeds makes no guarantees, warranties, or representations regarding:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The future value of NFTs</li>
                <li>The availability of benefits or features</li>
                <li>The performance of the blockchain network</li>
                <li>The success of any associated real estate projects</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                6. Real Estate Disclaimer
              </h2>
              <p>
                SmartDeeds NFTs represent membership interests and may be associated with
                real estate projects. However, ownership of an NFT does not constitute
                direct ownership of real property. Any real estate benefits are subject to
                separate agreements and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                7. Tax Implications
              </h2>
              <p>
                Purchasing, holding, or selling NFTs may have tax implications. You are
                solely responsible for determining and paying any applicable taxes. We
                recommend consulting with a tax professional.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, SmartDeeds, its founders,
                affiliates, and partners shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages arising from your use of or
                inability to use the platform or NFTs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">
                9. Acknowledgment
              </h2>
              <p>
                By purchasing a SmartDeeds NFT, you acknowledge that you have read and
                understood this disclaimer and agree to assume all risks associated with
                your participation.
              </p>
            </section>

            <div className="mt-12 p-6 bg-yellowish dark:bg-yellowish/20 rounded-lg">
              <p className="text-black dark:text-white font-semibold">
                This disclaimer is not exhaustive. Please review all terms and conditions
                carefully before making any investment decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

