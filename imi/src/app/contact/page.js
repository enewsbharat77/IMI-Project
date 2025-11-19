"use client";
import { useState } from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Contact Form", // Helps you identify which form sent it
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("✅ Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert("❌ Failed to send message: " + result.error);
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="bg-white text-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* ===== Left Content ===== */}
          <div className="flex flex-col justify-center space-y-6">
            <Image
              src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
              alt="IMI Logo"
              width={400}
              height={300}
              className="mb-2"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#ea580c]">
              Contact & Admissions
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              <strong>Innovative Media Institute (IMI)</strong> — where your
              media journey begins. Whether you’re ready to apply, have
              admission-related questions, or want to collaborate, we’d love to
              hear from you.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              Reach out to us via phone, email, or our quick contact form below.
              Our dedicated <strong>Admissions Team</strong> will respond within
              24 working hours.
            </p>
          </div>

          {/* ===== Right Image ===== */}
          <div className="flex justify-center items-center">
            <Image
              src="/contact.png"
              alt="Contact IMI"
              width={500}
              height={500}
              className="rounded-2xl object-contain md:h-[420px]"
            />
          </div>
        </div>
      </section>

      {/* ===== Contact + Form Section ===== */}
      <section className="bg-white py-20 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          {/* ===== Left Column: IMI Contact Info ===== */}
          <div className="flex flex-col space-y-6 rounded-2xl shadow-md p-8 border-t-4 border-[#ea580c] bg-gray-50">
            <h2 className="text-3xl font-bold text-[#ea580c] mb-2">
              Admissions Office
            </h2>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                🎓 <strong>Mr. Arpit Dadhich</strong>
                <br />
                Admissions Coordinator – Innovative Media Institute (IMI)
                <br />
                (A Unit of Innovative e-News Network – INN)
              </p>

              <p>
                📧 <strong>Email:</strong>{" "}
                <a
                  href="mailto:admissions@imibharat.com"
                  className="text-[#ea580c] hover:underline"
                >
                  admissions@imibharat.com
                </a>
                <br />
                (All admission-related queries will be responded to within 24
                working hours.)
              </p>

              <p>
                📞 <strong>Contact Numbers:</strong>
                <br />
                Landline: 0141 – 3510746, 3523689
                <br />
                Mobile: 9024209393
                <br />
                <strong>Office Timings:</strong> 10:00 AM – 6:00 PM (Mon–Fri)
              </p>

              <p>
                🏢 <strong> Corporate Office</strong>
                <br />
                91, C Block Sector 10, Nodia - 201301, Uttar Pradesh, India
                <br />
                <em>
                  Nearest Metor Station: Sector 15 Metro Station (Nodia Metro)
                </em>
              </p>

              <p>
                🏢 <strong>Institute Address:</strong>
                <br />
                Innovative Media Institute (IMI)
                <br />
                70, Kushal Nagar, Sanganer, Jaipur – 302029, Rajasthan, India
                <br />
                <em>
                  Nearest Metro Station: Mansarovar Metro Station (Jaipur Metro)
                  <br />
                  Landmark: Near RIICO Flyover, Mansarovar
                </em>
              </p>

              <p>
                <strong>Admissions Support Team:</strong>
              </p>
              <ul className="list-disc ml-6 mt-2">
                <li>Ms. Shruti Dadhich – Dean & Director</li>
                <li>Mr. Mukesh S. Dadhich – Founder & Chairman</li>
                <li>Mr. Arpit Dadhich – Digital & Admissions Support</li>
                <li>Ms. Nisha Sharma – Admissions Coordinator</li>
              </ul>

              <p>
                🌐 <strong>Websites:</strong>
                <br />
                <a
                  href="https://www.enewsbharat.com"
                  target="_blank"
                  className="text-[#ea580c] hover:underline"
                >
                  www.enewsbharat.com
                </a>
                <br />
                <a
                  href="https://www.imibharat.com"
                  target="_blank"
                  className="text-[#ea580c] hover:underline"
                >
                  www.imibharat.com
                </a>
              </p>
            </div>

            {/* ===== Social Links ===== */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3 text-[#ea580c]">
                Follow Us for Updates:
              </h3>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://facebook.com/enewsbharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b5998] text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com/imibharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E1306C] text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/company/imibharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://youtube.com/@imibharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FF0000] text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://twitter.com/enewsbharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href="https://wa.me/919024209393"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white p-3 rounded-full hover:scale-110 transition"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          {/* ===== Right Column: Contact Form + Map ===== */}
          <div className="bg-gray-50 rounded-2xl shadow-md p-10 border-t-4 border-[#ea580c]">
            <h2 className="text-3xl font-bold text-[#ea580c] mb-6">
              Quick Contact Form
            </h2>
            <p className="text-gray-700 mb-6">
              Have a question or need admission assistance? Fill in your details
              below, and our admissions team will get back to you within one
              working day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-semibold">
                  Message / Query
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#ea580c] outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ea580c] text-white font-semibold py-3 rounded-lg hover:bg-[#c84f09] transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* ===== Map Added Below Form ===== */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-[#ea580c] mb-4 text-center">
                Find Us Here
              </h3>
              <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Innovative+eNews+Network,+70,+Kushal+Nagar,+Sanganer,+Jaipur,+Rajasthan,+India&output=embed"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tagline ===== */}
      <div className="bg-[#ea580c] text-white text-center py-6 text-lg font-medium">
        “Your Future in Media Begins Here — Let’s Build It Together.”
      </div>
    </div>
  );
}

