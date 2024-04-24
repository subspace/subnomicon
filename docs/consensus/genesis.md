---
id: genesis
title: Genesis
sidebar_position: 2
description: Konfigurasi Genesis
keywords:
    - Genesis
    - Config
last_update:
  date: 10/13/2023
  author: Dariia Porechna
---

Proses genesis Subspace Network melibatkan inisialisasi dan konfigurasi keadaan awal blockchain. Proses ini mencakup langkah-langkah berikut:

1. **Konfigurasi Genesis**: Proses genesis dimulai dengan membuat konfigurasi genesis. Konfigurasi ini mendefinisikan parameter awal untuk blockchain, seperti parameter konsensus, saldo awal, boot node, pengaturan protokol jaringan, dan konfigurasi lainnya.

2. **Pembuatan Blok Genesis**: Blok genesis dibuat setelah konfigurasi selesai dan status awal ditentukan. Data yang dibuat secara acak dengan ukuran satu segmen (128MiB) dilampirkan ke pengkodean serial dari blok genesis untuk memulai fase Pengarsipan.

3. **Proof-of-Time Initialization**: Pencatat Waktu menginisialisasi rantai Proof-of-Time dan suar keacakan. Rantai Proof-of-Time berfungsi sebagai "jam" global untuk jaringan: "waktu" saat ini adalah ketinggian rantai PoT. 
Rantai ini juga menyediakan sumber keacakan untuk produksi blok.

Setelah menyelesaikan langkah-langkah di atas, kita dapat menganggap fase genesis telah selesai. Langkah-langkah berikut ini diperlukan untuk memulai rantai konsensus fungsional:

4. **Archiving of the First Segment**: Data yang dilampirkan pada blok genesis memicu Pengarsipan segmen pertama dari sejarah kanonik rantai. Ini menghasilkan 256 keping pertama dan mengumumkannya ke DSN.

5. **History Seeding**: Tim Subspace akan mengunggah ke jaringan arsip awal data yang berguna, seperti whitepaper, arsip data dari jaringan uji coba sebelumnya, dll.

6. **Initial Plotting**: Para petani membuat petak-petak mereka dari potongan-potongan yang baru diarsipkan. Segera setelah pembuatan plot selesai, mereka dapat memulai blok-blok pertanian.

7. **Block Production**: Dengan perencanaan awal selesai, produksi blok dimulai, namun reward tidak dikeluarkan. Node penuh mulai menyinkronkan rantai dan berpartisipasi dalam konsensus.

8. **Space Race**: Space Race adalah upaya kolaboratif antara para petani untuk meningkatkan keamanan jaringan. Kami menetapkan target sejumlah ruang yang dijanjikan ke jaringan sehingga sulit bagi satu pihak untuk mengontrol mayoritas ruang tersebut (misalnya, 8PiB untuk Gemini-3h). Segera setelah tujuan tercapai, Space Race berakhir dan hadiah blok dan suara diaktifkan secara otomatis.

9. **Block Rewards**: Imbalan blok dan suara diberikan kepada petani yang berhasil mengaudit plot mereka untuk mendapatkan solusi yang memenuhi syarat blok atau suara. Hadiah blok dan suara dimulai dari 0,1 tSSC dan akan berkurang seiring waktu sesuai dengan jadwal penerbitan yang dinamis.
