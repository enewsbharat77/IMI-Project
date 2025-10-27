"use client";
import Image from "next/image";

export default function DeanMessage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#ff782f] to-[#ff3b1f] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          
          {/* Left Side – Dean Info */}
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              Welcome from the Dean
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
              Shruti Dadhich
            </h2>
            <p className="text-lg font-medium text-white/90">
              Dean & Director,<br />
              Innovative Media Institute (IMI)
            </p>
            <p className="italic text-white/80 mt-4">
              “Where your story begins, and the world starts listening.”
            </p>
          </div>

          {/* Right Side – IMI Logo */}
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
            <Image
              src="https://enewsbharat.com/wp-content/uploads/2025/09/j4.jpg"
              alt="IMI Logo"
              width={200}
              height={200}
              className="rounded-xl shadow-lg bg-white p-2"
            />
          </div>
        </div>
      </section>

      {/* Dean’s Message Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-10 leading-relaxed text-lg space-y-6">
        <p><em>Dear Students,</em></p>
        <p>
          Welcome to a space where ideas breathe, voices matter, and stories have power.
          At the <strong>Innovative Media Institute (IMI)</strong>, you are not just
          entering a classroom — you are stepping into a newsroom of possibilities.
        </p>
        <p>
          In today’s media world, change is not an event — it’s a rhythm. Every sunrise brings
          a new tool, a new trend, a new truth to tell. And that’s why, at IMI, we don’t prepare
          you for what was — we prepare you for what will be.
        </p>

        {/* Section 1 */}
        <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
          Learning to Unlearn
        </h3>
        <p>
          Our first goal is to help you <strong>unlearn the limits</strong> that
          society, systems, and even education may have placed on you. Because before
          you become a journalist, creator, or storyteller — you must first discover yourself.
        </p>
        <p>
          We will challenge your assumptions, question your comfort, and help you rediscover
          the raw voice within you — a voice that the world deserves to hear. This journey will
          not just be about skill, but about <strong>self-realisation, empathy, and expression.</strong>
        </p>

        {/* Section 2 */}
        <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
          The IMI Way of Learning
        </h3>
        <p>
          Here at IMI, learning happens in <strong>real time, inside a real newsroom.</strong>
          You will not just read about news — you will <strong>create</strong> it. You will not
          just analyse trends — you will <strong>set</strong> them.
        </p>
        <p>
          Our mentors — experienced journalists, producers, and digital creators — work beside you,
          not above you. You will explore everything from <strong>broadcast journalism</strong> to{" "}
          <strong>digital storytelling, podcasting</strong> to <strong>social campaigns</strong>,
          and even how <strong>artificial intelligence</strong> is reshaping the newsroom of the future.
        </p>

        {/* Section 3 */}
        <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
          Finding Your Passion, Finding Your Voice
        </h3>
        <p>
          In the chaos of career choices, we will help you find something more permanent —{" "}
          <strong>your purpose.</strong> If you truly love what you do, work stops feeling like work
          — it becomes your identity.
        </p>
        <p>
          That’s our mission: to help you turn your passion into a powerful, purposeful career.
          Whether you dream to anchor on screen, create viral content, design campaigns, or lead
          digital innovation — IMI will give you the wings, but also teach you how to steer them.
        </p>

        {/* Section 4 */}
        <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
          The Spirit of IMI
        </h3>
        <p>
          We are a community that believes in <strong>creativity with conscience.</strong>
          Our classrooms are filled with discussion, debate, laughter, curiosity, and courage.
        </p>
        <p>
          We encourage you to make mistakes — and then make history out of them.
          We want you to graduate not only as skilled professionals but as{" "}
          <strong>empathetic human beings</strong> — grounded, self-aware, and ready to make a difference.
        </p>

        {/* Closing */}
        <p className="text-lg italic text-center text-gray-700 mt-10">
          “At IMI, we don’t just train communicators — we shape catalysts.”
          <br />
          <span className="not-italic font-semibold">
            Your journey here will not just change your résumé, it will change your perspective.
          </span>
        </p>

        <div className="text-center mt-10">
          <p className="font-semibold text-gray-800">
            May your mind grow with wisdom, your words carry truth, and your
            heart forever stay curious.
          </p>
          <p className="mt-6 text-lg font-medium text-[#ff782f]">
            Welcome to IMI — where your story begins, and the world starts listening.
          </p>
          <div className="mt-6">
            <p className="font-semibold">
              With warmth and pride, <br />
              <strong>Shruti Dadhich</strong> <br />
              Dean & Director <br />
              Innovative Media Institute (IMI) <br />
              <span className="text-gray-600 text-sm">
                (A Unit of Innovative e-News Network – INN)
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
