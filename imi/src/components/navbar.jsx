"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [connectopen, setconnectopen] = useState(false);

  return (
    <nav className="py-3 bg-[#ff782f] relative z-[9999] shadow-md">
      {/* ===== Desktop / Tablet Navbar ===== */}
      <div className="hidden lg:flex items-center justify-between py-2 px-4 lg:px-6">

        {/* Center Menu */}
        <div className="flex-1 flex justify-center space-x-5 lg:space-x-8 relative flex-nowrap">

          <a href="/" className="text-white font-medium hover:text-yellow-200 whitespace-nowrap">
            Home
          </a>

          {/* About Dropdown */}
          <div className="group relative whitespace-nowrap">
            <button className="flex items-center space-x-1 text-white font-medium hover:text-yellow-200">
              <span>About Us</span>
              <ChevronDown size={18} className="mt-0.5" />
            </button>

            <div
              className="absolute left-0 top-full bg-white shadow-xl rounded-lg mt-2 w-48 lg:w-56 text-gray-800 
              opacity-0 group-hover:opacity-100 group-hover:visible invisible 
              transition-all duration-300 ease-in-out z-[99999]"
            >
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100">About INN</a>
              <a href="/about-imi" className="block px-4 py-2 hover:bg-gray-100">About IMI</a>
              <a href="/dean-mess" className="block px-4 py-2 hover:bg-gray-100">Dean Message</a>
              <a href="/chairman" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">Chairman Message</a>
            </div>
          </div>

          {/* Placement Dropdown */}
          <div className="group relative whitespace-nowrap">
            <button className="flex items-center space-x-1 text-white font-medium hover:text-yellow-200">
              <span>Placement</span>
              <ChevronDown size={18} className="mt-0.5" />
            </button>

            <div
              className="absolute left-0 top-full bg-white shadow-xl rounded-lg mt-2 w-52 lg:w-64 text-gray-800 
              opacity-0 group-hover:opacity-100 group-hover:visible invisible 
              transition-all duration-300 ease-in-out z-[99999]"
            >
              <a href="/placement" className="block px-4 py-2 hover:bg-gray-100">IMI Placements</a>
              <a href="/addmission" className="block px-4 py-2 hover:bg-gray-100">Admission Procedure</a>
              <a href="/fess" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">Fee Structure 2025–26</a>
            </div>
          </div>

          <a href="/courses" className="text-white font-medium hover:text-yellow-200 whitespace-nowrap">
            Courses
          </a>

          <a href="/faculty" className="text-white font-medium hover:text-yellow-200 whitespace-nowrap">
            Faculty
          </a>

          <a href="/faqs" className="text-white font-medium hover:text-yellow-200 whitespace-nowrap">
            FAQ'S
          </a>

          {/* IMI Connect */}
          <div className="group relative whitespace-nowrap">
            <button className="flex items-center space-x-1 text-white font-medium hover:text-yellow-200">
              <span>IMI Connect</span>
              <ChevronDown size={18} className="mt-0.5" />
            </button>

            <div
              className="absolute left-0 top-full bg-white shadow-xl rounded-lg mt-2 w-48 lg:w-64 text-gray-800 
              opacity-0 group-hover:opacity-100 group-hover:visible invisible 
              transition-all duration-300 ease-in-out z-[99999]"
            >
              <a href="/alumni" className="block px-4 py-2 hover:bg-gray-100">IMI Alumni</a>
              <a href="/corporate" className="block px-4 py-2 hover:bg-gray-100">Corporate Connect</a>
            </div>
          </div>

          <a href="/contact" className="text-white font-medium hover:text-yellow-200 whitespace-nowrap">
            Contact Us
          </a>
        </div>

        {/* Application Form Button */}
        <div className="flex-shrink-0">
          <a
            href="/form"
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition-all"
          >
            Application Form
          </a>
        </div>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <a
          href="/form"
          className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-800 transition"
        >
          Application Form
        </a>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      {menuOpen && (
        <div className="lg:hidden bg-[#ff782f] px-6 pb-3 space-y-2 text-white font-medium">
          <a href="/" className="block py-2 hover:text-yellow-200">
            Home
          </a>

          {/* About Dropdown */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full py-2 hover:text-yellow-200"
            >
              <span>About Us</span>
              <ChevronDown size={18} className={`transition-transform ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>
            {aboutOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <a href="/about" className="block py-1.5 text-sm hover:text-yellow-200">About INN</a>
                <a href="/about-imi" className="block py-1.5 text-sm hover:text-yellow-200">About IMI</a>
                <a href="/dean-mess" className="block py-1.5 text-sm hover:text-yellow-200">Dean Message</a>
                <a href="/chairman" className="block py-1.5 text-sm hover:text-yellow-200">Chairman Message</a>
              </div>
            )}
          </div>

          {/* Placement Dropdown */}
          <div>
            <button
              onClick={() => setPlacementOpen(!placementOpen)}
              className="flex items-center justify-between w-full py-2 hover:text-yellow-200"
            >
              <span>Placement</span>
              <ChevronDown size={18} className={`transition-transform ${placementOpen ? 'rotate-180' : ''}`} />
            </button>
            {placementOpen && (
              <div className="pl-4 space-y-1 mt-1">
                <a href="/placement" className="block py-1.5 text-sm hover:text-yellow-200">IMI Placements</a>
                <a href="/addmission" className="block py-1.5 text-sm hover:text-yellow-200">Admission Procedure</a>
                <a href="/fess" className="block py-1.5 text-sm hover:text-yellow-200">Fee Structure 2025–26</a>
              </div>
            )}
          </div>

          <a href="/courses" className="block py-2 hover:text-yellow-200">
            Courses
          </a>

          <a href="/faculty" className="block py-2 hover:text-yellow-200">
            Faculty
          </a>

          <a href="/faqs" className="block py-2 hover:text-yellow-200">
            FAQ'S
          </a>

          {/* IMI Connect Dropdown */}
          <div>
            <button
              onClick={() => setconnectopen(!connectopen)}
              className="flex items-center justify-between w-full py-2 hover:text-yellow-200"
            >
              <span>IMI Connect</span>
              <ChevronDown size={18} className={`transition-transform ${connectopen ? 'rotate-180' : ''}`} />
            </button>
            {connectopen && (
              <div className="pl-4 space-y-1 mt-1">
                <a href="/alumni" className="block py-1.5 text-sm hover:text-yellow-200">IMI Alumni</a>
                <a href="/corporate" className="block py-1.5 text-sm hover:text-yellow-200">Corporate Connect</a>
              </div>
            )}
          </div>

          <a href="/contact" className="block py-2 hover:text-yellow-200">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
