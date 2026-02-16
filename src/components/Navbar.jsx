import { Link } from "react-router-dom";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#12325B] text-white z-50">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-wide">
          PORT<span className="text-[#47C5E5]">FOLIO</span>
        </h1>

        {/* Center Menu */}
        <ul className="hidden md:flex gap-10 text-sm tracking-wider font-montserrat font-medium">
  <li><Link to="/">HOME</Link></li>
  <li><Link to="/about">ABOUT</Link></li>
  <li><Link to="/skills">SKILLS</Link></li>
  <li><Link to="/projects">PROJECTS</Link></li>
  <li><Link to="/contact">CONTACT</Link></li>
</ul>


        {/* Download CV Button */}
        <button className="hidden md:flex items-center gap-2 bg-[#47C5E5] text-[#12325B] px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
          DOWNLOAD CV
          <Download size={18} />
        </button>

      </div>
    </nav>
  );
}
