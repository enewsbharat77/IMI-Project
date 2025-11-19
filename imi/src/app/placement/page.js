"use client";

import { useState } from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function CareerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your admission inquiry has been submitted.");
    setFormData({ name: "", email: "", phone: "", course: "", message: "" });
  };

  const recruiters = [
    '/logo/logo1.png',
    '/logo/logo2.png',
    '/logo/logo3.png',
    '/logo/logo4.png',
    '/logo/logo5.webp',
    '/logo/logo6.png',
    '/logo/logo7.jpeg',
    '/logo/logo8.jpeg',
    '/logo/logo9.jpeg',
    '/logo/logo10.jpeg',
    '/logo/logo11.png',
    '/logo/logo12.png'
  ];

  return (
    <div className="bg-gray-50">
      {/* ===== Hero Section ===== */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-[#fff7f3] via-white to-[#fff7f3]">
        <div className="flex flex-col items-center">
          <Image
            src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
            alt="IMI Logo"
            width={400}
            height={400}
            className="mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-[#ea580c] mb-3">
            IMI Placements & Career Opportunities
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Empowering the next generation of journalists, creators, and media
            innovators. Your success story begins at Innovative Media Institute.
          </p>
        </div>
      </section>

      {/* ===== Main Section (Placements + Form) ===== */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-12">
        {/* Placement Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#ea580c]">
          <h2 className="text-3xl font-bold text-[#ea580c] mb-4">
            Our Placement Success
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            At <strong>Innovative Media Institute (IMI)</strong>, our graduates
            have consistently secured positions at leading media networks,
            digital agencies, and creative studios across India.
          </p>

          <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-6">
            <li>Strong industry partnerships with 100+ organizations.</li>
            <li>Internships integrated into every program.</li>
            <li>Alumni working across national news & digital platforms.</li>
            <li>Dedicated Career Guidance & Placement Cell (CGPC).</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">Top Recruiters</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center">
            {recruiters.map((logo, i) => (
              <div
                key={i}
                className="flex items-center justify-center p-3 bg-gray-100 rounded-lg hover:shadow-md transition"
              >
                <Image
                  src={logo}
                  alt="Recruiter Logo"
                  width={150}
                  height={100}
                  className="object-contain h-12"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Admission Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#ea580c]">
          <h2 className="text-3xl font-bold text-[#ea580c] mb-6">
            Admission Enquiry Form
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-2 text-sm font-semibold">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">
                Course Interested In <span className="text-red-500">*</span>
              </label>
              <select
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
              >
                <option value="">Select a Course</option>
                <option value="Journalism">Journalism & Mass Communication</option>
                <option value="DigitalMedia">Digital Media Production</option>
                <option value="Broadcasting">Broadcasting & Anchoring</option>
                <option value="Advertising">Advertising & PR</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#ea580c] text-white font-semibold py-3 rounded-lg hover:bg-[#c84f09] transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* ===== Redesigned Google Map Section ===== */}
      <section className="flex justify-center py-16 bg-gradient-to-b from-white to-[#fff7f3]">
        <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-[#ea580c]">
          <div className="text-center py-6">
            <h2 className="text-3xl font-bold text-[#ea580c] mb-2">
              Visit Our Campus
            </h2>
            <p className="text-gray-600">E-News Bharat, Jaipur, Rajasthan</p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Innovative+eNews+Network,+70,+Kushal+Nagar,+Sanganer,+Jaipur,+Rajasthan,+India&output=embed"
            width="100%"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-[400px]"
          ></iframe>
        </div>
      </section>

      {/* ===== Extended IMI Placement Info ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-gray-700 space-y-10 leading-relaxed">
        <h2 className="text-4xl font-bold text-center text-[#ea580c] mb-8">
          IMI Placements – Empowering Careers, Building Digital Leaders
        </h2>

        <p className="text-lg text-center max-w-4xl mx-auto">
          At <strong>Innovative Media Institute (IMI)</strong>, powered by
          Innovative e-News Network (INN) & E-News Bharat, our mission is to
          prepare students to <em>lead, create, and innovate</em> in today’s
          dynamic media landscape.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-[#ea580c] mb-3">
              Exceptional Placement Record
            </h3>
            <p>
              IMI maintains a consistent <strong>100% internship and placement record</strong> 
              across digital, broadcast, OTT, PR, and creative sectors. Our alumni 
              are making waves across India’s top networks.
            </p>
            <ul className="space-y-2 mt-3">
              {[
                "E-News Bharat",
                "Republic TV",
                "Zee Digital",
                "ABP Network",
                "Pocket FM",
                "The Quint",
                "Brut India",
                "Times Network",
              ].map((r, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#ea580c]" /> {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#ea580c] mb-3">
              Internship & Real Experience
            </h3>
            <p>
              Every IMI program includes a <strong>6-month newsroom internship</strong> 
              with E-News Bharat or INN Network, offering first-hand learning in:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>News production & field reporting</li>
              <li>Anchoring & post-production</li>
              <li>Social media strategy</li>
              <li>OTT & podcast creation</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-[#ea580c]">
          <h3 className="text-2xl font-bold text-[#ea580c] mb-3">
            Career Guidance & Placement Cell
          </h3>
          <p>
            The <strong>CGPC</strong> ensures every IMI student receives mentorship 
            and exposure through:
          </p>
          <ul className="list-disc ml-6 mt-3 space-y-1">
            <li>Personal career counseling & resume design</li>
            <li>Mock interviews & showreel building</li>
            <li>Direct access to HRs & editors</li>
            <li>Exclusive networking sessions</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-[#ea580c] mb-3">
            Dean’s Message
          </h3>
          <blockquote className="italic border-l-4 pl-4 border-[#ea580c] text-gray-700">
            “At IMI, our placement is not a destination — it’s the beginning of
            your impact story.”
            <br />— <strong>Shruti Dadhich</strong>, Dean & Director
          </blockquote>
        </div>
      </section>
    </div>
  );
}
