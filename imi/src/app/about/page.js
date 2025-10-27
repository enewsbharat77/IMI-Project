"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 text-gray-800 mt-1">
      {/* ===== Hero Section ===== */}
      <section className="relative bg-[#ea580c] text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#ea580c] opacity-95"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center md:justify-between gap-10">
          {/* Left Text Content */}
          <motion.div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              About{" "}
              <span className="text-yellow-300">
                Innovative e-News Network (INN)
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              India’s most dynamic and rapidly expanding digital news ecosystem
              — born from the vision to create fearless, fast, and people-driven
              journalism for the modern age.
            </p>

            <a
              href="#legacy"
              className="inline-block bg-white text-[#ea580c] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
            >
              Learn More
            </a>
          </motion.div>

          {/* Right Side Image */}
          <motion.div className="md:w-1/2 flex justify-center">
            <Image
              src="https://enewsbharat.com/wp-content/uploads/2025/08/logo.jpg"
              alt="INN Logo"
              width={500}
              height={400}
              className="rounded-2xl bg-white shadow-2xl border-4 border-white/20"
            />
          </motion.div>
        </div>
      </section>

      {/* ===== Legacy Section ===== */}
      <section id="legacy" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Our Legacy of Trust and Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Over the past 13 years, <b>E-News Bharat</b> has grown from a
            small-town digital newsroom in Malpura, Rajasthan, into a
            nationally recognized media brand, setting new standards in regional
            journalism.
            <br />
            Today, <b>INN</b> carries forward this legacy with pride — building
            a nationwide digital media framework that connects communities,
            amplifies voices, and drives real social impact.
            <br />
            With over <b>10.5 million active WhatsApp readers</b>, INN operates
            the <b>largest verified WhatsApp News Network in India</b>,
            delivering instant, credible, and relevant stories to every corner
            of the nation.
          </p>
        </div>
      </section>

      {/* ===== Philosophy Section ===== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            Our Philosophy: Innovation, Integrity, Impact
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            At INN, we believe journalism must evolve — not just with
            technology, but with empathy and responsibility.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                title: "Innovation",
                desc: "Redefining digital news through AI tools, OTT platforms, and mobile-first delivery.",
              },
              {
                title: "Integrity",
                desc: "Upholding ethics, neutrality, and factual accuracy in every story we publish.",
              },
              {
                title: "Impact",
                desc: "Creating journalism that changes lives, not just headlines.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-[#ea580c]"
              >
                <h3 className="text-xl font-bold text-[#ea580c] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== What Makes INN Different ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
            What Makes INN Different
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
            Unlike traditional media that migrated from print and TV,{" "}
            <b>INN was born digital</b>. It didn’t adapt to change — it created
            the change.
            <br />
            We pioneered <b>WhatsApp Slider News</b> in Rajasthan, transforming
            local journalism into real-time citizen engagement.
          </p>
          <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">
            INN bridges citizens and systems, countering misinformation,
            reuniting <b>178+ missing children</b>, and helping communities in
            crises — where <b>journalism and social responsibility coexist.</b>
          </p>
        </div>
      </section>

      {/* ===== Digital Powerhouse ===== */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
            Digital Powerhouse for the New India
          </h2>
          <ul className="text-gray-700 text-lg space-y-3 max-w-3xl mx-auto text-left md:text-center">
            <li><b>WhatsApp News Network</b> – 10.5M+ Subscribers</li>
            <li><b>OTT Integration (Jio TV & E-Bharat TV)</b></li>
            <li><b>Social Media Ecosystem</b> – YouTube, Instagram, X</li>
            <li><b>Podcasts & Shows</b> – Patlaiyan, Khare Fatafat, Sidhi Baat</li>
            <li><b>Digital Campaigns</b> – Harit Rajasthan, Impact Awards</li>
          </ul>
        </div>
      </section>

      {/* ===== INN Advantage (Table Style) ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
            The INN Advantage
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-left text-gray-700">
              <thead className="bg-[#ea580c] text-white">
                <tr>
                  <th className="p-3">Strength</th>
                  <th className="p-3">What It Means</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Largest WhatsApp News Network (10.5M)", "Fastest & most personal digital news reach in India"],
                  ["Born-Digital Ecosystem", "Mobile-first innovation from day one"],
                  ["Ground Report + Tech Integration", "Grassroots voices powered by data and AI tools"],
                  ["Public Impact Journalism", "Journalism that solves real problems"],
                  ["Social Responsibility", "Child rescue, community help, fact-checking"],
                  ["OTT Future Vision", "E-Bharat TV – India’s regional digital channel"],
                  ["Training & Empowerment", "Developing new-age digital journalists through INN programs"],
                ].map(([strength, meaning], i) => (
                  <tr key={i} className="border-t border-gray-200 hover:bg-gray-50">
                    <td className="p-3 font-semibold text-[#ea580c]">{strength}</td>
                    <td className="p-3">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== Vision Section ===== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Our Vision: The Digital Future of Indian Journalism
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
            INN envisions an India where every citizen has access to fast,
            factual, and fearless journalism — regardless of where they live.
          </p>
          <ul className="text-gray-700 text-lg space-y-3 max-w-3xl mx-auto text-left md:text-center">
            <li>• Expand WhatsApp audience to <b>25 million</b></li>
            <li>• Establish <b>INN Satellite & OTT Studio Network</b> nationwide</li>
            <li>• Train <b>10,000+ youth</b> in digital journalism</li>
            <li>• Build <b>NRI-led global patron network</b></li>
          </ul>
          <p className="mt-8 italic text-gray-700">
            “To make INN not just a media network, but a movement — powered by
            truth, driven by innovation, and sustained by people.”
          </p>
        </div>
      </section>

      {/* ===== Promise Section ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Our Promise
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            At INN, we don’t just inform — we inspire.  
            We don’t just broadcast — we build bridges.  
            We don’t just report — we reform.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our goal is to ensure every story makes an impact, every voice is
            heard, and every truth reaches the people who deserve to know it.
            <br />
            The <b>Innovative e-News Network (INN)</b> is the heartbeat of a new
            India — where digital journalism meets social consciousness.
          </p>
          <p className="mt-6 text-lg font-semibold text-[#ea580c]">
            INN – The Future of Indian Journalism.  
            <br />
            Born Digital. Powered by People. Trusted by Millions.
          </p>
        </div>
      </section>
    </div>
  );
}
