import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Activity, Zap } from "lucide-react";


const PowerChart = ({ chartData }) => {
  const [isMobile, setIsMobile] = useState(() => (typeof window !== "undefined" ? window.innerWidth < 768 : false));
  const chartRef = useRef(null);
  const [chartSize, setChartSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const node = chartRef.current;
    if (!node) return;

    const updateSize = () => {
      setChartSize({ width: node.offsetWidth, height: node.offsetHeight });
    };

    updateSize();
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver((entries) => {
        const { width, height } = entries[0].contentRect;
        setChartSize({ width, height });
      });
      observer.observe(node);
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ambil nilai tertinggi dan rata-rata dari data yang aktif di grafik
  const peakToday = chartData.length > 0 ? Math.max(...chartData.map(d => d.actual)) : 0;
  const averagePower = chartData.length > 0 ? parseFloat((chartData.reduce((acc, d) => acc + d.actual, 0) / chartData.length).toFixed(1)) : 0;
  return (
    <div className="bg-white p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col w-full overflow-hidden">
      <div className="flex justify-between items-start md:items-center mb-6">
        <div>
          <h3 className="text-lg md:text-xl font-black text-gray-950 flex items-center gap-2">
            <Activity size={22} className="text-orange-500" />
            Real-time Power Absorption
          </h3>
          <p className="text-gray-400 text-[10px] md:text-xs font-medium mt-1">
            Monitoring penyerapan daya (Watt) vs Prediksi AI
          </p>
        </div>
        <div className="hidden sm:flex gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-orange-50 rounded-lg">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-black text-orange-700 uppercase tracking-tighter">
              Live Sensor
            </span>
          </div>
        </div>
      </div>

      <div
        ref={chartRef}
        className="w-full mt-2 min-w-0"
        style={{ height: isMobile ? "280px" : "380px", minWidth: 0 }}
      >
        {chartSize.width > 0 && chartSize.height > 0 ? (
          <ResponsiveContainer
            width={chartSize.width}
            height={chartSize.height}
            minWidth={0}
            minHeight={280}
            aspect={undefined}
            key={isMobile ? "mobile-chart" : "desktop-chart"}
          >
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="orange-500" stopOpacity={0.3} />
                <stop offset="95%" stopColor="orange-500" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="blue-500" stopOpacity={0.1} />
                <stop offset="95%" stopColor="blue-500" stopOpacity={0} />
              </linearGradient>
            </defs>

            <Legend
              verticalAlign="top"
              align={isMobile ? "center" : "right"}
              iconType="circle"
              iconSize={8}
              wrapperStyle={{
                paddingBottom: isMobile ? "20px" : "40px",
                fontSize: isMobile ? "10px" : "12px",
                fontWeight: "bold",
              }}
            />

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f3f4f6"
            />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: isMobile ? 10 : 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: isMobile ? 10 : 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
              }}
            />

            <Area
              type="monotone"
              dataKey="forecast"
              name="AI Prediction"
              stroke="#6366f1"
              strokeWidth={isMobile ? 2 : 3}
              strokeDasharray="5 5"
              fillOpacity={1}
              fill="url(#colorForecast)"
            />

            <Area
              type="monotone"
              dataKey="actual"
              name="Actual Power (W)"
              stroke="#b91010"
              strokeWidth={isMobile ? 3 : 4}
              fillOpacity={1}
              fill="url(#colorActual)"
            />
          </AreaChart>
        </ResponsiveContainer>
        ) : null}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-50 pt-6">
        <div className="flex gap-4 md:gap-8">
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">
              Peak Today
            </p>
            <p className="text-md md:text-lg font-black text-gray-950">
              {peakToday.toFixed(1)} W
            </p>
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">
              Average
            </p>
            <p className="text-md md:text-lg font-black text-gray-950">
              {averagePower} W
            </p>
          </div>
        </div>
        <button className="w-full md:w-auto bg-gray-950 text-white px-5 py-2.5 rounded-xl text-[10px] md:text-xs font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2">
          <Zap size={14} /> View Detailed Log
        </button>
      </div>
    </div>
  );
};

export default PowerChart;
