"use client";

import Link from "next/link";


export default function AlumniConnectPage() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-700 to-orange-600 text-white py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          IMI Alumni Connect – The Beginning of a Legacy
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          A space where every IMIan stays connected — sharing stories, memories, and the journey ahead.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-10 leading-relaxed">
        <p className="text-lg mb-4">
          Hey <strong>IMIans!</strong> It’s been just a few incredible years since our journey began, and already,{" "}
          <strong>IMI – Innovative Media Institute</strong> has built a growing family of changemakers shaping the media world with passion and purpose.
        </p>
        <p className="text-lg mb-4">
          Whether you are working with a news network, creating digital content, producing reels, or building your own media startup — you are and will always remain a part of the{" "}
          <em>IMI Universe.</em>
        </p>
        <p className="text-lg">
          This is your space to reconnect, share your story, and celebrate the milestones that started right here — at IMI.
        </p>
      </section>

      {/* Community Section */}
      <section className="bg-white py-16 px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the IMI Alumni Connect Community</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          <strong>IMI Alumni Connect</strong> isn’t just a directory — it’s a living community of creators, journalists, and leaders who once shared the same classrooms, studios, and dreams.
        </p>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Your journey reflects what IMI stands for — <strong>Innovation, Integrity, and Impact.</strong>
        </p>

        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl max-w-3xl mx-auto py-10 px-6 shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-orange-800">
            Stay in Touch for Exciting Updates
          </h3>
          <ul className="text-left max-w-md mx-auto list-disc list-inside text-gray-700 space-y-2">
            <li>Alumni Meets</li>
            <li>Media Talks & Masterclasses</li>
            <li>Mentorship Opportunities</li>
            <li>Annual Impact Awards</li>
            <li>Fun Reunions & Celebrations</li>
          </ul>
        </div>
      </section>

      {/* Connect Form Section */}
      <section className="bg-orange-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Stay Connected</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Take a minute to fill out your details below — it helps us keep you in the loop for all IMI Alumni activities and collaborations.
        </p>
        <Link
          href="https://forms.gle/imi-alumni-connect" // replace with real link
          target="_blank"
          className="inline-block bg-white text-orange-700 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-all shadow-lg"
        >
          🔗 Join the IMI Alumni Connect
        </Link>
      </section>

      {/* Why Stay Connected */}
      <section className="max-w-5xl mx-auto py-20 px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Stay Connected?</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <p>Get featured in IMI’s “Alumni Spotlight” stories on our website and social media.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <p>Be invited as a guest speaker or mentor for new batches.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <p>Network with media professionals and digital creators across India.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow border border-gray-100">
            <p>Access exclusive alumni benefits, collaborations, and event invites.</p>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gray-100 py-20 text-center px-6">
        <blockquote className="text-2xl italic font-semibold text-orange-800 mb-4">
          “Once an IMIan, always a part of the story.”
        </blockquote>
        <p className="text-lg text-gray-700">
          Stay proud. Stay connected. Stay innovative.
        </p>
        <div className="mt-8 text-gray-600">
          — <strong>Team IMI</strong> <br />
          Innovative Media Institute <br />
          <em>(A Unit of Innovative e-News Network – INN)</em>
        </div>
      </section>
    </main>
  );
}
