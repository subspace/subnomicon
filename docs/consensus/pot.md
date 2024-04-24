---
title: Proof-of-Time
sidebar_position: 5
description: Proof-of-Time komponen konsensus
keywords:
    - Consensus
    - randomness
    - challenge
    - timekeeper
last_update:
  date: 02/06/2024
  author: Dariia Porechna
---
Selain komponen Proof-of-Space yang dijelaskan pada bagian sebelumnya, Dilithium diamankan dengan komponen Proof-of-Time (PoT). Algoritma PoT yang dipilih adalah AES berurutan, yang disetel untuk 1 detik per pembuktian. PoT merupakan sebuah langkah untuk melawan serangan jarak jauh, dan mengatasi masalah ketidakpastian dan ketersediaan dinamis.

Proof-of-Work (PoW) tanpa izin yang digunakan oleh Bitcoin tetap menjadi metode konsensus yang paling kuat dalam sistem terdesentralisasi. Akan tetapi, penambangan membutuhkan pengeluaran energi yang besar untuk melakukan brute-force terhadap solusi hash, yang menyebabkan munculnya berbagai mekanisme konsensus alternatif. Akan tetapi, ketika bertransisi ke sistem bukti yang hemat energi, seperti Proof-of-Stake dan Proof-of-Space, ada beberapa masalah yang muncul. 

## Tantangan desain
### Long-range attack

Tidak seperti pada Proof-of-Work, proses produksi blok pada Proof-of-Stake dan Proof-of-Space berbasis
blockchain berbasis Proof-of-Space tidak dibatasi secara fisik. Hal ini membuat protokol tersebut rentan terhadap _serangan jarak jauh_, di mana penyerang dapat memproduksi, dengan sangat cepat, sebuah rantai alternatif sampai ke waktu saat ini, dan rantai ini berpotensi menjadi lebih berat daripada rantai "canonical" saat ini.

<div align="center">
    <img src="/img/Long_Range_Attack-light.svg#gh-light-mode-only" alt="Long_Range_Attack" />
    <img src="/img/Long_Range_Attack-dark.svg#gh-dark-mode-only" alt="Long_Range_Attack" />
</div>

Untuk melakukan serangan jarak jauh, musuh harus mengontrol sumber daya yang cukup pada beberapa titik dalam kehidupan rantai untuk menulis ulang sebagian besar sejarah rantai. Dalam protokol PoW seperti Bitcoin, hal ini membutuhkan pengendalian lebih dari 50% total hashrate jaringan untuk jangka waktu yang lama, yang mana tidak dapat dilakukan pada praktiknya. Akan tetapi, serangan jarak jauh tetap menjadi ancaman serius dalam protokol konsensus alternatif yang tidak bergantung pada Proof-of-Work.

Mari kita tunjukkan bagaimana blockchain Proof-of-Space dapat rentan terhadap serangan jarak jauh. Serangan yang sama berlaku untuk Proof-of-Stake.
Misalkan pada tahun pertama operasi blockchain, semua petani jujur dan secara kolektif menjanjikan penyimpanan sebesar 100TB. Sekarang, anggaplah pada tahun kedua total penyimpanan yang dijanjikan mencapai 1PB, di mana musuh telah mendedikasikan penyimpanan sebesar 200TB. Tidak ada titik di mana musuh mengendalikan lebih dari 20% penyimpanan, yang jauh lebih kecil dari mayoritas. Akan tetapi, dengan menggunakan 200TB miliknya, musuh dapat menulis ulang sejarah tahun lalu dengan berpartisipasi dalam semua lotere yang lalu untuk memenangkan blok kembali ke genesis dan kemudian menumbuhkan rantai secara instan dari genesis untuk melampaui rantai terpanjang saat ini. Hal ini dimungkinkan karena sumber daya musuh cukup untuk memenangkan sejumlah besar lotere masa lalu yang tidak proporsional dibandingkan dengan bagiannya dari total penyimpanan. Penulisan ulang jarak jauh seperti ini sangat mengancam keamanan dan keabadian riwayat blockchain.

