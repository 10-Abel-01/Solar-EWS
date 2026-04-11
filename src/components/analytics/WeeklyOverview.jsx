import React from "react";
import { TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WeeklyOverview = () => {
  const weeklyTrend = [
    { day: "Mon", output: 400 },
    { day: "Tue", output: 450 },
    { day: "Wed", output: 300 },
    { day: "Thu", output: 520 },
    { day: "Fri", output: 480 },
    { day: "Sat", output: 600 },
    { day: "Sun", output: 550 },
  ];
  return (
    <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
          <TrendingUp size={20} />
        </div>
        <div>
          <h3 className="font-black text-gray-950 text-lg">Weekly Trend</h3>
          <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">
            Total Output Energi (kWh)
          </p>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="99%" height="100%">
          <LineChart
            data={weeklyTrend}
            margin={{ top: 5, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12, fontWeight: 600 }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            />
            <Line
              type="stepAfter"
              dataKey="output"
              stroke="#3b82f6"
              strokeWidth={4}
              dot={{ r: 6, fill: "#3b82f6", strokeWidth: 2, stroke: "#fff" }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default WeeklyOverview;
