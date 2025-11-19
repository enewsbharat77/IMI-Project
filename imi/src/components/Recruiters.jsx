import Image from "next/image";

export default function TopRecruiters() {
  const recruiters = [
    "/logo/logo1.png",
    "/logo/logo2.png",
    "/logo/logo3.png",
    "/logo/logo4.png",
    "/logo/logo5.webp",
    "/logo/logo6.png",
    "/logo/logo7.jpeg",
    "/logo/logo8.jpeg",
    "/logo/logo9.jpeg",
    "/logo/logo10.jpeg",
    "/logo/logo11.png",
    "/logo/logo12.png",
  ];

  return (
    <section className="py-16 bg-gray-50" id="recruiters">
      <div className="max-w-6xl mx-auto px-4">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Top Recruiters
          </h2>
          <p className="text-gray-600 mt-2">
            Our students have been placed in reputed media organizations
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {recruiters.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white border border-orange-400 rounded-lg shadow-orange-400 hover:shadow hover:scale-105 transition duration-300 w-[140px] h-[140px]"
            >
              <Image
                src={logo}
                alt={`Recruiter Logo ${index + 1}`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
