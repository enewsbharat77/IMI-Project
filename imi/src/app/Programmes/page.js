"use client";

import Image from "next/image";

export default function CoursesPage() {
  const courses = [
    {
      title: "Broadcast Journalism",
      duration: "1 Year Diploma",
      image: "/c1.png",
      description:
        "Learn the art of anchoring, news presentation, and production from industry professionals with hands-on newsroom training.",
    },
    {
      title: "Digital Media & Content Creation",
      duration: "1 Year Diploma",
      image: "/c2.png",
      description:
        "Master storytelling for digital platforms, including YouTube, Instagram, and OTT — covering video editing, graphics, and SEO.",
    },
    {
      title: "Advertising & Public Relations",
      duration: "1 Year Diploma",
      image: "/course3.jpg",
      description:
        "Develop creative ad campaigns and master corporate communication strategies for brands and organizations.",
    },
    {
      title: "Photojournalism & Visual Storytelling",
      duration: "6 Month Certificate",
      image: "/course4.jpg",
      description:
        "Learn to capture news and narratives through impactful photography and visual design techniques.",
    },
    {
      title: "News Production & Anchoring",
      duration: "6 Month Certificate",
      image: "/course5.jpg",
      description:
        "Get hands-on experience in studio environments, camera handling, and live news production.",
    },
    {
      title: "Media Management & Strategy",
      duration: "1 Year Diploma",
      image: "/course6.jpg",
      description:
        "Understand how media businesses operate — from planning and branding to digital marketing and monetization.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#ffefe3] py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Courses
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          At <span className="text-orange-500 font-semibold">Innovative Media Institute</span>, 
          we offer industry-driven courses designed to prepare students for the 
          fast-paced world of journalism, media, and communication.  
          Every course blends theory, hands-on practice, and mentorship by experts.
        </p>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative w-full h-56">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-orange-600 font-medium mb-3">
                  {course.duration}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#fff7f3] py-16 text-center px-6 md:px-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Ready to Start Your Media Journey?
        </h2>
        <p className="text-gray-600 mb-6">
          Apply now and take your first step toward a successful career in media and journalism.
        </p>
        <a
          href="/form"
          className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
}
