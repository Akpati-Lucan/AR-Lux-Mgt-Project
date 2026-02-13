import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © 2026 A R LUXURY MANAGEMENT INC. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>

          <Link href="/terms-and-conditions" className="hover:text-white transition-colors duration-200">
            Terms & Conditions
          </Link>

          <Link href="/careers" className="hover:text-white transition-colors duration-200">
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
