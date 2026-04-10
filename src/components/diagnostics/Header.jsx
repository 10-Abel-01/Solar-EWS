import React from "react";
import { ShieldCheck } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-gray-900">
          System Diagnostics
        </h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Laporan kesehatan infrastruktur solar secara real-time.
        </p>
      </div>
      <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-2xl border border-emerald-100">
        <ShieldCheck size={20} />
        <span className="text-xs font-bold uppercase tracking-wider">
          System Fully Protected
        </span>
      </div>
    </div>
  );
};
export default Header;
