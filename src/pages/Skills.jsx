import c1 from "../assets/Skills/c1.png";
import c2 from "../assets/Skills/c2.png";
import c3 from "../assets/Skills/c3.png";
import c4 from "../assets/Skills/c4.png";
import c5 from "../assets/Skills/c5.png";

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#12325B] text-[#EAF4FF] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#47C5E5] mb-10 font-dmsans">
              Tech Stack
            </h2>

            <div className="grid grid-cols-2 gap-6 auto-rows-fr">


              {/* ================= Languages ================= */}
              <div className="bg-[#E6E6E6] text-[#12325B] p-5 sm:p-6 md:p-8 rounded-3xl h-full flex flex-col">

                <h3 className="text-2xl font-semibold mb-6">Languages</h3>

                <div className="grid grid-cols-2 gap-4">
                  {["Java","Python","C","JavaScript","HTML","CSS","SQL"].map((item, index) => (
                    <span
                      key={index}
                      className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ================= Frameworks ================= */}
              <div className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl h-full flex flex-col">

                <h3 className="text-2xl font-semibold mb-6">
                  Frameworks & Libraries
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {["React.js","Node.js","Express.js","MongoDB","JavaScript"].map((item, index) => (
                    <span
                      key={index}
                      className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ================= Developer Tools ================= */}
              <div className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl h-full flex flex-col">

                <h3 className="text-2xl font-semibold mb-6">
                  Developer Tools
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {["Git","GitHub","VS Code"].map((item, index) => (
                    <span
                      key={index}
                      className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ================= Soft Skills ================= */}
              <div className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl h-full flex flex-col">

                <h3 className="text-2xl font-semibold mb-6">
                  Soft Skills
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    "Problem Solving",
                    "Team Collaboration",
                    "Time Management",
                    "Quick Learner"
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#47C5E5] mb-10 font-dmsans text-center lg:text-left">
              Certifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[c1, c2, c3, c4, c5].map((cert, index) => (
                <div key={index} className="bg-white p-3 rounded-xl shadow-md">
                  <img
                    src={cert}
                    alt={`certificate-${index}`}
                    className="w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
