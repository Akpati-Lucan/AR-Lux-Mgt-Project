"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

type Slide = {
  title: string
  background: string
  clients: {
    name: string
    image: string
    url: string
  }[]
}

const slides: Slide[] = [
  {
    title: "Fashion",
    background: "/about-clothing.jpg",
    clients: [
      { name: "Hugo Boss", image: "/about-hugo-boss.jpg", url: "https://www.hugoboss.com/ca/en/home" },
      { name: "Macy's", image: "/about-macy.jpg", url: "https://www.macys.com" },
      { name: "Montblanc", image: "/about-montblanc.jpg", url: "https://www.montblanc.com" },
      { name: "Fashion Art Toronto", image: "/about-fat.jpg", url: "https://fashionarttoronto.com" },
    ],
  },
  {
    title: "Fintech",
    background: "/about-atm.jpg",
    clients: [
      { name: "CIBC", image: "/about-cibc.jpg", url: "https://www.cibc.com" },
      { name: "Flex Pay", image: "/flex-pay-logo.png", url: "/flex-pay" },
    ],
  },
  {
    title: "Health & Wellness",
    background: "/about-tea-bags.jpg",
    clients: [
      { name: "Kyungnam Pharm", image: "/about-kyungnam.jpg", url: "https://kyungnampharm.com" },
      { name: "Green Energy Tec", image: "/about-green-energy.jpg", url: "https://greenenergytec.ca" },
    ],
  },
  {
    title: "Tourism",
    background: "/about-palm-tree.jpg",
    clients: [
      { name: "PRIVE Jetset", image: "/about-prive-jetset.jpg", url: "https://prive-jetset.com" },
      { name: "WNBA", image: "/about-wnba.jpg", url: "https://wnba.com" },
      { name: "Toronto International Farm Festival", image: "/about-tiff.jpg", url: "https://tiff.net" },
    ],
  },
]

const AboutSlideShow = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  /* Optional Auto Slide */
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const slide = slides[current]

  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black text-white">

      {/* Background Image */}
      <Image
        src={slide.background}
        alt={slide.title}
        fill
        className="object-cover transition-opacity duration-700"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-wide">
          {slide.title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {slide.clients.map((client, index) => (
            <Link
              key={index}
              href={client.url}
              target="_blank"
              className="flex flex-col items-center group"
            >
              <div className="relative w-28 h-16 md:w-36 md:h-20">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="mt-3 text-sm uppercase tracking-wider text-gray-300 group-hover:text-white">
                {client.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md px-4 py-2 rounded-full"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-md px-4 py-2 rounded-full"
      >
        →
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default AboutSlideShow
