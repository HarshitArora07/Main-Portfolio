import React, { useState, useEffect } from "react";
import heroImg from "../assets/Home/h1.png";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const titles = [
    "Web Developer",
    "Full-Stack Developer",
    "Front-End Developer",
    "Web Master",
  ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);


  useEffect(() => {
    const handleType = () => {
      const fullText = titles[titleIndex];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex, speed, titles]);

  return (
    <section
      className="md:h-screen text-[#EAF4FF] flex items-center relative overflow-hidden"
      style={{ minHeight: "calc(var(--vh, 1vh) * 100)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 w-full">
        {/* MAIN WRAPPER - Overlapping Glassmorphism on Mobile, Grid on Desktop */}
        <div className="flex flex-col md:grid md:grid-cols-2 items-center justify-center relative w-full pt-10 md:pt-0">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center items-center flex-shrink-0 animate-heroImage relative z-0 md:-mr-10 drop-shadow-[0_0_30px_rgba(71,197,229,0.3)] pb-2">
            <img
              src={heroImg}
              alt="Harshit"
              className="w-[200px] xs:w-[240px] sm:w-[280px] md:w-full md:max-w-[380px] h-auto object-contain transition-all duration-700 hover:scale-105 md:[mask-image:linear-gradient(to_top,transparent_2%,black_80%)] md:[-webkit-mask-image:linear-gradient(to_top,transparent_2%,black_80%)]"
            />
          </div>

          {/* RIGHT CONTENT - Floating Glass Card on Mobile */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left space-y-2 sm:space-y-3 md:space-y-4 flex-1 min-w-0
            -mt-10 xs:-mt-12 sm:-mt-14 md:mt-0 
            bg-[#0F2243]/60 md:bg-transparent
            backdrop-blur-xl md:backdrop-blur-none
            border border-[#47C5E5]/20 md:border-transparent
            rounded-[2rem] md:rounded-none
            p-6 xs:p-8 md:p-0
            w-[92%] sm:w-[85%] md:w-full
            shadow-[0_15px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] md:shadow-none
          ">

            {/* STATUS BADGE - Mobile Only Flashy Touch */}
            <div className="md:hidden inline-flex items-center gap-2 px-4 py-1.5 mb-1 rounded-full bg-[#47C5E5]/10 border border-[#47C5E5]/30 shadow-[0_0_15px_rgba(71,197,229,0.2)] animate-slideInUp" style={{ animationDelay: "0.1s" }}>
               <span className="w-2 h-2 rounded-full bg-[#47C5E5] animate-ping" style={{ animationDuration: "2s" }}></span>
               <span className="absolute w-2 h-2 rounded-full bg-[#47C5E5]"></span>
               <span className="text-[#47C5E5] text-[10px] sm:text-xs font-orbitron tracking-widest uppercase font-bold">Open to Work</span>
            </div>

            <p
              className="text-base sm:text-lg text-[#BFD4E6] font-playfair italic tracking-wide font-bold animate-slideInUp md:-mb-4 lg:-mb-5 hidden md:block"
              style={{ animationDelay: "0.2s" }}
            >
              Hello I’m
            </p>
            <p
              className="text-sm xs:text-base text-[#47C5E5] font-orbitron tracking-widest uppercase animate-slideInUp md:hidden"
              style={{ animationDelay: "0.2s" }}
            >
              Hi there, I’m
            </p>

            {/* NAME */}
            <h1
              className="text-[clamp(1.8rem,7vw,3.5rem)] font-playfair leading-tight animate-slideInUp tracking-wider"
              style={{
                animationDelay: "0.4s",
                color: "#EAF4FF",
                textShadow: "0 0 10px rgba(71,197,229,0.8), 0 0 20px rgba(71,197,229,0.4)",
              }}
            >
              HARSHIT ARORA
            </h1>

            {/* TYPEWRITER TITLE */}
            <h2
              className="font-playfair italic animate-slideInUp flex flex-row items-center justify-start w-full max-w-[95%] md:max-w-[520px] whitespace-nowrap md:-mt-3 lg:-mt-4"
              style={{ animationDelay: "0.6s" }}
            >
              <span className="text-[clamp(0.85rem,3.5vw,1.35rem)] text-[#EAF4FF] md:text-white mr-1.5 md:mr-2">And I’m a </span>
              <span className="text-[clamp(0.9rem,4vw,1.5rem)] text-[#47C5E5] font-orbitron not-italic font-bold drop-shadow-md relative flex items-center h-6 sm:h-8">
                {text}
                <span className="border-r-2 border-[#47C5E5] animate-blink mx-1 h-[70%] md:h-[80%]"></span>
              </span>
            </h2>

            {/* BIO TEXT */}
            <p
              className="text-[#BFD4E6] text-xs xs:text-sm md:text-base leading-relaxed md:leading-loose text-justify max-w-[95%] md:max-w-[520px] pt-2 pb-3 md:py-2 animate-slideInUp opacity-90"
              style={{ fontFamily: "DM Sans", animationDelay: "0.8s" }}
            >
              Passionate full-stack web developer with hands-on experience in
              React, JavaScript, technologies of backend, and UI/UX design.
              Proficient in building responsive, scalable web apps.
            </p>

            {/* BUTTONS */}
            <div
              className="flex flex-row flex-wrap justify-center md:justify-start gap-3 sm:gap-4 animate-slideInUp w-full px-2 md:px-0"
              style={{ animationDelay: "1s" }}
            >
              {/* HIRE ME BUTTON */}
              <button
                className="flex-1 max-w-[160px] md:flex-none bg-gradient-to-r from-[#3DB4D7] to-[#288CA9] text-[#12325B] px-5 sm:px-8 py-2.5 sm:py-3 font-bold tracking-widest hover:opacity-90 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap
                            font-Montserrat cursor-pointer rounded-xl
                            shadow-[0_0_15px_rgba(61,180,215,0.4)]
                            hover:scale-105 hover:shadow-[0_0_25px_rgba(61,180,215,0.6)]"
              >
                HIRE ME
              </button>

              {/* CONTACT ME BUTTON */}
              <ScrollLink
                to="contact"
                smooth={true}
                duration={600}
                offset={-64}
                className="flex-1 max-w-[160px] md:flex-none text-center bg-transparent border-2 border-[#47C5E5]/50 text-[#EAF4FF] px-5 sm:px-8 py-2.5 sm:py-3 font-bold tracking-widest hover:bg-[#47C5E5]/10 transition-all duration-300 text-xs sm:text-sm whitespace-nowrap
                           font-Montserrat cursor-pointer rounded-xl backdrop-blur-sm
                           hover:scale-105 hover:border-[#47C5E5]"
              >
                CONTACT
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row - reduced extra space */}
      <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 w-full flex justify-center px-4">
        <div
          className="flex items-center text-center gap-3 sm:gap-6 md:gap-10 flex-nowrap text-[10px] sm:text-sm md:text-base text-[#BFD4E6]"
          style={{ fontFamily: "sans-serif" }}
        >
          <span>Extensible Systems</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Responsive Designs</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Creative Styling</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Quality Content</span>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
          .animate-zoomIn {
            animation: zoomIn 1s ease forwards;
          }
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          .animate-heroImage {
            animation: popupBehind 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.15) forwards;
          }
          @media (min-width: 768px) {
            .animate-heroImage {
              animation: zoomIn 1s ease forwards;
            }
          }
          @keyframes popupBehind {
            0% { transform: translateY(100px) scale(0.85); opacity: 0; }
            100% { transform: translateY(0px) scale(1); opacity: 1; }
          }
          .animate-slideInUp {
            animation: slideInUp 0.8s ease-out forwards;
            opacity: 0;
          }
          @keyframes slideInUp {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          button, h1, h2, p {
            transition: all 0.6s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}