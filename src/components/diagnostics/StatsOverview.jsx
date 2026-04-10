import React from "react";
import { Thermometer, BatteryMedium, CheckCircle2 } from "lucide-react";

const StatsOverview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
          <Thermometer size={24} />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase">
          Average Temp
        </p>
        <h2 className="text-2xl font-black text-gray-900 mt-1">34.3°C</h2>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
          <BatteryMedium size={24} />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase">
          Battery Health
        </p>
        <h2 className="text-2xl font-black text-gray-900 mt-1">94%</h2>
      </div>

      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
          <CheckCircle2 size={24} />
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase">
          Active Nodes
        </p>
        <h2 className="text-2xl font-black text-gray-900 mt-1">12/12</h2>
      </div>
    </div>
  );
};
export default StatsOverview;