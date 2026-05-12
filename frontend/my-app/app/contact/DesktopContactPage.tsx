import React from "react"
import Image from "next/image"

const DesktopContactPage = () => {
  return (
    <div className="w-full flex flex-col">

      {/* ---------- HERO SECTION ---------- */}

      <section className="relative w-full min-h-105 flex items-center justify-center text-center">
        <div className="relative z-10 max-w-5xl px-6 py-20 ">

          <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-6 text-gray-900">
            WRITE TO US
          </h1>

          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            At A R Luxury Management, we transform vision into global impact.
            Whether you're a brand, creator, or innovator in fashion,
            entertainment, fintech, wellness, or beyond, our team crafts
            tailored strategies to elevate your presence, partnerships, and
            potential.

            From concept to execution, we deliver precision, influence, and
            unparalleled access — curating opportunities that redefine
            industries.

            Let's collaborate. Contact us today to begin the conversation.
          </p>

        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}

      <section className="w-full px-6 pb-12 bg-white">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* ---------- LEFT SIDE ---------- */}

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
              Contact
            </p>

            <h2 className="text-4xl font-semibold text-black mb-6 leading-tight">
              Let's Build Something Exceptional Together
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8">
              Our team works closely with brands, creatives, entrepreneurs,
              and organizations seeking meaningful influence and elevated
              global positioning.

              Reach out to discuss partnerships, consulting, collaborations,
              media inquiries, or bespoke strategic solutions.
            </p>

            <div className="space-y-6">

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                  Email
                </p>

                <p className="text-lg text-black">
                  contact@arluxurymanagement.com
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                  Phone
                </p>

                <p className="text-lg text-black">
                  +1 (306) 000-0000
                </p>
              </div>

              <div>
                <p className="text-sm uppercase tracking-wider text-gray-400 mb-1">
                  Office
                </p>

                <p className="text-lg text-black">
                  Global Luxury & Strategic Partnerships
                </p>
              </div>

            </div>

          </div>

          {/* ---------- FORM ---------- */}

          <div className="bg-gray-50 rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">

            <form className="space-y-6">

              {/* NAME */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:border-black transition"
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
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:border-black transition"
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
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:border-black transition"
                />
              </div>

              {/* MESSAGE */}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-4 outline-none focus:border-black transition resize-none"
                />
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  )
}

export default DesktopContactPage