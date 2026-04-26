import { useState, useEffect } from 'react';

export const useTrafficAI = () => {
  const [data, setData] = useState({
    voltage: 12.5,
    temp: 30,
    efficiency: 95,
    timestamp: new Date().toLocaleTimeString()
  });

  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // data dummy ngacak
      const newVoltage = parseFloat((11 + Math.random() * 3).toFixed(2));
      const newTemp = Math.floor(25 + Math.random() * 40);
      const newEfficiency = Math.floor(60 + Math.random() * 40);

      setData({
        voltage: newVoltage,
        temp: newTemp,
        efficiency: newEfficiency,
        timestamp: new Date().toLocaleTimeString()
      });

      // logika alert sederhana
      const currentAlerts = [];

      if (newTemp > 50) {
        currentAlerts.push({
          id: Date.now() + 1,
          type: 'CRITICAL',
          msg: `Suhu Berlebih: ${newTemp}°C!`,
          color: 'text-red-600'
        });
      }

      if (newEfficiency < 75) {
        currentAlerts.push({
          id: Date.now() + 2,
          type: 'WARNING',
          msg: `Efisiensi Drop ke ${newEfficiency}%`,
          color: 'text-orange-600'
        });
      }

      setAlerts(currentAlerts);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return { data, alerts, isHazard: alerts.length > 0 };
};