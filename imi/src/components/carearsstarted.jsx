export default function GetYourCareerStarted() {
  return (
    <section className="relative bg-[#ea580c] text-white py-16 md:py-20 px-6 text-center overflow-hidden">
      {/* Background Pattern (optional subtle design) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#ea580c] to-[#f97316] opacity-90"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold">
          Get Your Career Started with IMI
        </h2>

        <p className="text-lg md:text-xl text-white/90 max-w-2xl">
          Join the Innovative Media Institute and unlock opportunities to work
          with India’s leading media houses. Learn, grow, and make your mark in
          the world of journalism, digital media, and communication.
        </p>

        <a
          href="/form"
          className="mt-6 bg-white text-[#ea580c] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Apply Now
        </a>
      </div>

      {/* Decorative Circles (optional for design depth) */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
}
