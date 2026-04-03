import React from "react";
import { Link } from "react-router-dom";
import { Cpu } from "lucide-react";

const HyperLink = () => {
  return (
    <div
      id="link"
      className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-50 text-center relative overflow-hidden"
    >
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-50 rounded-full blur-[100px] opacity-60" />

      <Link to="/dashboard" className="relative z-10 inline-block">
        <button className="bg-gray-950 text-white px-10 py-4 rounded-2xl font-bold text-sm shadow-2xl shadow-gray-200 hover:bg-emerald-600 transition-all active:scale-95 group flex items-center gap-2.5">
          Launch Live Dashboard
          <Cpu
            size={16}
            className="text-gray-500 group-hover:text-white transition-colors"
          />
        </button>
      </Link>
    </div>
  );
};
export default HyperLink;
