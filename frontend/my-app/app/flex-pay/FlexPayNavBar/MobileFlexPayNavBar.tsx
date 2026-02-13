"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const MobileFlexPayNavBar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
  { href: "/flex-pay/flex-pay-direct", label: "Flex Pay Direct" },
  { href: "/flex-pay/flex-pay-banking", label: "Flex Pay Banking" },
  { href: "/flex-pay/flex-pay-synergy", label: "Flex Pay Synergy" },
  { href: "/flex-pay/FAQ", label: "FAQ" },
  { href: "/flex-pay/business-support", label: "Business Support" },
  { href: "/flex-pay/dev-documents", label: "Dev Documents" },
  { href: "/flex-pay/contact", label: "Contact Us" },
  { href: "/flex-pay/payment-directory", label: "Payment Directory" },
  { href: "/flex-pay/about", label: "About" },
  { href: "/flex-pay/login", label: "Login" },
  { href: "/flex-pay/signin", label: "Sign In" },
];


  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>

     <div className="relative">
     {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="p-2 mt-2 bg-gray-800 text-purple-400 hover:bg-gray-700 mr-4 rounded-r-md"
      >
        &gt; {/* > icon */}
      </button>
      
       {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={closeSidebar}
      />

      {/* Sliding Sidebar from left to right */}
        <div
        className={`absolute top-0 left-0 h-full w-40 bg-gray-900 shadow-lg
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            z-50
        `}
        >
      

        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <button onClick={closeSidebar}
            className="p-1 bg-gray-800 text-purple-400 hover:bg-gray-700 text-2xl rounded-md pb-2">
            &times;
          </button>
        </div>
          
        <nav className="flex flex-col gap-3 text-purple-400 text-base p-4">
          {links.map((link) => (
            <Link
              key={link.href + link.label} // unique key
              href={link.href}
              className="hover:text-white"
              onClick={closeSidebar} >
              {link.label}
            </Link>
          ))}
        </nav>
        </div>
      </div>
    </>
  );
};

export default MobileFlexPayNavBar;
