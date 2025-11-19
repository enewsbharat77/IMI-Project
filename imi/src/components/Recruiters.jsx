import Image from "next/image";
import Link from "next/link";

export default function TopRecruiters() {
  const recruiters = [
    {
      name: "Times of India",
      logo: "https://enewsbharat.com/wp-content/uploads/2025/08/cropped-logo-1-1.png",
      link: "https://enewsbharat.com",
    },
    {
      name: "India Today",
      logo: "https://enewsbharat.com/wp-content/uploads/2025/08/logo.jpg",
      link: "https://innmedia.in/"
    },
    {
      name: "The Hindu",
      logo: "https://enewsbharat.com/wp-content/uploads/2025/08/logo3.jpg",
    },
    {
      name: "Zee News",
      logo: "https://enewsbharat.com/wp-content/uploads/2025/08/logo4.jpg",
    },
    {
      name: "Aaj Tak",
      logo: "/ajj tak.png",
    },
    {
      name: "newsnation",
      logo: "/News_nation_logo.webp",
    },
    {
      name: "RepIndia",
      logo: "/RepIndia.webp",
    },
    {
      name: "zee news",
      logo: "/zee-new.webp",
    },
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
          {recruiters.map((r, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white border border-orange-400 rounded-lg shadow-orange-400 hover:shadow hover:scale-105 transition duration-300"
            >
              {r.link ? (
                <Link href={r.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={r.logo}
                    alt={r.name}
                    width={150}
                    height={150}
                  />
                </Link>
              ) : (
                <Image
                  src={r.logo}
                  alt={r.name}
                  width={150}
                  height={150}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
