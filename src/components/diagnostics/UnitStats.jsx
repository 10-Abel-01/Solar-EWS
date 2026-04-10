import React from "react";
import { useState } from "react";

import { Clock } from "lucide-react";

const UnitStats = () => {
  const units = [
    {
      id: "Unit 1",
      status: "Healthy",
      temp: "32°C",
      efficiency: "98%",
      lastCheck: "2 mins ago",
    },
    {
      id: "Unit 2",
      status: "Warning",
      temp: "45°C",
      efficiency: "85%",
      lastCheck: "5 mins ago",
    },
    {
      id: "Unit 3",
      status: "Healthy",
      temp: "30°C",
      efficiency: "99%",
      lastCheck: "1 min ago",
    },
  ];
  return (
    <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-50 flex items-center justify-between">
        <h3 className="font-black text-gray-900">Module Condition Detail</h3>
        <button className="text-xs font-bold text-orange-600 hover:underline">
          Export Report
        </button>
      </div>

      <div className="hidden md:block overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase">
                Unit Name
              </th>
              <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase">
                Status
              </th>
              <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase">
                Temperature
              </th>
              <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase">
                Efficiency
              </th>
              <th className="px-8 py-4 text-[10px] font-black text-gray-400 uppercase">
                Last Sync
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {units.map((unit, idx) => (
              <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-8 py-5 font-bold text-gray-900 text-sm">
                  {unit.id}
                </td>
                <td className="px-8 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      unit.status === "Healthy"
                        ? "bg-emerald-50 text-emerald-600"
                        : "bg-orange-50 text-orange-600"
                    }`}
                  >
                    {unit.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-gray-600 text-sm font-medium">
                  {unit.temp}
                </td>
                <td className="px-8 py-5 text-gray-600 text-sm font-medium">
                  {unit.efficiency}
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium">
                    <Clock size={14} />
                    {unit.lastCheck}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden divide-y divide-gray-100">
        {units.map((unit, idx) => (
          <div key={idx} className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-black text-gray-900">{unit.id}</span>
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                  unit.status === "Healthy"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-orange-50 text-orange-600"
                }`}
              >
                {unit.status}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Temp
                </p>
                <p className="text-sm font-medium text-gray-600">{unit.temp}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Efficiency
                </p>
                <p className="text-sm font-medium text-gray-600">
                  {unit.efficiency}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-gray-400 text-[10px] font-medium pt-2">
              <Clock size={12} />
              Synced {unit.lastCheck}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default UnitStats;
