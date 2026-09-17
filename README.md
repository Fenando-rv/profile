# Fenando - Academic & Software Engineering Portfolio Website

> **Tagline:** *"Bridging Academic Rigor & Modern Software Engineering."*

Website portofolio interaktif dan modern untuk **Fenando, M.Kom.** — Dosen Sistem Informasi UIN Raden Fatah Palembang, Asesor Kompetensi BNSP, Juri LKS SMK Prov. Sumsel (Web Technologies & Desain Grafis), Oracle Academy Trainer, Google Certified Educator, Senior Software Engineer, serta Narasumber, Mentor & Juri POLDA & POLRESTABES Sumsel.

---

## 🚀 Panduan Deploy ke GitHub Pages (github.io)

Website ini adalah **Single Page Application (SPA) Statis** tanpa dependensi build / backend, siap di-deploy langsung ke repository GitHub Pages Anda (`Fenando-rv/Fenando-rv.github.io`).

### Langkah 1: Push Kode ke Repository GitHub
Buka terminal/PowerShell di folder lokasi proyek ini (`d:\Tes\Portofolio`), lalu jalankan perintah berikut:

```bash
# Initialize git repository (jika belum)
git init

# Tambahkan semua file
git add .

# Commit perubahan
git commit -m "Initial commit: Fenando Academic & Software Engineering Portfolio SPA"

# Hubungkan ke repository GitHub milik Anda
git remote add origin https://github.com/Fenando-rv/Fenando-rv.github.io.git

# Pastikan branch utama bernama main
git branch -M main

# Push ke GitHub
git push -u origin main
```

### Langkah 2: Aktifkan GitHub Pages pada Repository
1. Buka browser dan pergi ke halaman repository: `https://github.com/Fenando-rv/Fenando-rv.github.io`
2. Klik tab **Settings** (Pengaturan).
3. Di menu sebelah kiri, pilih **Pages**.
4. Pada bagian **Build and deployment**:
   - **Source**: Pilih `Deploy from a branch`
   - **Branch**: Pilih `main` / `root` (`/`), lalu klik **Save**.
5. Tunggu sekitar 1–2 menit. Website Anda akan aktif secara langsung di URL:  
   👉 **`https://Fenando-rv.github.io/`**

---

## 🛠️ Struktur Project

```text
Portofolio/
├── index.html              # Main HTML5 Single Page Application
├── style.css               # Modern CSS Design Tokens, Glassmorphism & Animations
├── main.js                 # Theme Switcher, Filters, Stats Counter, Modal & Live DSS Engine
├── .nojekyll               # Bypass Jekyll builder di GitHub Pages
├── README.md               # Dokumentasi proyek & panduan deployment
└── assets/
    └── images/             # Visual Assets & Generated Project Screenshots
        ├── profile.jpg     # Foto profil Fenando
        ├── project_geotagging.jpg # UI Smart Field Note & Geotagging Aset Mobile GIS
        ├── project_qr_logbook.jpg # UI Logbook Presensi & Sertifikasi QR Code Mobile
        ├── project_mobile.jpg     # Screenshot UI Mobile Order & Payment App
        ├── project_pos.jpg        # Web-Based POS System Toko Radenmat
        ├── project_blk.jpg        # Screenshot UI UPTD BLK PPKT Sumsel ERP
        ├── project_smart_borda.jpg # Visualisasi SPK SMART & Borda Research
        ├── project_donuts.jpg      # E-Commerce Denia Donuts Showcase
        ├── project_qgis.jpg        # Pemetaan Spasial QGIS Tambang Batu Bara
        └── project_match.jpg       # Algorithmic Match Logic App UI
```

---

## ✨ Fitur & Keunggulan Utama

1. **Sticky Header Navbar & Glassmorphism Design**: Header melayang dengan efek blur transparan, navigasi halus (*smooth scroll*), dan *toggle theme* **Dark/Light Mode** yang tersimpan di `localStorage`.
2. **Interactive Statistics Counter**: Angka statistik interaktif saat di-scroll (Tahun Mengajar, Proyek Selesai, Sertifikasi BNSP/Oracle/Google, Pelatihan Kepolisian).
3. **Academic & Professional Credentials Grid**: 4 Kartu modern pilar rekam jejak (Dosen UIN, Asesor BNSP, Instruktur Oracle/Google, Narasumber, Mentor & Juri POLDA Sumsel).
4. **Featured Projects & Research**:
   - Filter Tab interaktif (`Semua`, `Sistem Informasi`, `Mobile App`, `DSS & Algoritma`, `SIG / GIS`, `E-Commerce`).
   - Modal Pop-up Arsitektur Sistem untuk 9 proyek utama:
     - *Smart Field Note & Geotagging Aset (Mobile GIS & OpenStreetMap)*
     - *Logbook Presensi & Sertifikasi Pelatihan Berbasis QR Code (Flutter Mobile App)*
     - *Aplikasi Manajemen Pesanan & Pembayaran Digital Mobile (Flutter & REST API)*
     - *Web-Based POS System with Laravel for Toko Radenmat*
     - *Sistem Informasi Diklat UPTD BLK PPKT Sumsel*
     - *SPK: Pemilihan Sosok Mulia (SMART & Borda)*
     - *E-Commerce Toko Denia Donuts*
     - *SIG Pemetaan Pertambangan Batu Bara QGIS (PT. Hasil Bumi Kalimantan)*
     - *Kecocokan Jodoh (Algorithmic Logic App)*
5. **Live Interactive DSS & SMART Engine Simulator**: Widget kalkulator interaktif untuk mensimulasikan perhitungan bobot kriteria dan fungsi utilitas SMART secara *real-time* langsung di browser.
6. **Skills Matrix Bar**: Bar kemajuan visualisasi keahlian (*PHP/Laravel, Java, C++, Python, MySQL, Oracle DB, QGIS, Flutter*).
7. **Contact Section & Footer**: Form kontak terintergrasi, informasi institusi UIN Raden Fatah Palembang, serta link profil GitHub [https://github.com/Fenando-rv/](https://github.com/Fenando-rv/).

---

## 👨‍💻 Hak Cipta & Lisensi
Disusun oleh **Fenando, M.Kom.** — Open for Academic & Professional Collaboration.
