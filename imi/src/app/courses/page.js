"use client";
import Link from "next/link";
import Image from "next/image";
import { courses } from "../../data/course.json";

export default function CoursesPage() {
    const saffron = "#FF6F00";

    // Get 6 months fee from course data
    const getSixMonthsFee = (course) => {
        if (course.fees?.["6_months"]) {
            return `₹${course.fees["6_months"].toLocaleString()}`;
        }
        if (course.fee?.["6_months"]) {
            return course.fee["6_months"];
        }
        if (course.fee) {
            return course.fee;
        }
        return "Contact for fees";
    };

    return (
        <div className="min-h-screen py-16" style={{ background: "linear-gradient(135deg, #FFF5E6 0%, #FFFFFF 100%)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-4" style={{ color: saffron }}>
                        Our Courses
                    </h1>
                    <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: saffron }}></div>
                    <p className="mt-4 text-gray-600 text-lg">Explore our professional diploma programs</p>
                </div>

                {/* Course Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-opacity-50 flex flex-col"
                            style={{ borderColor: "transparent" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = saffron;
                                e.currentTarget.style.transform = "translateY(-8px)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = "transparent";
                                e.currentTarget.style.transform = "translateY(0)";
                            }}
                        >
                            {/* Course Image */}
                            {course.image && (
                                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                                    <Image
                                        src={course.image}
                                        alt={course.title || course.name}
                                        fill
                                        className="object-cover transition-transform duration-300 hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-grow">
                                {/* Course Name */}
                                <h2 className="text-xl font-bold mb-3 leading-tight" style={{ color: saffron }}>
                                    {course.title || course.name}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-4 leading-relaxed">
                                    {course.overview}
                                </p>

                                {/* Info Section */}
                                <div className=" flex space-y-3 gap-14 mb-6">
                                    {/* Duration */}
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                                        <svg className="w-5 h-5" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="text-xs text-gray-500 block">Duration</span>
                                            <span className="text-sm font-semibold text-gray-800">6 Months</span>
                                        </div>
                                    </div>

                                    {/* Amount */}
                                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                                        <svg className="w-5 h-5" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <span className="text-xs text-gray-500 block">Course Fee</span>
                                            <span className="text-sm font-bold" style={{ color: saffron }}>
                                                {getSixMonthsFee(course)}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Learn More Button */}
                                <Link href={`/courses/${course.id}`} className="block">
                                    <button
                                        className="w-full py-3 px-6 rounded-xl text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-xl"
                                        style={{ backgroundColor: saffron }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.02)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        Learn More →
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
