"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b-2 border-orange-500 top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ==== Main Header Row ==== */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4 md:gap-0">

          {/* LEFT SIDE — LOGOS */}
          <div className="flex items-center space-x-4 w-full md:w-auto justify-center md:justify-start">
            {/* Logo 1 */}
            <Link href="/">
              <Image
                src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
                alt="IMI Left Logo"
                width={150}
                height={120}
                className="object-contain w-24 sm:w-28 md:w-40"
              />
            </Link>


            {/* Divider */}
            <div className="hidden md:flex flex-col items-center">
              <div className="w-px h-[70px] bg-gradient-to-b from-orange-400 via-orange-600 to-orange-400"></div>
              <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
            </div>

            {/* Logo 2 */}
            <Link href='https://innmedia.in/'>
              <Image
                src="/logo/logo2.png"
                alt="Logo 2"
                width={140}
                height={80}
                className="object-contain w-20 sm:w-28 md:w-28"
              />
            </Link>

          </div>

          {/* RIGHT SIDE — ISO ABOVE TITLE + PARTNER LOGO */}
          <div className="flex flex-col md:flex-row items-center md:space-x-8 w-full md:w-auto text-center md:text-left">

            {/* TEXT BLOCK (ISO TOP, TITLE BELOW) */}
            <div className="flex flex-col items-center md:items-start">

              {/* ISO Certified Above Institute Name */}
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 border-2 border-orange-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm sm:text-base font-semibold text-gray-700">ISO Certified</p>
              </div>

              {/* Title Below */}
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-orange-600 whitespace-nowrap">
                Innovative Media Institute
              </h1>
            </div>

            {/* Partner Logo */}
            <div className="bg-gray-50 px-4 py-2 mt-3 md:mt-0 rounded-md border border-gray-200 hover:border-orange-300 hover:shadow-md">
              <Image
                src="/logo_dark.png"
                alt="partner logo"
                width={220}
                height={60}
                className="object-contain w-36 sm:w-44 md:w-56"
              />
            </div>

          </div>

        </div>
      </div>
    </header>
  );
}