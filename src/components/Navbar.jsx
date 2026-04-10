import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "HOME", to: "home" },
    { name: "ABOUT", to: "about" },
    { name: "SKILLS", to: "skills" },
    { name: "PROJECTS", to: "projects" },
    { name: "CONTACT", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#08162A] shadow-md" : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 
        flex items-center justify-between transition-all duration-300
        ${scrolled ? "py-2" : "py-4"}`}
      >
        {/* Logo */}
        <h1
          className={`font-bold tracking-wide transition-all duration-300
            text-2xl sm:text-3xl
            md:${scrolled ? "text-xl" : "text-2xl"}
            lg:text-2xl xl:text-3xl
          `}
        >
          PORT<span className="text-[#47C5E5]">FOLIO</span>
        </h1>

        {/* Desktop + Tablet Menu */}
        <ul
          className={`hidden md:flex items-center transition-all duration-300 text-sm lg:text-base tracking-wide ${
            scrolled
              ? "gap-4 md:gap-5 lg:gap-6 xl:gap-8" // reduced gap when scrolled
              : "gap-6 md:gap-6 lg:gap-10 xl:gap-14" // original gap
          }`}
        >

          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`transition-all duration-300 ${
                scrolled ? "text-sm lg:text-sm" : "text-base lg:text-base"
              }`}
            >
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={600}
                offset={-64}
                className="cursor-pointer hover:text-[#47C5E5] transition"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Desktop Download CV */}
        <div className="hidden md:flex transition-all duration-300">
          <button
            className={`flex items-center gap-2 
            bg-[#47C5E5] text-[#12325B] 
            px-3 sm:px-4 lg:px-5 
            py-1.5 sm:py-2 
            rounded-md font-medium 
            text-xs sm:text-sm lg:text-base
            hover:opacity-90 transition-all duration-300 whitespace-nowrap ${
              scrolled ? "text-xs sm:text-xs lg:text-sm px-2 sm:px-3 lg:px-4 py-1" : ""
            }`}
          >
            DOWNLOAD CV
            <Download size={18} />
          </button>
        </div>

        {/* Mobile Section */}
        <div className="flex md:hidden items-center gap-3">
          <button
            className="flex items-center gap-1.5 
            bg-[#47C5E5] text-[#12325B] 
            px-3 py-1.5 
            rounded-md text-sm font-medium 
            hover:opacity-90 transition"
          >
            CV <Download size={16} />
          </button>

          <button onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
  <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-md transition-all duration-300">
    
    <div className="relative w-11/12 max-w-sm 
      bg-gradient-to-br from-[#12325B] to-[#0A1E36] 
      rounded-2xl p-8 
      flex flex-col gap-6 
      shadow-2xl 
      animate-[fadeIn_0.3s_ease-in-out]">

      {/* Close Button */}
      <button
        className="absolute top-5 right-5 
        text-white hover:text-[#47C5E5] 
        transition-transform duration-300 hover:rotate-90"
        onClick={() => setIsOpen(false)}
      >
        <X size={26} />
      </button>

      {/* Menu Links */}
      {menuItems.map((item) => (
        <ScrollLink
          key={item.name}
          to={item.to}
          smooth={true}
          duration={600}
          offset={-64}
          onClick={() => setIsOpen(false)}
          className="relative font-montserrat text-center text-white text-xl font-semibold 
          tracking-wide cursor-pointer 
          transition duration-300 
          hover:text-[#47C5E5] 
          before:absolute before:-bottom-1 before:left-0 
          before:w-0 before:h-[2px] 
          before:bg-[#47C5E5] 
          before:transition-all before:duration-300 
          hover:before:w-full"
        >
          {item.name}
        </ScrollLink>
      ))}
    </div>
  </div>
)}

    </nav>
  );
}
