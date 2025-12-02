import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-r from-[#d400d4] via-[#00ccff] to-[#0e1538] text-white mt-10 rounded-t-2xl shadow-lg">
        <div className="w-full max-w-screen-xl mx-auto p-6 md:py-10">
          
          {/* Top Section */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold drop-shadow-md tracking-wide">
              WebCore
            </h2>

            <ul className="flex flex-wrap items-center mt-4 sm:mt-0 space-x-6 text-sm font-medium text-white/90">
              <li>
                <a href="#" className="hover:text-yellow-300 transition">About</a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300 transition">Privacy Policy</a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300 transition">Licensing</a>
              </li>

              <li>
                <a href="#" className="hover:text-yellow-300 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Divider */}
          <hr className="my-6 border-white/30" />

          {/* Bottom Section */}
          <span className="block text-sm text-white/80 text-center">
            © 2025 <span className="font-semibold">WebCore</span>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
