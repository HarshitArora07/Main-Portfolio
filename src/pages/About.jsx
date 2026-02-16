export default function About() {
  return (
    <section className="h-screen flex items-center bg-[#12325B] text-[#EAF4FF]">

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 w-full py-12 md:py-16">

        {/* ===== Heading Section ===== */}
        <div className="text-center md:text-left mb-10">

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-dmsans">
            Who Am I?
          </h2>

          <p className="text-[#BFD4E6] mt-5 max-w-[750px] text-sm md:text-base lg:text-lg leading-relaxed font-poppins mx-auto md:mx-0">
            I am a passionate and detail-oriented Full-Stack Developer
            with a strong foundation in modern web technologies including
            React, JavaScript, Node.js, and MongoDB. I enjoy building scalable,
            responsive, and user-friendly applications that solve real-world problems.
          </p>

        </div>

        {/* ===== Education + Experience Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

          {/* ---------- Education Card ---------- */}
          <div className="bg-[#173B6C] p-6 md:p-8 rounded-2xl shadow-lg">

            <h3 className="text-xl md:text-2xl font-semibold text-[#47C5E5] mb-5 font-montserrat tracking-wide">
              Education
            </h3>

            <h4 className="text-lg md:text-xl font-semibold font-dmsans">
              B.Tech in Computer Science
            </h4>

            <p className="text-[#BFD4E6] mt-2 font-poppins text-sm md:text-base">
              Sharda University
            </p>

            <p className="text-[#BFD4E6] mt-3 font-poppins text-sm md:text-base">
              2022 – 2026 | CGPA: 8.5+
            </p>

          </div>

          {/* ---------- Experience Card ---------- */}
          <div className="bg-[#173B6C] p-6 md:p-8 rounded-2xl shadow-lg">

            <h3 className="text-xl md:text-2xl font-semibold text-[#47C5E5] mb-5 font-montserrat tracking-wide">
              Experience
            </h3>

            <h4 className="text-lg md:text-xl font-semibold font-dmsans">
              Web Development Intern
            </h4>

            <p className="text-[#BFD4E6] mt-2 font-poppins text-sm md:text-base">
              Researchscrypt | 2025
            </p>

            <p className="text-[#BFD4E6] mt-3 font-poppins text-sm md:text-base leading-relaxed">
              Worked on frontend development, responsive design,
              and UI integration for production-level web applications.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
