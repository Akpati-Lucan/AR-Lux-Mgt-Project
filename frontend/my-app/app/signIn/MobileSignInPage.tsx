import React from "react"
import Image from "next/image"
import Link from "next/link"

const MobileSignInPage = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col">

      {/* ---------- HERO SECTION ---------- */}

      <section className="relative w-full h-48 flex items-center justify-center text-center overflow-hidden">

        <div className="relative z-10 px-6">

          <p className="text-xs uppercase tracking-[0.3em] text-gray-900 mb-4">
            A R Luxury Management
          </p>

          <h1 className="text-3xl font-semibold text-black mb-4">
            Welcome Back
          </h1>

          <p className="text-sm text-gray-800 leading-relaxed">
            Access your personalized dashboard, partnerships,
            collaborations, and exclusive luxury management services.
          </p>

        </div>

      </section>

      {/* ---------- FORM SECTION ---------- */}

      <section className="flex-1 px-6 py-10">

        {/* ---------- HEADER ---------- */}

        <div className="mb-8 text-center">

          <h2 className="text-3xl font-semibold text-black mb-3">
            Sign In
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            Enter your credentials to continue.
          </p>

        </div>

        {/* ---------- FORM ---------- */}

        <form className="space-y-5">

          {/* EMAIL */}

          <div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black transition"
            />

          </div>

          {/* PASSWORD */}

          <div>

            <div className="flex items-center justify-between mb-2">

              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs text-gray-500 hover:text-black transition"
              >
                Forgot?
              </Link>

            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-gray-300 px-4 py-4 text-sm outline-none focus:border-black transition"
            />

          </div>

          {/* REMEMBER */}

          <div className="flex items-center">

            <label className="flex items-center gap-3 text-sm text-gray-600">

              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />

              Remember me

            </label>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-2xl text-sm uppercase tracking-wider hover:bg-gray-800 transition duration-300"
          >
            Sign In
          </button>

        </form>

        {/* ---------- FOOTER ---------- */}

        <div className="mt-8 text-center">

          <p className="text-sm text-gray-500">

            Don’t have an account?{" "}

            <Link
              href="/signup"
              className="text-black font-medium hover:underline"
            >
              Create Account
            </Link>

          </p>

        </div>

      </section>

    </div>
  )
}

export default MobileSignInPage