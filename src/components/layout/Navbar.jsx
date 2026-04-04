import React from "react";
import { Link } from "react-router-dom";
import { LayoutDashboard } from "lucide-react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center px-4 md:px-8 py-4 md:py-6 backdrop-blur-md border-b border-white/5">
      <div
        className="text-lg font-bold cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        IoT
      </div>
      <div className="ml-auto flex items-center gap-1.5 md:gap-2 overflow-x-auto no-scrollbar pl-4">
        <button
          onClick={() => scrollToSection("home")}
          className="text-[10px] md:text-sm border border-black px-4 py-2 rounded-full hover:bg-blue-500/10 transition-all"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="text-[10px] md:text-sm border border-black px-4 py-2 rounded-full hover:bg-blue-500/10 transition-all"
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("flow")}
          className="text-[10px] md:text-sm border border-black px-4 py-2 rounded-full hover:bg-blue-500/10 transition-all"
        >
          Flow
        </button>
        <button
          onClick={() => scrollToSection("summary")}
          className="text-[10px] md:text-sm border border-black px-4 py-2 rounded-full hover:bg-blue-500/10 transition-all"
        >
          Summary
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
