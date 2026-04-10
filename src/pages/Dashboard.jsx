import React from "react";
import { useState } from "react";

import StatCards from "../components/dashboard/StatCards";
import MLforecast from "../components/dashboard/MLforecast";
import PowerChart from "../components/dashboard/PowerChart";
import BatteryGrid from "../components/dashboard/BatteryGrid";


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
          {/* sesi dashboard */}
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
