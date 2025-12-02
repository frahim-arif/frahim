"use client";

import React, { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="shadow-lg w-full sticky top-0 z-50 
      bg-gradient-to-r from-[#0e1538] via-[#00ccff] to-[#d400d4] text-white">

      {/* Top Bar */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">

        {/* Logo + Company Name */}
        <a href="/" className="flex items-center space-x-3">
          <img 
            src="../images/logo.jpeg" 
            className="h-10 w-10 rounded-full border-2 border-white shadow-md" 
            alt="Logo" 
          />
          <span className="text-xl font-bold tracking-wide drop-shadow-md">
            WebCore
          </span>
        </a>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:+919058596626"
            className="text-sm text-white/90 hover:text-yellow-300 transition font-semibold"
          >
            +91 90585 96626
          </a>

          <a
            href="#"
            className="px-4 py-2 bg-white text-black rounded-lg font-semibold 
            hover:bg-yellow-300 transition shadow-md"
          >
            Login
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="text-white focus:outline-none"
          >
            {openMenu ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:block">
        <ul className="flex justify-center space-x-12 py-3 
          text-white font-medium text-lg">
          <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
          <li><a href="/checkout" className="hover:text-yellow-300 transition">About</a></li>
          <li><a href="#" className="hover:text-yellow-300 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {openMenu && (
        <nav className="md:hidden bg-[#0e1538]/90 text-white px-6 pb-4 shadow-inner">
          <ul className="flex flex-col space-y-4 font-medium">
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/checkout" className="hover:text-yellow-300">About</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>

            <hr className="border-white/30" />

            <li>
              <a href="tel:+919058596626" className="hover:text-yellow-300">
                +91 90585 96626
              </a>
            </li>

            <li>
              <a
                href="#"
                className="px-4 py-2 bg-white text-black rounded-lg font-semibold 
                hover:bg-yellow-300 transition shadow-md inline-block"
              >
                Login
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
