import React from "react"
import Image from "next/image"
import { cards } from "./cards"

const DesktopNetworkPage = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ---------- HERO SECTION ---------- */}

        <section className="relative w-full h-105 flex items-center justify-center text-center">

            <Image
            src="/network/magazine.jpg"
            alt="Network background"
            fill
            className="object-cover brightness-60"
            priority
            />

            <div className="relative z-10 max-w-4xl px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6">
                    OUR NETWORK
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed">
                    A R Luxury Management (ARLM) operates through six specialized suites, each designed to help brands harness culture, innovation, and global influence to create high-impact products and programs.
                    We've built a curated, agile ecosystem of top-tier professionals, connected via our proprietary digital platform. 
                    This model ensures lean, efficient collaboration project by project while upholding our commitment to transparency, equity, and cultural responsibility.
                    More than a network, we're a dynamic collective where luxury meets adaptability, and where every partnership is engineered for measurable, meaningful success.
                </p>
            </div>
        </section>

      {/* ---------- Network CARDS ---------- */}

        <div className="max-w-10xl px-6 py-20 justify-center">

        <div className="grid grid-cols-2 gap-8">

            {cards.map((card, index) => (
                <div key={index} className="relative h-60 rounded-xl overflow-hidden">
                    <Image
                    src={card.background}
                    alt={card.title}
                    fill
                    className="object-cover brightness-60"
                    />

                    <div className="absolute bottom-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-3">
                            {card.title}
                        </h3>

                        <p className="text-sm text-gray-200 leading-relaxed">
                            {card.about}
                        </p>
                    </div>

                </div>
                ))}

        </div>

        </div>

    </div>
  )
}

export default DesktopNetworkPage