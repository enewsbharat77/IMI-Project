export default function WelcomeSection() {
  return (
    <section className="w-full relative mt-5">
      {/* Orange Background */}
      <div className="w-full bg-[#FF6633] h-[600px] md:h-[400px] lg:h-[300px]"></div>

      {/* White Content Box */}
      <div className=" flex justify-center items-center flex-col  max-w-3/4 mx-auto px-4 py-8 
                      bg-white shadow-lg shadow-black rounded-lg
                      absolute inset-x-0 
                      top-1/2 md:top- lg:top-[40px]
                      transform -translate-y-1/2 md:-translate-y-1/3 lg:-translate-y-1/4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-orange-500 text-center md:text-left">
          Welcome to IMI
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-gray-700 text-center md:text-left">
          Nurturing Talent Innovating Future
        </h2>
        <p className="text-base sm:text-lg md:text-lg text-gray-600">
          "Innovative News Network inception in 2014 was a result of the e News Group 
          recognizing the dearth of industry-ready, skilled talent in journalism. 
          The e News Group strength of bringing high quality content to audiences 
          is driving IMI to enhance the media profession as a whole."
        </p>
      </div>
    </section>
  );
}
