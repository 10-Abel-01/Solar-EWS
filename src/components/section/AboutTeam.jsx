import React from "react";
import { Users, Cpu, ExternalLink } from "lucide-react";
import Abel from "../../assets/abel.png";
import Chandra from "../../assets/chandra.png";
import Raihan from "../../assets/raihan.png";
import Hamad from "../../assets/hamad.png";
import Jhon from "../../assets/jhon.png";

const AboutTeam = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto py-24 border-t border-gray-100 px-6"
    >
      <div className="flex items-center gap-4 mb-14">
        <div className="w-12 h-12 rounded-3xl bg-gray-50 text-gray-400 flex items-center justify-center border border-gray-100 shadow-inner">
          <Users size={24} />
        </div>
        <h2 className="text-3xl font-black tracking-tight text-gray-950 font-sans uppercase">
          System Architects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Abel */}
        <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 transition-all group min-h-[350px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] font-mono bg-emerald-50 px-3 py-1 rounded-full">
                Lead Developer
              </span>
            </div>
            <h3 className="text-4xl font-black mb-2 text-gray-950 group-hover:text-emerald-600 transition-colors tracking-tighter">
              Abel Saferyan
            </h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Pro-gay-mmer
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Membangun sistem (end-to-end) dari integrasi hardware Arduino
              (C++), pemrosesan data Python, hingga visualisasi real-time di
              React.
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                <Cpu size={20} />
              </button>
              <a href="https://github.com/10-Abel-01/">
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                  <ExternalLink size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative bg-gray-50 overflow-hidden min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
            <img
              src={Abel}
              alt="Abel Portfolio"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* chandra */}
        <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 transition-all group min-h-[350px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] font-mono bg-emerald-50 px-3 py-1 rounded-full">
                Lead Architect
              </span>
            </div>
            <h3 className="text-4xl font-black mb-2 text-gray-950 group-hover:text-emerald-600 transition-colors tracking-tighter">
              Hidayat Chandra
            </h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Kebanyakan Ngide
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Membangun sistem (end-to-end) dari integrasi hardware Arduino
              (C++), pemrosesan data Python, hingga visualisasi real-time di
              React.
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                <Cpu size={20} />
              </button>
              <a href="https://www.instagram.com/h.chandraaa_">
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                  <ExternalLink size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative bg-gray-50 overflow-hidden min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
            <img
              src={Chandra}
              alt="Chandra Portfolio"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* raihan */}
        <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 transition-all group min-h-[350px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] font-mono bg-emerald-50 px-3 py-1 rounded-full">
                Lead Architect
              </span>
            </div>
            <h3 className="text-4xl font-black mb-2 text-gray-950 group-hover:text-emerald-600 transition-colors tracking-tighter">
              Raihan Lundy Arista
            </h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Pendongeng Handal
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Membangun sistem (end-to-end) dari integrasi hardware Arduino
              (C++), pemrosesan data Python, hingga visualisasi real-time di
              React.
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                <Cpu size={20} />
              </button>
              <a href="https://www.instagram.com/raihanlundi04">
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                  <ExternalLink size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative bg-gray-50 overflow-hidden min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
            <img
              src={Raihan}
              alt="Raihan Portfolio"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* hamad */}
        <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 transition-all group min-h-[350px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] font-mono bg-emerald-50 px-3 py-1 rounded-full">
                Lead Architect
              </span>
            </div>
            <h3 className="text-4xl font-black mb-2 text-gray-950 group-hover:text-emerald-600 transition-colors tracking-tighter">
              Hamad Syaid
            </h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Pemilik Ilmu Hitam
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Membangun sistem (end-to-end) dari integrasi hardware Arduino
              (C++), pemrosesan data Python, hingga visualisasi real-time di
              React.
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                <Cpu size={20} />
              </button>
              <a href="https://www.instagram.com/hmd_sahid?igsh=MWk5eTRqbDd3eThjbw%3D%3D&utm_source=qr">
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                  <ExternalLink size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative bg-gray-50 overflow-hidden min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
            <img
              src={Hamad}
              alt="Hamad Portfolio"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* jhon */}
        <div className="flex flex-col md:flex-row bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-emerald-50 transition-all group min-h-[350px]">
          <div className="flex-1 p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] font-mono bg-emerald-50 px-3 py-1 rounded-full">
                Lead Architect
              </span>
            </div>
            <h3 className="text-4xl font-black mb-2 text-gray-950 group-hover:text-emerald-600 transition-colors tracking-tighter">
              Muhammad Riski Kurniawan
            </h3>
            <p className="text-gray-500 text-lg font-medium mb-6">
              Fullstack GPT
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Membangun sistem (end-to-end) dari integrasi hardware Arduino
              (C++), pemrosesan data Python, hingga visualisasi real-time di
              React.
            </p>
            <div className="flex gap-4">
              <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                <Cpu size={20} />
              </button>
              <a href="https://www.instagram.com/jhonnnnns_?igsh=MTNpc3J4YnRjZG51Mg==">
                <button className="p-3 bg-gray-50 rounded-2xl text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition-all border border-transparent hover:border-emerald-100">
                  <ExternalLink size={20} />
                </button>
              </a>
            </div>
          </div>

          <div className="flex-1 relative bg-gray-50 overflow-hidden min-h-[300px] md:min-h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent z-10 hidden md:block" />
            <img
              src={Jhon}
              alt="Jhon Portfolio"
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;
