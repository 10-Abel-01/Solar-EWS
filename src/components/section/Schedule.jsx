import React from "react";
import { Clock, Battery, Sun, Sunset, Sunrise } from "lucide-react";

const Schedule = () => {
  const schedules = [
    {
      session: "Sesi Pagi",
      time: "07:00 - 10:00",
      battery: "Baterai 1",
      activity: "Charging & System Power",
      status: "Optimal Absorbtion",
      icon: <Sunrise className="text-amber-400" size={32} />,
      color: "border-orange-200",
      bg: "bg-orange-50/50",
    },
    {
      session: "Sesi Siang",
      time: "10:00 - 13:00",
      battery: "Baterai 2",
      activity: "Peak Energy Storage",
      status: "High Efficiency",
      icon: <Sun className="text-orange-500" size={32} />,
      color: "border-orange-200",
      bg: "bg-orange-50/50",
    },
    {
      session: "Sesi Sore",
      time: "13:00 - 16:00",
      battery: "Baterai 3",
      activity: "Maintenance Charging",
      status: "Stable Output",
      icon: <Sunset className="text-rose-500" size={32} />,
      color: "border-orange-200",
      bg: "bg-orange-50/50",
    },
  ];

  return (
    <section id="schedule" className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="max-w-2xl">
          <span className="text-gray-600 font-mono font-bold tracking-widest uppercase text-xs bg-gray-50 px-3 py-1 rounded-full">
            Time-Based Management
          </span>
          <h2 className="text-4xl font-black text-gray-950 mt-4 mb-2">
            Jadwal Rotasi Baterai
          </h2>
          <p className="text-gray-500 text-lg">
            Sistem otomatis berpindah antar baterai untuk mencegah degradasi sel
            dan memaksimalkan masa pakai penyimpanan.
          </p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm font-medium bg-white border border-gray-100 px-4 py-2 rounded-2xl">
          <Clock size={16} />
          <span>Interval: 180 Menit / Sesi</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {schedules.map((item, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-[2.5rem] border-2 ${item.color} ${item.bg} hover:shadow-xl transition-all duration-500 group overflow-hidden`}
          >
            <div className="absolute -right-4 -top-4 opacity-10 group-hover:scale-150 transition-transform duration-700">
              {item.icon}
            </div>

            <div className="relative z-10">
              <div className="mb-6 inline-flex p-4 bg-white rounded-2xl shadow-sm">
                {item.icon}
              </div>

              <div className="mb-6">
                <h3 className="text-2xl font-black text-gray-950">
                  {item.session}
                </h3>
                <p className="text-gray-600 font-bold font-mono">{item.time}</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/60 p-3 rounded-xl border border-white">
                  <Battery size={20} className="text-gray-600" />
                  <div>
                    <p className="text-[10px] uppercase font-bold text-gray-400 leading-none">
                      Active Storage
                    </p>
                    <p className="text-sm font-bold text-gray-800">
                      {item.battery}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase mb-1">
                    Main Task
                  </p>
                  <p className="text-gray-700 font-medium">{item.activity}</p>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-white text-[10px] font-black text-gray-500 border border-gray-100">
                  {item.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white border border-dashed border-gray-200 rounded-3xl flex items-start gap-4">
        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
          <Clock size={20} />
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          <strong>Note:</strong> Peralihan antar sesi dilakukan secara
          (seamless) oleh relay yang dikontrol Arduino. Jika tegangan baterai
          aktif turun di bawah 11V sebelum waktunya habis, sistem akan
          memberikan (fail-over) otomatis ke baterai cadangan.
        </p>
      </div>
    </section>
  );
};

export default Schedule;
