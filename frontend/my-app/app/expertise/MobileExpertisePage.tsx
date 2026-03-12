import React from "react"
import Image from "next/image"
import { cards } from "./cards"

const MobileExpertisePage = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ---------- HERO SECTION ---------- */}

        <section className="relative w-full h-105 flex items-center justify-center text-center">

            <Image
            src="/expertise/expertise-buildings.jpg"
            alt="Expertise background"
            fill
            className="object-cover brightness-50"
            priority
            />

            <div className="relative z-10 max-w-4xl px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6">
                    OUR EXPERTISE
                </h1>

                <p className="text-lg text-gray-200 leading-relaxed">
                    At A R Luxury Management, we redefine excellence through strategic
                    vision, cultural influence, and disruptive innovation. Our
                    multidisciplinary approach elevates brands and talent across
                    fashion, entertainment, retail, arts, fintech, green energy,
                    health, and wellness.
                </p>
            </div>
        </section>


        {/* ---------- INTRO TEXT SECTION ---------- */}
        <section className="max-w-6xl mx-auto px-6 py-16 text-center">
            <p className="text-gray-600 text-lg leading-relaxed">
            We don't just manage; we curate, connect, and catalyze. By leveraging
            our unparalleled network of industry leaders, creators, and pioneers,
            we craft bespoke strategies that shape markets, forge meaningful
            partnerships, and deliver unforgettable experiences.
            </p>
        </section>

      {/* ---------- EXPERTISE CARDS ---------- */}

      <section className="max-w-7xl px-6 pb-20">

        <div className=" flex flex-col gap-4">

            {cards.map((card, index) => (
                <div key={index} className="relative h-60 rounded-xl overflow-hidden">
                    <Image
                    src={card.background}
                    alt={card.title}
                    fill
                    className="object-cover brightness-50"
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
      </section>

    </div>
  )
}

export default MobileExpertisePage