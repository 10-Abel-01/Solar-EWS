import React from "react";
import { useState } from "react";

import Header from "../components/diagnostics/Header";
import StatsOverview from "../components/diagnostics/StatsOverview";
import UnitStats from "../components/diagnostics/UnitStats";

const Diagnostics = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    
    <div className="flex min-h-screen bg-gray-100">
      <main
        className={`flex-1 transition-all duration-300 
          ${isCollapsed ? "lg:ml-20" : "lg:ml-64"}
          lg:mt-0`}
      >
        <div className="flex flex-col gap-y-4">
            {/* sesi diagnostics */}
            <Header />
            <StatsOverview />
            <UnitStats />
        </div>
      </main>
    </div>
  );
};
export default Diagnostics;
