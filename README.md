# 🔗 Link - Premium Link-in-Bio Hub

**Link** adalah aplikasi web "Link-in-Bio" (seperti Linktree) premium dan interaktif yang dirancang untuk kreator digital dan developer. Proyek ini menyelesaikan masalah keterbatasan media sosial yang hanya mengizinkan satu tautan profil dengan menyediakan halaman hub personal berdesain futuristik, responsif, dan kaya akan animasi interaktif untuk menampilkan seluruh portofolio, proyek, dan jejaring sosial dalam satu tempat.

---

## 🛡️ Badges

![Next.js](https://img.shields.io/badge/Next.js-16.2.10-black?style=for-the-badge&logo=nextdotjs)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Fitur Utama

- **Pancaran Cahaya Latar Belakang (SideRays)**: Latar belakang premium dengan efek pancaran cahaya (*ray animation*) dinamis yang memberikan kesan kedalaman dan estetika modern.
- **Efek Teks Bersinar (ShinyText)**: Animasi teks berkilau (*shimmer effect*) yang elegan untuk mempercantik peran/jabatan pada profil.
- **Lightbox Preview Avatar**: Foto profil dapat diklik untuk memperbesar gambar dalam tampilan modal interaktif menggunakan transisi pegas yang mulus.
- **Tombol Berbagi Cepat (Share Button)**: Terintegrasi dengan Web Share API bawaan peramban (browser) untuk memudahkan pengunjung membagikan halaman profil Anda hanya dengan sekali klik.
- **Optimasi SEO & Skema Metadata**: Dilengkapi dengan metadata OpenGraph, Twitter Cards, optimasi robot mesin pencari, serta skema JSON-LD (`ProfilePage` & `Person`) untuk optimasi SEO yang maksimal.
- **Analitik Vercel**: Integrasi siap pakai dengan `@vercel/analytics` untuk melacak jumlah kunjungan dan interaksi pengguna.
- **Desain Responsif & Glassmorphism**: Tampilan antarmuka berbasis *glassmorphic* yang optimal diakses dari perangkat mobile maupun desktop.

---

## 🛠️ Tech Stack

### Frontend
- **Framework Utama**: [Next.js v16](https://nextjs.org/) (App Router, React 19, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (menggunakan `@tailwindcss/postcss`) & [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Animasi & Interaksi**: [Motion](https://motion.dev/) (Framer Motion)
- **Pustaka Grafis (WebGL/Three.js)**: [Three.js](https://threejs.org/) & [OGL](https://github.com/oopsa/ogl) (tersedia komponen `LiquidEther.tsx` untuk eksperimen latar belakang cairan interaktif)
- **Kumpulan Ikon**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome 6 & Ionicons) & [Lucide React](https://lucide.dev/)

### Tools & Infrastruktur
- **Web Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Linting**: [ESLint](https://eslint.org/)
- **Runtime Environment**: [Node.js](https://nodejs.org/)

---

## 📸 Screenshot / Demo

*Placeholder Tampilan Antarmuka:*

```
┌─────────────────────────────────────────┐
│ [🔗 Share]                              │
│                                         │
│          (✨ Foto Profil Glow ✨)       │
│               Syahreza Satria           │
│           - DIGITAL CREATOR -           │
│                                         │
│  [ Mie Ayam Production               ]  │
│  [ Discord Server                    ]  │
│  [ 🌐 Developer Portofolio (Highlight)]  │
│  [ 📷 Photography (Highlight)        ]  │
│  [ Rakit CV                          ]  │
│                                         │
│  (𝕏) (🔗) (💼) (✉️) (🐙)                 │
│                                         │
│           Made with 🤍 by Satria        │
└─────────────────────────────────────────┘
```

*(Untuk menambahkan screenshot asli, simpan file gambar di dalam folder `/public` dan perbarui tautan ini)*

---

## 📋 Prasyarat

Sebelum memulai instalasi, pastikan lingkungan pengembangan Anda telah memenuhi spesifikasi berikut:
- **Node.js**: Versi `18.x` atau yang lebih baru (sangat direkomendasikan versi LTS terbaru)
- **NPM / Bun / Yarn**: Pengelola paket bawaan Node.js

---

## ⚙️ Instalasi

Ikuti langkah-langkah di bawah ini untuk memasang proyek ini di lingkungan lokal Anda:

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/syahreza-satria/link.git
   cd link
   ```

2. **Pasang Dependensi**:
   ```bash
   npm install
   ```

3. **Konfigurasi Profil Anda**:
   Buka file [app/src/data.ts](file:///c:/Users/satri/Documents/Development/web-app/link/app/src/data.ts) dan sesuaikan informasi profil, tautan sosial, serta daftar link yang ingin Anda tampilkan:
   ```typescript
   export const profile = {
     name: "Nama Anda",
     role: "Peran / Bidang Anda",
     avatar: "/avatar.webp", // Simpan gambar di folder public/avatar.webp
     bio: "Deskripsi singkat tentang diri Anda...",
   };
   ```

---

## 🚀 Cara Menjalankan

Gunakan perintah-perintah berikut untuk mengelola siklus hidup aplikasi:

### Pengembangan Lokal (Development)
Menjalankan server pengembangan lokal dengan fitur *Hot Module Replacement* (HMR):
```bash
npm run dev
```
Aplikasi dapat diakses melalui browser di alamat [http://localhost:3000](http://localhost:3000).

### Pembuatan Bundel Produksi (Build)
Mengompilasi dan mengoptimalkan aplikasi untuk disiapkan ke lingkungan produksi:
```bash
npm run build
```

### Menjalankan Mode Produksi (Start)
Menjalankan server lokal menggunakan hasil kompilasi produksi:
```bash
npm run start
```

### Pemeriksaan Kode (Linting)
Menjalankan analisis statis kode untuk mendeteksi potensi masalah:
```bash
npm run lint
```

---

## 📁 Struktur Folder

Berikut adalah struktur folder utama dari proyek ini:

```
link/
├── app/                      # Direktori Next.js App Router (Rute & Halaman Utama)
│   ├── components/           # Komponen UI spesifik untuk halaman profil
│   │   ├── Footer.tsx        # Bagian kaki halaman dengan copyright & nama author
│   │   ├── LinkCard.tsx      # Komponen kartu tautan dengan efek hover & highlight
│   │   ├── LinksList.tsx     # Pengendali daftar kartu tautan dengan animasi stagger
│   │   ├── ProfileCard.tsx   # Kartu profil utama, bio, sosial, dan preview avatar
│   │   ├── ShareButton.tsx   # Tombol bagikan menggunakan Web Share API
│   │   └── Social.tsx        # Tombol media sosial dengan ikon dinamis
│   ├── src/                  # Sumber data dan konfigurasi statis
│   │   ├── data.ts           # Tempat utama mengedit isi profil, tautan, & medsos
│   │   └── global.d.ts       # Deklarasi tipe TypeScript global
│   ├── globals.css           # Gaya Tailwind CSS v4 global
│   ├── layout.tsx            # Layout global (SEO, OpenGraph, Font, Analytics)
│   └── page.tsx              # Struktur halaman utama dan inisialisasi SideRays
├── components/               # Komponen UI global dan efek visual premium
│   ├── LiquidEther.tsx       # Animasi latar belakang WebGL cairan interaktif
│   ├── ShinyText.tsx         # Efek teks berkilau (shimmer effect)
│   └── SideRays.tsx          # Komponen efek pancaran cahaya di latar belakang
├── public/                   # Aset media statis (avatar, favicon, manifest)
├── package.json              # Daftar pustaka dependensi & skrip proyek
└── tsconfig.json             # Konfigurasi compiler TypeScript
```

---

## 🔒 Environment Variables

Aplikasi ini berjalan sepenuhnya secara statis di sisi klien (*client-side*), sehingga tidak memerlukan basis data ataupun konfigurasi `.env` yang rumit untuk penggunaan dasar.

Namun, jika Anda ingin mengaktifkan Vercel Analytics saat melakukan deployment di Vercel:
- **`VERCEL_ANALYTICS_ID`**: Diatur secara otomatis oleh Vercel ketika mengaktifkan fitur Analytics di Dashboard Vercel Anda.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **Lisensi MIT** — bebas digunakan, dimodifikasi, dan didistribusikan baik untuk kepentingan personal maupun komersial.

---

## 👤 Kontak / Author

- **Nama**: Syahreza Satria Alfath
- **Website**: [syahreza-satria.xyz](https://syahreza-satria.xyz)
- **LinkedIn**: [Syahreza Satria Alfath](https://www.linkedin.com/in/syahreza-satria-alfath)
- **GitHub**: [@syahreza-satria](https://github.com/syahreza-satria)
- **Email**: satriaeza221@gmail.com
