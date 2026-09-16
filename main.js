/**
 * Main Interactive Application Script
 * Portfolio Fenando - Senior Software Engineer & Lecturer
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initScrollSpy();
  initStatsCounter();
  initProjectFilters();
  initProjectModals();
  initInteractivePlayground();
  initSkillBars();
  initContactForm();
});

/* -------------------------------------------------------------
 * 1. Dark / Light Theme Controller
 * ------------------------------------------------------------- */
function initThemeToggle() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const html = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
  }

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      html.classList.toggle('dark');
      const isDark = html.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      updateThemeIcons(isDark);
    });
  });

  updateThemeIcons(html.classList.contains('dark'));
}

function updateThemeIcons(isDark) {
  const sunIcons = document.querySelectorAll('.theme-icon-sun');
  const moonIcons = document.querySelectorAll('.theme-icon-moon');

  sunIcons.forEach(el => el.classList.toggle('hidden', !isDark));
  moonIcons.forEach(el => el.classList.toggle('hidden', isDark));
}

/* -------------------------------------------------------------
 * 2. Mobile Menu Drawer
 * ------------------------------------------------------------- */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

/* -------------------------------------------------------------
 * 3. Scroll Spy Navigation
 * ------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* -------------------------------------------------------------
 * 4. Animated Statistics Counter
 * ------------------------------------------------------------- */
function initStatsCounter() {
  const statsSection = document.getElementById('statistics');
  const counters = document.querySelectorAll('.counter-val');
  let animated = false;

  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const suffix = counter.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / target));

          const timer = setInterval(() => {
            count += 1;
            counter.innerText = count + suffix;
            if (count >= target) {
              counter.innerText = target + suffix;
              clearInterval(timer);
            }
          }, stepTime > 0 ? stepTime : 50);
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);
}

/* -------------------------------------------------------------
 * 5. Project Filter Tabs
 * ------------------------------------------------------------- */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.tab-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* -------------------------------------------------------------
 * 6. Project Architecture Detail Modals
 * ------------------------------------------------------------- */
