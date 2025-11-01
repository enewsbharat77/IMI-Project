"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== TOP LAYER: Logos + Title ===== */}
        <div className="flex items-center justify-between h-32 sm:h-36 md:h-44 lg:h-48">
          
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
              alt="Left Logo"
              width={200}
              height={150}
              className="object-contain w-20 sm:w-28 md:w-36 lg:w-44 h-auto"
            />
          </div>

          {/* Center Text */}
          <div className="flex-1 text-center px-2">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-6xl font-bold text-orange-600">
              <i>Innovative Media Institute</i>
            </h1>
          </div>

          {/* Right Logo */}
          <div className="flex-shrink-0">
            <Image
              src="https://enewsbharat.com/wp-content/uploads/2025/08/logo.jpg"
              alt="Right Logo"
              width={250}
              height={180}
              className="object-contain w-24 sm:w-32 md:w-40 lg:w-48 h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
