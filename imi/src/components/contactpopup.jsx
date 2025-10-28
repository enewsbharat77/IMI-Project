"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ContactPopup() {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Show popup 1 second after page load (every refresh)
    const timer = setTimeout(() => setShow(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Disable scroll when popup is open
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // reset on unmount
    };
  }, [show]);

  const handleClose = () => setShow(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = Object.fromEntries(new FormData(e.target));

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType: "Get in Touch Popup",
        }),
      });

      const result = await res.json();
      if (result.success) {
        setStatus("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Error sending message.");
    }
  };

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center z-[999999]"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90%] max-w-xl p-6 md:p-8 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#ff3b1f] mb-4 text-center">
          Get in Touch with IMI
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
          <label className="text-left text-gray-700 font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            placeholder="Your Name"
            required
            className="border p-2 rounded-lg w-full"
          />

          <label className="text-left text-gray-700 font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border p-2 rounded-lg w-full"
          />

          <label className="text-left text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="3"
            className="border p-2 rounded-lg w-full"
          ></textarea>

          <button
            type="submit"
            className="bg-[#ff3b1f] text-white font-semibold py-2 rounded-lg hover:bg-[#ff782f] transition"
          >
            Send Message
          </button>
        </form>

        {status && (
          <p className="text-center text-sm mt-3 text-gray-600">{status}</p>
        )}

        <p className="text-sm text-gray-500 mt-4 text-center">
          Or contact us directly:{" "}
          <span className="font-semibold">+91-9024209393</span>
        </p>
      </div>
    </div>
  );
}
