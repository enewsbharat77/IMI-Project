"use client"
import Image from "next/image"

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
      description: "Ensures students get real-time exposure to live production, studio setups, and media workflow.",
      image: "/faculty/j6.jpeg",
    },
    {
      name: "Mr. Sunil Choduary",
      position: "Video Editor ",
      description:
        "The creative mind behind IMI's visual storytelling. Helps students master lighting, editing, and impactful content creation.",
      image: "/faculty/fs2.png",
    },
    {
      name: "Mr. Naman Jain",
      position: "Software Developer",
      description: "Guides students in Developing website, help in making a Responsive and full fledge Website.",
      image: "/faculty/fac.png",
    },
    {
      name: "Mr. Paras Singhal",
      position: "BI analyst",
      description: "Guides how to transform raw business data into actionable insights for strategic decision-making",
      image: "/faculty/fp3.png",
    },
    {
      name: "Ms. Nisha Sharma",
      position: "HR Head",
      description:
        "Guides leads the human resources department and develops the overarching people strategy that aligns with the organization's business objectives",
      image: "/faculty/fn8.jpeg",
    },
    {
      name: "Mr. Harshit Vijayvargiya",
      position: "News Editor",
      description: "Guides journalism, editing, and media skills in both academic and professional settings",
      image: "/faculty/fh4.png",
    },
    {
      name: "Ms. Chandni Shakya",
      position: "Graphic Designer",
      description:
        "Guides leading classes or courses, sharing their professional knowledge and skills in areas like design principles, and portfolio development",
      image: "/faculty/fc6.png",
    },
  ]

  const team = [
    {
      name: "Hetshree Sharma",
      position: "Faculty – Media Writing",
      expertise: "Content Strategy, Creative Writing",
    },
    {
      name: "Navya Bohra",
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
  ]

  return (
    <section className="bg-gradient-to-b from-[#faf8f6] via-white to-[#f5f1ed] py-20 px-6 md:px-12">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <Image
          src="https://enewsbharat.com/wp-content/uploads/2025/08/imi.png"
          alt="IMI Logo"
          width={120}
          height={120}
          className="mx-auto mb-6"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-balance">Meet the Team</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          At <span className="text-orange-600 font-semibold">Innovative Media Institute (IMI)</span>, our strength lies
          in passionate educators and industry experts dedicated to shaping the future of journalism.
        </p>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Core Leadership Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-7xl mx-auto">
        {coreTeam.map((member, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 transform "
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            {/* Image Container with elegant border */}
            <div
              className="relative w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
              style={{ aspectRatio: "1 / 1.25" }}
            >
              <div className="absolute inset-0 p-3 pointer-events-none">
                <div className="w-full h-full rounded-lg border-2 border-orange-200 shadow-inner"></div>
              </div>
              <div className="absolute inset-0 p-4 pointer-events-none">
                <div className="w-full h-full rounded-xl border border-orange-100 opacity-50"></div>
              </div>

              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover rounded-2xl  transition-transform border-2 border-amber-400 "
              />
            </div>

            <div className="relative p-6 border-t border-gray-100 bg-white">
              <h3 className="text-lg font-bold text-gray-900 mb-2 text-balance">{member.name}</h3>
              <p className="text-sm font-semibold text-orange-600 mb-4 leading-relaxed">{member.position}</p>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{member.description}</p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* Academic & Operations Table */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">Academic & Operations Team</h2>

        <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-100">
          <table className="w-full text-left">
            <thead className="bg-gradient-to-r from-orange-600 to-orange-500 text-white">
              <tr>
                <th className="p-5 font-bold text-base">Name</th>
                <th className="p-5 font-bold text-base">Designation</th>
                <th className="p-5 font-bold text-base">Expertise Area</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-300 last:border-b-0"
                >
                  <td className="p-5 font-semibold text-gray-900">{member.name}</td>
                  <td className="p-5 text-gray-700">{member.position}</td>
                  <td className="p-5 text-gray-600">{member.expertise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="text-center mt-20 max-w-3xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-balance">
          Team IMI – A Culture of Creativity
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          At IMI, every member contributes to a newsroom culture of learning, innovation, and storytelling. We don't
          just produce graduates — we shape storytellers who redefine the nation's media narrative.
        </p>
        <p className="text-xl font-semibold text-orange-600 italic">
          "Together, we are IMI — where creativity meets credibility."
        </p>
      </div>
    </section>
  )
}
