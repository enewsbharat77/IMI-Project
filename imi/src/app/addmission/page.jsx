"use client";

import { FaCheckCircle, FaCalendarAlt, FaClipboardList, FaGraduationCap, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import Image from "next/image";

export default function AdmissionPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* ===== Hero Section ===== */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-orange-50 via-white to-orange-50">
        <div className="flex flex-col items-center">
          <Image src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png" alt="IMI Logo" width={400} height={400} className="mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#ea580c] mb-3">
            Admission Procedure & Eligibility Criteria
          </h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto italic">
            Innovative Media Institute (IMI) – A Unit of Innovative e-News Network (INN)
          </p>
        </div>
      </section>

      {/* ===== Eligibility Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#ea580c] mb-6 text-center">
          🧾 Eligibility Criteria
        </h2>

        <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-[#ea580c] space-y-6">
          <h3 className="text-2xl font-semibold text-[#ea580c]">📌 Who Can Apply</h3>
          <ul className="space-y-3 list-disc ml-6">
            <li>Candidates holding a <strong>Bachelor’s Degree (minimum 3 years)</strong> in any stream from a recognized university are eligible.</li>
            <li>Candidates appearing in their <strong>final year/semester</strong> can also apply (submit proof of graduation within 60 days).</li>
            <li>The <strong>maximum age limit</strong> for admission is <strong>30 years</strong> as of the date of admission.</li>
          </ul>

          <div className="bg-orange-50 p-5 rounded-xl">
            <h4 className="font-bold mb-2">⚠️ Important Note</h4>
            <p>
              All academic backlogs must be cleared before joining. Admission remains <strong>provisional</strong> until final document submission.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Courses Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#ea580c] mb-6 text-center">
          🧮 Courses Open for Admission (2025–26)
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "PG Diploma in Broadcast Journalism",
            "PG Diploma in Digital Media & Communication",
            "PG Diploma in Mass Communication",
            "Certificate in YouTube & OTT Storytelling",
            "Certificate in Art of Presentation & Anchoring",
          ].map((course, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg border-t-4 border-[#ea580c]">
              <FaGraduationCap className="text-[#ea580c] text-3xl mb-3" />
              <h4 className="font-semibold">{course}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Admission Steps Section ===== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <h2 className="text-4xl font-bold text-center text-[#ea580c]">
            📝 Step-by-Step Admission Process
          </h2>

          {/* Step 1 */}
          <div className="rounded-2xl shadow-md p-8 bg-orange-50 border-l-4 border-[#ea580c]">
            <h3 className="text-2xl font-semibold text-[#ea580c] mb-4">Step 1: Application Form</h3>
            <p>
              Candidates can apply <strong>Online or Offline</strong>. <br />
              <strong>Application Fee:</strong> ₹1200 (non-refundable)
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-2">
              <li>Download offline form from <a href="https://www.imibharat.com" className="text-[#ea580c] underline">www.imibharat.com</a></li>
              <li>Attach self-attested copies of 10th, 12th, Graduation mark sheets</li>
              <li>Attach photo, ID, and achievement certificates (if any)</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="rounded-2xl shadow-md p-8 bg-white border-l-4 border-[#ea580c]">
            <h3 className="text-2xl font-semibold text-[#ea580c] mb-4">Step 2: Entrance Test (IMI-ET 2025)</h3>
            <p className="mb-4">IMI conducts a competitive 3-stage admission test:</p>
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Written Exam (100 Marks)</strong> – English, Media Awareness, GK, Logical Reasoning</li>
              <li><strong>Group Discussion (20 Marks)</strong> – Communication, teamwork, clarity</li>
              <li><strong>Personal Interview (30 Marks)</strong> – Confidence, motivation, personality</li>
            </ol>

            <p className="mt-4 font-semibold">Bonus Academic Credits (50 Marks)</p>
            <table className="w-full border text-sm mt-2">
              <thead className="bg-orange-100">
                <tr>
                  <th className="border px-3 py-2 text-left">Criteria</th>
                  <th className="border px-3 py-2 text-left">Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border px-3 py-2">Class 10th Performance</td><td className="border px-3 py-2">0–10</td></tr>
                <tr><td className="border px-3 py-2">Class 12th Performance</td><td className="border px-3 py-2">0–10</td></tr>
                <tr><td className="border px-3 py-2">Graduation Performance</td><td className="border px-3 py-2">0–10</td></tr>
                <tr><td className="border px-3 py-2">Extra-Curricular Activity</td><td className="border px-3 py-2">10</td></tr>
                <tr><td className="border px-3 py-2">Extraordinary Achievement</td><td className="border px-3 py-2">10</td></tr>
              </tbody>
            </table>
          </div>

          {/* Step 3 */}
          <div className="rounded-2xl shadow-md p-8 bg-orange-50 border-l-4 border-[#ea580c]">
            <h3 className="text-2xl font-semibold text-[#ea580c] mb-4">Step 3: Selection & Admission Offer</h3>
            <p>Shortlisted candidates receive confirmation via Email / WhatsApp / Courier.</p>
            <p>Seat booking: <strong>₹40,000 (non-refundable)</strong> within 7 working days.</p>
          </div>

          {/* Step 4 */}
          <div className="rounded-2xl shadow-md p-8 bg-white border-l-4 border-[#ea580c]">
            <h3 className="text-2xl font-semibold text-[#ea580c] mb-4">Step 4: Orientation & Document Verification</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>1 Valid ID Proof (Aadhaar / PAN / Passport / DL)</li>
              <li>5 Passport-size photos</li>
              <li>Original mark sheets & certificates</li>
              <li>Medical Fitness & Migration Certificate</li>
            </ul>
            <p className="mt-4 text-sm italic">
              All pending documents must be submitted within 60 days of joining.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Entrance Test Highlights ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-[#ea580c] mb-6 text-center">
          🎓 Entrance Test Highlights (IMI-ET 2025)
        </h2>
        <div className="overflow-x-auto bg-white shadow-md rounded-2xl border border-gray-200">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-orange-100 text-[#ea580c]">
              <tr>
                <th className="border px-3 py-2 text-left">Stage</th>
                <th className="border px-3 py-2 text-left">Component</th>
                <th className="border px-3 py-2 text-left">Marks</th>
                <th className="border px-3 py-2 text-left">Weightage</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Written Exam", "100", "50%"],
                ["2", "Group Discussion", "20", "10%"],
                ["3", "Personal Interview", "30", "15%"],
                ["4", "Academic Record", "30", "15%"],
                ["5", "Co-Curricular + Achievements", "20", "10%"],
              ].map((r, i) => (
                <tr key={i}>
                  <td className="border px-3 py-2">{r[0]}</td>
                  <td className="border px-3 py-2">{r[1]}</td>
                  <td className="border px-3 py-2">{r[2]}</td>
                  <td className="border px-3 py-2">{r[3]}</td>
                </tr>
              ))}
              <tr className="font-bold bg-orange-50">
                <td className="border px-3 py-2">Total</td>
                <td className="border px-3 py-2"></td>
                <td className="border px-3 py-2">200 Marks</td>
                <td className="border px-3 py-2">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-center mt-4 font-semibold text-[#ea580c]">
          📢 Top scorers may be eligible for IMI Merit Scholarships.
        </p>
      </section>

      {/* ===== Key Dates ===== */}
      <section className="bg-orange-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-[#ea580c] mb-6">📅 Key Dates (2025–26 Session)</h2>
          <ul className="space-y-2">
            <li>Application Opens: <strong>1st February 2025</strong></li>
            <li>Last Date to Apply: <strong>30th April 2025</strong></li>
            <li>Entrance Test: <strong>Mid-May 2025</strong></li>
            <li>GD & Interview: <strong>End of May 2025</strong></li>
            <li>Results: <strong>First Week of June 2025</strong></li>
            <li>Course Commencement: <strong>July 2025</strong></li>
          </ul>
        </div>
      </section>

      {/* ===== Why Choose Section ===== */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#ea580c] mb-6">🎯 Why Choose IMI Admission System?</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {[
            "Transparent, merit-based process",
            "Equal opportunity for English & Hindi medium students",
            "Focus on skill, ethics, and creativity – not just marks",
            "Online + offline accessibility for all applicants",
            "Industry-level evaluation for best selection",
          ].map((p, i) => (
            <p key={i} className="flex items-start gap-2">
              <FaCheckCircle className="text-[#ea580c] mt-1" /> {p}
            </p>
          ))}
        </div>
      </section>

      {/* ===== Dean’s Note ===== */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-[#ea580c] mb-4">💬 Dean’s Note</h2>
          <blockquote className="italic text-gray-700">
            “At IMI, our admission process isn’t just about eligibility — it’s about readiness.
            We look for passion, potential, and purpose in every student who walks in.”
            <br />— <strong>Shruti Dadhich</strong>, Dean & Director, IMI
          </blockquote>
        </div>
      </section>

      {/* ===== Contact Section ===== */}
      <section className="py-12 text-center bg-white">
        <h2 className="text-2xl font-bold text-[#ea580c] mb-3">📍 For Admission Queries</h2>
        <div className="space-y-2 text-lg">
          <p><FaPhoneAlt className="inline text-[#ea580c]" /> 0141-3510746 | 9024209393</p>
          <p><FaEnvelope className="inline text-[#ea580c]" /> admissions@imibharat.com</p>
          <p><FaGlobe className="inline text-[#ea580c]" /> www.imibharat.com</p>
        </div>
      </section>
    </div>
  );
}
