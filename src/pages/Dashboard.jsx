import React from "react";
import { useState } from "react";

import StatCards from "../components/dashboard/StatCards";
import MLforecast from "../components/dashboard/MLforecast";
import PowerChart from "../components/dashboard/PowerChart";
import BatteryGrid from "../components/dashboard/BatteryGrid";

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main
        className={`flex-1 transition-all duration-300 
          ${isCollapsed ? "lg:ml-20" : "lg:ml-64"} 
          lg:mt-0`}
      >
        <div className="flex flex-col gap-y-4">
          <StatCards />
          <MLforecast />
          <BatteryGrid />
          <PowerChart />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
