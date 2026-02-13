import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-4 py-6">
      <div className="flex flex-col items-center text-center gap-4">
        
        {/* Copyright */}
        <p className="text-sm">
          © 2026 A R LUXURY MANAGEMENT INC. ALL RIGHTS RESERVED
        </p>

        {/* Links */}
        <div className="flex flex-col gap-2 text-gray-400 text-sm">
          <Link href="/privacy-policy" className="hover:text-white transition">
            PRIVACY POLICY
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-white transition">
            TERMS AND CONDITIONS
          </Link>
          <Link href="/careers" className="hover:text-white transition">
            CAREERS
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
