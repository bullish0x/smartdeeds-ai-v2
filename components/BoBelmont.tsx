import Image from "next/image";
import { getImagePath } from "@/lib/utils";

export default function BoBelmont() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-yellowish">Bo Belmont</span>
            </h2>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Bo Belmont is the visionary founder behind SmartDeeds, bringing
                together decades of experience in real estate investment and
                cutting-edge blockchain technology.
              </p>
              <p className="text-lg leading-relaxed">
                With a proven track record through Solslot.com, Bestia AI, and
                Belwood Investments, Bo has managed over $150M+ in assets and
                has been featured in leading publications including The Wall
                Street Journal and The Real Deal.
              </p>
              <p className="text-lg leading-relaxed">
                His vision for SmartDeeds is to democratize access to premium
                real estate investments through blockchain-secured membership
                tiers, starting with the iconic Project Malibu—the Tadao
                Ando-designed oceanfront property once owned by Kanye West.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#tiers"
                className="inline-block bg-yellowish text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Purchase Now
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={getImagePath("/images/bo-belmont.jpg")}
              alt="Bo Belmont"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
