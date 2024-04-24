---
title: Security
sidebar_position: 6
description: Ketahanan terhadap serangan
keywords:
    - Consensus
    - Security
    - Attacks
last_update:
  date: 02/06/2024
  author: Dariia Porechna
---
<!-- TODO
- Handling Equivocation
 -->

Sistem yang kompleks seperti protokol Subspace memiliki banyak vektor serangan potensial, beberapa di antaranya lebih umum dan terkait dengan blockchain, 
sementara yang lainnya difokuskan pada Proof-of-Space dan khususnya Proof-of-Archival-Storage, seperti yang digunakan dalam Subspace.  

Halaman ini memberikan gambaran umum tentang bagaimana serangan tersebut dimitigasi dalam protokol Subspace. Ada banyak hal 
untuk dibahas, sehingga pembaca harus menyadari bahwa pada kondisi saat ini halaman ini tidak lengkap. Selanjutnya, presentasi 
presentasi ini sebagian besar menyoroti teknik dan metode, tanpa detail teknis yang lengkap.
Untuk analisis keamanan yang lebih detail, silakan lihat makalah kami [Dilithium: A Proof-of-Archival-Storage Consensus Protocol for Subspace](https://github.com/subspace/consensus-v2-research-paper).

## Keamanan terhadap serangan blockchain secara umum

### Menggerus tantangan blok

Untuk mencegah terjadinya grinding pada tantangan blok, kami menggunakan output Proof-of-Time untuk membuat tantangan yang unik.

Pada blockchain berbasis proof-of-work, "tantangan" untuk pembuatan blok berasal dari blok sebelumnya.
Protokol Subspace tidak dapat mengikuti pendekatan ini, karena mengubah konten blok tidak mempengaruhi validitas proof-of-space. 
validitas. Sebaliknya, tantangan bersifat unik (dan tidak dapat diprediksi), dan didasarkan pada komponen Proof-of-Time jaringan. 
Secara lebih detail, kemajuan blockchain didasarkan pada "slot waktu", di mana setiap slot dikaitkan dengan jalannya algoritma 
Algoritma Proof-of-Time. Kami menggunakan output algoritma untuk menggambar tantangan blok untuk slot ini. Secara desain, menggiling 
pada Proof-of-Time sangatlah sulit.

Untuk informasi lebih lanjut tentang komponen Bukti Waktu, lihat [this page](pot.md).

### Simulasi tanpa biaya

Untuk memitigasi serangan simulasi tanpa biaya yang dapat membuat penyerang membuat blok dengan proporsi yang lebih besar 
lebih besar daripada proporsi ruang disk yang mereka janjikan ke jaringan, kami menggunakan keacakan berkorelasi dalam tantangan blok.

Subspace menggunakan metode korelasi-c, di mana tantangan untuk blok 'c' berkorelasi dan bersifat deterministik. Dengan menggunakan pendekatan ini 
pendekatan ini, penyerang yang mencoba mensimulasikan banyak fork potensial akan mendapatkan kekuatan yang jauh lebih sedikit, karena kemampuan untuk 
manuver melintasi percabangan ini menjadi semakin terbatas karena 'c' semakin besar.

### Jendela prediktabilitas korelasi-C

Meskipun tantangan untuk blok 'c' bersifat deterministik, karena kita menggunakan Proof-of-Time untuk menggambar tantangan, tantangan tersebut 
tidak diketahui sebelumnya, tetapi hanya terungkap ketika slot waktu tiba (menurut definisi). Hal ini mencegah potensi masalah, seperti 
yang disebut "serangan menyuap", yang datang dengan korelasi tantangan blok dan jendela prediktabilitas yang terkait 
dengan korelasi-c secara umum. 

### Serangan jarak jauh

Untuk mencegah serangan jangka panjang, kami menggunakan Proof-of-Time sebagai komponen fundamental dalam protokol konsensus kami.

Penyerang yang mencoba melakukan bootstrap pada rantai pesaing yang lebih panjang (yaitu lebih berat) tidak dapat melakukannya tanpa biaya, karena mereka harus
menunjukkan bahwa waktu yang cukup telah berlalu untuk umur garpu ini. Dengan kata lain, seperti di Proof-of-Work, mereka harus melakukannya
menghabiskan sejumlah besar pekerjaan berurutan dalam mempertahankan serangan.

Untuk informasi lebih lanjut tentang bagaimana Proof-of-Time digunakan, lihat [this page](pot.md).

## Keamanan terhadap serangan terhadap Proof-of-Storage

Fungsi masking yang kami terapkan selama pembuatan plot petani memiliki sifat khusus yang membantu kami mencegahnya
setelah serangan terhadap protokol.

### Algoritma Waktu-Memori (kompresi plot)

Kami mengadopsi fungsi yang dijelaskan dalam karya ["Beyond Hellman's Time-Memory Trade-Offs with Applications to Proofs of Space"](https://eprint.iacr.org/2017/893)
sebagai fungsi masking kami. Fungsi ini dirancang sedemikian rupa sehingga keuntungan dalam perhitungan perdagangan (waktu) atas penyimpanan (memori)
sangat kecil.

### Pembuatan plot sambil jalan

Mencegah petani membuat lahan dengan cepat, setelah melihat tantangannya, memiliki dua dampak.
Pertama, fungsi masking adalah memory hard, artinya pembuatan plot dibatasi oleh jumlah memori tersebut
yang dimiliki petani, serta tingkat operasi IO memori yang dapat dilakukannya.
Kedua, membuat lahan berdasarkan permintaan tidaklah ekonomis, sehingga bukan merupakan pilihan yang rasional. Karena sumber daya yang berbeda
persyaratan dalam menjalankan fungsi masking, biaya menjalankannya untuk mensimulasikan sejumlah (cukup tinggi).
penyimpanan secara signifikan lebih tinggi daripada biaya pembelian jumlah penyimpanan ini, diplot sekali (lebih tepatnya,
sesuai dengan spesifikasi protokol) dan pemeliharaan petani. Dengan kata lain, seorang petani yang bersedia mengeluarkan uangnya
biaya untuk pembuatan plot sesuai permintaan lebih baik menghabiskan biaya ini untuk pembuatan plot "nyata".
