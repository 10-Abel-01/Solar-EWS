import React from 'react';
import { useTrafficAI } from '../../hooks/useTrafficAI';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const MLforecast = () => {
  const { data, alerts, isHazard } = useTrafficAI();

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm transition-all duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-gray-900 italic">AI LIVE MONITOR</h3>
        {isHazard ? (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-1.5 rounded-full animate-pulse">
            <AlertCircle size={16} />
            <span className="text-[10px] font-black uppercase">System Danger</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-4 py-1.5 rounded-full">
            <CheckCircle2 size={16} />
            <span className="text-[10px] font-black uppercase">System Safe</span>
          </div>
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Voltage</p>
          <p className="text-lg font-black text-gray-900">{data.voltage}V</p>
        </div>
        <div className="text-center border-x border-gray-50">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Temp</p>
          <p className="text-lg font-black text-gray-900">{data.temp}°C</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Efficiency</p>
          <p className="text-lg font-black text-gray-900">{data.efficiency}%</p>
        </div>
      </div>
      <div className="space-y-3">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div key={alert.id} className="bg-gray-50 p-4 rounded-2xl border-l-4 border-red-500 flex justify-between items-center">
              <span className={`text-xs font-bold ${alert.color}`}>{alert.msg}</span>
              <span className="text-[9px] text-gray-400">{data.timestamp}</span>
            </div>
          ))
        ) : (
          <div className="text-center py-4 border-2 border-dashed border-gray-50 rounded-2xl">
            <p className="text-xs text-gray-400 font-medium italic">Scanning for anomalies...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MLforecast;