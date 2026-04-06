import React from "react";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="max-w-6xl mb-2 mx-auto px-6 pt-20 pb-20 text-center relative">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-[128px] opacity-50 z-[-1]" />

      <div className="inline-flex items-center gap-2.5 bg-gray-50 border border-gray-100 text-emerald-700 px-5 py-2.5 rounded-full mb-8 shadow-inner">
        <Zap size={15} className="animate-pulse" />
        <span className="text-[11px] font-black uppercase tracking-[0.2em] font-mono">
          Project Campus / EWS-SOLAR v1.0
        </span>
      </div>

      <h1 className="text-5xl md:text-7xl font-black leading-[0.95] bg-gradient-to-b from-gray-950 to-gray-700 bg-clip-text text-transparent">
        Smart Energy
      </h1>
      <br />
      <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] bg-gradient-to-b from-gray-950 to-gray-700 bg-clip-text text-transparent">
        Solar Monitoring
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-normal">
        Sistem monitoring IoT presisi tinggi untuk optimalisasi daya harian
        melalui manajemen
        <span className="text-orange-600 font-bold">
          {" "}
          3 sesi baterai{" "}
        </span>{" "}
        otomatis.
      </p>
    </section>
  );
};
export default Hero;
