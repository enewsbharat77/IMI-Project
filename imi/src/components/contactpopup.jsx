"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

export default function ContactPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Always show popup after short delay (no localStorage)
    const timer = setTimeout(() => setShow(true), 1000); // delay 1s
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
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

        {/* Contact Section Content */}
        <div className="space-y-3 text-gray-700 text-center">
          <p>
            Have questions or want to know more about our courses?
            <br />
            Fill the form or reach us directly!
          </p>

          <form
            action="https://formsubmit.co/your@email.com"
            method="POST"
            className="flex flex-col gap-3 mt-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border p-2 rounded-lg w-full"
            />
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

          <p className="text-sm text-gray-500 mt-2">
            Or contact us directly:{" "}
            <span className="font-semibold">+91-9024209393</span>
          </p>
        </div>
      </div>
    </div>
  );
}
