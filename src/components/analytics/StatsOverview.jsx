import React from "react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ComposedChart, Line, Bar, Scatter
} from 'recharts';
import {
  TrendingUp, Activity, Thermometer,
  Zap, Info, ArrowUpRight
} from 'lucide-react';

const StatsOverview = () => {
  const correlationData = [
    { temp: 25, efficiency: 99, output: 400 },
    { temp: 30, efficiency: 96, output: 380 },
    { temp: 35, efficiency: 92, output: 350 },
    { temp: 40, efficiency: 85, output: 310 },
    { temp: 45, efficiency: 78, output: 270 },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Chart 1: Thermal vs Efficiency (Composed) */}
      <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-2xl">
              <Thermometer size={20} />
            </div>
            <h3 className="font-black text-gray-950">Thermal Correlation</h3>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-red-500 uppercase italic">Degradasi Terdeteksi</p>
            <p className="text-xs font-bold text-gray-400">-4.2% / +5°C</p>
          </div>
        </div>

        <div className="h-[350px] w-full">
          <ResponsiveContainer width="99%" height="100%">
            <ComposedChart data={correlationData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
              <XAxis dataKey="temp" unit="°C" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fill: '#9ca3af', fontSize: 12 }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fill: '#10b981', fontSize: 12 }} />
              <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
              <Bar yAxisId="left" dataKey="output" fill="#f3f4f6" radius={[10, 10, 0, 0]} barSize={40} />
              <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#10b981" strokeWidth={4} dot={{ r: 6 }} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-950 p-8 rounded-[2.5rem] text-white shadow-xl shadow-gray-200">
          <Zap className="text-orange-400 mb-4" size={32} />
          <h4 className="text-xl font-black">Peak Performance</h4>
          <p className="text-gray-400 text-xs mt-2 leading-relaxed">
            Sistem mencapai titik jenuh pada pukul 12:45 dengan suhu rata-rata 38.2°C. Efisiensi terbaik tercatat pada 24°C.
          </p>
          <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-end">
            <div>
              <p className="text-[10px] font-bold text-gray-500 uppercase">Current Loss</p>
              <p className="text-2xl font-black">12.4 <span className="text-sm font-normal text-gray-400">W</span></p>
            </div>
            <div className="bg-white/10 p-2 rounded-xl">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
            <Activity size={24} />
          </div>
          <div>
            <p className="text-[10px] font-black text-gray-400 uppercase">Voltage Stability</p>
            <p className="text-sm font-bold text-gray-900">99.2% Constant</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsOverview;