const projectDetailsData = {
  blk: {
    title: "Sistem Informasi Diklat UPTD BLK PPKT Sumsel",
    category: "Web Application / Public Sector ERP",
    image: "assets/images/project_blk.jpg",
    problem: "Proses manajemen pelatihan kerja di UPTD BLK PPKT Sumsel sebelumnya mengalami hambatan pencatatan manual, kesulitan verifikasi berkas peserta, dan lambatnya rekapitulasi data kelulusan sertifikasi.",
    solution: "Mengembangkan platform portal terpadu berbasis web yang mengotomatisasi siklus diklat dari pendaftaran online, verifikasi berkas, penjadwalan kelas vokasi, hingga penerbitan sertifikat pelatihan.",
    architecture: [
      "Frontend: Responsive Bootstrap 5 UI + Blade Templating",
      "Backend: PHP MVC Framework Engine",
      "Database: MySQL Relational Schema dengan indeks query teroptimasi",
      "Keamanan: RBAC (Role Based Access Control) & Hash Encryption"
    ],
    features: [
      "Pendaftaran peserta diklat terintegrasi dengan validasi NIK",
      "Sistem penjadwalan instruktur & penggunaan laboratorium",
      "Modul verifikasi kelayakan sertifikasi peserta",
      "Laporan statistik eksekutif & ekspor rekapitulasi PDF/Excel"
    ],
    tech: ["PHP", "Laravel", "MySQL", "Bootstrap", "FPDF"]
  },
  smart_borda: {
    title: "SPK: Pemilihan Sosok Mulia (Algoritma SMART & Borda)",
    category: "Decision Support System (DSS) / Research",
    image: "assets/images/project_smart_borda.jpg",
    problem: "Pengambilan keputusan pemenang/sosok mulia yang bersifat kualitatif sering menghadapi tantangan subjektivitas serta perbedaan pembobotan antar tim penilai (juri).",
    solution: "Merancang Sistem Pendukung Keputusan hibrida menggabungkan algoritma Simple Multi-Attribute Rating Technique (SMART) untuk pembobotan kriteria dan Metode Borda untuk konsolidasi pemeringkatan keputusan kelompok.",
    architecture: [
      "Engine SMART: Pengukuran fungsi utilitas linier Ui(ai) = (Cmax - Cout)/(Cmax - Cmin)",
      "Engine Borda: Pengakumulasian skor bobot urutan posisi penilai B(x) = Σ (N - Rank_k)",
      "Interface: High-precision Web Analytics UI dengan kalkulator matriks",
      "Storage: MySQL Data Mart penampung alternatif & kriteria"
    ],
    features: [
      "Normalisasi bobot kriteria terintegrasi secara otomatis",
      "Penghitungan matriks utilitas SMART realtime",
      "Metode Borda konsensus penilai ter multi-voter",
      "Grafik visualisasi pemeringkatan & analisis sensitivitas"
    ],
    tech: ["Algoritma DSS", "SMART Engine", "Borda Voting", "PHP", "Data Analytics"]
  },
  donuts: {
    title: "E-Commerce Toko Denia Donuts",
    category: "Commercial Web / Retail",
    image: "assets/images/project_donuts.jpg",
    problem: "Keterbatasan jangkauan pemesanan manual toko Denia Donuts yang menghambat efisiensi rekap pesanan harian dan pelacakan stok varian rasa.",
    solution: "Membangun toko online e-commerce responsif lengkap dengan katalog produk interaktif, keranjang belanja real-time, dan manajemen inventori otomatis.",
    architecture: [
      "Frontend: Clean HTML5 & Modern CSS Grid Layout",
      "Session Engine: Client-side Cart State Management",
      "Backend: PHP Native Engine + Order Rekapitulasi",
      "Database: MySQL transactional DB (Orders, Products, Stock)"
    ],
    features: [
      "Katalog donut interaktif dengan filter varian & stok",
      "Keranjang belanja real-time dan kalkulasi total otomatis",
      "Form pemesanan terintegrasi WhatsApp API Checkout",
      "Dashboard admin manajemen stok & laporan penjualan"
    ],
    tech: ["PHP", "JavaScript", "MySQL", "CSS3 Grid", "WhatsApp API"]
  },
  qgis: {
    title: "SIG Pemetaan Pertambangan Batu Bara (PT. Hasil Bumi Kalimantan)",
    category: "Geographic Information System (GIS) / Spatial Data",
    image: "assets/images/project_qgis.jpg",
    problem: "Tantangan pemantauan batas konsesi pertambangan batu bara, analisis topografi kemiringan lereng, serta rute jalur logistik alat berat di area operasional tambang.",
    solution: "Melakukan pemetaan spasial presisi berbasis Quantum GIS (QGIS) dengan integrasi data penginderaan jauh, georeferencing peta tambang, dan analisis zonasi eksplorasi.",
    architecture: [
      "GIS Platform: Quantum GIS (QGIS 3.x) Desktop Environment",
      "Vector Layers: Shapefiles (.shp) Batas Konsesi, Jalur Haulage, Titik Pit",
      "Raster Data: Digital Elevation Model (DEM) & Kontur Topografi",
      "Spatial Engine: QGIS Processing Toolbox & Spatial Indexing"
    ],
    features: [
      "Analisis Buffer Spasial untuk jarak aman zona tambang",
      "Digitasi vektor kontur dan klasifikasi penggunaan lahan",
      "Visualisasi peta layout profesional siap cetak (Map Composer)",
      "Estimasi jarak tempuh & kemiringan jalur logistik tambang"
    ],
    tech: ["Quantum GIS (QGIS)", "Spatial Database", "Georeferencing", "Shapefiles", "DEM"]
  },
  match: {
    title: "Kecocokan Jodoh (Algorithmic Logic App)",
    category: "Interactive Logic / Algorithmic Fun",
    image: "assets/images/project_match.jpg",
    liveUrl: "https://fenando-rv.github.io/Kecocokan_Jodoh/",
    problem: "Kebutuhan akan media interaktif berbasis logika pemrograman yang dapat mensimulasikan pencocokan parameter personal secara menyenangkan namun terstruktur.",
    solution: "Membuat aplikasi algoritma interaktif berbasis web yang memproses nama, numerologi personal, dan preferensi untuk menghasilkan persentase kompatibilitas beserta visualisasi node.",
    architecture: [
      "Algorithmic Logic: String Hashing & Character Frequency Analysis Engine",
      "UI Component: Modern Neon Glassmorphism Interactive Layout",
      "State: Instant JavaScript In-Memory Compatibility Engine"
    ],
    features: [
      "Kalkulasi kecocokan instant dengan animasi visual gauge meter",
      "Breakdown komponen kompatibilitas (Komunikasi, Nilai, Hobi)",
      "Logika persentase terukur berbasis matriks bobot nama",
      "Desain responsif & interaktif untuk semua perangkat"
    ],
    tech: ["JavaScript", "HTML5", "CSS3", "Algorithmic Logic"]
  },
  radenmat: {
    title: "Web-Based POS System with Laravel for Toko Radenmat",
    category: "Web Application / Commercial POS",
    image: "assets/images/project_pos.jpg",
    problem: "Pencatatan transaksi manual dan pengelolaan inventori ritel di Toko Radenmat yang rentan selisih stok, lambatnya layanan kasir, serta ketidakakuratan laporan keuangan harian.",
    solution: "Merancang dan membangun Sistem Informasi Penjualan (Point of Sale / POS) berbasis web dengan framework Laravel yang mengotomatisasi kasir transaksi, manajemen stok barang, pencetakan struk, serta dashboard laporan penjualan harian/bulanan secara real-time.",
    architecture: [
      "Frontend: Responsive Blade Templating + Tailwind CSS & JavaScript",
      "Backend: PHP Laravel MVC Architecture Engine",
      "Database: MySQL Transactional Schema (Products, Sales, Stock Log)",
      "Printer Integration: Thermal Receipt Printing & Barcode Scanner Integration"
    ],
    features: [
      "Point of Sale (POS) interface kasir cepat dengan pencarian barang & barcode",
      "Manajemen stok & notifikasi otomatis saat stok barang menipis",
      "Cetak struk pembayaran kasir & transaksi via printer thermal",
      "Dashboard analitik penjualan harian, bulanan, dan produk terlaris"
    ],
    tech: ["PHP", "Laravel", "MySQL", "Tailwind CSS", "POS Engine"]
  },
  mobile_pay: {
    title: "Aplikasi Manajemen Pesanan & Pembayaran Digital (Mobile)",
    category: "Mobile Application / Fintech & Commerce",
    image: "assets/images/project_mobile.jpg",
    problem: "Keterlambatan pemrosesan pesanan pelanggan dan kompleksitas verifikasi pembayaran manual pada operasional ritel & layanan pesanan.",
    solution: "Mengembangkan aplikasi mobile cross-platform berbasis Flutter & REST API yang memungkinkan pelanggan melakukan pemesanan digital secara real-time, melacak alur proses pesanan, serta menyelesaikan pembayaran instant dengan integrasi Payment Gateway & E-Wallet.",
    architecture: [
      "Mobile Architecture: Flutter Cross-Platform App (Dart Engine)",
      "State Management: BLoC / Provider Architecture Pattern",
      "Backend Services: RESTful API Backend (PHP/Laravel & Node.js)",
      "Payment Engine: Multi Payment Gateway Integration (QRIS, E-Wallet, Transfer)",
      "Database & Push: MySQL Transactional DB & Firebase Cloud Messaging (FCM)"
    ],
    features: [
      "Katalog produk mobile interaktif dengan sistem pencarian & keranjang",
      "Real-time Order Tracking (Status Pesanan: Diproses, Dikirim, Selesai)",
      "Integrasi transaksi pembayaran digital instant (QRIS, Virtual Account, E-Wallet)",
      "Push Notification otomatis via Firebase untuk pembaharuan status pesanan"
    ],
    tech: ["Flutter", "Dart", "REST API", "Payment Gateway", "Firebase", "MySQL"]
  }
};

