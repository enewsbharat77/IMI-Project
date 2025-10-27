"use client";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md  top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* ===== TOP LAYER: Logos + Title ===== */}
                <div className="flex items-center justify-between h-32">
                    {/* Left Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
                            alt="Left Logo"
                            width={100}
                            height={80}
                            className="object-contain"
                        />
                    </div>

                    {/* Center Text */}
                    <div className="flex-1 text-center">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl  font-bold text-black">
                            <i>Innovative Media Institute</i>
                        </h1>
                    </div>

                    {/* Right Logo */}
                    <div className="flex-shrink-0">
                        <Image
                            src="https://enewsbharat.com/wp-content/uploads/2025/08/logo-enews.png"
                            alt="Right Logo"
                            width={100}
                            height={80}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}
