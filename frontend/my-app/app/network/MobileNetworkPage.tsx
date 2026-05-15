import React from "react"
import Image from "next/image"
import { cards } from "./cards"

const MobileNetworkPage = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ---------- HERO SECTION ---------- */}

        <section className="w-full mx-auto px-6 py-12 text-center">

            {/* Section Heading */}
            <h1 className="text-2xl font-light tracking-wide mb-4">
                OUR NETWORK
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto uppercase tracking-[0.3em] text-sm mb-8">
                Where innovation, culture, and global influence connect.
            </p>

            {/* Divider Line */}
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>

            <div className="max-w-2xl mx-auto text-center">

                <p className="text-xl leading-loose text-neutral-700 font-light tracking-wide">
                AR Luxury Management (ARLM) operates through six specialized suites,
                each strategically designed to help brands harness culture, innovation,
                and global influence to create high-impact products, experiences,
                and transformative programs.
                </p>

                <p className="mt-4 text-xl leading-loose text-neutral-700 font-light tracking-wide">
                Our curated ecosystem connects top-tier professionals across fashion,
                entertainment, media, wellness, technology, finance, and creative
                strategy through a proprietary digital platform built for seamless
                global collaboration.
                </p>

                <p className="mt-4 text-xl leading-loose text-neutral-700 font-light tracking-wide">
                By embracing an agile and project-driven structure, we deliver lean,
                efficient partnerships while maintaining our commitment to transparency,
                equity, sustainability, and cultural responsibility.
                </p>

                <p className="mt-4 text-xl leading-loose text-neutral-700 font-light tracking-wide">
                More than a traditional network, ARLM is a dynamic collective where
                luxury meets adaptability empowering visionary brands and talent to
                build meaningful influence, sustainable growth, and measurable success
                on a global scale.
                </p>

            </div>
        </section>

      {/* ---------- Network CARDS ---------- */}

      <section className="max-w-7xl px-6 py-20">

        <div className=" flex flex-col gap-4">

            {cards.map((card, index) => (
                  <div
                    key={index}
                    className={
                      `
                      group
                      relative
                      bg-gray-900
                      border border-gray-800
                      rounded-3xl
                      p-8
                      transition-all duration-500
                      hover:-translate-y-1
                      hover:shadow-2xl
                      hover:border-gray-700
                      overflow-hidden
                    `
                    }
                  >
            
                    {/* Gradient Accent */}
                    <div className="
                      absolute top-0 left-0 w-full h-1
                      bg-linear-to-r from-black via-gray-400 to-gray-200
                    " />
            
                    {/* Number */}
                    <div className="text-sm tracking-[0.3em] text-gray-400 mb-6">
                      0{index + 1}
                    </div>
            
                    {/* Title */}
                    <h3 className="
                      text-2xl
                      font-light
                      tracking-wide
                      text-white
                      mb-4
                    ">
                      {card.title}
                    </h3>
            
                    {/* Description */}
                    <p className="
                      text-gray-300
                      leading-loose
                      text-base
                      font-light
                    ">
                      {card.about}
                    </p>
            
                    {/* Hover Circle */}
                    <div className="
                      absolute -bottom-10 -right-10
                      w-32 h-32
                      rounded-full
                      bg-gray-800
                      opacity-0
                      group-hover:opacity-100
                      transition duration-500
                    " />
            
                  </div>
                ))}

        </div>
      </section>

    </div>
  )
}

export default MobileNetworkPage