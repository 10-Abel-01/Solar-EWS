import { useState, useEffect } from 'react';

const VOLTAGE_MIN = 11.5;
const VOLTAGE_MAX = 13.5;
const TEMP_MAX = 60;
const EFFICIENCY_MIN = 70;

function generateData() {
  const voltage = parseFloat((Math.random() * 3 + 11).toFixed(1));
  const temp = parseFloat((Math.random() * 40 + 25).toFixed(1));
  const efficiency = parseFloat((Math.random() * 40 + 60).toFixed(1));
  const timestamp = new Date().toLocaleTimeString();
  return { voltage, temp, efficiency, timestamp };
}

function buildAlerts(data) {
  const alerts = [];

  if (data.voltage < VOLTAGE_MIN) {
    alerts.push({
      id: 'volt-low',
      msg: `Low voltage detected: ${data.voltage}V (min ${VOLTAGE_MIN}V)`,
      color: 'text-red-600',
    });
  } else if (data.voltage > VOLTAGE_MAX) {
    alerts.push({
      id: 'volt-high',
      msg: `High voltage detected: ${data.voltage}V (max ${VOLTAGE_MAX}V)`,
      color: 'text-orange-600',
    });
  }

  if (data.temp > TEMP_MAX) {
    alerts.push({
      id: 'temp-high',
      msg: `Overheating: ${data.temp}°C (max ${TEMP_MAX}°C)`,
      color: 'text-red-600',
    });
  }

  if (data.efficiency < EFFICIENCY_MIN) {
    alerts.push({
      id: 'eff-low',
      msg: `Low efficiency: ${data.efficiency}% (min ${EFFICIENCY_MIN}%)`,
      color: 'text-yellow-600',
    });
  }

  return alerts;
}

export function useTrafficAI() {
  const [data, setData] = useState({
    voltage: 12.5,
    temp: 38.0,
    efficiency: 85.0,
    timestamp: new Date().toLocaleTimeString(),
  });
  const [alerts, setAlerts] = useState([]);
  const [isHazard, setIsHazard] = useState(false);

  useEffect(() => {
    const tick = () => {
      const newData = generateData();
      const newAlerts = buildAlerts(newData);
      setData(newData);
      setAlerts(newAlerts);
      setIsHazard(newAlerts.length > 0);
    };

    tick(); // run immediately on mount
    const interval = setInterval(tick, 3000); // update every 3s
    return () => clearInterval(interval);
  }, []);

  return { data, alerts, isHazard };
}