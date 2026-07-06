# Solar-EWS

**Solar-EWS (Solar Powered Early Warning System)** adalah sebuah sistem pelacakan panel surya otomatis (*solar tracker*) sekaligus peringatan dini berbasis teknologi IoT (*Internet of Things*). Sistem ini dirancang untuk memaksimalkan penyerapan energi matahari dengan menggerakkan panel surya mengikuti arah cahaya, sekaligus memantau metrik daya dan suhu secara real-time guna mendeteksi anomali performa secara dini.

---

## Fitur Utama
* **Dual-Axis Solar Tracker:** Dilengkapi dua buah sensor LDR (Kiri dan Kanan) serta motor servo untuk mengarahkan panel surya secara dinamis ke titik cahaya terkuat.
* **Real-Time Telemetry Data:** Memantau metrik fisis secara langsung seperti Tegangan (V), Arus (A), Daya Absorpsi (W), Efisiensi, serta Suhu Panel (°C).
* **AI Live Monitor & Diagnostic:** Mengintegrasikan model prediksi berbasis kecerdasan buatan (AI Prediction vs Actual Power) untuk mendeteksi penurunan efisiensi atau kondisi darurat (e.g., *Overheating* / Suhu Berlebih).
* **Cloud Database Integration:** Data telemetri dari mikrokontroler disinkronisasikan secara instan ke cloud database Supabase menggunakan skrip jembatan berbasis Node.js.
* **Interactive Dashboard:** Antarmuka web modern yang interaktif untuk memvisualisasikan grafik penyerapan energi dan status kesehatan sistem (*System Safe* atau *System Danger*).

---

## Teknologi yang Digunakan

### Hardware (Perangkat Keras)
* **Mikrokontroler:** Arduino Uno
* **Aktuator:** Motor Servo (SG90)
* **Sensor:** 2x Sensor LDR (Light Dependent Resistor), Sensor Tegangan & Arus, Sensor Suhu
* **Daya:** Solar Panel Mini & Module Pengisian Daya/Baterai

### Software & Cloud (Perangkat Lunak)
* **Firmware:** C++ (Arduino IDE)
* **Data Bridge / Backend:** Node.js (JavaScript) untuk menjembatani komunikasi serial Arduino ke Cloud
* **Database:** Supabase (PostgreSQL) dengan konfigurasi Row Level Security (RLS)
* **Frontend Dashboard:** React.js / Vite, Tailwind CSS (menggunakan arsitektur komponen seperti `SystemDiagnostic`, `PowerStatCards`, dan `Analytics`)

---

## Arsitektur Aliran Data (Data Flow)
1. **Arduino Uno** membaca nilai analog dari LDR Kiri & Kanan serta menghitung rata-rata skala ADC (0 - 1023) untuk menggerakkan servo.
2. Data telemetri dikirimkan dari Arduino melalui komunikasi **Serial (COM port)**.
3. Skrip **Node.js (`node index.cjs`)** membaca data dari *Serial Port* dan melakukan `INSERT` data secara real-time ke tabel `public.solar_telemetry` di **Supabase**.
4. Aplikasi web **Vite/React Dashboard** mengambil data terbaru dari Supabase untuk ditampilkan ke dalam grafik dan dianalisis oleh sistem deteksi anomali AI.

---

## Tim Pengembang & Pembagian Tugas (Project Members)

Berikut adalah kontribusi dan tanggung jawab dari masing-masing anggota tim dalam pengembangan proyek **Solar-EWS**:

| Nama Anggota | Peran / Role | Deskripsi Tugas (Responsibility) |
| :--- | :--- | :--- |
| **Raihan Lundy Arista** | **Project Manager (PM)** | Mengatur *timeline* proyek, memimpin koordinasi tim, mengelola repositori GitHub, serta memastikan seluruh target pengembangan tercapai tepat waktu. |
| **Abel Saferyan** | **Developer (Dev)** | Bertanggung jawab penuh pada penulisan kode program (firmware/software), konfigurasi pembacaan sensor, manajemen daya, serta integrasi sistem komunikasi data. |
| **Muhammad Riski Kurniawan** | **Designer** | Merancang aset visual, UI/UX antarmuka dashboard monitoring, pembuatan logo/ikon sistem, serta memastikan estetika visual komponen aplikasi tetap optimal. |
| **Hidayat Chandra** | **Teknisi** | Melakukan perakitan sirkuit perangkat keras (*hardware*), pengujian sistem di lapangan (*testing*), optimasi daya solar panel, serta menangani kendala teknis perangkat keras. |
| **Hamad Syaid** | **Penulis Dokumentasi** | Menyusun laporan proyek, mencatat *changelog*, membuat skema rangkaian, panduan instalasi alat, serta bertanggung jawab atas seluruh berkas dokumentasi teknis. |

---

## Panduan Instalasi & Penggunaan

### 1. Clone Repositori
```bash
git clone [https://github.com/10-Abel-01/Solar-EWS.git](https://github.com/10-Abel-01/Solar-EWS.git)
cd Solar-EWS