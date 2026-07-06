import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import StatCards from "../components/dashboard/StatCards";
import MLforecast from "../components/dashboard/SystemDiagnostic";
import PowerChart from "../components/dashboard/PowerChart";

const SUPABASE_URL = 'https://oxnqajdkpqrdizgywkjv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bnFhamRrcHFyZGl6Z3l3a2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNjcxOTIsImV4cCI6MjA5ODg0MzE5Mn0.MD5zBeYLlWpcdHMC5hi1QWok7if9K-vSqP5pygK8OAE';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const Dashboard = () => {
  const [isCollapsed] = useState(false);
  const [latestData, setLatestData] = useState({ voltage: 0, current: 0, power: 0, temperature: 0, ldr_kiri: 0, ldr_kanan: 0 });
  const [chartData, setChartData] = useState([]);
  const [diagnosticLogs, setDiagnosticLogs] = useState([]);

  const fetchInitialData = async () => {
    const { data: telemetry } = await supabase
      .from("solar_telemetry")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

    if (telemetry && telemetry.length > 0) {
      setLatestData(telemetry[0]);
      
      const formatted = telemetry.map(item => ({
        time: new Date(item.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        actual: item.power,
        forecast: parseFloat((item.power * 0.95).toFixed(2))
      })).reverse();
      setChartData(formatted);
    }

    const { data: logs } = await supabase
      .from("system_diagnostics")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);
    if (logs) setDiagnosticLogs(logs);
  };

  useEffect(() => {
    fetchInitialData();

    const telemetrySubscription = supabase
      .channel("any")
      .on("postgres_changes", { event: "INSERT", scheme: "public", table: "solar_telemetry" }, (payload) => {
        const newLog = payload.new;
        setLatestData(newLog);

        setChartData((prev) => {
          const updated = [...prev, {
            time: new Date(newLog.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            actual: newLog.power,
            forecast: parseFloat((newLog.power * 0.95).toFixed(2))
          }];
          if (updated.length > 15) updated.shift();
          return updated;
        });
      })
      .subscribe();

    const diagnosticsSubscription = supabase
      .channel("diagnostics-logs")
      .on("postgres_changes", { event: "INSERT", scheme: "public", table: "system_diagnostics" }, (payload) => {
        setDiagnosticLogs((prev) => [payload.new, ...prev.slice(0, 2)]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(telemetrySubscription);
      supabase.removeChannel(diagnosticsSubscription);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className={`flex-1 transition-all duration-300 p-6 ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}`}>
        <div className="flex flex-col gap-y-6">
          <StatCards telemetry={latestData} />
          
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-1">
              <SystemDiagnostics logs={diagnosticLogs} />
            </div>
            <div className="xl:col-span-2">
              <PowerChart chartData={chartData} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;