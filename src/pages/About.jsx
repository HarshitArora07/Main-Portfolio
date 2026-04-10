import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/About/a.png";

export default function About() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // trigger only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (headingRef.current) observer.observe(headingRef.current);
  }, []);

  return (
    <section className="text-[#EAF4FF] pb-6 md:pb-10 relative overflow-visible">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 w-full">

        {/* ===== Heading + Paragraph Section ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-4 md:mb-5">
          
          {/* Heading + Paragraph */}
          <div className="flex-1 text-center md:text-left space-y-2 md:space-y-4">
            <h2
              ref={headingRef}
              className={`text-2xl md:text-4xl lg:text-5xl font-bold font-poppins transition-all duration-1000
                ${animate ? "animate-slideInLeft opacity-100" : "opacity-0"}
              `}
            >
              Who Am I?
            </h2>

            <p
              ref={paragraphRef}
              className={`text-[#BFD4E6] mt-2 md:mt-5 max-w-[750px] font-montserrat text-justify md:text-left text-xs md:text-base lg:text-lg leading-relaxed mx-auto md:mx-0 transition-all duration-1000
                ${animate
                  ? "lg:animate-slideIn opacity-100 animate-slideUpLine delay-200"
                  : "opacity-0"
                }`}
            >
              I am a passionate and detail-oriented <span className="text-white font-semibold">Full-Stack Developer</span>
              with a strong foundation in modern web technologies including {" "}
              <span className="text-[#47C5E5] font-bold font-orbitron drop-shadow-[0_0_8px_rgba(71,197,229,0.5)]">React</span>, <span className="text-[#47C5E5] font-bold font-orbitron drop-shadow-[0_0_8px_rgba(71,197,229,0.5)]">JavaScript</span>, {" "} 
              <span className="text-[#47C5E5] font-bold font-orbitron drop-shadow-[0_0_8px_rgba(71,197,229,0.5)]">Node.js</span>, and <span className="text-[#47C5E5] font-bold font-orbitron drop-shadow-[0_0_8px_rgba(71,197,229,0.5)]">MongoDB</span>. 
              I enjoy building scalable,
              responsive, and user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* Desktop Image */}
          <div
  ref={imageRef}
  className={`hidden lg:block ml-6 flex-shrink-0
    ${animate ? "animate-floatInOut opacity-100" : "opacity-0"}
  `}
>

            <img
              src={aboutImg}
              alt="About Me"
              className="h-full max-h-[250px] object-contain"
            />
          </div>
        </div>

        {/* ===== Education + Experience Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2 md:mt-0">
          {/* Education Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className={`card-3d bg-white/5 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg flex flex-col
  transform transition-[transform,box-shadow,border-color] duration-400 ease-out
  border border-white/10
  hover:border-white/30
  hover:-translate-y-2
  hover:scale-[1.015]
  hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)]
  ${animate ? "animate-slideUpCard opacity-100" : "opacity-0"}
`}
          >
            <h3 className="text-lg md:text-2xl font-semibold text-[#BFD4E6] mb-2 md:mb-5 font-poppins tracking-wide">
              Education
            </h3>
            <h4 className="text-base md:text-xl font-semibold font-montserrat text-white">
              B.Tech in Computer Science
            </h4>
            <p className="text-[#47C5E5] mt-2 font-montserrat text-sm md:text-base font-medium">
              Sharda University
            </p>
            <p className="text-[#BFD4E6] mt-2 md:mt-3 font-montserrat text-sm md:text-base opacity-80">
              2022 – 2026 | CGPA: 8.5+
            </p>
          </div>

          {/* Experience Card (Highlighted Internship) */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className={`card-3d relative bg-gradient-to-br from-[#102b54] to-[#173B6C] p-4 md:p-8 rounded-xl md:rounded-2xl shadow-xl flex flex-col
  transform transition-[transform,box-shadow,border-color] duration-400 ease-out
  border-2 border-[#47C5E5]
  hover:-translate-y-2
  hover:scale-[1.02]
  hover:shadow-[0_0_30px_rgba(71,197,229,0.3)]
  ${animate ? "animate-slideUpCard opacity-100 delay-150" : "opacity-0"}
`}
          >

            <h3 className="text-lg md:text-2xl font-bold text-[#47C5E5] mb-2 md:mb-5 font-poppins tracking-wide flex items-center gap-2">
              Experience
              <span className="h-2 w-2 rounded-full bg-[#47C5E5] animate-ping"></span><span className="h-2 w-2 rounded-full bg-[#47C5E5] animate-ping"></span><span className="h-2 w-2 rounded-full bg-[#47C5E5] animate-ping"></span><span className="h-2 w-2 rounded-full bg-[#47C5E5] animate-ping"></span>
            </h3>
            <h4 className="text-lg md:text-2xl font-bold font-montserrat text-white shadow-sm">
              Web Development Intern
            </h4>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="text-[#102b54] bg-[#47C5E5] font-bold px-2 py-0.5 rounded text-sm md:text-base tracking-wide">Researchscrypt</span>
              <span className="text-[#47C5E5] text-sm md:text-base font-semibold">| 2025</span>
            </div>
            
            <div className="mt-3 md:mt-5 bg-[#173B6C]/50 p-3 md:p-4 rounded-lg md:rounded-xl border border-[#47C5E5]/20 backdrop-blur-[2px]">
              <p className="text-[#EAF4FF] font-montserrat text-sm md:text-base leading-relaxed">
                Worked on frontend development, responsive design,
                and UI integration for production-level web applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes slideUpLine {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(90px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideUpCard {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
            @keyframes floatInOut {
  0% {
    transform: translateX(60px);
    opacity: 0;
  }

  20% {
    transform: translateX(0);
    opacity: 1;
  }

  60% {
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    transform: translateX(60px);
    opacity: 0;
  }
}

.animate-floatInOut {
  animation: floatInOut 2.8s ease-in-out infinite;
}


            
          .animate-slideUpLine { animation: slideUpLine 0.6s ease-out forwards; }
          .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
          .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
          .animate-slideUpCard { animation: slideUpCard 0.8s ease-out forwards; }
          .animate-zoomIn { animation: zoomIn 0.8s ease-out forwards; }
        `}
      </style>
    </section>
  );
}
