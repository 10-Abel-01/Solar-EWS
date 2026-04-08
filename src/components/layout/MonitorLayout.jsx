import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const MonitorLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#f3f4f9]">
      <Sidebar />
      
      <main className="flex-1 lg:pl-4 mt-14 transition-all duration-300"> 
        <div className="p-6 md:p-4 max-w-7xl mx-auto">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default MonitorLayout;