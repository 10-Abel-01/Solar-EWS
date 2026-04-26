import React from "react";
import { Cpu, Database, Share2, Monitor, ArrowRight } from "lucide-react";

const SystemFlow = () => {
  const steps = [
    {
      title: "Data Capture",
      desc: "Sensor LDR & INA219 pada Arduino membaca intensitas cahaya dan daya baterai.",
      icon: <Cpu size={24} />,
      color: "bg-amber-500",
      light: "bg-amber-50",
    },
    {
      title: "Local Processing",
      desc: "Skrip Python membaca Serial Port dan melakukan kalkulasi efisiensi secara real-time.",
      icon: <Database size={24} />,
      color: "bg-blue-500",
      light: "bg-blue-50",
    },
    {
      title: "FastAPI Bridge",
      desc: "Data dikirim melalui WebSocket/REST API agar bisa diakses oleh aplikasi eksternal.",
      icon: <Share2 size={24} />,
      color: "bg-purple-500",
      light: "bg-purple-50",
    },
    {
      title: "React Dashboard",
      desc: "Visualisasi grafik dan status rotasi baterai yang interaktif bagi pengguna.",
      icon: <Monitor size={24} />,
      color: "bg-emerald-500",
      light: "bg-emerald-50",
    },
  ];

  return (
    <section id="flow" className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-gray-950 mb-4">SYSTEM FLOW</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Bagaimana data mengalir dari panel surya fisik hingga menjadi informasi digital di perangkat Anda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
        <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-gray-100 -z-10" />

        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center group">
            <div className={`w-24 h-24 ${step.light} rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-xl transition-transform group-hover:scale-110 duration-300 relative`}>
              <div className={`${step.color} text-white p-4 rounded-2xl shadow-lg`}>
                {step.icon}
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 text-gray-300">
                  <ArrowRight size={20} />
                </div>
              )}
            </div>

            <h3 className="text-xl font-bold text-gray-950 mb-3">{step.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed px-4">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-orange-950 rounded-[3rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center gap-8 shadow-2xl">
        <div className="flex-1">
          <h4 className="text-2xl font-bold mb-4">Integrasi Hardware-ke-Web</h4>
          <p className="text-emerald-100/70 leading-relaxed">
            Sistem ini menggunakan protokol komunikasi (Serial-to-Web). Artinya, tidak ada delay yang signifikan antara pergerakan matahari dan data yang tampil di Dashboard.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="px-6 py-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <span className="block text-2xl font-black text-orange-400">99%</span>
            <span className="text-[10px] uppercase tracking-wider opacity-60">Uptime Data</span>
          </div>
          <div className="px-6 py-3 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
            <span className="block text-2xl font-black text-orange-400">&lt; 1s</span>
            <span className="text-[10px] uppercase tracking-wider opacity-60">Latency</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemFlow;