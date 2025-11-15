import Image from "next/image";
import { FaGraduationCap, FaClock, FaRupeeSign } from "react-icons/fa";

export default function Coursespage() {
    const courses = [
        {
            id: 1,
            title: "PG Diploma in Broadcast Journalism",
            description: "A comprehensive program covering all aspects of broadcast journalism, including reporting, editing, and production.",
            duration: "1 Year",
            fee: "5000",
            image: "/course1.png",
            category: "PG Diploma"
        },
        {
            id: 2,
            title: "PG Diploma in Digital Media & Communication",
            description: "This course focuses on the evolving landscape of digital media, teaching students about online content creation, social media strategies, and digital communication tools.",
            duration: "1 Year",
            fee: "4500",
            image: "/course2.png",
            category: "PG Diploma"
        },
        {
            id: 3,
            title: "PG Diploma in Mass Communication",
            description: "An in-depth program that explores various facets of mass communication, including print, electronic, and digital media.",
            duration: "1 Year",
            fee: "4800",
            image: "/course3.png",
            category: "PG Diploma"
        },
        {
            id: 4,
            title: "Certificate in YouTube & OTT Storytelling",
            description: "A specialized course designed to teach students the art of storytelling for YouTube and OTT platforms, focusing on content creation, audience engagement, and platform algorithms.",
            duration: "6 Months",
            fee: "3000",
            image: "/course4.png",
            category: "Certificate"
        },
        {
            id: 5,
            title: "Certificate in Art of Presentation & Anchoring",
            description: "This course aims to develop students' presentation and anchoring skills, preparing them for careers in television hosting, event anchoring, and public speaking.",
            duration: "3 Months",
            fee: "2000",
            image: "/course5.png",
            category: "Certificate"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full mb-4">
                    <FaGraduationCap className="text-orange-600 text-xl" />
                    <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                        Academic Year 2025–26
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Courses Open for <span className="text-orange-600">Admission</span>
                </h2>
                <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            </div>

            {/* Courses Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="group bg-white rounded-xl overflow-hidden border border-orange-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl"
                    >
                        {/* Image Container */}
                        <div className="relative h-52 overflow-hidden bg-gray-100">
                            <Image
                                src={course.image}
                                width={450}
                                height={300}
                                alt={course.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                {course.category}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                                {course.title}
                            </h4>

                            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                {course.description}
                            </p>

                            {/* Info Row */}
                            <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-2 text-gray-700">
                                    <FaClock className="text-orange-600 text-sm" />
                                    <span className="text-sm font-medium">{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-1 text-gray-700">
                                    <FaRupeeSign className="text-orange-600 text-sm" />
                                    <span className="text-sm font-bold">{course.fee}</span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 flex items-center justify-center gap-2 group">
                                Learn More
                                <svg
                                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
