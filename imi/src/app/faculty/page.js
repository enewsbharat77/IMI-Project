"use client";
import Image from "next/image";

export default function FacultySection() {
  const coreTeam = [
    {
      name: "Mr. Mukesh S. Dadhich",
      position: "Founder & Chairman – Innovative e-News Network (INN)",
      description:
        "Visionary Leader | Senior Journalist | Media Entrepreneur. With over 13 years of fearless journalism and digital innovation, Mukesh Dadhich stands as the driving force behind E-News Bharat and Innovative Media Institute (IMI).",
      image: "/mukesh.jpg",
    },
    {
      name: "Mrs. Shruti Dadhich",
      position: "Dean & Director – Innovative Media Institute (IMI)",
      description:
        "Media Mentor | Communication Expert | HR & Marketing Head, E-News Bharat. A dynamic professional ensuring holistic growth of students through empathy and excellence.",
      image: "/shruti.jpg",
    },
    {
      name: "Mr. Tushar Prajapat",
      position: "Video Editor & Digital Media Specialist",
      description:
        "The creative mind behind IMI’s visual storytelling. Helps students master lighting, editing, and impactful content creation.",
      image: "/tushar.jpg",
    },
    {
      name: "Ms. Nandini Nama",
      position: "Anchor & Program Coordinator",
      description:
        "Guides students in anchoring, public speaking, and on-screen presence with confidence and clarity.",
      image: "/nandini.jpg",
    },
    {
      name: "Mr. Dipanshu Saini",
      position: "Digital Engagement & Social Media Strategist",
      description:
        "Teaches digital audience engagement, content algorithms, and modern storytelling techniques.",
      image: "/dipanshu.jpg",
    },
    {
      name: "Mr. Harshit Sharma",
      position: "Program Coordinator & Studio Manager",
      description:
        "Ensures students get real-time exposure to live production, studio setups, and media workflow.",
      image: "/harshit.jpg",
    },
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
          👥 Meet the Team – The Visionaries Behind IMI
        </h1>
        <p className="text-gray-600 leading-relaxed">
          At <span className="text-orange-500 font-semibold">Innovative Media Institute (IMI)</span>, our strength lies in the people who lead it.
          Every member brings real-world media experience, creativity, and a passion for empowering the next generation of journalists.
        </p>
      </div>

      {/* Core Leadership */}
      <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">
        🌟 Core Leadership Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {coreTeam.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300"
          >
            <div className="relative w-full h-64">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-sm text-orange-600 mb-2">{member.position}</p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Academic & Operations Table */}
      <div className="overflow-x-auto">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-6">
          💫 Academic & Operations Team
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
          🏆 Team IMI – A Culture of Creativity and Collaboration
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
