import React from "react";

const SummaryCards = ({ stats = [], loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm animate-pulse"
          >
            <div className="h-4 w-28 bg-gray-200 rounded mb-3" />
            <div className="h-7 w-20 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div
          key={i}
          className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm"
        >
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {stat.label}
          </p>
          <p className={`text-lg md:text-xl font-black mt-1 ${stat.color}`}>
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};
export default SummaryCards;
