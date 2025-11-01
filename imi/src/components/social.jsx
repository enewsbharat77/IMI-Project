"use client";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Social() {
  return (
    <>
      {/* ✅ Desktop View (Right Side Vertical Bar) */}
      <div className="hidden md:fixed md:flex md:flex-col md:right-0 md:top-1/3 bg-white shadow-lg rounded-l-2xl z-50">
        <div className="flex flex-col text-3xl space-y-4 p-3">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:scale-110 transition-transform">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition-transform">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:scale-110 transition-transform">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* ✅ Mobile View (Bottom Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white flex justify-around py-3 text-3xl shadow-inner z-50">
        <a href="https://facebook.com" className="text-[#1877F2]">
          <FaFacebook />
        </a>
        <a href="https://instagram.com" className="text-[#E4405F]">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" className="text-[#0077B5]">
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}
