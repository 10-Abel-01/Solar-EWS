import React, { useEffect, useState } from "react";
import Header from "../components/analytics/Header";
import StatsOverview from "../components/analytics/StatsOverview";
import WeeklyOverview from "../components/analytics/WeeklyOverview";
import SummaryCards from "../components/analytics/SummaryCards";
import TelemetryTable from "../components/analytics/TelemetryTable";
import { supabase } from "../lib/supabaseClient";

const Analytics = () => {
  const [telemetry, setTelemetry] = useState([]);
  const [loading, setLoading] = useState(true);
  const [desktopCharts, setDesktopCharts] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1280 : false
  );

  useEffect(() => {
    const fetchTelemetry = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("solar_telemetry")
        .select("id,created_at,voltage,current,power,temperature,ldr_kiri,ldr_kanan")
        .order("created_at", { ascending: false })
        .limit(12);

      if (error) {
        console.error("Supabase fetch error:", error);
        setTelemetry([]);
      } else {
        setTelemetry(
          (data || []).map((row) => ({
            ...row,
            created_at: new Date(row.created_at).toLocaleString(),
          }))
        );
      }
      setLoading(false);
    };
    fetchTelemetry();

    const handleResize = () => setDesktopCharts(window.innerWidth >= 1280);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const latest = telemetry[0] || {};
  const averageVoltage = telemetry.length
    ? (telemetry.reduce((sum, row) => sum + (row.voltage || 0), 0) / telemetry.length).toFixed(2)
    : "0.00";
  const averageTemperature = telemetry.length
    ? (telemetry.reduce((sum, row) => sum + (row.temperature || 0), 0) / telemetry.length).toFixed(1)
    : "0.0";
  const peakPower = telemetry.length
    ? telemetry.reduce((best, row) => Math.max(best, row.power || 0), 0).toFixed(2)
    : "0.00";

  const summaryCards = [
    {
      label: "Latest Power",
      value: `${latest.power ?? 0} W`,
      color: "text-orange-600",
    },
    {
      label: "Average Voltage",
      value: `${averageVoltage} V`,
      color: "text-blue-600",
    },
    {
      label: "Peak Power",
      value: `${peakPower} W`,
      color: "text-emerald-600",
    },
    {
      label: "Avg Temperature",
      value: `${averageTemperature}°C`,
      color: "text-rose-600",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-1 transition-all duration-300 lg:ml-64 lg:mt-0">
        <div className="flex flex-col gap-y-4 space-y-8 pb-10">
          <Header />
          <SummaryCards stats={summaryCards} loading={loading} />
          {desktopCharts ? (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              <div className="xl:col-span-2">
                <StatsOverview />
              </div>
              <div className="xl:col-span-1">
                <WeeklyOverview />
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm">
              <h3 className="text-lg font-black text-gray-950 mb-3">Analytics Mobile View</h3>
              <p className="text-sm text-gray-500">
                Grafik analitik lengkap tersedia pada layar desktop. Untuk tampilan mobile,
                data ringkas ditampilkan pada kartu di atas dan tabel telemetry.
              </p>
            </div>
          )}
          <TelemetryTable rows={telemetry} loading={loading} />
        </div>
      </main>
    </div>
  );
};

export default Analytics;
