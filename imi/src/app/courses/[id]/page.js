"use client";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { courses } from "../../../data/course.json";

export default function CourseDetailPage() {
    const params = useParams();
    const router = useRouter();
    const saffron = "#FF6F00";

    const course = courses.find((c) => c.id === parseInt(params.id));

    if (!course) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Course Not Found</h1>
                    <button
                        onClick={() => router.push("/courses")}
                        className="px-6 py-3 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                        style={{ backgroundColor: saffron }}
                    >
                        Back to Courses
                    </button>
                </div>
            </div>
        );
    }

    const getSixMonthsFee = () => {
        if (course.fees?.["6_months"]) return `₹${course.fees["6_months"].toLocaleString()}`;
        if (course.fee?.["6_months"]) return course.fee["6_months"];
        return null;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-white shadow-md">
                {course.image && (
                    <div className="relative h-80 w-full">
                        <Image
                            src={course.image}
                            alt={course.title || course.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="max-w-6xl mx-auto">
                                <button
                                    onClick={() => router.push("/courses")}
                                    className="mb-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Courses
                                </button>
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                    {course.title || course.name}
                                </h1>
                                {(course.certification || course.certifications) && (
                                    <div className="flex flex-wrap gap-2">
                                        {(course.certification || course.certifications).slice(0, 2).map((cert, idx) => (
                                            <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white border border-white/30">
                                                ✓ {cert}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Overview Section */}
                <div className="bg-white rounded-xl shadow-md border-l-8 border-2 border-orange-600 p-8 mb-8">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: saffron }}>About This Course</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">{course.overview}</p>
                </div>

                {/* Quick Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 border-l-8 border-2  rounded-xl border-orange-600 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6 text-center m-4 border-2 " style={{borderColor: saffron}}>
                        <svg className="w-12 h-12 mx-auto mb-3" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <div className="text-sm text-gray-600 mb-1">Duration</div>
                        <div className="text-xl font-bold text-gray-800">6 Months</div>
                    </div>

                    {getSixMonthsFee() && (
                        <div className="bg-white rounded-xl shadow-md p-6 m-4 text-center border-2" style={{ borderColor: saffron }}>
                            <svg className="w-12 h-12 mx-auto mb-3" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            </svg>
                            <div className="text-sm text-gray-600 mb-1">Course Fee</div>
                            <div className="text-2xl font-bold" style={{ color: saffron }}>{getSixMonthsFee()}</div>
                            {course.fees?.emi && <div className="text-xs text-green-600 mt-1">EMI Available</div>}
                        </div>
                    )}

                    {course.eligibility && (
                        <div className="bg-white rounded-xl shadow-md p-6 m-4  text-center border-2" style={{borderColor: saffron}}>
                            <svg className="w-12 h-12 mx-auto mb-3" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                            <div className="text-sm text-gray-600 mb-1">Eligibility</div>
                            <div className="text-lg font-bold text-gray-800">
                                {Array.isArray(course.eligibility) ? course.eligibility[0] : course.eligibility}
                            </div>
                        </div>
                    )}
                </div>

                {/* Duration Options */}
                {course.duration_options && (
                    <div className="bg-white rounded-xl shadow-md p-8 border-l-8 border-2 border-orange-600 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Program Options</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {course.duration_options.map((option, idx) => (
                                <div key={idx} className="border-2 rounded-lg p-5 text-center hover:shadow-lg transition-all" style={{ borderColor: idx === 1 ? saffron : "#e5e7eb" }}>
                                    <div className="font-bold text-lg mb-1" style={{ color: idx === 1 ? saffron : "#374151" }}>
                                        {option.program}
                                    </div>
                                    <div className="text-gray-600">{option.duration}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Fees Structure */}
                {course.fees && typeof course.fees === "object" && (
                    <div className="bg-white rounded-xl border-l-8 border-2 border-orange-600 shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Fees Structure</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {course.fees["3_months"] && (
                                <div className="text-center p-6 rounded-lg bg-gray-50 border-2" style={{ borderColor: saffron, backgroundColor: `${saffron}10` }}>
                                    <div className="text-sm text-gray-600 mb-2">3 Months Program</div>
                                    <div className="text-3xl font-bold mb-1" style={{ color: saffron }}>
                                        ₹{course.fees["3_months"].toLocaleString()}
                                    </div>
                                </div>
                            )}
                            {course.fees["6_months"] && (
                                <div className="text-center p-6 rounded-lg border-2" style={{ borderColor: saffron, backgroundColor: `${saffron}10` }}>
                                    <div className="text-xs font-bold mb-2" style={{ color: saffron }}>MOST POPULAR</div>
                                    <div className="text-sm text-gray-600 mb-2">6 Months Program</div>
                                    <div className="text-3xl font-bold mb-1" style={{ color: saffron }}>
                                        ₹{course.fees["6_months"].toLocaleString()}
                                    </div>
                                </div>
                            )}
                            {course.fees["12_months"] && (
                                <div className="text-center p-6 rounded-lg bg-gray-50 border-2" style={{ borderColor: saffron, backgroundColor: `${saffron}10`}}>
                                    <div className="text-sm text-gray-600 mb-2">12 Months Program</div>
                                    <div className="text-3xl font-bold mb-1" style={{ color: saffron }}>
                                        ₹{course.fees["12_months"].toLocaleString()}
                                    </div>
                                </div>
                            )}
                        </div>
                        {course.fees.emi && (
                            <div className="mt-6 p-4 bg-green-50 rounded-lg text-center">
                                <span className="text-green-700 font-semibold">✓ Easy EMI Options Available</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Syllabus */}
                {course.syllabus && (
                    <div className="bg-white rounded-xl border-l-8 border-2 border-orange-600 shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Course Curriculum</h2>
                        <div className="space-y-6">
                            {Object.entries(course.syllabus).map(([key, semester], idx) => (
                                <div key={key} className=" pl-6 py-4 bg-gray-50 rounded-r-lg" style={{ borderColor: saffron }}>
                                    <h3 className="text-xl font-bold mb-4" style={{ color: saffron }}>
                                        {semester.title}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {semester.modules.map((module, i) => (
                                            <div key={i} className="flex items-start gap-2 text-gray-700">
                                                <span className="text-lg" style={{ color: saffron }}>•</span>
                                                <span>{module}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Modules */}
                {course.modules && (
                    <div className="bg-white rounded-xl border-l-8 border-2 border-orange-600 shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>What You'll Learn</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.modules.map((module, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                                    <span className="font-bold" style={{ color: saffron }}>{idx + 1}.</span>
                                    <span className="text-gray-700">{module}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tools & Equipment */}
                {(course.tools || course.equipment_training) && (
                    <div className="bg-white rounded-xl border-l-8 border-2 border-orange-600 shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Tools & Software</h2>
                        <div className="flex flex-wrap gap-3">
                            {(course.tools || course.equipment_training).map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-lg font-medium"
                                    style={{ backgroundColor: `${saffron}20`, color: saffron }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Career Opportunities */}
                {(course.careers || course.career_opportunities) && (
                    <div className="bg-white rounded-xl shadow-md border-l-8 border-2 border-orange-600 p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Career Opportunities</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {(course.careers || course.career_opportunities).map((career, idx) => (
                                <div
                                    key={idx}
                                    className="text-center p-4 rounded-lg border-2 font-semibold"
                                    style={{ borderColor: saffron, color: saffron }}
                                >
                                    {career}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Certifications */}
                {(course.certificates || course.certifications) && (
                    <div className="bg-white border-l-8 border-2 border-orange-600 rounded-xl shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Certifications</h2>
                        <div className="space-y-3">
                            {(course.certificates || course.certifications).map((cert, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
                                    <svg className="w-6 h-6 flex-shrink-0" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-gray-700 font-medium">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Eligibility */}
                {course.eligibility && Array.isArray(course.eligibility) && course.eligibility.length > 1 && (
                    <div className="bg-white rounded-xl border-l-8 border-2 border-orange-600 shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Eligibility Criteria</h2>
                        <ul className="space-y-3">
                            {course.eligibility.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-700">
                                    <span className="text-lg" style={{ color: saffron }}>•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Facilities */}
                {course.facilities && (
                    <div className="bg-white rounded-xl shadow-md border-l-8 border-2 border-orange-600 p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Training Facilities</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.facilities.map((facility, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                                    <span className="text-lg" style={{ color: saffron }}>•</span>
                                    <span className="text-gray-700">{facility}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Work Places */}
                {course.work_places && (
                    <div className="bg-white rounded-xl shadow-md border-l-8 border-2 border-orange-600 p-8 mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ color: saffron }}>Where You Can Work</h2>
                        <div className="flex flex-wrap gap-3">
                            {course.work_places.map((place, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-lg font-medium"
                                    style={{ backgroundColor: `${saffron}20`, color: saffron }}
                                >
                                    {place}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* CTA Section
                <div className="bg-white rounded-xl shadow-md p-8 text-center">
                    <h2 className="text-2xl font-bold mb-4" style={{ color: saffron }}>Ready to Start Your Journey?</h2>
                    <p className="text-gray-600 mb-6">Enroll now and take the first step towards your dream career</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className="px-8 py-3 rounded-lg text-white font-bold shadow-lg hover:shadow-xl transition-all"
                            style={{ backgroundColor: saffron }}
                        >
                            Enroll Now
                        </button>
                        <button
                            className="px-8 py-3 rounded-lg font-bold border-2 hover:bg-orange-50 transition-all"
                            style={{ borderColor: saffron, color: saffron }}
                        >
                            Download Brochure
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
