---
title: Ikhtisar
sidebar_position: 1
description: Ikhtisar Konsensus Dilithium
keywords:
    - Consensus
    - Dilithium
last_update:
  date: 02/06/2024
  author: Dariia Porechna
---

Subspace didukung oleh *Dilithium* - sebuah mekanisme konsensus yang ringan dan aman yang ramah lingkungan, tanpa izin, dan adil. *Dilithium* adalah Proof-of-Archival-Storage (PoAS), protokol konsensus gaya Nakamoto yang didasarkan pada bukti penyimpanan riwayat blockchain. 

*Dilithium* adalah algoritma konsensus PoAS generasi kedua yang menggunakan pengkodean penghapusan dan komitmen KZG untuk pengarsipan terdistribusi sambil menggabungkan pengkodean polinomial dengan Proof-of-Space yang tahan terhadap ASIC untuk merencanakan dan menarik tantangan blok dari Proof-of-Time berbasis AES. Protokol ini merupakan langkah maju yang signifikan dalam hal keamanan dan pengalaman pengguna bagi para peserta Subspace Network. *Dilithium* juga dirancang agar ramah terhadap SSD, sehingga meningkatkan efisiensi energi dan desentralisasi. 

Bagi mereka yang sudah familiar dengan desain konsensus awal kami, *Dilithium* memenuhi semua ide dasar yang dijelaskan dalam [whitepaper](https://subspace.network/news/subspace-network-whitepaper) tetapi menerapkannya dengan lebih baik.

Dalam PoAS, petani (bukan penambang) menyimpan sebanyak mungkin bagian unik dari riwayat blockchain sesuai dengan ruang penyimpanan mereka. PoAS memberikan insentif kepada penyimpanan riwayat blockchain, menyelesaikan kegagalan desain mekanisme utama yang menghambat skalabilitas dan menyebabkan sentralisasi dalam blockchain Proof-of-Storage seperti Filecoin dan Chia. Karena konsensus PoAS didasarkan pada penyimpanan, bukan pada daya komputasi atau kekayaan, PoAS ramah lingkungan dan tetap dapat diakses oleh orang biasa dengan ruang disk yang tersedia. Hal ini memungkinkannya untuk menggabungkan keamanan yang tinggi dari Proof-of-Work ala Bitcoin dengan efisiensi energi dari Proof-of-Stake ala Ethereum. PoAS juga menyediakan dasar untuk solusi yang lebih umum untuk masalah blockchain bloat. 

## Tinjauan Teknis

Serupa dengan proyek-proyek Proof-of-Storage lainnya, sumber daya yang dialokasikan oleh para peserta untuk mengamankan jaringan Subspace adalah
ruang disk. Sebagai sumber daya, ruang disk didistribusikan secara luas dan secara umum pengertian ASIC tidak berlaku untuk
penyimpanan. Dengan demikian, protokol Subspace memiliki potensi untuk menjadi sangat terdesentralisasi dan lebih adil daripada
protokol blockchain lainnya.

Tidak seperti proyek Proof-of-Storage lainnya di mana data yang disimpan adalah "data kriptografi", yang secara unik dihasilkan per
peserta, di Subspace para peserta, yang disebut petani, menyimpan riwayat blockchain. Tidak hanya itu di Subspace kami
kami telah menemukan cara untuk menyimpan "data yang berguna", tetapi kami juga memecahkan apa yang disebut _dilema petani_, di mana petani yang rasional
lebih suka menggunakan ruang disknya untuk menyimpan lebih banyak data kriptografi (yang tidak berguna), akibatnya tidak menyimpan
state saat ini atau riwayat blockchain - sebuah strategi yang jika diikuti oleh semua petani, akan menyebabkan jaringan tidak berfungsi.

Secara formal, PoAS adalah protokol tiga fase, yang terdiri dari:
- fase **Pengarsipan** deterministik berulang yang dilakukan oleh semua node
- pengaturan unik atau fase **Plotting** yang dilakukan secara individual oleh setiap petani
- fase audit probabilistik, yang dikenal sebagai **Farming**, berdasarkan tantangan slot berulang dari suar keacakan yang aman, dengan frekuensi satu tantangan per detik.

<div align="center">
    <img src="/img/Consensus_Phases-light.svg#gh-light-mode-only" alt="ConsensusPhases" />
    <img src="/img/Consensus_Phases-dark.svg#gh-dark-mode-only" alt="ConsensusPhases" />
</div>

Karena riwayat blockchain tidak unik, petani tidak bisa begitu saja menyimpan riwayat blockchain mentah, jika tidak jujur
petani yang tidak jujur dapat membagikan satu salinan riwayat blockchain untuk meniru jumlah ruang disk yang tidak terbatas. Dengan demikian, satu
tantangannya adalah bagaimana membuat _plot_ yang disimpan oleh setiap petani menjadi unik. Hal ini dilakukan sebagai bagian dari fase perencanaan yang dijelaskan
di bawah ini.

Sebelum fase plotting, petani perlu "mempersiapkan" riwayat blockchain mentah untuk kompatibilitas dengan Subspace
protokol plotting Subspace. Ini dilakukan dalam fase pengarsipan. Pengarsipan adalah proses deterministik yang dilakukan oleh semua nonde. Ini dilakukan
terus menerus, seiring dengan perkembangan blockchain dan semakin banyak blok yang diproduksi. Ketika melakukan pengarsipan, para petani menerapkan sebuah teknik yang disebut
pengkodean koreksi kesalahan, khususnya kode Reed - Solomon. Ini digunakan untuk menjamin bahwa meskipun beberapa bagian data
(kumpulan blok) tidak disimpan oleh salah satu petani (oleh karena itu tidak disimpan di seluruh jaringan), data tersebut dapat
dapat dipulihkan oleh bagian lain. Faktor replikasi yang digunakan adalah 1/2, yang berarti bahwa setengah dari penyimpanan pada jaringan
yang digunakan didedikasikan khusus untuk teknik koreksi kesalahan ini. Namun, untuk tujuan pemulihan, ini jauh lebih baik
daripada menggunakan ruang ini untuk menyimpan setiap blok dua kali. Selain menerapkan kode Reed-Solomon, fase pengarsipan juga
melibatkan primitif kriptografi yang disebut skema komitmen (di Subspace kami menggunakan tipe khusus yang disebut polinomial
komitmen) untuk membuat fase farming, di mana seorang petani membuktikan bahwa dia menyimpan beberapa bagian dari sejarah, lebih mudah
baik bagi petani yang membuktikan maupun bagi para pemeriksa. Detail lebih lanjut mengenai hal ini dapat ditemukan di bagian [**Archiving** page](consensus/archiving.md).

Berikutnya adalah tahap plotting, di mana petani membuat plot uniknya sendiri. Pembuatan plot dibagi menjadi dua langkah. Pertama, petani mengambil potongan-potongan riwayat blockchain yang akan dia
yang akan dia simpan di disknya. Ini dilakukan dengan algoritma deterministik, yang melibatkan ID petani dan tinggi blockchain saat ini
blockchain saat ini, sehingga potongan-potongan tersebut dialokasikan secara acak, dan oleh karena itu menjamin dengan probabilitas yang tinggi bahwa tidak ada
bagian dari sejarah yang akan hilang.

Pada bagian kedua, petani "menutupi" bagian yang ditugaskan dengan "data penyamaran" yang unik dan dapat diverifikasi. Hal ini dilakukan untuk
untuk menjamin bahwa setiap petak berisi informasi yang unik, sehingga petani yang tidak jujur tidak dapat berbagi
yang sama ketika berpartisipasi dalam protokol. Algoritme penyamaran juga bersifat deterministik, dan melibatkan petani
ID dan potongan riwayat, sehingga petani yang berbeda akan mendapatkan data penyamaran yang berbeda untuk potongan yang sama. Ketika memenangkan sebuah blok (yaitu, ketika seorang petani
yang memberikan mereka hak untuk memproduksi sebuah blok), petani harus menunjukkan potongan riwayat mentah dan data masking.
mentah dan data penyamaran untuk bagian tersebut. Karena data penyamaran dapat diverifikasi, siapa pun dapat memeriksa bahwa
bahwa ini memang data penyamaran untuk bagian tertentu dari riwayat dan ID petani tersebut.

Dalam praktiknya, masking di Subspace dilakukan dengan menghasilkan serangkaian bit yang di-XOR-kan dengan representasi bit
bagian sejarah yang dipilih. Sangat penting bahwa bit-bit masking diproduksi dalam proses yang memakan waktu lama dan
mahal, jika tidak, petani yang tidak jujur dapat mencoba menghasilkan data masking dengan cepat dan menggunakan kembali data mentah mereka
untuk beberapa plot. Di Subspace, kami memilih untuk mengadopsi data kriptografi yang digunakan di [Chia protocol](https://www.chia.net/),
yang menuntut waktu dan listrik untuk pembangkitan.

Once a farmer created her plot, she can start farming it. This phase is similar to other blockchains where some
challenge is drawn and the farmer checks if her resource -- the stored blockchain history in her plot -- gives her
eligibility to produce a block. As mentioned above, when winning a challenge and producing a block, as part of the
proof the farmer has to present both the raw blockchain data as well as the masking data. 

The block challenges are drawn from a secure randomness beacon, which is updated every second. The randomness is obtained from a Proof-of-Time component, which is anchored in the blockchain history itself.

Archiving, Plotting and Farming protocol are explained in more detail in the following section, and Proof-of-Time in the next one.