function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const triggerBtns = document.querySelectorAll('.open-modal-btn');

  if (!modal) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project');
      const data = projectDetailsData[projectId];

      if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-category').innerText = data.category;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-problem').innerText = data.problem;
        document.getElementById('modal-solution').innerText = data.solution;

        // Render Architecture
        const archList = document.getElementById('modal-architecture');
        archList.innerHTML = data.architecture.map(item => `<li class="flex items-start gap-2"><span class="text-indigo-500 font-bold">›</span> <span>${item}</span></li>`).join('');

        // Render Features
        const featList = document.getElementById('modal-features');
        featList.innerHTML = data.features.map(item => `<li class="flex items-start gap-2"><span class="text-cyan-500 font-bold">✓</span> <span>${item}</span></li>`).join('');

        // Render Tech Tags
        const techContainer = document.getElementById('modal-tech');
        techContainer.innerHTML = data.tech.map(t => `<span class="px-2.5 py-1 text-xs font-mono rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800">${t}</span>`).join('');

        // Render Live Link if present
        const liveContainer = document.getElementById('modal-live-container');
        const liveBtn = document.getElementById('modal-live-btn');
        if (liveContainer && liveBtn) {
          if (data.liveUrl) {
            liveBtn.href = data.liveUrl;
            liveContainer.classList.remove('hidden');
          } else {
            liveContainer.classList.add('hidden');
          }
        }

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------
 * 7. Live Interactive Algorithmic Playground (SMART & Borda Engine)
 * ------------------------------------------------------------- */
