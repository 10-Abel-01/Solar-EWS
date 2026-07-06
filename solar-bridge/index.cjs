const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://oxnqajdkpqrdizgywkjv.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bnFhamRrcHFyZGl6Z3l3a2p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMyNjcxOTIsImV4cCI6MjA5ODg0MzE5Mn0.MD5zBeYLlWpcdHMC5hi1QWok7if9K-vSqP5pygK8OAE';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

console.log('Gerbang kematian  Aktif!');
console.log('Memulai generator data Solar-EWS...');

let posisiServo = 90;

function generateMockData() {
  const ldr_kiri = Math.floor(Math.random() * (800 - 300) + 300);
  const ldr_kanan = Math.floor(Math.random() * (800 - 300) + 300);
  
  if ((ldr_kiri - ldr_kanan) > 20 && posisiServo < 180) posisiServo += 2;
  else if ((ldr_kanan - ldr_kiri) > 20 && posisiServo > 0) posisiServo -= 2;

  const rataRataLdr = (ldr_kiri + ldr_kanan) / 2;
  
  let voltage = parseFloat(((rataRataLdr / 1023.0) * 12.0).toFixed(2));
  if (voltage < 0.5) voltage = 0.0;

  let current = parseFloat(((rataRataLdr / 1023.0) * 2.0).toFixed(2));
  if (current < 0.1) current = 0.0;

  const power = parseFloat((voltage * current).toFixed(2));
  const temperature = parseFloat((26.0 + ((rataRataLdr / 1023.0) * 18.0)).toFixed(1));

  return { ldr_kiri, ldr_kanan, posisi_servo: posisiServo, voltage, current, power, temperature };
}

setInterval(async () => {
  const sensorObj = generateMockData();
  console.log('Data Terbentuk:', sensorObj);

  try {
    const { data, error } = await supabase
      .from('solar_telemetry')
      .insert([
        { 
          voltage: sensorObj.voltage,
          current: sensorObj.current,
          power: sensorObj.power,
          temperature: sensorObj.temperature,
          ldr_kiri: sensorObj.ldr_kiri,
          ldr_kanan: sensorObj.ldr_kanan
        }
      ]);

    if (error) {
      console.error('Gagal kirim ke Supabase:', error.message);
    } else {
      console.log('Data berhasil disuplai ke Supabase!');
    }

    if (sensorObj.temperature > 40.0) {
      await supabase
        .from('system_diagnostics')
        .insert([
          {
            status_level: 'WARNING',
            issue_type: 'OVERHEAT_ESTIMATION',
            diagnostic_msg: `Suhu panel terindikasi tinggi (${sensorObj.temperature}°C) berdasarkan intensitas cahaya tinggi pada simulator.`
          }
        ]);
      console.log('Log Diagnosa: Terjadi Overheat!');
    }

  } catch (err) {
    console.error('Terjadi eror sistem:', err.message);
  }
}, 3000);