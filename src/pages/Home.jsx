import heroImg from "../assets/Home/h1.png";

export default function Home() {
  return (
    <section className="h-screen bg-[#12325B] text-[#EAF4FF] flex items-center relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start relative">
            <div className="absolute w-[240px] h-[280px] md:w-[320px] md:h-[360px] bg-[#47C5E5] rounded-[50px] -z-10"></div>

            <img
              src={heroImg}
              alt="Harshit"
              className="w-[240px] md:w-[320px] lg:w-[350px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            {/* Hello */}
            <p className="text-xl text-[#BFD4E6] mb-1 font-playfair italic tracking-wide font-bold">
  Hello I’m
</p>

            {/* Name */}
            <h1
              className="text-3xl md:text-5xl font-bold leading-tight mb-1"
              style={{ fontFamily: "DM Sans" }}
            >
              HARSHIT ARORA
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg md:text-2xl mb-3 font-playfair italic ">
  And I’m a{" "}
  <span className="text-[#47C5E5] font-orbitron not-italic font-bold">
    Web Developer
  </span>
</h2>

            {/* Paragraph */}
            <p
              className="text-[#BFD4E6] max-w-[520px] text-sm md:text-base leading-relaxed py-4"
              style={{ fontFamily: "DM Sans" }}
            >
              Passionate full-stack web developer with hands-on experience in React,
              JavaScript, technologies of backend, and UI/UX design. Proficient in building
              responsive, scalable web apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">

              <button
                className="bg-[#3DB4D7] text-[#12325B] px-8 py-2.5 tracking-wide hover:opacity-90 transition"
                style={{ fontFamily: "Montserrat" }}
              >
                HIRE ME
              </button>

              <button
                className="border-2 border-[#3DB4D7] px-8 py-2.5 tracking-wide hover:bg-[#3DB4D7] hover:text-[#12325B] transition"
                style={{ fontFamily: "Montserrat" }}
              >
                Contact me
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="absolute bottom-4 w-full flex justify-center text-[#BFD4E6] text-lg tracking-wide">
        <div className="flex gap-10 items-center" style={{ fontFamily: "Poppins" }}>
          <span>Scalable Apps</span>
          <span className="text-white">|</span>
          <span>Scalable Apps</span>
          <span className="text-white">|</span>
          <span>Scalable Apps</span>
          <span className="text-white">|</span>
          <span>Scalable Apps</span>
        </div>
      </div>

    </section>
  );
}
