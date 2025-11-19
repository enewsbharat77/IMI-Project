"use client";
import Image from "next/image";

export default function FacultySection() {
  const coreTeam = [
    {
      name: "Mr. Mukesh S. Dadhich",
      position: "Founder & Chairman – Innovative e-News Network (INN)",
      description:
        "Visionary Leader | Senior Journalist | Media Entrepreneur. With over 13 years of fearless journalism and digital innovation, Mukesh Dadhich stands as the driving force behind E-News Bharat and Innovative Media Institute (IMI).",
      image: "/faculty/j2.jpg",
    },
    {
      name: "Mrs. Shruti Dadhich",
      position: "Dean & Director – Innovative Media Institute (IMI)",
      description:
        "Media Mentor | Communication Expert | HR & Marketing Head, E-News Bharat. A dynamic professional ensuring holistic growth of students through empathy and excellence.",
      image: "/faculty/j4.jpg",
    },
    {
      name: "Mr. Arpit Dadhich",
      position: "Program Coordinator & Studio Manager",
      description:
        "Ensures students get real-time exposure to live production, studio setups, and media workflow.",
      image: "/faculty/j3.jpeg",
    },
    {
      name: "Mr. Sunil Choduary",
      position: "Video Editor ",
      description:
        "The creative mind behind IMI’s visual storytelling. Helps students master lighting, editing, and impactful content creation.",
      image: "/faculty/fs2.png",
    },
    {
      name: "Mr. Naman Jain",
      position: "Software Developer",
      description:
        "Guides students in Developing website, help in making a Responsive and full fledge Website.",
      image: "/faculty/fn1.png",
    },
    {
      name: "Mr. Paras Singhal",
      position: "BI analyst",
      description:
        "Teaches how to transform raw business data into actionable insights for strategic decision-making",
      image: "/faculty/fp3.png",
    },
    {
      name: "Ms. Nisha Sharma",
      position: "Hr Head",
      description:
        "Teaches leads the human resources department and develops the overarching people strategy that aligns with the organization's business objectives",
      image: "/faculty/fn5.jpeg",
    },
    {
      name: "Mr. Harshit Vijayvargiya",
      position: "News Editor",
      description:
        "Teaches journalism, editing, and media skills in both academic and professional settings",
      image: "/faculty/fh4.png",
    },
    {
      name: "Ms. Chandni Shakya",
      position: "Graphic Designer",
      description:
        "Teaches leading classes or courses, sharing their professional knowledge and skills in areas like design principles, and portfolio development",
      image: "/faculty/fc6.png",
    }
  ];

  const team = [
    {
      name: "Ambika Sharma",
      position: "Faculty – Media Writing",
      expertise: "Content Strategy, Creative Writing",
    },
    {
      name: "Sonia Sharma",
      position: "Faculty – Political Journalism",
      expertise: "Reporting & Research",
    },
    {
      name: "Ranu Singh",
      position: "IT Infrastructure Lead",
      expertise: "Technical Operations",
    },
    {
      name: "Jitendra Singh Rathore",
      position: "Industry Mentor",
      expertise: "Field Reporting & Regional Journalism",
    },
    {
      name: "Kamaruddin Bugadiya",
      position: "Senior Correspondent Mentor",
      expertise: "Rural Reporting",
    },
    {
      name: "Bhagirath Bairagi",
      position: "Faculty – Public Communication",
      expertise: "Event & Outreach Management",
    },
  ];

  return (
    <section className="bg-[#fff7f3] py-16 px-6 md:px-20">
      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <Image
          src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
          alt="IMI Logo"
          width={400}
          height={400}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Meet the Team – The Visionaries Behind IMI
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At <span className="text-orange-500 font-semibold">Innovative Media Institute (IMI)</span>, our strength lies in the people who lead it.
          Every member brings real-world media experience, creativity, and a passion for empowering the next generation of journalists.
        </p>
      </div>

      {/* Core Leadership */}
      <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">
        Core Leadership Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
        {coreTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 max-w-xs mx-auto w-full border-t-4 border-orange-500 hover:border-4 hover:border-orange-500 hover:scale-105"
          >
            <div className="relative w-full h-64 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
              <div className="absolute inset-0 border-8 border-white pointer-events-none z-10"></div>
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-contain p-3"
              />
            </div>
            <div className="p-5 text-center border-t-2 border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-xs text-orange-600 mb-3 font-medium">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Academic & Operations Table */}
      <div className="overflow-x-auto">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-6">
          Academic & Operations Team
        </h2>
        <table className="w-full text-left border-collapse shadow-lg bg-white rounded-xl overflow-hidden">
          <thead className="bg-orange-500 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Designation</th>
              <th className="p-4">Expertise Area</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member, index) => (
              <tr
                key={index}
                className="border-b border-gray-200 hover:bg-orange-50 transition"
              >
                <td className="p-4 font-semibold text-gray-800">{member.name}</td>
                <td className="p-4 text-gray-600">{member.position}</td>
                <td className="p-4 text-gray-600">{member.expertise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Closing Note */}
      <div className="text-center mt-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-orange-600 mb-3">
          Team IMI – A Culture of Creativity and Collaboration
        </h3>
        <p className="text-gray-700 leading-relaxed">
          At IMI, every member contributes to a newsroom culture of learning, innovation, and storytelling.
          We don’t just produce graduates — we shape storytellers who redefine the nation’s media narrative.
        </p>
        <p className="mt-6 text-lg font-semibold text-gray-900 italic">
          “Together, we are IMI — where creativity meets credibility.”
        </p>
      </div>
    </section>
  );
}
