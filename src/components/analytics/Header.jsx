import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-gray-900">Deep Analytics</h1>
        <p className="text-gray-500 text-sm mt-1 font-medium">
          Korelasi teknis antara termal, tegangan, dan output energi.
        </p>
      </div>
      <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex -space-x-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-[10px] font-bold">U{i}</div>
          ))}
        </div>
        <span className="text-xs font-bold text-gray-400 px-2">3 Units Active</span>
      </div>
    </div>
  );
};
export default Header;