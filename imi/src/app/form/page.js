"use client";
import { useState } from "react";
import { FaUserGraduate, FaBuilding, FaAward, FaCalendarAlt } from "react-icons/fa";

export default function ApplicationFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    education: "",
    course: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Application Form",
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          dob: "",
          gender: "",
          address: "",
          city: "",
          state: "",
          education: "",
          course: "",
          message: "",
        });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      setStatus("❌ Error sending form. Try again later.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="bg-[#fff1e7] py-16 px-6 md:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Admission Application Form
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Start your journey with{" "}
          <span className="text-orange-500 font-semibold">
            Innovative Media Institute
          </span>
          . Fill out the application form below to apply for one of our media
          and journalism programs.
        </p>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="bg-white py-10 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-[#fff5ed] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaCalendarAlt className="text-orange-500 text-4xl mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">20+</h3>
            <p className="text-gray-600">Years of Excellence</p>
          </div>

          <div className="bg-[#fff5ed] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaUserGraduate className="text-orange-500 text-4xl mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">10,000+</h3>
            <p className="text-gray-600">Successful Graduates</p>
          </div>

          <div className="bg-[#fff5ed] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaBuilding className="text-orange-500 text-4xl mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600">Recruiting Partners</p>
          </div>

          <div className="bg-[#fff5ed] p-6 rounded-2xl shadow-sm hover:shadow-md transition">
            <FaAward className="text-orange-500 text-4xl mx-auto mb-3" />
            <h3 className="text-3xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-600">National Awards</p>
          </div>
        </div>
      </section>

      {/* ===== Application Form Section ===== */}
      <section className="py-16 px-6 md:px-20 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border-t-4 border-orange-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Apply Now
          </h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9876543210"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* DOB */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                Date of Birth <span className="text-red-600">*</span>
              </label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Gender */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* Education */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                Highest Education <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                required
                placeholder="e.g. Bachelor's in Arts"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Course */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 font-semibold text-sm">
                Select Course <span className="text-red-600">*</span>
              </label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option value="">Choose your course</option>
                <option>Broadcast Journalism</option>
                <option>Digital Media & Content Creation</option>
                <option>Advertising & Public Relations</option>
                <option>Photojournalism & Visual Storytelling</option>
                <option>News Production & Anchoring</option>
                <option>Media Management & Strategy</option>
              </select>
            </div>

            {/* Address */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 font-semibold text-sm">
                Address <span className="text-red-600">*</span>
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="2"
                required
                placeholder="Your full address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              ></textarea>
            </div>

            {/* City */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                City <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                placeholder="e.g. Jaipur"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* State */}
            <div className="col-span-1">
              <label className="block mb-2 font-semibold text-sm">
                State <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                placeholder="e.g. Rajasthan"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              />
            </div>

            {/* Message */}
            <div className="col-span-1 md:col-span-2">
              <label className="block mb-2 font-semibold text-sm">
                Message / Notes (optional)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Any specific question or note?"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 outline-none"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="col-span-1 md:col-span-2 text-center mt-6">
              <button
                type="submit"
                className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all"
              >
                Submit Application
              </button>
            </div>
          </form>

          {status && (
            <p className="text-center text-gray-700 mt-4 font-medium">{status}</p>
          )}
        </div>
      </section>
    </div>
  );
}
