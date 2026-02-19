"use client";
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import AboutSlideShow from './AboutSlideShow';

type CounterProps = {
  target: number
  label: string
}



const Counter: React.FC<CounterProps> = ({ target, label }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 3000
    const increment = target / (duration / 20)

    const counter = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(counter)
      } else {
        setCount(Math.ceil(start))
      }
    }, 20)

    return () => clearInterval(counter)
  }, [target])

  return (
    <div className="text-center">
      <h2 className="text-5xl text-white">
        {count}
      </h2>
      <p className="mt-2 text-gray-300 uppercase tracking-wider text-sm">
        {label}
      </p>
    </div>
  )
}

const About = () => {
  return (
    <div className="w-full">

      {/* ---------- Intro Section ---------- */}
      <section className="mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl mb-8">
          ABOUT ARLM
        </h1>

        <p className="text-black leading-relaxed text-xl">
          AR Luxury Management (ARLM) is a globally recognized leader in luxury brand
          strategy and talent representation, seamlessly connecting the worlds of
          fashion, entertainment, finance, health, and innovation.
          <br /><br />
          With a legacy of shaping cultural narratives, we empower visionary brands
          and influential individuals to redefine their industries through strategic
          partnerships, compelling storytelling, and forward-thinking innovation.
          <br /><br />
          Our expertise spans fashion, entertainment, retail, arts, fintech, green
          energy, and wellness uniting elite talent with transformative opportunities.
          Through bespoke management, brand development, and global market expansion,
          we cultivate enduring influence and sustainable growth.
          <br /><br />
          With a presence across five continents, our team of agents, strategists,
          and cultural connectors champions diversity, sustainability, and equitable
          commerce as the foundation of modern luxury.
          <br /><br />
          <span className="font-semibold text-white">
            At ARLM, progress defines prestige.
          </span>
        </p>
      </section>

      {/* ---------- Stats Section with Background ---------- */}
      <section className="relative w-full h-75 flex items-center justify-center">

        {/* Background Image */}
        <Image
          src="/about-buildings.jpg"
          alt="Luxury brand background"
          fill
          className="object-cover brightness-50"
          priority
        />

        {/* Stats Content */}
        <div className="relative z-10 grid grid-cols-4 gap-10 px-6">
          <Counter target={10} label="Years in Industry" />
          <Counter target={500} label="Projects Completed" />
          <Counter target={100} label="Satisfied Clients" />
          <Counter target={50} label="Countries Reached" />
        </div>
      </section>

      <section>
        <h1 className="text-4xl mb-8">
          OUR CLIENTS
        </h1>
        <h2>WE WORK WITH INDUSTRY LEADERS IN MULTIPLE SECTORS INCLUDING</h2>
        <AboutSlideShow />
      </section>

    </div>
  )
}

export default About
