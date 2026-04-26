import React from "react";
import { Lightbulb, Zap, Sun, BatteryMedium, Cpu, Activity } from "lucide-react";

const Summary = () => {
  const features = [
    {
      num: "01",
      title: "Solar Tracking",
      desc: "Motor servo otomatis mengarahkan panel ke titik cahaya terkuat menggunakan sensor LDR.",
      icon: <Sun size={20} className="text-amber-500" />,
    },
    {
      num: "02",
      title: "Sequential Charging",
      desc: "Rotasi 3 jam per baterai (Pagi-Siang-Sore) untuk menjaga suhu dan kesehatan sel.",
      icon: <BatteryMedium size={20} className="text-emerald-500" />,
    },
    {
      num: "03",
      title: "IoT Ecosystem",
      desc: "Integrasi Python FastAPI sebagai bridge data dari Arduino ke dashboard React.",
      icon: <Cpu size={20} className="text-blue-500" />,
    },
    {
      num: "04",
      title: "Efficiency Monitor",
      desc: "Visualisasi real-time arus (A) dan tegangan (V) untuk analisis daya yang disimpan.",
      icon: <Activity size={20} className="text-rose-500" />,
    },
  ];

  return (
    <section id="summary" className="max-w-6xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
      <div className="space-y-8 md:col-span-3">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 shadow-sm">
            <Lightbulb size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-gray-950">Visi & Implementasi</h2>
            <p className="text-gray-500 text-sm">Optimalisasi Energi Terbarukan Berbasis IoT</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-gray-100 hover:border-orange-100 hover:shadow-lg hover:shadow-orange-50/50 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-2xl font-black text-gray-200 font-mono group-hover:text-orange-100 transition-colors">
                  {item.num}
                </div>
                <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-orange-50 transition-colors">
                  {item.icon}
                </div>
              </div>
              <h4 className="font-bold text-gray-950 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2 bg-orange-950 rounded-[2.5rem] p-10 text-white relative overflow-hidden shadow-2xl shadow-gray-200 group h-full flex flex-col justify-center">
        <div className="absolute top-0 right-10 h-full w-[1px] bg-gray-800 opacity-50" />
        <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gray-800 opacity-50" />

        <h2 className="text-2xl font-bold mb-5 relative z-10 flex items-center gap-3">
          <Zap size={20} className="text-orange-400" /> Core Functions
        </h2>

        <div className="space-y-6 relative z-10">
          <div className="border-l-2 border-orange-500 pl-4">
            <h5 className="text-orange-400 font-bold text-sm uppercase tracking-widest">Smart Rotation</h5>
            <p className="text-gray-400 text-sm">Sistem membagi beban kerja baterai menjadi 3 fase (07:00, 10:00, 13:00) untuk meminimalisir overheat.</p>
          </div>

          <div className="border-l-2 border-gray-700 pl-4">
            <h5 className="text-gray-300 font-bold text-sm uppercase tracking-widest">Auto Tracking</h5>
            <p className="text-gray-500 text-sm">Meningkatkan penyerapan foton hingga 30% dibandingkan panel statis.</p>
          </div>
        </div>

        <Zap className="absolute -bottom-10 -right-10 text-orange-500/10 w-48 h-48 group-hover:text-emerald-500/20 group-hover:scale-110 transition-all duration-500" />
      </div>
    </section>
  );
};

export default Summary;