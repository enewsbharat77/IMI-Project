import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white-900 text-black pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* --- Column 1: Logo + About --- */}
                <div>
                    <div className="flex items-center space-x-3 mb-4">
                        <Image
                            src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
                            alt="ITMI Logo"
                            width={100}
                            height={100}
                            className="object-contain"
                        />
                        <h3 className="text-[#ea580c] text-lg font-bold">
                            Innovative Media Institute
                        </h3>
                    </div>
                    <p className="text-sm text-black leading-relaxed">
                        Empowering the next generation of media professionals through
                        hands-on training, expert mentorship, and real-world exposure.
                    </p>
                </div>

                {/* --- Column 2: Quick Links --- */}
                <div>
                    <h4 className="text-[#ea580c] text-lg font-semibold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#about" className="hover:text-[#ea580c] transition">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#placement" className="hover:text-[#ea580c] transition">
                                Placement
                            </a>
                        </li>
                        <li>
                            <a href="#faculty" className="hover:text-[#ea580c] transition">
                                Faculty
                            </a>
                        </li>
                        <li>
                            <a href="#testimonials" className="hover:text-[#ea580c] transition">
                                Testimonials
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-[#ea580c] transition">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </div>

                {/* --- Column 3: Contact Info --- */}
                <div>
                    <h4 className="text-[#ea580c] text-lg font-semibold mb-4">
                        Contact Us
                    </h4>
                    <p className="text-sm text-black mb-2">
                        Innovative Media Institute, Jaipur, Rajasthan, India
                    </p>
                    <p className="text-sm text-black mb-1">
                        📞 +91 98765 43210
                    </p>
                    <p className="text-sm text-black mb-4">
                        📧 info@itmi.in
                    </p>

                    {/* --- Social Icons --- */}
                    <div className="flex space-x-4 mt-3">
                        <a href="#" className="hover:text-[#ea580c] text-xl">
                            <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-[#ea580c] text-xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-[#ea580c] text-xl">
                            <FaLinkedin />
                        </a>
                        <a href="#" className="hover:text-[#ea580c] text-xl">
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>

            {/* --- Bottom Line --- */}
            <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-black">
                © {new Date().getFullYear()} Innovative Media Institute. All rights reserved.
            </div>
        </footer>
    );
}