function initInteractivePlayground() {
  const w1Input = document.getElementById('weight-c1');
  const w2Input = document.getElementById('weight-c2');
  const w3Input = document.getElementById('weight-c3');
  const calculateBtn = document.getElementById('calc-smart-btn');

  if (!w1Input || !calculateBtn) return;

  const updateWeights = () => {
    const w1 = parseFloat(w1Input.value) || 0;
    const w2 = parseFloat(w2Input.value) || 0;
    const w3 = parseFloat(w3Input.value) || 0;
    const total = w1 + w2 + w3;

    document.getElementById('val-c1').innerText = w1;
    document.getElementById('val-c2').innerText = w2;
    document.getElementById('val-c3').innerText = w3;

    // Normalized weights
    const n1 = (w1 / (total || 1)).toFixed(2);
    const n2 = (w2 / (total || 1)).toFixed(2);
    const n3 = (w3 / (total || 1)).toFixed(2);

    document.getElementById('norm-c1').innerText = n1;
    document.getElementById('norm-c2').innerText = n2;
    document.getElementById('norm-c3').innerText = n3;
  };

  w1Input.addEventListener('input', updateWeights);
  w2Input.addEventListener('input', updateWeights);
  w3Input.addEventListener('input', updateWeights);

  calculateBtn.addEventListener('click', () => {
    const w1 = parseFloat(w1Input.value) || 0;
    const w2 = parseFloat(w2Input.value) || 0;
    const w3 = parseFloat(w3Input.value) || 0;
    const total = w1 + w2 + w3 || 1;

    const n1 = w1 / total;
    const n2 = w2 / total;
    const n3 = w3 / total;

    // Candidates raw scores (Integrity, Competency, Leadership out of 100)
    const candidates = [
      { name: "Kandidat A (Dosen Teladan)", c1: 95, c2: 90, c3: 88 },
      { name: "Kandidat B (Inovator Riset)", c1: 85, c2: 98, c3: 82 },
      { name: "Kandidat C (Pengabdi Masyarakat)", c1: 90, c2: 84, c3: 95 }
    ];

    // Calculate SMART score = Σ (Wj * (Score / 100))
    const results = candidates.map(c => {
      const u1 = c.c1 / 100;
      const u2 = c.c2 / 100;
      const u3 = c.c3 / 100;
      const smartScore = (n1 * u1 + n2 * u2 + n3 * u3) * 100;
      return { ...c, score: smartScore.toFixed(2) };
    });

    results.sort((a, b) => b.score - a.score);

    // Render results in table
    const resultTable = document.getElementById('smart-result-body');
    resultTable.innerHTML = results.map((item, index) => `
      <tr class="${index === 0 ? 'bg-indigo-500/10 font-bold border-l-4 border-indigo-500' : 'border-b border-gray-200 dark:border-gray-800'}">
        <td class="py-2.5 px-3">
          ${index === 0 ? '🥇 Rank 1' : index === 1 ? '🥈 Rank 2' : '🥉 Rank 3'}
        </td>
        <td class="py-2.5 px-3">${item.name}</td>
        <td class="py-2.5 px-3 font-mono text-cyan-600 dark:text-cyan-400">${item.score} / 100</td>
        <td class="py-2.5 px-3 text-xs">
          <span class="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">SMART Validated</span>
        </td>
      </tr>
    `).join('');
  });

  updateWeights();
}

/* -------------------------------------------------------------
 * 8. Skills Matrix Bar Observer
 * ------------------------------------------------------------- */
function initSkillBars() {
  const skillSection = document.getElementById('skills');
  const skillFills = document.querySelectorAll('.skill-bar-fill');

  if (!skillSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skillFills.forEach(fill => {
          const percentage = fill.getAttribute('data-percentage');
          fill.style.width = percentage + '%';
        });
      }
    });
  }, { threshold: 0.2 });

  observer.observe(skillSection);
}

/* -------------------------------------------------------------
 * 9. Contact Form Controller (WhatsApp Direct Submission)
 * ------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');

  // Nomor WhatsApp Tujuan
  const MY_WA_NUMBER = "6285367894141";

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !subject || !message) {
        alert('Mohon lengkapi semua kolom (Nama, Email, Subjek, Pesan) terlebih dahulu.');
        return;
      }

      // Format WhatsApp Message Text
      const text = `Halo Pak Fenando, perkenalkan saya: *${name}*\n` +
                   `📧 Email: ${email}\n` +
                   `📌 Subjek: ${subject}\n\n` +
                   `💬 *Pesan Kolaborasi:*\n${message}`;

      const waUrl = `https://wa.me/${MY_WA_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    });
  }
}