Di sisi lain, dalam PoW, serangan ini dapat dicegah karena dibutuhkan 

### Ketersediaan dan Ketidakpastian 

Sistem bukti alternatif, termasuk Proof-of-Stake dan Proof-of-Space, mengupayakan fitur-fitur penting tertentu dari PoW, seperti ketersediaan dinamis dan ketidakpastian.

Ketersediaan dinamis dalam blockchain mengacu pada kapasitas sistem untuk mempertahankan operasi yang kuat dalam lingkungan di mana node dapat bergabung atau keluar secara dinamis. PoW tanpa izin tetap menjadi metode yang paling kuat untuk mencapai ketersediaan yang konsisten dan tidak dapat diprediksi dalam sistem yang terdesentralisasi. Bitcoin terus tersedia selama lebih dari satu dekade meskipun hashrate selalu berubah-ubah karena penambang yang bergabung dan keluar dari jaringan. 

Dalam kondisi ini, ketidakpastian mengacu pada ketidakmampuan untuk memprediksi siapa yang akan mengusulkan blok berikutnya. Ketidakpastian pengusul blok penting untuk keamanan dan kelangsungan jaringan. Akan tetapi, protokol yang menggunakan fungsi acak yang dapat diverifikasi secara umum untuk memilih pengusul blok biasanya tidak mencapai properti ini pada tingkat yang sama seperti pada PoW, dan mungkin mengalami jendela prediksi yang panjang untuk tantangan blok.

## Pendekatan Subspace

Subspace menggunakan Proof-of-Time untuk membentuk rantai Proof-of-Time yang terpisah. Rantai Proof-of-Space dan Proof-of-Time saling terhubung, mencegah serangan jarak jauh. Selain itu, tantangan untuk block farming didasarkan pada output PoT, yang menjamin bahwa tantangan, oleh karena itu, pengusul blok, tidak dapat diprediksi.

Komponen Proof-of-Time dari Subspace mengatasi serangan jarak jauh dengan memberlakukan panah waktu yang mirip dengan PoW. PoT menjamin bahwa sejumlah waktu jam dinding harus berlalu di antara pengajuan blok, mencegah lawan untuk menulis ulang sejarah dengan "kembali ke masa lalu". Mirip dengan PoW, Proof-of-Time dibatasi secara fisik, namun tidak dapat diparalelkan (secara teknis, ini adalah bukti kerja _sequential_). Kami mencegah serangan yang disebutkan di atas dengan mengintegrasikan blockchain dengan proses Proof-of-Time. Penyerang tidak dapat langsung membuat garpu selama bertahun-tahun di tempat bahkan dengan perangkat keras yang lebih cepat.

