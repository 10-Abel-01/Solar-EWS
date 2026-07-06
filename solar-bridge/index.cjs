const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://oxnqajdkpqrdizgywkjv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bnFhamRrcHFyZGl6Z3l3a2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNjcxOTIsImV4cCI6MjA5ODg0MzE5Mn0.MD5zBeYLlWpcdHMC5hi1QWok7if9K-vSqP5pygK8OAE';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Gerbang kematian  Aktif!');
console.log('Memulai generator data Solar-EWS...');

let ldrKiri = 500;
let ldrKanan = 500;
let posisiServo = 90;

// batas random walk: seberapa besar boleh berubah per tick
const MAX_STEP = 25;   // makin kecil = makin halus & meyakinkan
const MIN_LDR = 250;
const MAX_LDR = 900;

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function stepValue(current) {
  const delta = (Math.random() * 2 - 1) * MAX_STEP; // -MAX_STEP .. +MAX_STEP
  return clamp(Math.round(current + delta), MIN_LDR, MAX_LDR);
}

function generateMockData() {
  // update dengan drift halus, bukan reroll total
  ldrKiri = stepValue(ldrKiri);
  ldrKanan = stepValue(ldrKanan);

  if ((ldrKiri - ldrKanan) > 20 && posisiServo < 180) posisiServo += 2;
  else if ((ldrKanan - ldrKiri) > 20 && posisiServo > 0) posisiServo -= 2;

  const rataRataLdr = (ldrKiri + ldrKanan) / 2;

  let voltage = parseFloat(((rataRataLdr / 1023.0) * 12.0).toFixed(2));
  if (voltage < 0.5) voltage = 0.0;

  let current = parseFloat(((rataRataLdr / 1023.0) * 2.0).toFixed(2));
  if (current < 0.1) current = 0.0;

  const power = parseFloat((voltage * current).toFixed(2));
  const temperature = parseFloat((26.0 + ((rataRataLdr / 1023.0) * 18.0)).toFixed(1));

  return { ldr_kiri: ldrKiri, ldr_kanan: ldrKanan, posisi_servo: posisiServo, voltage, current, power, temperature };
}

setInterval(async () => {
  const sensorObj = generateMockData();
  console.log('Data Terbentuk:', sensorObj);

  try {
    await supabase.from('solar_telemetry').insert([{
      voltage: sensorObj.voltage,
      current: sensorObj.current,
      power: sensorObj.power,
      temperature: sensorObj.temperature,
      ldr_kiri: sensorObj.ldr_kiri,
      ldr_kanan: sensorObj.ldr_kanan
    }]);

    if (sensorObj.temperature > 40.0) {
      await supabase.from('system_diagnostics').insert([{
        status_level: 'WARNING',
        issue_type: 'OVERHEAT_ESTIMATION',
        diagnostic_msg: `Suhu panel terindikasi tinggi (${sensorObj.temperature}°C).`
      }]);
    }
  } catch (err) {
    console.error('Terjadi eror sistem:', err.message);
  }
}, 3000);