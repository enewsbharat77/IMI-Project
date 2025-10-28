"use client";
import Image from "next/image";

export default function ChairmanMessage() {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-[#ff782f] to-[#ff3b1f] text-white py-16 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
                    
                    {/* Left Side – Chairman Info */}
                    <div className="md:w-2/3">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3">
                            Welcome from the Chairman
                        </h1>
                        <h2 className="text-2xl font-semibold mb-2">
                            Mukesh S. Dadhich
                        </h2>
                        <p className="text-lg font-medium text-white/90">
                            Founder & Chairman,<br />
                            Innovative e-News Network (INN) & Innovative Media Institute (IMI)
                        </p>
                        <p className="italic text-white/80 mt-4">
                            “Where Innovation meets Integrity.”
                        </p>
                    </div>

                    {/* Right Side – IMI Logo */}
                    <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center md:justify-end">
                        <Image
                            src="https://enewsbharat.com/wp-content/uploads/2025/09/j2-e1758363637826.jpg"
                            alt="IMI Logo"
                            width={200}
                            height={200}
                            className="rounded-xl shadow-lg bg-white p-2"
                        />
                    </div>
                </div>
            </section>

            {/* Chairman’s Message Section */}
            <section className="max-w-6xl mx-auto py-12 px-6 md:px-10 leading-relaxed text-lg space-y-6">
                <p><em>Dear Prospective Student,</em></p>

                <p>
                    My heartfelt greetings to you, and congratulations on considering the{" "}
                    <strong>Innovative Media Institute (IMI)</strong> — a place where education meets evolution
                    and where every student learns not only how to report the truth, but how to{" "}
                    <em>redefine it</em>.
                </p>

                <p>
                    You are already halfway to success — because you have chosen not just a media institute,
                    but a <strong>movement</strong>. At IMI, we take care of the rest — preparing you to become
                    an industry leader, a storyteller with purpose, and a professional who combines skill,
                    conscience, and creativity.
                </p>

                {/* Section 1 */}
                <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
                    The Vision Behind IMI
                </h3>
                <p>
                    When we founded <strong>E-News Bharat</strong> more than a decade ago, we had only one
                    mission — to give people a voice that is fast, fearless, and factual.
                </p>
                <p>
                    From a small newsroom in Rajasthan to now reaching{" "}
                    <strong>over 10.5 million people daily through WhatsApp</strong>, our journey has been one
                    of courage, innovation, and relentless belief in ethical journalism.
                </p>
                <p>
                    The <strong>Innovative Media Institute (IMI)</strong> was born from that same vision — to
                    create a space where aspiring journalists, content creators, and communicators can learn
                    the real craft of digital media directly from those who practise it every day.
                </p>

                {/* Section 2 */}
                <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
                    Learning from Real Newsrooms, Not Just Classrooms
                </h3>
                <p>
                    IMI isn’t just about lectures and theory. It is a <strong>live laboratory</strong> powered by{" "}
                    <strong>INN (Innovative e-News Network)</strong>.
                </p>
                <p>
                    Our students work with cutting-edge production tools, AI-powered newsrooms, and digital
                    storytelling platforms — experiencing the speed, responsibility, and innovation that define
                    the media of tomorrow.
                </p>
                <p>
                    You will learn from <strong>mentors who are practitioners</strong> — journalists, anchors,
                    editors, and content strategists who live and breathe the profession.
                </p>

                {/* Section 3 */}
                <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
                    Preparing for the Future – Not Just for a Job
                </h3>
                <p>
                    The world of media is changing faster than ever — driven by{" "}
                    <em>artificial intelligence, OTT, social platforms, and immersive storytelling</em>.
                </p>
                <p>
                    Our curriculum integrates <strong>AI tools, data storytelling, digital production, and influencer strategy</strong>,
                    making you not just employable, but indispensable.
                </p>

                {/* Section 4 */}
                <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
                    Experiential Learning – From News to Reality
                </h3>
                <p>
                    Every IMI student is part of a <strong>working newsroom ecosystem</strong> from day one.
                    Your internship and projects won’t just be assignments — they will be{" "}
                    <strong>real stories with real impact</strong>.
                </p>
                <p>
                    That’s what makes IMI unique — we don’t just teach media; we live it.
                </p>

                {/* Section 5 */}
                <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
                    Our Commitment to Your Growth
                </h3>
                <p>
                    Over the next few years, IMI will emerge as one of{" "}
                    <strong>India’s most credible media learning hubs</strong>, deeply connected with real
                    industry practices.
                </p>
                <p>
                    We are already building partnerships with <strong>OTT platforms, digital agencies, and
                    international content studios</strong> to give our students global exposure.
                </p>

                {/* Section 6 */}
                <h3 className="text-2xl font-semibold text-[#ff782f] mt-8">
                    A Note from the Heart
                </h3>
                <p>
                    As someone who has lived every aspect of media — from field reporting to digital strategy,
                    from anchoring to entrepreneurship — I can assure you that there has never been a more
                    exciting time to be a journalist or a creator.
                </p>
                <p>
                    The stories you tell will define India’s digital democracy.
                    And we at IMI will ensure that your voice echoes with truth, impact, and pride.
                </p>

                {/* Closing */}
                <p className="text-lg italic text-center text-gray-700 mt-10">
                    “Welcome to IMI — the future of Indian journalism.”<br />
                    <span className="not-italic font-semibold">
                        Welcome to a place where Innovation meets Integrity.
                    </span>
                </p>

                <div className="text-center mt-10">
                    <p className="font-semibold text-gray-800">
                        Warm regards,
                    </p>
                    <p className="mt-2 text-xl font-semibold">Mukesh S. Dadhich</p>
                    <p>Founder & Chairman</p>
                    <p>Innovative e-News Network (INN)</p>
                    <p>Innovative Media Institute (IMI)</p>
                </div>
            </section>
        </div>
    );
}
