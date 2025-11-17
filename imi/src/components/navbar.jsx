"use client";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [placementOpen, setPlacementOpen] = useState(false);
  const [connectopen,setconnectopen]= useState(false);

  return (
    <nav className="py-3 bg-[#ff782f] relative z-[9999] shadow-md">
      {/* ===== Desktop Navbar ===== */}
      <div className="hidden md:flex items-center justify-between py-3 px-6">
        <div className="flex-1 flex justify-center space-x-8 relative">
          <a href="/" className="text-white font-medium hover:text-yellow-200">
            Home
          </a>

          {/* ===== About Us Dropdown ===== */}
          <div className="group relative">
            <button className="flex items-center space-x-1 text-white font-medium hover:text-yellow-200">
              <span>About Us</span>
              <ChevronDown size={18} className="mt-0.5" />
            </button>

            <div
              className="absolute left-0 top-full bg-white shadow-xl rounded-lg mt-2 w-56 text-gray-800 
              opacity-0 group-hover:opacity-100 group-hover:visible invisible 
              transition-all duration-300 ease-in-out z-[99999]"
            >
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">
                About INN
              </a>
              <a href="/about-imi" className="block px-4 py-2 hover:bg-gray-100">
                About IMI
              </a>
              <a href="/dean-mess" className="block px-4 py-2 hover:bg-gray-100">
                Dean Message
              </a>
              <a href="/chairman" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">
                Chairman Message
              </a>
            </div>
          </div>

          {/* ===== Placement Dropdown ===== */}
          <div className="group relative">
            <button className="flex items-center space-x-1 text-white font-medium hover:text-yellow-200">
              <span>Placement</span>
              <ChevronDown size={18} className="mt-0.5" />
            </button>

            <div
              className="absolute left-0 top-full bg-white shadow-xl rounded-lg mt-2 w-64 text-gray-800 
              opacity-0 group-hover:opacity-100 group-hover:visible invisible 
              transition-all duration-300 ease-in-out z-[99999]"
            >
              <a href="/placement" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">
                IMI Placements
              </a>
              <a href="/addmission" className="block px-4 py-2 hover:bg-gray-100">
                Admission Procedure & Eligibility
              </a>
              <a href="/fess" className="block px-4 py-2 hover:bg-gray-100 rounded-b-lg">
                Fee Structure (2025–26)
              </a>
            </div>
          </div>
          <a href="/courses" className="text-white font-medium hover:text-yellow-200" >Courses</a>
          <a href="/faculty" className="text-white font-medium hover:text-yellow-200">
            Faculty
          </a>
          <a href="/faqs" className="text-white font-medium hover:text-yellow-200">
            FAQ'S
          </a>

          <div className="group relative">
            <button className="flex items-center space-x-1 text-white font-medium hover:text-yellow-200">
              <span>IMI Connect</span>
              <ChevronDown size={18} className="mt-0.5" />
            </button>

            <div
              className="absolute left-0 top-full bg-white shadow-xl rounded-lg mt-2 w-64 text-gray-800 
              opacity-0 group-hover:opacity-100 group-hover:visible invisible 
              transition-all duration-300 ease-in-out z-[99999]"
            >
              <a href="/alumni" className="block px-4 py-2 hover:bg-gray-100 rounded-t-lg">
                IMI Alumni 
              </a>
              <a href="/corporate" className="block px-4 py-2 hover:bg-gray-100">
                Corporate Connect
              </a>
            </div>
          </div>

          <a href="/contact" className="text-white font-medium hover:text-yellow-200">
            Contact Us
          </a>
        </div>

        {/* Application Form Button */}
        <div>
          <a
            href="/form"
            className="mr-6 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-800 transition-all duration-75 ease-in-out"
          >
            Application Form
          </a>
        </div>
      </div>

      {/* ===== Mobile Navbar ===== */}
      <div className="md:hidden flex items-center justify-between px-4 py-2">
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

      {/* ===== Mobile Dropdown Menu ===== */}
      {menuOpen && (
        <div className="md:hidden bg-[#ff782f] px-6 pb-3 space-y-2 text-white font-medium">
          <a href="/" className="block hover:text-yellow-200">
            Home
          </a>

          {/* Mobile About Us Dropdown */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between w-full hover:text-yellow-200"
            >
              <span>About Us</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>

            {aboutOpen && (
              <div className="mt-2 ml-4 space-y-1 text-sm">
                <a href="/about" className="block hover:text-yellow-200">About INN</a>
                <a href="/about-imi" className="block hover:text-yellow-200">About IMI</a>
                <a href="/dean-mess" className="block hover:text-yellow-200">Dean Message</a>
                <a href="/chairman" className="block  hover:text-yellow-200">Chairman Message </a>
              </div>
            )}
          </div>

          {/* Mobile Placement Dropdown */}
          <div>
            <button
              onClick={() => setPlacementOpen(!placementOpen)}
              className="flex items-center justify-between w-full hover:text-yellow-200"
            >
              <span>Placement</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${placementOpen ? "rotate-180" : ""}`}
              />
            </button>

            {placementOpen && (
              <div className="mt-2 ml-4 space-y-1 text-sm">
                <a href="/placement" className="block hover:text-yellow-200">IMI Placements</a>
                <a href="/addmission" className="block hover:text-yellow-200">Admission & Eligibility</a>
                <a href="/fess" className="block hover:text-yellow-200">Fee Structure (2025–26)</a>
              </div>
            )}
          </div>

          <a href="/courses" className="block hover:text-yellow-200">Courses</a>

          <a href="/faculty" className="block hover:text-yellow-200">Faculty</a>
          <a href="/faqs" className="block hover:text-yellow-200">FAQ'S</a>

          <div>
            <button
              onClick={() => setconnectopen(!connectopen)}
              className="flex items-center justify-between w-full hover:text-yellow-200"
            >
              <span>IMI Connect</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${connectopen ? "rotate-180" : ""}`}
              />
            </button>

            {connectopen && (
              <div className="mt-2 ml-4 space-y-1 text-sm">
                <a href="/alumni" className="block hover:text-yellow-200">IMI Alumni </a>
                <a href="/corporate" className="block hover:text-yellow-200">Corporate Connect</a>
              </div>
            )}
          </div>

          <a href="/contact" className="block hover:text-yellow-200">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
