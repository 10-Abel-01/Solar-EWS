import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const SystemDiagnostic = ({ telemetry, logs }) => {
  const isHazard = logs.length > 0 && logs[0].status_level === 'WARNING';

  const efficiency = telemetry.power ? parseFloat(((telemetry.power / 20) * 100).toFixed(1)) : 0;

  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-black text-gray-900 italic">AI LIVE MONITOR</h3>
        {isHazard ? (
          <div className="flex items-center gap-2 text-red-600 bg-red-50 px-4 py-1.5 rounded-full animate-pulse">
            <AlertCircle size={16} />
            <span className="text-[10px] font-black uppercase">System Overheat</span>
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
          <p className="text-lg font-black text-gray-900">{telemetry.voltage || 0}V</p>
        </div>
        <div className="text-center border-x border-gray-50">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Temp</p>
          <p className="text-lg font-black text-gray-900">{telemetry.temperature || 0}°C</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-bold text-gray-400 uppercase">Efficiency</p>
          <p className="text-lg font-black text-gray-900">{efficiency > 100 ? 100 : efficiency}%</p>
        </div>
      </div>
      <div className="space-y-3">
        <p className="text-xs font-bold text-gray-400 uppercase mb-1">System Diagnostics Logs:</p>
        {logs.length > 0 ? (
          logs.map((log) => (
            <div key={log.id} className="bg-gray-50 p-4 rounded-2xl border-l-4 border-red-500 flex flex-col gap-1">
              <span className="text-xs font-bold text-red-600">{log.diagnostic_msg}</span>
              <span className="text-[9px] text-gray-400">{new Date(log.created_at).toLocaleTimeString()}</span>
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

export default SystemDiagnostic;