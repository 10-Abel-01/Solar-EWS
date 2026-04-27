import React from "react";
import { useState } from "react";

import Header from "../components/analytics/Header";
import StatsOverview from "../components/analytics/StatsOverview";
import WeeklyOverview from "../components/analytics/WeeklyOverview";
import SummaryCards from "../components/analytics/SummaryCards";

const Analytics = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main
        className={`flex-1 transition-all duration-300 
          ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}
          lg:mt-0`}
      >
        <div className="flex flex-col gap-y-4 space-y-8 pb-10">
          {/* sesi analytics */}
          <Header />
          <SummaryCards />  
          <StatsOverview />
          <WeeklyOverview />
        </div>
      </main>
    </div>
  );
};
export default Analytics;
