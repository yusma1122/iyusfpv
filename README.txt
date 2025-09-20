# TIMUS FPV - Website Drone Pilot FPV Profesional

Website one-page premium untuk jasa Drone Pilot FPV Profesional dengan desain modern, elegan, dan berkelas. Website ini mengutamakan tampilan sinematik dan profesional untuk target market high-end seperti klien bisnis, agensi kreatif, properti mewah, pernikahan eksklusif, dan industri perfilman.

![TIMUS FPV Preview](assets/preview.jpg)

## Fitur

- Desain premium dengan nuansa emas dan hitam yang elegan
- One-page layout dengan smooth scrolling
- Animasi parallax dan scroll reveal untuk pengalaman visual yang menarik
- Responsive design untuk semua ukuran layar (mobile, tablet, desktop)
- Portfolio showreel dan gallery dengan filter kategori
- Video background di hero section
- Lightbox dan modal untuk video portfolio
- Testimonial slider
- Pricing section dengan highlight paket rekomendasi
- FAQ accordion section
- Form kontak yang user-friendly
- Optimized for speed and performance

## Teknologi yang Digunakan

- HTML5
- CSS3 with custom animations
- JavaScript (ES6+)
- Bootstrap 5
- AOS (Animate On Scroll Library)
- Font Awesome icons
- Google Fonts (Montserrat & Playfair Display)
- Lightbox2 for portfolio gallery
- jQuery (minimal usage)

## Struktur File

```
timus-fpv/
├── assets/
│   ├── logo.png
│   ├── favicon.png
│   ├── hero-video.mp4
│   ├── hero-bg.jpg (fallback)
│   ├── about-drone.jpg
│   ├── equipment-*.jpg
│   ├── client-*.png
│   ├── portfolio-*.jpg
│   ├── testimonial-*.jpg
│   └── preview.jpg
├── css/
│   └── style.css
├── js/
│   └── script.js
├── index.html
└── README.md
```

## Cara Penggunaan

### Instalasi Lokal

1. Clone repositori ini ke komputer lokal Anda:
   ```bash
   git clone https://github.com/username/timus-fpv.git
   ```

2. Buka folder proyek:
   ```bash
   cd timus-fpv
   ```

3. Buka file `index.html` di browser Anda atau gunakan Live Server extension di VS Code.

### Kustomisasi

Sebelum menerapkan website untuk penggunaan profesional, pastikan untuk:

1. **Ganti konten placeholder**:
   - Update semua teks dengan informasi sebenarnya tentang layanan Anda
   - Ganti gambar placeholder dengan foto dan video portofolio asli
   - Update informasi kontak dan sosial media dengan informasi yang valid

2. **Ganti video dan gambar**:
   - Hero video (`assets/hero-video.mp4`) - pastikan ukurannya dioptimasi
   - Background fallback image (`assets/hero-bg.jpg`)
   - Logo dan favicon
   - Foto tim, peralatan, klien, dan portofolio

3. **Sesuaikan warna (opsional)**:
   - Edit variabel CSS di bagian `:root` dalam file `style.css` untuk mengubah skema warna

## Panduan SEO

Untuk meningkatkan visibilitas website di mesin pencari:

1. Update meta tags di `<head>` dengan deskripsi yang relevan
2. Tambahkan alt text yang deskriptif untuk semua gambar
3. Pastikan struktur heading (h1, h2, h3) digunakan dengan benar
4. Tambahkan `sitemap.xml` dan daftarkan di Google Search Console
5. Optimalkan kecepatan loading dengan memperkecil ukuran gambar dan video

## Deployment ke GitHub Pages

1. Push proyek ke repositori GitHub Anda:
   ```bash
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/username/timus-fpv.git
   git push -u origin main
   ```

2. Di repositori GitHub Anda:
   - Buka tab "Settings"
   - Scroll ke bagian "GitHub Pages"
   - Pilih branch "main" sebagai source
   - Klik "Save"

3. Website Anda akan tersedia di `https://username.github.io/timus-fpv/`

## File yang Perlu Ditambahkan/Diganti

Untuk menggunakan website ini dalam produksi, Anda perlu menambahkan file-file berikut:

1. Video hero section: `assets/hero-video.mp4` (video pendek 10-15 detik)
2. Background fallback: `assets/hero-bg.jpg` (jika video tidak dapat diputar)
3. Logo: `assets/logo.png` (PNG dengan background transparan)
4. Favicon: `assets/favicon.png`
5. Gambar portofolio: `assets/portfolio-1.jpg` hingga `assets/portfolio-9.jpg`
6. Gambar peralatan: `assets/equipment-1.jpg` hingga `assets/equipment-4.jpg`
7. Gambar testimoni: `assets/testimonial-1.jpg` hingga `assets/testimonial-3.jpg`
8. Logo klien: `assets/client-1.png` hingga `assets/client-4.png`

## Browser Support

Website ini telah dioptimalkan untuk browser modern:
- Chrome (versi terbaru)
- Firefox (versi terbaru)
- Safari (versi terbaru)
- Edge (versi terbaru)
- Opera (versi terbaru)

## Responsive Breakpoints

Website ini menggunakan breakpoint Bootstrap 5 standar:
- Extra small devices: < 576px
- Small devices: ≥ 576px
- Medium devices: ≥ 768px
- Large devices: ≥ 992px
- Extra large devices: ≥ 1200px
- Extra extra large devices: ≥ 1400px

## License

Anda bebas menggunakan dan memodifikasi template ini untuk keperluan pribadi maupun komersial.

## Kontak

Jika Anda memiliki pertanyaan atau masalah dengan template ini, silakan hubungi:
- Email: your-email@example.com
- GitHub: [username](https://github.com/username)pomt 