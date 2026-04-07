import React, { useState, useEffect } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { Activity, Zap } from 'lucide-react';

// dummy data untuk chart
const data = [
  { time: '07:00', actual: 40, forecast: 42 },
  { time: '08:00', actual: 55, forecast: 58 },
  { time: '09:00', actual: 85, forecast: 80 },
  { time: '10:00', actual: 95, forecast: 92 },
  { time: '11:00', actual: 80, forecast: 85 },
  { time: '12:00', actual: 90, forecast: 70 },
  { time: '13:00', actual: 70, forecast: 69 },
  { time: '14:00', actual: 54, forecast: 51 },
  { time: '15:00', actual: 41, forecast: 45 },
  { time: '16:00', actual: 39, forecast: 33 },
];

const PowerChart = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              <span className="text-[10px] font-black text-orange-700 uppercase tracking-tighter">Live Sensor</span>
           </div>
        </div>
      </div>

      <div className="w-full mt-2 min-h-[250px]">
        <ResponsiveContainer width="100%" aspect={isMobile ? 1.2 : 2.5}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#b97210" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#b97210" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
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
                fontWeight: "bold"
              }}
            />

            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: isMobile ? 10 : 12}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: isMobile ? 10 : 12}}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
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
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-t border-gray-50 pt-6">
        <div className="flex gap-4 md:gap-8">
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">Peak Today</p>
            <p className="text-md md:text-lg font-black text-gray-950">95.4 W</p>
          </div>
          <div>
            <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase">Average</p>
            <p className="text-md md:text-lg font-black text-gray-950">62.1 W</p>
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