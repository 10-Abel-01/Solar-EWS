# Solar-EWS

**Solar-EWS (Solar Powered Early Warning System)** adalah sebuah sistem peringatan dini berbasis teknologi IoT (*Internet of Things*) yang ditenagai oleh energi surya (solar panel). Proyek ini dirancang untuk mendeteksi potensi bahaya atau perubahan lingkungan secara real-time dan memberikan peringatan cepat demi meminimalisir dampak risiko.

---

## Fitur Utama
* **Solar Powered System:** Menggunakan manajemen daya mandiri berbasis sel surya untuk operasional yang berkelanjutan di area terpencil.
* **Real-Time Monitoring:** Memantau kondisi sensor secara terus-menerus dan mengirimkan data secara instan.
* **Early Warning Alert:** Mengirimkan notifikasi peringatan dini (bisa berupa sirine, SMS, atau push notification) ketika parameter sensor melewati batas aman.
* **Dashboard Interaktif:** Visualisasi data sensor yang intuitif untuk memudahkan analisis kondisi di lapangan.

---

## Teknologi yang Digunakan
* **Hardware:** Arduino / ESP32 / Raspberry Pi, Solar Panel, Battery Control Module, serta Sensor terkait
* **Bahasa Pemrograman:** C++ (Arduino IDE) / Python / JavaScript
* **Protokol Komunikasi:** MQTT / HTTP / LoRa
* **Platform Cloud/Dashboard:** Blynk / Node-RED / Custom Web App

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

## Cara Instalasi & Penggunaan
1. **Clone Repositori ini:**
```bash
   git clone [https://github.com/10-Abel-01/Solar-EWS.git](https://github.com/10-Abel-01/Solar-EWS.git)