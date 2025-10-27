export default function TestimonialSection() {
  const testimonials = [
    {
      name: "Ravi Sharma",
      role: "Media Student",
      message: `IMI transformed my career. The mentors are experienced and the environment motivates creativity. 
      I got placed in a top media company even before completing the course! ` // repeated for long content
    },
    {
      name: "Priya Verma",
      role: "Alumni, Class of 2023",
      message: `The practical training and real newsroom experience at IMI gave me the confidence to handle real challenges in journalism.`
    },
    {
      name: "Arjun Singh",
      role: "Content Producer, India Today",
      message: `The faculty at IMI not only teaches theory but ensures you become industry ready. Truly a launchpad for media professionals.`
    },
  ];

  return (
    <section className="py-16 bg-gray-100" id="testimonials">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Students Say
          </h2>
          <p className="text-gray-600 mt-2">
            Hear from our talented students and alumni
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-2xl p-6 
                         flex flex-col justify-between items-center text-center
                         hover:shadow-xl transition-shadow duration-300
                         break-words"
            >
              {/* Orange Accents */}
              <div className="absolute top-0 left-0 w-10 h-10 bg-[#ea580c] rounded-tl-2xl rounded-br-[40px]"></div>
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#ea580c] rounded-tr-2xl rounded-bl-[40px]"></div>
              <div className="absolute bottom-0 left-0 w-10 h-10 bg-[#ea580c] rounded-bl-2xl rounded-tr-[40px]"></div>
              <div className="absolute bottom-0 right-0 w-10 h-10 bg-[#ea580c] rounded-br-2xl rounded-tl-[40px]"></div>

              {/* Scrollable Content for long text */}
              <div className="overflow-auto max-h-[500px]">
                <p className="text-gray-700 italic mb-4 mt-4">
                  “{t.message}”
                </p>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
