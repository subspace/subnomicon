---
title: Flow Data
sidebar_position: 3
description: Siklus Hidup Data di Subspace Blockchain
keywords:
    - Consensus
    - Data
    - Storage
    - Transactions
last_update:
  date: 02/06/2024
  author: Dariia Porechna
---

Dari saat transaksi dikirimkan ke blockchain Subspace hingga diarsipkan secara permanen, data melewati beberapa tahap:

1. Transaksi divalidasi dan dimasukkan ke dalam blok rantai konsensus secara langsung atau melalui penyertaan kumpulan domain.
2. Transaksi dan bundel dalam blok dieksekusi, mengaktifkan perubahan status global dan domain.
3. Setelah blok tersebut mencapai kedalaman tertentu (saat ini 100 blok), blok tersebut diarsipkan mengikuti protokol [Pengarsipan](./consensus/archiving.md) bersama dengan blok lainnya. Pada titik ini, ia menjadi bagian dari Riwayat Pengarsipan rantai.
4. Bagian yang baru diarsipkan ditambahkan ke cache petani melalui [Jaringan Penyimpanan Terdistribusi](../network/dsn.md) dan direplikasi beberapa kali di seluruh jaringan.
5. Potongan-potongan dikodekan ke dalam plot petani pada disk untuk penyimpanan permanen, mengikuti protokol [Plotting](./consensus/plotting.md).
6. Ketika klien meminta, data asli direkonstruksi dari potongan-potongan yang diarsipkan dengan cepat.

<div align="center">
    <img src="/img/Data_Flow-light.svg#gh-light-mode-only" alt="Data_Flow" />
    <img src="/img/Data_Flow-dark.svg#gh-dark-mode-only" alt="Data_Flow" />
</div>

## Struktur dan Batas Blok

Blok rantai konsensus Subspace mengikuti struktur umum blok standar: terdiri dari badan dan header dan menunjuk ke blok induk. Header blok rantai konsensus berisi metadata tentang blok tersebut, yang memungkinkan verifikasi validitas rantai konsensus. Badan blok berisi transaksi dan kumpulan domain. Transaksi termasuk transfer, suara, dan bukti penipuan. Bundel domain adalah kumpulan transaksi dari domain tertentu (misalnya, panggilan kontrak EVM). 

Setiap blok memiliki panjang dan berat tertentu. Panjang adalah jumlah penyimpanan yang digunakan oleh blok ini di jaringan, sama dengan ukuran dalam byte dari transaksi yang dikodekan dan bundel dalam badan blok. Berat adalah perkiraan waktu yang dibutuhkan untuk mengeksekusi blok ini, sama dengan jumlah bobot komputasi dari semua transaksi dalam badan blok. Saat ini, blok rantai konsensus dibatasi hingga 3,75 MiB dan 1,5 detik bobot komputasi untuk transaksi pengguna normal dengan hingga 1,25 MiB dan 0,5 detik ekstra untuk ekstrinsik sistem seperti voting atau pembaruan rantai.

## Header Blok Rantai Konsensus

Di Subruang, header blok konsensus berisi:
- Nomor blok dalam rantai blok
- Hash dari blok induk
- Akar Merkle dari trie ekstrinsik yang disertakan dalam blok ini
- Akar Merkle dari trie negara bagian setelah memproses blok ini
- Nomor slot waktu yang diklaim oleh produsen blok
- Keacakan global pada slot waktu yang diklaim yang berasal dari rantai bukti waktu
- Solusi untuk tantangan slot untuk slot waktu yang diklaim. Solusi ini mencakup potongan sejarah yang menang, bukti ruang untuk plot petani dan saksi KZG bahwa potongan yang menang memang merupakan bagian dari sejarah arsip pada ketinggian yang diklaim
- Rentang solusi yang digunakan untuk menemukan potongan sejarah yang menang
- Tanda tangan petani di atas tajuk

## Paket Domain

Sebuah bundel berisi beberapa transaksi dari domain tertentu (misalnya, panggilan kontrak EVM) yang diurutkan secara deterministik untuk eksekusi, penyebaran, dan penyertaan yang efisien dalam blok. Di Subspace, sebuah bundel berisi header yang ditandatangani dan daftar transaksi. Header bundel berisi:
- ID domain (misalnya, EVM)
- ID operator dari produsen bundel
- Akar Merkle dari tiga transaksi yang termasuk dalam bundel ini
- Tanda terima eksekusi yang harus memperpanjang rantai tanda terima domain
- Ukuran badan bundel dalam byte, yang digunakan untuk menghitung biaya penyimpanan
- Perkiraan total berat semua ekstrinsik dalam bundel, digunakan untuk mencegah bundel membebani bundel dengan komputasi
- Slot waktu yang diklaim oleh bundel
- Keacakan global pada slot waktu yang diklaim yang berasal dari rantai bukti waktu
- Bukti pemilihan operator sebagai produsen bundel untuk slot waktu yang diklaim berdasarkan tantangan slot dan kepemilikan operator pada zaman saat ini

Setiap bundel domain dapat dilihat sebagai "blok di dalam blok", dengan header bundel yang berisi informasi tentang domain dan produsen bundel. Setiap blok rantai konsensus dapat berisi banyak bundel dari domain yang berbeda tanpa membebani node konsensus. Node konsensus memeriksa apakah bundel terbentuk dengan baik dan mengemasnya dalam sebuah blok. Node konsensus tidak menjalankan komputasi apa pun di dalam bundel.

## Blok Domain

Setiap domain adalah blockchain khusus aplikasi (app-chain) yang bergantung pada rantai konsensus untuk ketersediaan dan penyelesaian data. 
Rantai domain terdiri dari blok domain, masing-masing hanya berisi kumpulan yang relevan dengan domain ini dan mengabaikan transaksi apa pun yang berkaitan dengan domain lain. Rantai domain memiliki lingkungan eksekusi namespace yang terpisah, namun tetap mendapatkan keamanan dan interoperabilitas dari rantai konsensus.

<div align="center">
    <img src="/img/Slot_To_Execution-light.svg#gh-light-mode-only" alt="Slot_To_Execution" />
    <img src="/img/Slot_To_Execution-dark.svg#gh-dark-mode-only" alt="Slot_To_Execution" />
</div>
