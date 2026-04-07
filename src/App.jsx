import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Diagnostics from "./pages/Diagnostics";
import MonitorLayout from "./components/layout/MonitorLayout";

import "./App.css";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />

        <Route element={<MonitorLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/diagnostics" element={<Diagnostics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
