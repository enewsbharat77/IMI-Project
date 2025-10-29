"use client";

import Image from "next/image";

export default function CorporateConnectPage() {
    return (
        <main className="bg-gray-50 text-gray-900">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-r from-orange-700 to-orange-600 text-white text-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Corporate Connect & Industry Interface
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl">
                    At <strong>Innovative Media Institute (IMI)</strong>, we believe true learning happens when classrooms meet boardrooms.
                </p>
            </section>

            {/* Overview */}
            <section className="max-w-6xl mx-auto py-16 px-6 md:px-10 leading-relaxed">
                <p className="text-lg mb-4">
                    Our <strong>Corporate Connect Program</strong> bridges students directly with industry leaders, innovators, and thinkers redefining India’s media, communication, and creative landscape.
                </p>
                <p className="text-lg mb-4">
                    Through interactive masterclasses, mentorship sessions, and workshops, IMI ensures every student experiences the pulse of the real world — from journalism and production to branding and leadership.
                </p>
            </section>

            <div className="space-y-16 max-w-6xl mx-auto px-6 md:px-10">

                {/* Isha Foundation */}
                <Workshop
                    title="Mental Wellness Workshop by Isha Foundation"
                    description="The Isha Foundation conducted a transformational session for IMI students on Mental Wellness and Inner Re-engineering. The workshop helped students strengthen inner clarity and emotional stability while learning simple meditation techniques to stay focused in fast-paced newsrooms."
                    quote="Strong minds make strong storytellers."
                    image="/isha.png"
                />

                {/* Harpreet Bhan */}
                <Workshop
                    title="The Secret of Success – A Session with Mr. Harpreet Bhan"
                    description="IMI students had an inspiring interaction with Mr. Harpreet Bhan, Certified Adizes Senior Associate & MD, India at Adizes Institute. His talk highlighted how heartfulness and happiness are essential to sustainable success."
                    quote="Success isn’t what you achieve — it’s how peaceful you feel while achieving it."
                    image="/har.png"
                    reverse
                />

                {/* Dr. Ruchi */}
                <Workshop
                    title="Physical Fitness & Posture for Media Professionals – By Dr. Ruchi Varshney"
                    description="Dr. Ruchi Varshney led a practical session on 'Posturing for Success' emphasizing correct posture, fitness, and breathing techniques to boost productivity and energy. Students learned how small physical habits can lead to big professional improvements."
                    quote="A confident posture builds a confident personality."
                    image="/ruchika.png"
                />

                {/* Heartfulness Workshop */}
                <Workshop
                    title="Heartfulness Workshop – Learning Amid Nature"
                    description="At IMI, we hosted the Heartfulness Workshop under open skies — a reminder that calm minds create powerful stories. Students engaged in meditation, mindful games, and team activities that built resilience, empathy, and emotional awareness."
                    quote="Calm minds create powerful stories."
                    image="/harash.png"
                    reverse
                />

                {/* Publicis Groupe */}
                <Workshop
                    title="Brand Building Masterclass by Mr. Hari Krishnan (Publicis Groupe India)"
                    description="Mr. Hari Krishnan, MD of Content & Groupé Marcomm at Publicis Groupe India, led a masterclass on Brand Building and Strategy. Students explored the 'Brand Wheel' framework and the art of brand positioning using icons like BMW vs. Mercedes."
                    quote="Every brand is a story. Every storyteller is a brand."
                    image="/last.png"
                />
            </div>

            {/* Gallery */}
            {/* <section className="bg-white py-20 px-6 md:px-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">🖼️ IMI Gallery – Moments That Inspire</h2>
                <p className="max-w-2xl mx-auto text-lg mb-10">
                    Snapshots from our learning universe — workshops, talks, and celebrations that shape the IMI experience.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        "/images/isha-workshop.jpg",
                        "/images/harpreet-bhan.jpg",
                        "/images/ruchi-varshney.jpg",
                        "/images/heartfulness.jpg",
                        "/images/publicis-masterclass.jpg",
                        "/images/festival.jpg",
                    ].map((src, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden rounded-2xl shadow">
                            <Image src={src} alt={`gallery-${i}`} fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Why It Matters */}
            <section className="bg-gray-100 py-20 px-6 md:px-10 text-center">
                <h2 className="text-3xl font-bold mb-6">Why Corporate Connect Matters at IMI</h2>
                <ul className="max-w-2xl mx-auto text-lg text-left list-disc list-inside space-y-3">
                    <li>Direct access to top professionals and organizations</li>
                    <li>Real-world exposure to industry expectations</li>
                    <li>Hands-on experience through live case studies</li>
                    <li>Mentorship for career clarity and creativity</li>
                    <li>Builds confidence, professionalism, and a lifelong network</li>
                </ul>
                <p className="italic text-xl mt-6 font-medium">
                    “At IMI, you don’t just learn about the media industry — you learn from it.”
                </p>
            </section>
        </main>
    );
}

/* Workshop component without animation */
function Workshop({ title, description, quote, image, reverse }) {
    return (
        <section className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8`}>
            <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">{title}</h3>
                <p className="text-lg mb-3">{description}</p>
                <blockquote className="italic text-orange-700 font-medium">“{quote}”</blockquote>
            </div>
            <div className="relative flex-1 aspect-video rounded-2xl overflow-hidden shadow-lg">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>
        </section>
    );
}
