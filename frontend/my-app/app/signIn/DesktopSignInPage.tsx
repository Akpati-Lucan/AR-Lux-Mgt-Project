import React from "react"
import Image from "next/image"
import Link from "next/link"

const DesktopSignInPage = () => {
  return (
    <div className="w-full min-h-screen flex">

      {/* ---------- LEFT SECTION ---------- */}

      <div className="relative hidden lg:flex lg:w-1/2 items-center justify-center overflow-hidden">

        <div className="relative z-10 max-w-lg px-10">

          <p className="text-sm uppercase tracking-[0.3em] text-gray-900 mb-5">
            A R Luxury Management
          </p>

          <h1 className="text-5xl font-semibold text-black leading-tight mb-6">
            Welcome Back
          </h1>

          <p className="text-lg text-gray-800 leading-relaxed">
            Access your personalized dashboard, partnerships,
            collaborations, and exclusive luxury management services
            through your secure account portal.
          </p>

        </div>

      </div>

      {/* ---------- RIGHT SECTION ---------- */}

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8 py-16">

        <div className="w-full max-w-md">

          {/* ---------- HEADER ---------- */}

          <div className="mb-10">

            <h2 className="text-4xl font-semibold text-black mb-3">
              Sign In
            </h2>

            <p className="text-gray-500 leading-relaxed">
              Enter your credentials to access your account.
            </p>

          </div>

          {/* ---------- FORM ---------- */}

          <form className="space-y-6">

            {/* EMAIL */}

            <div>

              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-black transition"
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
                  className="text-sm text-gray-500 hover:text-black transition"
                >
                  Forgot Password?
                </Link>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-black transition"
              />

            </div>

            {/* REMEMBER */}

            <div className="flex items-center justify-between">

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

            <p className="text-gray-500 text-sm">

              Don’t have an account?{" "}

              <Link
                href="/signup"
                className="text-black font-medium hover:underline"
              >
                Create Account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default DesktopSignInPage