Konsensus Subspace mendapatkan sebuah dinamika penambangan yang meniru sifat acak dari dinamika penambangan Bitcoin dengan hanya mengeluarkan sejumlah kecil listrik yang konstan. Hal ini dicapai melalui tantangan blok berbasis Proof-of-Time untuk lotre proposal blok, berdasarkan makalah [PoSAT: Proof-of-Work Availability and Unpredictability, without the Work] (https://arxiv.org/abs/2010.08154) oleh Soubhik Deb, Sreeram Kannan, dan David Tse. Sistem ini memastikan keadilan proses farming untuk semua peserta melalui ketidakpastian siapa yang akan mengajukan blok berikutnya. Ketidakpastian ini berada pada level yang sama dengan protokol PoW dan lebih kuat dibandingkan dengan protokol yang menggunakan fungsi acak yang dapat diverifikasi.

Jaminan waktu yang telah berlalu dicapai dengan evaluasi berulang dari fungsi yang secara inheren berurutan. Keluaran dari fungsi tersebut tidak dapat diprediksi dan digunakan untuk membangun suar keacakan untuk tantangan blok. 

## Pencatat Waktu

Untuk tugas menjalankan rantai waktu, Subspace memperkenalkan peran baru untuk node yang disebut Pencatat Waktu. Pencatat waktu bertanggung jawab untuk mengevaluasi fungsi penundaan dan mengumumkan hasilnya ke node lain. Siapapun dapat menjadi Pencatat Waktu selama mereka memiliki CPU yang kuat dari generasi terakhir yang dapat mengevaluasi fungsi penundaan dalam durasi slot waktu target 1 detik. 

Satu pencatat waktu yang jujur sudah cukup untuk keamanan protokol, tetapi untuk ketahanan dan desentralisasi harus ada beberapa pencatat waktu yang berjalan secara bersamaan. Kami mendorong peserta yang tertarik untuk menjalankan komponen pencatat waktu pada node mereka untuk memastikan keamanan dan desentralisasi protokol. Tidak ada insentif ekonomi eksplisit untuk menjalankan pencatat waktu, namun, pencatat waktu independen berkontribusi pada produksi blok yang stabil, yang menguntungkan setiap peserta jaringan.

Meskipun pencatat waktu juga dapat menjadi petani dan berpartisipasi dalam produksi blok atau operator yang menjalankan komputasi pada domain, operator cenderung lebih cocok untuk tugas tersebut karena mereka sudah memiliki perangkat keras yang kuat. Pencatat waktu akan sepenuhnya menggunakan inti CPU khusus. Idealnya, ini harus dijalankan pada mesin generasi terakhir yang terpisah tanpa proses lain yang mengganggu ketepatan waktu. Pengaturan ini akan memungkinkan kinerja terbaik dan keamanan protokol terhadap pencatat waktu yang jahat.

Rantai Proof-of-Time dimulai dari waktu awal dari rantai konsensus Subspace. Masukan ke slot pertama adalah sebuah seed acak yang akan diumumkan secara publik pada saat peluncuran untuk memastikan kesempatan yang sama. Untuk setiap slot berikutnya, output dari slot sebelumnya berfungsi sebagai input. Dengan merantai output, pencatat waktu menegakkan sekuensialitas dan mencegah melompati waktu.

## Suar Keacakan

Fakta bahwa kita memiliki urutan nilai acak yang berasal dari evaluasi Proof-of-Time memungkinkan kita untuk menggunakannya
sebagai sumber keacakan untuk tantangan blok. Ini merupakan keuntungan tambahan dari desain Proof-of-Time kami, karena protokol non-PoW lainnya yang tidak menggunakan Proof-of-Time tidak dapat diprediksi dari tantangan blok. Karena kami menargetkan tantangan blok setiap detik, kami dapat mengatur evaluasi fungsi penundaan untuk menghasilkan bukti setiap detik. Kemudian untuk setiap slot waktu, pencatat waktu akan mengevaluasi fungsi penundaan untuk sejumlah iterasi untuk menghasilkan keacakan global yang baru. Mereka kemudian mengumumkan output ke jaringan, yang digunakan oleh para petani untuk menentukan pengusul blok berikutnya.

<div align="center">
    <img src="/img/PoT_Challenges-light.svg#gh-light-mode-only" alt="Proof_of_Time_Challenges" />
    <img src="/img/PoT_Challenges-dark.svg#gh-dark-mode-only" alt="Proof_of_Time_Challenges" />
</div>

Petani menerima keacakan baru dari pencatat waktu, memverifikasinya, dan memindai plot mereka untuk melihat apakah mereka memiliki potongan sejarah yang cukup dekat dengan ambang batas tantangan untuk mengklaim blok tersebut. Petani dengan potongan yang benar akan memberikan bukti ruang untuk mereka, mengajukan blok dan mendapatkan hadiah. Pengacakan dilakukan beberapa slot sebelumnya untuk memastikan setiap petani di jaringan memiliki cukup waktu untuk menerimanya, memindai plot mereka, dan menyerahkan bukti ruang jika mereka menang. Para petani memasukkan hasil PoT ke dalam header blok, dan rantai PoT dipertahankan dalam rantai konsensus dengan cara ini.

Setiap 50 blok, entropi dari rantai konsensus disuntikkan kembali ke dalam rantai PoT. Injeksi mengambil solusi farming dan output PoT dari header blok konsensus yang dalam sebagai input baru untuk fungsi penundaan. Injeksi juga mencegah lawan untuk mensimulasikan fork rantai konsensus tanpa harus mensimulasikan fork rantai PoT. Fork pada rantai konsensus akan menghasilkan urutan output PoT yang berbeda. Oleh karena itu, seorang penyerang yang melakukan fork pada rantai di beberapa titik historis, harus menjalankan algoritma PoT secara fisik. 

## Pilihan Fungsi Penundaan

Subspace menggunakan enkripsi AES-128 yang diulang sebagai alternatif dari Verifiable Delay Functions (VDF) yang sudah ada, seperti kuadrat berulang dalam kelompok dengan urutan yang tidak diketahui. AES memenuhi persyaratan untuk menjadi berulang, tidak dapat diparalelkan, dan menghasilkan keluaran yang pendek, acak, dan dapat diverifikasi.

Setelah melakukan studi ekstensif terhadap konstruksi VDF yang ada, kami memilih AES untuk fungsi iterasi. AES memiliki keunggulan dalam hal kematangan penelitian dibandingkan dengan VDF yang relatif baru dan implementasi perangkat keras dan perangkat lunak yang sangat efisien dengan menggunakan instruksi akselerasi perangkat keras. Berdasarkan penelitian bersama dengan Supranational, kami tidak mengharapkan percepatan yang signifikan dibandingkan implementasi AES terbaik, bahkan dengan ASIC.

Untuk mencapai waktu verifikasi asimetris untuk fungsi penundaan berbasis AES, pencatat waktu menerbitkan satu set pos pemeriksaan perantara di samping output, saat ini ada 8, dengan jarak yang seragam. Petani dapat memvalidasi setiap pos pemeriksaan secara independen dan paralel untuk mengurangi waktu verifikasi secara keseluruhan. Memasukkan pos pemeriksaan memungkinkan node lain untuk memvalidasi output ~7 kali lebih cepat dan menggunakan daya ~4x lebih sedikit daripada evaluasi dengan memanfaatkan paralelisme tingkat instruksi. 

<div align="center">
    <img src="/img/Proof_of_Time-light.svg#gh-light-mode-only" alt="Proof_of_Time" />
    <img src="/img/Proof_of_Time-dark.svg#gh-dark-mode-only" alt="Proof_of_Time" />
</div>

Target jumlah iterasi saat ini ditetapkan pada ~183 juta untuk mencapai sekitar 1 detik per slot waktu pada CPU kelas atas. Kami akan terus memantau kemampuan perangkat keras dan akan menyesuaikan target untuk mempertahankan sekitar 1 detik slot sesuai kebutuhan. Sangat penting untuk membandingkan fungsi penundaan pada perangkat keras terbaik yang tersedia untuk memastikan tidak ada yang dapat memperoleh keuntungan dengan mengevaluasi fungsi penundaan lebih cepat daripada yang lain untuk memprediksi keluaran keacakan di masa depan.

## Pertimbangan Keamanan

Ada beberapa pertimbangan keamanan yang perlu dipertimbangkan ketika mendesain sebuah suar keacakan dalam protokol yang terdesentralisasi. Klaim keamanan untuk Subspace PoT adalah sebagai berikut: 

Selama ada setidaknya satu pencatat waktu yang jujur yang online setiap saat, dan penundaan jaringan dibatasi, semua node yang jujur dapat menentukan output PoT yang benar, dan karenanya tantangan slot yang benar.

Hal ini dicapai dengan memperhatikan aspek-aspek berikut dengan hati-hati:

1. **Sequentiality**: Suar PoT subruang mencapai sekuensialitas dengan merantai output slot. Setiap output digunakan sebagai input ke fungsi penundaan untuk slot berikutnya.

2. **Network delay**: Ketika petani menerima hasil PoT untuk tantangan tersebut, mereka segera mulai mengaudit kebunnya dan membuktikan apakah mereka memiliki solusi yang unggul. Namun, mereka hanya diizinkan untuk mengirimkan solusi setelah slot $r$. Parameter jeda ini saat ini diatur ke 4 slot, dan dapat disetel sehingga ada cukup waktu untuk menyebarkan, memverifikasi output PoT, dan membuktikan solusi pada perangkat keras petani yang umum. Meningkatkan $r$ memungkinkan node yang jujur memiliki lebih banyak waktu untuk menyelesaikan tantangan, tetapi juga memberikan lebih banyak waktu bagi node yang jahat untuk mencoba merencanakan dengan cepat.

3. **Faster timekeeper**: Seorang penyerang yang memiliki akses ke perangkat keras pencatat waktu yang dapat menjalankan PoT lebih cepat daripada pencatat waktu lainnya di jaringan menghadirkan beberapa risiko keamanan dan Subspace mengatasinya melalui beberapa mekanisme. Pertama, peningkatan kecepatan tidak bersifat kumulatif dari waktu ke waktu: karena injeksi entropi setiap 50 blok (~5 menit), keuntungan penyerang akan diatur ulang. Kedua, jika pencatat waktu yang lebih cepat mengabarkan PoT mereka ke jaringan, pencatat waktu lainnya akan terus menerus melakukan sinkronisasi dan mengejar mereka. Jika pencatat waktu yang lebih cepat menahan PoT dan hanya menggunakannya untuk memproduksi blok mereka sendiri, mereka memiliki beberapa jendela prediksi (tergantung seberapa cepat mereka), tetapi bagaimanapun juga mereka membutuhkan persentase yang signifikan dari penyimpanan disk jaringan atau mencoba membuat plot secara on-the-fly, yang juga sulit, seperti yang dijelaskan di halaman [Security](/docs/consensus/security.md#on-the-fly-plot-creation). PoT yang lebih cepat juga membuat serangan jarak jauh lebih memungkinkan, tetapi penyerang masih membutuhkan penyimpanan sebanyak rata-rata penyimpanan yang jujur untuk melakukannya seperti yang dijelaskan di atas. 

    Jaringan akan terus memantau laju perkembangan PoT dibandingkan dengan waktu jam dinding yang sebenarnya untuk mendeteksi kemungkinan adanya pencatat waktu yang lebih cepat.

4. **Penyesuaian tingkat kesulitan**: Jumlah iterasi untuk fungsi penundaan PoT dibandingkan agar sedekat mungkin dengan waktu jam dinding yang sebenarnya. Dengan peningkatan pada perangkat keras, pencatat waktu yang lebih cepat dan jujur dapat digunakan pada jaringan dan jumlah iterasi ditingkatkan untuk menyamai waktu jam dinding yang sebenarnya.

5. **Prediktabilitas**: Tantangan slot hanya dapat diprediksi sebelumnya jika penyerang memiliki pencatat waktu yang lebih cepat dan bahkan hanya bertahan hingga injeksi berikutnya.

6. **Biasing randomness**: Subspace PoT tidak mengijinkan penyerang untuk mengontrol slot tantangan pada interval waktu berikutnya dengan melepaskan/menahan blok mereka dari interval saat ini melalui mekanisme injeksi. Lihat, [Ouroboros Praos](https://eprint.iacr.org/2017/573.pdf) untuk bukti keamanan.
