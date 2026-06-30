import React from "react";
import { LayoutDashboard } from "lucide-react"; 

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "flow", label: "Flow" },
  { id: "summary", label: "Summary" },
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-4 md:px-8 py-3 md:py-4 backdrop-blur-md bg-white/70 border-b border-gray-200 shadow-sm transition-all duration-300">
      
      <div
        className="flex items-center gap-2 text-lg font-bold cursor-pointer group"
        onClick={() => scrollToSection("home")}
      >
        <LayoutDashboard className="w-5 h-5 text-gray-800 group-hover:text-blue-600 transition-colors" />
        <span className="text-gray-800 group-hover:text-blue-600 transition-colors tracking-wide">
          IoT Dashboard
        </span>
      </div>

      <div className="flex items-center gap-2 md:gap-4 overflow-x-auto no-scrollbar pl-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-xs md:text-sm font-medium text-gray-600 border border-gray-300 px-4 py-2 rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-400 transition-all duration-300 whitespace-nowrap"
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;