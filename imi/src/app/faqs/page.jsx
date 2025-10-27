"use client";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is the eligibility for applying to IMI?",
      answer: `Candidates must hold a Bachelor’s Degree (minimum 3 years) from a recognized university. Final-year students may apply
        provided they submit their graduation proof within 60 days of admission. Maximum age limit is 30 years as of admission date.`
    },
    {
      question: "If I am in my final year of graduation, can I apply?",
      answer: `Yes — you may apply if you are in your final year/semester. Submit previous marksheets, and final results must be submitted as soon as they are announced.
        Admission remains conditional and is subject to clearance of all backlogs and successful graduation.`
    },
    {
      question: "Is there an age limit to apply to IMI?",
      answer: `Yes — the age limit for admission is 30 years as of the date of joining the course.`
    },
    {
      question: "What is the admission process at IMI?",
      answer: `The admission process includes: online/offline application → Written Examination → Group Discussion → Personal Interview.
        You will be notified of venue & timing post application.`
    },
    {
      question: "What does the written admission test cover and how should I prepare?",
      answer: `The test covers General Awareness, Language Ability, Logical Reasoning and Written Expression.
        The focus is on your potential as a communicator rather than prior media knowledge.`
    },
    {
      question: "Does IMI guarantee placements?",
      answer: `IMI makes every possible effort to support placement, but **does not guarantee placement**. The outcome depends on your
        efforts, performance and engagement during the course.`
    },
    {
      question: "Is hostel facility provided by the institute?",
      answer: `No — IMI does not operate its own hostel. However, we provide a list of verified nearby hostels & PG accommodations.`
    },
    // You can add more FAQ items here...
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#ea580c] mb-8">
          Frequently Asked Questions (FAQs)
        </h1>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span className="text-[#ea580c]">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 text-gray-700">
                  {item.answer.split("\n").map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p>If your question isn’t listed above, please <a href="/contact" className="text-[#ea580c] underline">contact our admissions office</a>.</p>
        </div>
      </div>
    </div>
  );
}
