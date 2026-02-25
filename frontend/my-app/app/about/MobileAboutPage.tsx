"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import AboutSlideShow from './MobileAboutSlideShow';

type CounterProps = {
  target: number;
  label: string;
};

const Counter: React.FC<CounterProps> = ({ target, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const increment = target / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl text-white">{count}</h2>
      <p className="mt-1 text-gray-300 uppercase tracking-wider text-xs">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <div className="w-full">

      {/* ---------- Intro Section ---------- */}
      <section className="w-full mx-auto px-6 py-12 text-center">

        {/* Section Heading */}
        <h1 className="text-2xl font-light tracking-wide mb-4">
          ABOUT ARLM
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto uppercase tracking-[0.3em] text-sm mb-8">
          At ARLM, progress defines prestige.
        </p>

        {/* Divider Line */}
        <div className="w-16 h-px bg-black mx-auto mb-8"></div>

        <div className="max-w-2xl mx-auto text-center">
          
          <p className="text-xl leading-loose text-neutral-700 font-light tracking-wide">
            AR Luxury Management (ARLM) is a globally recognized leader in luxury brand
            strategy and talent representation, seamlessly connecting the worlds of
            fashion, entertainment, finance, health, and innovation.
          </p>

          <p className="mt-4 text-xl leading-loose text-neutral-700 font-light tracking-wide">
            With a legacy of shaping cultural narratives, we empower visionary brands
            and influential individuals to redefine their industries through strategic
            partnerships, compelling storytelling, and forward-thinking innovation.
          </p>

          <p className="mt-4 text-xl leading-loose text-neutral-700 font-light tracking-wide">
            Our expertise spans fashion, entertainment, retail, arts, fintech, green
            energy, and wellness uniting elite talent with transformative opportunities.
            Through bespoke management, brand development, and global market expansion,
            we cultivate enduring influence and sustainable growth.
          </p>

          <p className="mt-4 text-xl leading-loose text-neutral-700 font-light tracking-wide">
            With a presence across five continents, our team of agents, strategists,
            and cultural connectors champions diversity, sustainability, and equitable
            commerce as the foundation of modern luxury.
          </p>
        </div>
      </section>

      {/* ---------- Stats Section with Background ---------- */}
        <div className="max-w-7xl mx-auto"> 
            <section className="relative w-full h-90 flex flex-col items-center justify-center mb-12">

                {/* Background Image */}
                <Image
                src="/about-buildings.jpg"
                alt="Luxury brand background"
                fill
                className="object-cover brightness-50"
                priority
                />

                {/* Stats Content */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-xs">
                <Counter target={10} label="Years in Industry" />
                <Counter target={500} label="Projects Completed" />
                <Counter target={100} label="Satisfied Clients" />
                <Counter target={50} label="Countries Reached" />
                </div>
            </section>
        </div>


      {/* ---------- Clients Section ---------- */}
      <section className="w-full py-12 text-center">

         {/* Section Heading */}
        <h1 className="text-2xl font-light tracking-wide mb-4">
          OUR CLIENTS
        </h1>

        {/* Subheading */}
        <p className="max-w-xs mx-auto uppercase tracking-[0.3em] text-sm mb-8">
          We work with industry leaders across fashion, fintech,
          health, tourism and emerging global markets
        </p>

        {/* Divider Line */}
        <div className="w-16 h-px bg-black mx-auto mb-8"></div>

        {/* Slideshow */}
        <div className="w-full mx-auto">
          <AboutSlideShow />
        </div>
      </section>

    </div>
  );
};

export default About;