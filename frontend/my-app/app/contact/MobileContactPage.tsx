import React from "react"
import Image from "next/image"

const MobileContactPage = () => {
  return (
    <div className="w-full flex flex-col bg-white">

      {/* ---------- HERO SECTION ---------- */}

      <section className="relative w-full min-h-80 flex items-center justify-center text-center">

        <div className="relative z-10 px-5 py-16">

          <h1 className="text-3xl font-semibold tracking-wide mb-5 text-gray-900">
            WRITE TO US
          </h1>

          <p className="text-sm text-gray-800 leading-relaxed">
            At A R Luxury Management, we transform vision into global
            impact. Whether you're a brand, creator, or innovator in
            fashion, entertainment, fintech, wellness, or beyond, our
            team crafts tailored strategies to elevate your presence,
            partnerships, and potential.

            Let's collaborate and create meaningful influence together.
          </p>

        </div>

      </section>

      {/* ---------- CONTACT CONTENT ---------- */}

      <section className="w-full px-5 pb-14">

        {/* ---------- INTRO ---------- */}

        <div className="mb-12">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">
            Contact
          </p>

          <h2 className="text-3xl font-semibold text-black leading-tight mb-5">
            Let's Build Something Exceptional
          </h2>

          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Reach out to discuss partnerships, consulting,
            collaborations, media inquiries, or bespoke strategic
            solutions tailored to your vision.
          </p>

          <div className="space-y-5">

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                Email
              </p>

              <p className="text-base text-black wrap-break-word">
                contact@arluxurymanagement.com
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                Phone
              </p>

              <p className="text-base text-black">
                +1 (306) 000-0000
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                Office
              </p>

              <p className="text-base text-black">
                Global Luxury & Strategic Partnerships
              </p>
            </div>

          </div>

        </div>

        {/* ---------- FORM ---------- */}

        <div className="bg-gray-50 rounded-3xl p-6 border border-gray-100 shadow-sm">

          <form className="space-y-5">

            {/* NAME */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-black transition"
              />

            </div>

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-black transition"
              />

            </div>

            {/* PHONE */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-black transition"
              />

            </div>

            {/* MESSAGE */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell us about your project or inquiry..."
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-4 text-sm outline-none focus:border-black transition resize-none"
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-2xl text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
            >
              Submit Inquiry
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

export default MobileContactPage