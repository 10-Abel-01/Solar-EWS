import React from 'react';
import { useState, useEffect, useMemo } from 'react';

export const useSolarAI = (currentData) => {
  const [status, setStatus] = useState("Stable");
  const [alerts, setAlerts] = useState([]);

  // Threshold Logic (Bisa diganti dengan model ML nantinya)
  const THRESHOLD = {
    LOW_EFFICIENCY: 75, // di bawah 75% mulai bahaya
    HIGH_TEMP: 50,      // di atas 50°C warning
  };

  const analyzeTraffic = useMemo(() => {
    if (!currentData) return;

    const newAlerts = [];
    
    // Logic 1: Cek Efisiensi (EWS)
    if (currentData.efficiency < THRESHOLD.LOW_EFFICIENCY) {
      newAlerts.push({
        type: "CRITICAL",
        msg: `Efficiency Drop! Current: ${currentData.efficiency}%`,
        time: new Date().toLocaleTimeString()
      });
    }

    // Logic 2: Cek Temperatur
    if (currentData.temp > THRESHOLD.HIGH_TEMP) {
      newAlerts.push({
        type: "WARNING",
        msg: `High Temperature Detected: ${currentData.temp}°C`,
        time: new Date().toLocaleTimeString()
      });
    }

    setAlerts(newAlerts);
    setStatus(newAlerts.length > 0 ? "Alert" : "Stable");

  }, [currentData]);

  return { status, alerts, isHazard: alerts.length > 0 };
};