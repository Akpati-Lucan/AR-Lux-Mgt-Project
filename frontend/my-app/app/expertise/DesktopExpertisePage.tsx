import React from "react"
import Image from "next/image"
import { cards } from "./cards"

const DesktopExpertisePage = () => {
  return (
    <div className="w-full flex flex-col">

        {/* ---------- HERO SECTION ---------- */}

        <section className="w-full mx-auto px-6 py-12 text-center">

            {/* Section Heading */}
            <h1 className="text-2xl font-light tracking-wide mb-4">
                OUR EXPERTISE
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl mx-auto uppercase tracking-[0.3em] text-sm mb-8">
                Redefining excellence through strategy, culture, and innovation.
            </p>

            {/* Divider Line */}
            <div className="w-16 h-px bg-black mx-auto mb-8"></div>

            <div className="max-w-2xl mx-auto text-center">

                <p className="text-xl leading-loose text-neutral-700 font-light tracking-wide">
                At AR Luxury Management (ARLM), we redefine modern excellence through
                strategic vision, cultural influence, and forward-thinking innovation
                that empowers brands and talent to lead with purpose and distinction.
                </p>

                <p className="mt-8 text-lg leading-loose text-neutral-700 font-light tracking-wide">
                We don't just manage; we curate, connect, and catalyze. By leveraging
                our unparalleled network of industry leaders, creators, and pioneers,
                we craft bespoke strategies that shape markets, forge meaningful
                partnerships, and deliver unforgettable experiences.
                </p>

            </div>
        </section>

      {/* ---------- EXPERTISE CARDS ---------- */}

      <section className="max-w-10xl px-6 pb-20">

        <div className="grid grid-cols-2 gap-8">

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

export default DesktopExpertisePage