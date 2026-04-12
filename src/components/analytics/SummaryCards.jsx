import react from "react";

const SummaryCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { label: "Avg Efficiency", value: "88.5%", color: "text-emerald-600" },
        { label: "Total Savings", value: "$124.2", color: "text-blue-600" },
        { label: "Peak Hour", value: "13:00", color: "text-orange-600" },
        { label: "CO2 Avoided", value: "12.4kg", color: "text-purple-600" },
      ].map((stat, i) => (
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
