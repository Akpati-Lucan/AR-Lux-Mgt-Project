"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

const MobileHeader: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/expertise", label: "Expertise" },
    { href: "/network", label: "Network" },
    { href: "/contact", label: "Contact" },
    { href: "/flex-pay", label: "Flex Pay" },
    { href: "/signin", label: "Sign In" },
  ];

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <>
    <div className='h-21 bg-gray-900 flex gap-4 items-center justify-between'>
        {/* Logo */}
        <div className="bg-gradient-to-r from-purple-200 via-purple-100 to-white p-2  h-21">
          <Link href="/">
            <Image src={"/AR-lux-mgmt-logo.png"} alt="AR Logo" width={120} height={40} priority />
          </Link>
        </div>
      
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="p-2 bg-gray-800 text-purple-400 hover:bg-gray-700 mr-4 rounded-md"
      >
        &#9776; {/* Hamburger icon */}
      </button>



       {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300
          ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={closeSidebar}
      />

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
          z-50
        `}
      >
        {/* Close button */}
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="bg-gradient-to-r from-purple-200 via-purple-100 to-white p-2 rounded-md h-17">
            <Link href="/">
              <Image src={"/AR-lux-mgmt-logo.png"} alt="AR Logo" width={90} height={30} priority />
            </Link>
          </div>
          <button onClick={closeSidebar}
            className="p-1 bg-gray-800 text-purple-400 hover:bg-gray-700 text-2xl rounded-md pb-2">
            &times;
          </button>
        </div>
          
        <nav className="flex flex-col gap-4 text-purple-400 text-lg p-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-white"
              onClick={closeSidebar} >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
    {/* Divider */}
    <div className='h-1.5 bg-purple-600 flex'></div>
    </>
  );
};

export default MobileHeader;
