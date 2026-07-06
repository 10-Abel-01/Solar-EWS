import React from "react";
import { Table, Loader2 } from "lucide-react";

const TelemetryTable = ({ rows = [], loading }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-black text-gray-950">Recent Telemetry</h3>
          <p className="text-sm text-gray-400">Data terbaru dari Supabase solar_telemetry.</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Table size={18} />
          <span className="text-xs uppercase tracking-[0.3em] font-bold">Live</span>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-400">
          <Loader2 className="animate-spin mr-2" /> Memuat data...
        </div>
      ) : rows.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          Belum ada data telemetry tersedia.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-4 py-3">Waktu</th>
                <th className="px-4 py-3">Volt</th>
                <th className="px-4 py-3">Arus</th>
                <th className="px-4 py-3">Daya</th>
                <th className="px-4 py-3">Suhu</th>
                <th className="px-4 py-3">LDR Kiri</th>
                <th className="px-4 py-3">LDR Kanan</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-700">{row.created_at}</td>
                  <td className="px-4 py-3">{row.voltage} V</td>
                  <td className="px-4 py-3">{row.current} A</td>
                  <td className="px-4 py-3">{row.power} W</td>
                  <td className="px-4 py-3">{row.temperature}°C</td>
                  <td className="px-4 py-3">{row.ldr_kiri}</td>
                  <td className="px-4 py-3">{row.ldr_kanan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TelemetryTable;
