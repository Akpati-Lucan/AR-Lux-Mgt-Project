"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { slides } from "./slides"

const AboutSlideShow = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[current]

  return (
    <section className="relative w-full h-120 text-white">

      {/* Background Image */}
      <Image
        src={slide.background}
        alt={slide.title}
        fill
        sizes="100vw"
        className="brightness-50"
        priority
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">

        <h2 className="text-6xl mb-10">
          {slide.title}
        </h2>

        <div className="flex gap-16">
          {slide.clients.map((client, index) => (
            <Link
              key={index}
              href={client.url}
              target="_blank"
              className="flex flex-col items-center group"
            >
              <div className="relative w-28 h-16">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="group-hover:scale-110"
                />
              </div>
              <span className="mt-3 text-sm uppercase text-gray-300 group-hover:text-white  group-hover:scale-110">
                {client.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide}
        className="absolute z-20 left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 px-4 py-2 rounded-full">
        &lt;
      </button>

      <button onClick={nextSlide}
        className="absolute z-20 right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 px-4 py-2 rounded-full">
        &gt;
      </button>

      {/* Dots */}
      <div className="absolute z-20 bottom-6 w-full flex justify-center gap-3">
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
