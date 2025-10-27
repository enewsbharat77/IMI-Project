"use client";
import Image from "next/image";

export default function AboutIMI() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ff782f] to-[#ff3b1f] text-white py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* IMI Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png" // 👈 Replace with your IMI logo path (e.g., /public/images/imi-logo.png)
              alt="IMI Logo"
              width={400}
              height={400}
              className="rounded-xl shadow-lg bg-white p-2"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Innovative Media Institute (IMI)
          </h1>
          <p className="text-lg italic text-white/90">
            “Learning from doers, not just dreamers.”
          </p>
        </div>

        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 "></div>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-10 leading-relaxed">
        <p className="text-lg text-justify mb-4">
          The <strong>Innovative Media Institute (IMI)</strong> was established
          in 2022 under the aegis of <strong>E-News Bharat</strong> and its
          visionary founder <strong>Mukesh S. Dadhich</strong>, one of India’s
          most influential names in digital journalism.
        </p>

        <p className="text-lg text-justify mb-4">
          IMI is a proud initiative of{" "}
          <strong>INN – Innovative e-News Network</strong>, India’s
          fastest-growing digital media organization with over{" "}
          <strong>10.5 million WhatsApp news subscribers</strong> and a bold
          reputation for fearless, people-first journalism.
        </p>

        <p className="text-lg text-justify">
          The institute was born out of a simple realization — that while media
          education in India has expanded, industry-ready, ethically grounded,
          and digitally skilled talent remains scarce. IMI bridges this gap by
          creating professionals who combine creativity with conscience.
        </p>
      </section>

      {/* Chairman Welcome Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#ff782f] mb-4 text-center">
            Welcome from the Chairman
          </h2>

          <div className="text-center mb-8">
            <p className="font-semibold text-gray-700">
              <strong>Mukesh S. Dadhich</strong>
              <br />
              Founder & Chairman, Innovative e-News Network (INN) & Innovative
              Media Institute (IMI)
            </p>
          </div>

          <div className="space-y-6 text-lg text-justify">
            <p>
              <em>Dear Prospective Student,</em>
            </p>
            <p>
              My heartfelt greetings to you, and congratulations on considering
              the <strong>Innovative Media Institute (IMI)</strong> — a place
              where education meets evolution and where every student learns not
              only how to report the truth, but how to{" "}
              <strong>redefine it</strong>.
            </p>
            <p>
              You are already halfway to success — because you have chosen not
              just a media institute, but a <strong>movement</strong>. At IMI,
              we prepare you to become a storyteller with purpose, guided by
              skill, conscience, and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-10">
        <h3 className="text-2xl font-semibold text-[#ff782f] mb-4">
          The Vision Behind IMI
        </h3>
        <p className="text-lg text-justify mb-4">
          When we founded <strong>E-News Bharat</strong> over a decade ago, our
          mission was simple — to give people a voice that is fast, fearless,
          and factual. From a small newsroom in Rajasthan to now reaching{" "}
          <strong>over 10.5 million people daily through WhatsApp</strong>, our
          journey has been one of courage, innovation, and ethical journalism.
        </p>
        <p className="text-lg text-justify">
          The <strong>Innovative Media Institute (IMI)</strong> was born from
          that same vision — to create a space where aspiring journalists,
          creators, and communicators can learn directly from real
          practitioners.
        </p>
      </section>

      {/* Learning Section */}
      <section className="bg-gray-100 py-12 px-6 md:px-10">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#ff782f] mb-4">
            Learning from Real Newsrooms, Not Just Classrooms
          </h3>
          <p className="text-lg text-justify mb-4">
            IMI is not just about lectures and theory. It’s a{" "}
            <strong>live newsroom laboratory</strong> powered by{" "}
            <strong>INN (Innovative e-News Network)</strong>. Our students work
            with cutting-edge production tools, AI-powered newsrooms, and
            real-time storytelling platforms.
          </p>
          <p className="text-lg text-justify">
            Here, education meets action — mentored by journalists, anchors,
            editors, and creators who shape India’s digital future every day.
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 md:px-10">
        <h3 className="text-2xl font-semibold text-[#ff782f] mb-4">
          A Note from the Heart
        </h3>
        <p className="text-lg text-justify mb-4">
          As someone who has lived every aspect of media — from field reporting
          to digital strategy, anchoring to entrepreneurship — I can assure you
          there has never been a more exciting time to be a journalist or a
          creator.
        </p>
        <p className="text-lg text-justify mb-4">
          The stories you tell will define India’s digital democracy. And we at
          IMI will ensure that your voice echoes with truth, impact, and pride.
        </p>
        <p className="font-semibold text-lg text-center mt-8">
          Welcome to <span className="text-[#ff782f]">IMI</span> — the future of
          Indian journalism.
          <br />
          Where <strong>Innovation meets Integrity.</strong>
        </p>
        <div className="text-center mt-6">
          <p className="font-semibold">
            Warm regards, <br />
            <strong>Mukesh S. Dadhich</strong> <br />
            Founder & Chairman <br />
            Innovative e-News Network (INN) <br />
            Innovative Media Institute (IMI)
          </p>
        </div>
      </section>
    </div>
  );
}
