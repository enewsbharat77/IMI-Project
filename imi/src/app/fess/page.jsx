import React from "react";

export default function FeeStructure() {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 md:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-600 mb-2">
            FEE STRUCTURE (Academic Year 2025–26)
          </h1>
          <p className="text-lg font-semibold text-gray-700">
            Innovative Media Institute (IMI)
          </p>
          <p className="italic text-gray-500">
            (A Unit of Innovative e-News Network – INN)
          </p>
        </div>

        {/* Fee Table */}
        <div className="overflow-x-auto mb-10">
          <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-xl overflow-hidden">
            <thead className="bg-red-600 text-white text-left">
              <tr>
                <th className="p-4">Sr. No.</th>
                <th className="p-4">Course</th>
                <th className="p-4">Duration</th>
                <th className="p-4">Total Fee (INR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  id: "1️⃣",
                  course: "Diploma in Mass Communication",
                  duration: "1 Year",
                  fee: "₹3,25,000 /-",
                },
                {
                  id: "2️⃣",
                  course: "Diploma in Broadcast Journalism",
                  duration: "1 Year",
                  fee: "₹2,80,000 /-",
                },
                {
                  id: "3️⃣",
                  course: "Diploma in Digital Media & Communication",
                  duration: "1 Year",
                  fee: "₹2,80,000 /-",
                },
                {
                  id: "4️⃣",
                  course: "Certificate in Presentation & Anchoring",
                  duration: "6 Months",
                  fee: "₹65,000 /-",
                },
                {
                  id: "5️⃣",
                  course: "Certificate in YouTube & OTT Storytelling",
                  duration: "6 Months",
                  fee: "₹75,000 /-",
                },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 transition">
                  <td className="p-4 font-semibold">{item.id}</td>
                  <td className="p-4">{item.course}</td>
                  <td className="p-4">{item.duration}</td>
                  <td className="p-4 text-red-600 font-semibold">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fee Includes */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Fee Includes:</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Academic Tuition Fee</li>
            <li>Studio & Production Access Charges</li>
            <li>Digital Lab & Equipment Usage</li>
            <li>Library & Resource Support</li>
            <li>Mentorship Sessions, Workshops, and Industry Visits</li>
          </ul>
          <p className="mt-3 text-gray-600 italic">
            All fees are inclusive of applicable taxes.
          </p>
        </div>

        {/* Payment Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Seat Booking & Payment Details
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Non-refundable seat booking amount:{" "}
              <strong>₹40,000</strong> (including taxes)
            </li>
            <li>Remaining fee payable in two installments before classes begin.</li>
            <li>
              Payment modes: <strong>Online / NEFT / Cheque / UPI</strong> (details
              shared upon selection)
            </li>
          </ul>
        </div>

        {/* Refund Policy */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-red-600 mb-4">REFUND POLICY</h2>
          <p className="text-gray-700 mb-4">
            At IMI, we maintain complete transparency in financial matters. However,
            due to limited seats and scheduled resources, our refund policy is as follows:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
             Refundable Security Deposit
          </h3>
          <p className="text-gray-700 mb-3">
            A refundable deposit of ₹5,000 (Equipment & Library) will be returned
            upon successful completion after submission of a{" "}
            <strong>No Dues Certificate</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-2">
             Non-Refundable Deposits
          </h3>
          <p className="text-gray-700 mb-3">
            The seat booking amount of ₹40,000 is <strong>strictly non-refundable</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">
             Withdrawal & Refund Timelines
          </h3>
          <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-800 text-left">
              <tr>
                <th className="p-3">Withdrawal Stage</th>
                <th className="p-3">Refund Eligibility</th>
                <th className="p-3">Standard Deduction</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-300">
              <tr>
                <td className="p-3">Before commencement of session</td>
                <td className="p-3">Eligible (Option A payees only)</td>
                <td className="p-3">₹50,000 + ₹40,000</td>
              </tr>
              <tr>
                <td className="p-3">After commencement of session</td>
                <td className="p-3 text-red-600">No refund</td>
                <td className="p-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes Section */}
        <div className="bg-gray-100 rounded-xl p-6 mb-10">
          <h3 className="text-2xl font-semibold text-red-600 mb-3">
             Additional Notes
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Classes may follow offline, online, or hybrid models.</li>
            <li>Schedule subject to revision due to unforeseen conditions.</li>
            <li>Admission remains provisional until document submission.</li>
            <li>Legal jurisdiction limited to Jaipur (Rajasthan).</li>
          </ul>
        </div>

        {/* Financial Ethos */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">Our Financial Ethos</h2>
          <p className="text-gray-700 italic max-w-3xl mx-auto">
            “At IMI, transparency, fairness, and student trust form the foundation of our
            financial policies. Every rupee invested is directed towards your learning,
            growth, and media excellence.”
          </p>
        </div>
      </div>
    </section>
  );
}
