"use client";
import { useParams, useRouter } from 'next/navigation';
import Image from "next/image";
import { courses } from "../../../data/course";

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
                        className="px-6 py-3 rounded-lg text-white font-semibold hover:shadow-lg transition-all"
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
        <div className="min-h-screen bg-orange-50">
            {/* Hero Section */}
            <div className="relative bg-gray-100">
                {course.image && (
                    <div className="relative h-96 w-full">
                        <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title || course.name}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>

                        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                            <div className="max-w-6xl mx-auto w-full">
                                <button
                                    onClick={() => router.push("/courses")}
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 hover:bg-white text-gray-800 font-medium transition-all text-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Back to Courses
                                </button>
                            </div>
                            
                            <div className="max-w-6xl mx-auto w-full">
                                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
                                    {course.title || course.name}
                                </h1>
                                {(course.certification || course.certifications) && (
                                    <div className="flex flex-wrap gap-2">
                                        {(course.certification || course.certifications).slice(0, 2).map((cert, certIdx) => (
                                            <span key={certIdx} className="px-3 py-1.5 text-sm font-semibold rounded-lg shadow-sm" style={{ backgroundColor: saffron, color: "white" }}>
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
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="p-6 rounded-lg" style={{ backgroundColor: `${saffron}08` }}>
                        <svg className="w-10 h-10 mb-3" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <div className="text-sm text-gray-600 mb-1 font-medium">Duration</div>
                        <div className="text-2xl font-bold text-gray-800">6 Months</div>
                    </div>

                    {getSixMonthsFee() && (
                        <div className="p-6 rounded-lg" style={{ backgroundColor: `${saffron}08` }}>
                            <svg className="w-10 h-10 mb-3" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                            </svg>
                            <div className="text-sm text-gray-600 mb-1 font-medium">Course Fee</div>
                            <div className="text-2xl font-bold" style={{ color: saffron }}>{getSixMonthsFee()}</div>
                            {course.fees?.emi && <div className="text-xs mt-2 font-medium" style={{ color: saffron }}>✓ EMI Available</div>}
                        </div>
                    )}

                    {course.eligibility && (
                        <div className="p-6 rounded-lg" style={{ backgroundColor: `${saffron}08` }}>
                            <svg className="w-10 h-10 mb-3" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                            <div className="text-sm text-gray-600 mb-1 font-medium">Eligibility</div>
                            <div className="text-lg font-bold text-gray-800">
                                {Array.isArray(course.eligibility) ? course.eligibility[0] : course.eligibility}
                            </div>
                        </div>
                    )}
                </div>

                {course.overview && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">About This Course</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <p className="text-gray-600 text-lg leading-relaxed">{course.overview}</p>
                    </div>
                )}

                {/* Duration Options */}
                {course.duration_options && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Program Options</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {course.duration_options.map((option, optIdx) => (
                                <div 
                                    key={optIdx} 
                                    className="p-6 rounded-lg text-center transition-all hover:shadow-md" 
                                    style={{ 
                                        backgroundColor: optIdx === 1 ? saffron : `${saffron}08`,
                                        color: optIdx === 1 ? "white" : "inherit"
                                    }}
                                >
                                    <div className="font-bold text-xl mb-2">{option.program}</div>
                                    <div className={optIdx === 1 ? "text-white/80" : "text-gray-600"}>{option.duration}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Fees Structure */}
                {course.fees && typeof course.fees === "object" && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Fees Structure</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {course.fees["3_months"] && (
                                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${saffron}08` }}>
                                    <div className="text-sm text-gray-600 mb-2 font-medium">3 Months</div>
                                    <div className="text-3xl font-bold" style={{ color: saffron }}>
                                        ₹{course.fees["3_months"].toLocaleString()}
                                    </div>
                                </div>
                            )}
                            {course.fees["6_months"] && (
                                <div className="p-6 rounded-lg text-center relative" style={{ backgroundColor: saffron }}>
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white bg-gray-800">
                                        RECOMMENDED
                                    </div>
                                    <div className="text-sm mb-2 font-medium mt-2 text-white/80">6 Months</div>
                                    <div className="text-3xl font-bold text-white">
                                        ₹{course.fees["6_months"].toLocaleString()}
                                    </div>
                                </div>
                            )}
                            {course.fees["12_months"] && (
                                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: `${saffron}08` }}>
                                    <div className="text-sm text-gray-600 mb-2 font-medium">12 Months</div>
                                    <div className="text-3xl font-bold" style={{ color: saffron }}>
                                        ₹{course.fees["12_months"].toLocaleString()}
                                    </div>
                                </div>
                            )}
                        </div>
                        {course.fees.emi && (
                            <div className="mt-6 p-4 rounded-lg text-center font-medium" style={{ backgroundColor: `${saffron}12`, color: saffron }}>
                                ✓ Easy EMI Options Available
                            </div>
                        )}
                    </div>
                )}

                {/* Syllabus */}
                {course.syllabus && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Course Curriculum</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="space-y-6">
                            {Object.entries(course.syllabus).map(([key, semester]) => (
                                <div key={key} className="pl-6 py-4 rounded-lg" style={{ backgroundColor: `${saffron}05`, borderLeft: `3px solid ${saffron}` }}>
                                    <h3 className="text-xl font-bold mb-4" style={{ color: saffron }}>
                                        {semester.title}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {semester.modules.map((module, modIdx) => (
                                            <div key={modIdx} className="flex items-start gap-3 text-gray-700">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: saffron }}></span>
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
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">What You'll Learn</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.modules.map((module, modIdx) => (
                                <div key={modIdx} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: `${saffron}08` }}>
                                    <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: saffron }}>
                                        {modIdx + 1}
                                    </span>
                                    <span className="text-gray-700 pt-1">{module}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Tools & Equipment */}
                {(course.tools || course.equipment_training) && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Tools & Software</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="flex flex-wrap gap-3">
                            {(course.tools || course.equipment_training).map((tool, toolIdx) => (
                                <span
                                    key={toolIdx}
                                    className="px-4 py-2 rounded-full font-medium transition-all"
                                    style={{ backgroundColor: `${saffron}15`, color: saffron }}
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Career Opportunities */}
                {(course.careers || course.career_opportunities) && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Career Opportunities</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {(course.careers || course.career_opportunities).map((career, careerIdx) => (
                                <div
                                    key={careerIdx}
                                    className="text-center p-4 rounded-lg font-semibold transition-all"
                                    style={{ backgroundColor: `${saffron}12`, color: saffron }}
                                >
                                    {career}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Certifications */}
                {(course.certificates || course.certifications) && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Certifications</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="space-y-3">
                            {(course.certificates || course.certifications).map((cert, certIdx) => (
                                <div key={certIdx} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: `${saffron}08` }}>
                                    <svg className="w-5 h-5 flex-shrink-0" style={{ color: saffron }} fill="currentColor" viewBox="0 0 20 20">
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
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Eligibility Criteria</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <ul className="space-y-3">
                            {course.eligibility.map((item, eligIdx) => (
                                <li key={eligIdx} className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: saffron }}></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Facilities */}
                {course.facilities && (
                    <div className="mb-16 pb-8 border-b" style={{ borderColor: `${saffron}20` }}>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Training Facilities</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.facilities.map((facility, facIdx) => (
                                <div key={facIdx} className="flex items-start gap-3 p-4 rounded-lg" style={{ backgroundColor: `${saffron}08` }}>
                                    <span className="mt-2 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: saffron }}></span>
                                    <span className="text-gray-700">{facility}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Work Places */}
                {course.work_places && (
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Where You Can Work</h2>
                        <div className="h-1 w-16 mb-6 rounded-full" style={{ backgroundColor: saffron }}></div>
                        <div className="flex flex-wrap gap-3">
                            {course.work_places.map((place, placeIdx) => (
                                <span
                                    key={placeIdx}
                                    className="px-4 py-2 rounded-full font-medium transition-all"
                                    style={{ backgroundColor: `${saffron}15`, color: saffron }}
                                >
                                    {place}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
