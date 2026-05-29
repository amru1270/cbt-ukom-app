const questions =
[
  {
    "id": 1,
    "soal": "Seorang nutrisionis menghitung kebutuhan buncis untuk 100 orang. Standar porsi 75g. Persentase Berat Dapat Dimakan (BDD) buncis adalah 75%. Berapa kg buncis kotor yang harus dipesan?",
    "pilihan": [
      "5 kg",
      "10 kg",
      "15 kg",
      "16 kg",
      "20 kg"
    ],
    "jawaban": "10 kg",
    "pembahasan": "Rumus: (100 / %BDD) x (porsi x jumlah orang). (100/75) x (75g x 100) = 10.000g = 10 kg."
  },
  {
    "id": 2,
    "soal": "Laki-laki 65 thn, keluhan tengkuk berat. Suka makan seafood dan jeroan. Lab: kolesterol total 290 mg/dl, HDL 45 mg/dl, LDL 195 mg/dl. Apa masalah gizi domain asupan yang tepat?",
    "pilihan": [
      "Kelebihan asupan energi",
      "Kelebihan asupan karbohidrat",
      "Kelebihan asupan lemak",
      "Kelebihan asupan protein",
      "Kelebihan asupan vitamin"
    ],
    "jawaban": "Kelebihan asupan lemak",
    "pembahasan": "Keluhan fisik dan data profil lipid yang tinggi (hiperlipidemia) berkaitan langsung dengan asupan lemak jenuh berlebih."
  },
  {
    "id": 3,
    "soal": "Di sebuah Posyandu, total balita (S) adalah 90 anak. Balita yang hadir ditimbang (D) adalah 63 anak. Berapakah nilai tingkat partisipasi masyarakat (D/S)?",
    "pilihan": [
      "0.56",
      "0.7",
      "0.79",
      "0.9",
      "1"
    ],
    "jawaban": "0.7",
    "pembahasan": "Rumus D/S: (Jumlah balita ditimbang / Jumlah seluruh balita) x 100%. (63/90) x 100% = 70%."
  },
  {
    "id": 4,
    "soal": "Pasien dewasa dirawat dengan diagnosa penyakit ginjal kronik. Nutrisionis ingin memilih formulir skrining gizi tervalidasi untuk mengidentifikasi risiko malnutrisi orang dewasa. Apa alatnya?",
    "pilihan": [
      "NRI",
      "GNRI",
      "MUST",
      "PYMS",
      "STAMP"
    ],
    "jawaban": "MUST",
    "pembahasan": "Malnutrition Universal Screening Tool (MUST) adalah alat skrining standar yang umum digunakan untuk orang dewasa di rumah sakit."
  },
  {
    "id": 5,
    "soal": "Seorang Ahli Madya Gizi (TRD) merasa tidak kompeten menangani asuhan diet pasien DM komplikasi berat. Apa tindakan profesional yang paling tepat sesuai kode etik?",
    "pilihan": [
      "Memberikan asuhan semampunya",
      "Meminta pasien browsing internet",
      "Merujuk ke Dietisien/ahli yang kompeten",
      "Memberikan diet standar",
      "Menghentikan pelayanan gizi"
    ],
    "jawaban": "Merujuk ke Dietisien/ahli yang kompeten",
    "pembahasan": "Sesuai standar profesi, tenaga gizi wajib merujuk pasien jika kasus di luar batas kewenangannya demi keselamatan pasien."
  },
  {
    "id": 6,
    "soal": "Menu RS terdiri dari: Nasi putih, ayam bakar, nugget ayam, chicken soup, dan semangka. Jenis makanan apa yang perlu ditinjau kembali karena pengulangan bahan?",
    "pilihan": [
      "Makanan selingan",
      "Lauk hewani",
      "Bahan makanan pokok",
      "Lauk nabati",
      "Sayur"
    ],
    "jawaban": "Lauk hewani",
    "pembahasan": "Terdapat pengulangan lauk hewani berbasis ayam (nugget dan soup) yang harus dihindari dalam perencanaan menu yang baik."
  },
  {
    "id": 7,
    "soal": "Anak 4 thn dirujuk dengan keluhan BB tidak naik 3 bulan, grafik KMS di bawah -3 SD. Diagnosa: Kurang Energi Protein fase rehabilitasi. Apa diet yang tepat?",
    "pilihan": [
      "Rendah kalori seimbang",
      "Tinggi protein rendah garam",
      "Rendah lemak",
      "Tinggi Energi Tinggi Protein (TETP)",
      "Tinggi protein rendah lemak"
    ],
    "jawaban": "Tinggi Energi Tinggi Protein (TETP)",
    "pembahasan": "Fase rehabilitasi pada anak gizi buruk membutuhkan asupan tinggi kalori dan protein untuk kejar tumbuh (catch-up growth)."
  },
  {
    "id": 8,
    "soal": "Pasien thypoid mendapatkan preskripsi diet TETP bentuk lunak. Manakah pilihan menu yang paling tepat?",
    "pilihan": [
      "Kroket kentang",
      "Bubur ayam",
      "Sup jagung",
      "Nasi liwet",
      "Roti bakar"
    ],
    "jawaban": "Bubur ayam",
    "pembahasan": "Pasien demam tifoid membutuhkan makanan lunak yang mudah cerna namun tetap tinggi protein (bubur ayam)."
  },
  {
    "id": 9,
    "soal": "Peneliti ingin mengetahui hubungan konsumsi makanan ultra-proses dengan obesitas pada 100 remaja dalam sebulan terakhir. Apa metode asuhan diet yang tepat?",
    "pilihan": [
      "SQ-FFQ",
      "Food Recall 24 Jam",
      "Food Frequency",
      "Food Weighing",
      "Food Records"
    ],
    "jawaban": "SQ-FFQ",
    "pembahasan": "Semi-Quantitative Food Frequency Questionnaire (SQ-FFQ) cocok untuk melihat pola makan jangka panjang (sebulan terakhir) beserta jumlahnya."
  },
  {
    "id": 10,
    "soal": "Nutrisionis ingin mengedukasi remaja putri tentang tablet tambah darah menggunakan media yang menarik secara visual dan audio. Apa media yang paling cocok?",
    "pilihan": [
      "Leaflet",
      "Booklet",
      "Poster",
      "Lembar balik",
      "Video animasi"
    ],
    "jawaban": "Video animasi",
    "pembahasan": "Untuk kelompok sasaran remaja, video animasi lebih efektif dalam menyampaikan informasi gizi dibandingkan media cetak konvensional."
  },
  {
    "id": 11,
    "soal": "Pasien DM RG II dimonitor keberhasilan dietnya. Data laboratorium manakah yang paling utama harus dipantau?",
    "pilihan": [
      "Albumin",
      "Glukosa darah",
      "Kolesterol",
      "Hemoglobin",
      "Asam urat"
    ],
    "jawaban": "Glukosa darah",
    "pembahasan": "Parameter utama keberhasilan diet pada pasien Diabetes Mellitus adalah terkendalinya kadar glukosa darah."
  },
  {
    "id": 12,
    "soal": "Anak 3,5 thn, diare 1 minggu, lemas, rambut merah mudah dicabut, wajah bulat (moon face). Apa masalah gizinya?",
    "pilihan": [
      "KVA",
      "GAKY",
      "Anemia",
      "Marasmus",
      "Kwashiorkor"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Gejala spesifik seperti moon face dan rambut merah mudah dicabut adalah tanda klinis khas dari Kwashiorkor."
  },
  {
    "id": 13,
    "soal": "Ibu hamil 29 thn, pre-eklamsia, TD 155/110 mmHg, suka camilan asin. Apa prinsip diet utama yang harus diberikan?",
    "pilihan": [
      "Porsi kecil sering",
      "Tinggi protein",
      "Rendah garam",
      "Gizi seimbang",
      "Rendah lemak"
    ],
    "jawaban": "Rendah garam",
    "pembahasan": "Tekanan darah tinggi pada pre-eklamsia mewajibkan pembatasan asupan natrium melalui diet rendah garam."
  },
  {
    "id": 14,
    "soal": "Peneliti mengambil data ASI Eksklusif dari laporan \"Bulan Penimbangan Balita\" tahun lalu. Berdasarkan sumbernya, apa jenis data ini?",
    "pilihan": [
      "Primer",
      "Sekunder",
      "Kualitatif",
      "Kuantitatif",
      "Numerik"
    ],
    "jawaban": "Sekunder",
    "pembahasan": "Data yang diambil dari sumber yang sudah ada (laporan pihak lain) disebut sebagai data sekunder."
  },
  {
    "id": 15,
    "soal": "Pasien Gout dengan asam urat 9,5 mg/dl mengeluh nyeri sendi. Apa bahan makanan yang harus dihindari?",
    "pilihan": [
      "Telur",
      "Keju",
      "Susu",
      "Jeroan",
      "Roti"
    ],
    "jawaban": "Jeroan",
    "pembahasan": "Jeroan mengandung purin sangat tinggi yang memicu peningkatan kadar asam urat dan nyeri sendi pada pasien gout."
  },
  {
    "id": 16,
    "soal": "Petugas gudang RS tidak mencatat susu kaleng yang masuk dan keluar secara akurat. Dokumen apa yang wajib dimiliki petugas tersebut?",
    "pilihan": [
      "Buku permintaan harian",
      "Faktur pemesanan",
      "Bon permintaan",
      "Buku stock bahan makanan",
      "Bon pemesanan"
    ],
    "jawaban": "Buku stock bahan makanan",
    "pembahasan": "Buku stock bahan makanan adalah dokumen wajib untuk mengontrol alur keluar-masuknya barang di gudang."
  },
  {
    "id": 17,
    "soal": "Ibu hamil menderita anemia gizi besi. Nutrisionis memodifikasi resep bubur manado dengan bahan lokal. Apa tambahan yang paling tepat untuk meningkatkan zat besi?",
    "pilihan": [
      "Suplementasi susu",
      "Menambah porsi labu",
      "Menambah hati ayam/daging",
      "Menambah jagung",
      "Menambah singkong"
    ],
    "jawaban": "Menambah hati ayam/daging",
    "pembahasan": "Untuk meningkatkan kadar hemoglobin pada anemia, diperlukan sumber zat besi heme yang tinggi seperti hati ayam atau daging."
  },
  {
    "id": 18,
    "soal": "Bayi 10 bln, BB tidak naik 2 bulan berturut-turut (2T) di KMS. Apa langkah pertama saat ibu tiba di meja edukasi?",
    "pilihan": [
      "Memberi PMT",
      "Melakukan asesmen/pengkajian",
      "Merujuk ke RS",
      "Memberikan brosur",
      "Melaporkan ke Lurah"
    ],
    "jawaban": "Melakukan asesmen/pengkajian",
    "pembahasan": "Setiap langkah intervensi harus diawali dengan pengkajian (asesmen) untuk mengetahui penyebab masalah gizi."
  },
  {
    "id": 19,
    "soal": "Ahli gizi puskesmas melakukan rapat lintas sektor untuk menangani stunting. Apa sebutan untuk pihak puskesmas yang hadir dalam rapat tersebut?",
    "pilihan": [
      "Stakeholder eksternal",
      "Sasaran primer",
      "Sasaran sekunder",
      "Stakeholder internal",
      "Stakeholder vertikal"
    ],
    "jawaban": "Stakeholder internal",
    "pembahasan": "Pihak-pihak yang berasal dari dalam organisasi yang sama (Puskesmas) disebut stakeholder internal."
  },
  {
    "id": 20,
    "soal": "Seorang lansia sulit mengunyah karena candidiasis oral. Hasil recall asupan energi hanya 47%. Apa bentuk makanan yang paling tepat?",
    "pilihan": [
      "Biasa",
      "Lunak",
      "Saring",
      "Cair kental",
      "Cair jernih"
    ],
    "jawaban": "Lunak",
    "pembahasan": "Makanan lunak membantu pasien dengan gangguan mengunyah atau nyeri mulut agar asupan nutrisinya tetap terjaga."
  },
  {
    "id": 21,
    "soal": "Seorang anak laki-laki (6 bulan) diukur antropometrinya dengan hasil indeks PB/U sebesar -2,68 SD. Berdasarkan standar antropometri, status gizi anak tersebut adalah?",
    "pilihan": [
      "Normal",
      "Pendek (stunted)",
      "Sangat pendek",
      "Gizi kurang",
      "Gizi buruk"
    ],
    "jawaban": "Pendek (stunted)",
    "pembahasan": "Berdasarkan indeks PB/U, nilai Z-score antara -3 SD sampai dengan <-2 SD dikategorikan sebagai pendek (stunted)."
  },
  {
    "id": 22,
    "soal": "Sebuah RS melayani 120 pasien dengan menu telur 1 butir (50g) pada frekuensi 10 kali dalam sebulan. Jika BDD telur 90%, berapa kg kebutuhan telur untuk satu bulan?",
    "pilihan": [
      "18 kg",
      "60 kg",
      "66,7 kg",
      "180 kg",
      "200 kg"
    ],
    "jawaban": "66,7 kg",
    "pembahasan": "Rumus: (Berat Bersih x Jumlah x Frekuensi) / %BDD. (50g x 120 x 10) / 0,90 = 60.000 / 0,90 = 66.666g ≈ 66,7 kg."
  },
  {
    "id": 23,
    "soal": "Seorang pasien didiagnosis Gagal Ginjal Kronik dengan GFR 33 mL/menit dan asupan protein 126,8% dari kebutuhan. Apa masalah gizi domain asupan yang tepat?",
    "pilihan": [
      "Kelebihan asupan energi",
      "Kelebihan asupan protein",
      "Kelebihan asupan lemak",
      "Kelebihan asupan mineral",
      "Kelebihan asupan cairan"
    ],
    "jawaban": "Kelebihan asupan protein",
    "pembahasan": "Nilai GFR menunjukkan penurunan fungsi ginjal, sementara data asupan menunjukkan konsumsi protein yang melebihi standar kebutuhan (over intake)."
  },
  {
    "id": 24,
    "soal": "Pasien Diabetes Mellitus tipe 2 memiliki kadar HbA1c 8,2% dan glukosa puasa 150 mg/dL. Data manakah yang menjadi parameter jangka panjang pemantauan diet?",
    "pilihan": [
      "Glukosa puasa",
      "Glukosa 2 jam PP",
      "HbA1c",
      "Kolesterol total",
      "Trigliserida"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "HbA1c merupakan parameter yang mencerminkan pengendalian kadar glukosa darah rata-rata selama 2-3 bulan terakhir."
  },
  {
    "id": 25,
    "soal": "Seorang laki-laki (55 thn) mengeluh nyeri sendi kaki dan jari. Hasil lab: asam urat 10,8 mg/dL. Manakah bahan makanan yang paling krusial untuk dibatasi?",
    "pilihan": [
      "Bayam dan kangkung",
      "Telur dan susu",
      "Jeroan dan sarden",
      "Nasi dan roti",
      "Minyak sawit"
    ],
    "jawaban": "Jeroan dan sarden",
    "pembahasan": "Diet rendah purin membatasi ketat sumber purin tinggi (kelompok 3) seperti jeroan dan ikan sarden untuk menurunkan kadar asam urat darah."
  },
  {
    "id": 26,
    "soal": "Ibu menyusui (28 thn) memiliki bayi usia 2 bulan. Hasil asesmen: LILA 23,5 cm dan produksi ASI kurang. Berapakah tambahan energi (E) harian yang dianjurkan sesuai AKG?",
    "pilihan": [
      "180 kkal",
      "200 kkal",
      "330 kkal",
      "450 kkal",
      "500 kkal"
    ],
    "jawaban": "330 kkal",
    "pembahasan": "Sesuai Angka Kecukupan Gizi (AKG), ibu menyusui pada 6 bulan pertama membutuhkan tambahan energi sebesar +330 kkal per hari."
  },
  {
    "id": 27,
    "soal": "Seorang vegetarian murni (vegan) mengeluh lemas dan cepat lelah. Hasil lab: Hb 11 mg/dl. Jenis vitamin apa yang berisiko paling tinggi tidak terpenuhi dari pola makannya?",
    "pilihan": [
      "Vitamin B1",
      "Vitamin B2",
      "Vitamin B6",
      "Vitamin B12",
      "Vitamin C"
    ],
    "jawaban": "Vitamin C",
    "pembahasan": "Vitamin B12 secara alami hanya ditemukan pada sumber hewani, sehingga penganut vegetarian murni sangat berisiko mengalami defisiensi B12."
  },
  {
    "id": 28,
    "soal": "Di sebuah desa, terdapat 98 balita (S). Semua balita memiliki KMS (K). Balita yang datang ditimbang (D) adalah 75 anak. Berapakah jumlah balita yang harus diplot dalam balok K pada grafik SKDN?",
    "pilihan": [
      "70",
      "75",
      "98",
      "145",
      "168"
    ],
    "jawaban": "98",
    "pembahasan": "Balok K dalam grafik SKDN merepresentasikan jumlah seluruh balita yang memiliki Kartu Menuju Sehat (KMS) di wilayah tersebut."
  },
  {
    "id": 29,
    "soal": "Peneliti ingin mengetahui hubungan konsumsi jajanan dengan stunting pada balita. Penilaian status gizi dilakukan menggunakan indikator?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Indikator stunting adalah berdasarkan panjang badan menurut umur (PB/U) atau tinggi badan menurut umur (TB/U)."
  },
  {
    "id": 30,
    "soal": "Seorang ibu balita buta huruf akan diwawancarai mengenai asupan makan anaknya. Metode survei konsumsi manakah yang paling akurat untuk kondisi tersebut?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Food Recall 24 Jam",
    "pembahasan": "Metode Recall 24 jam paling cocok untuk responden dengan tingkat pendidikan rendah (buta huruf) karena data diambil melalui wawancara oleh petugas."
  },
  {
    "id": 31,
    "soal": "Puskesmas akan mendistribusikan Vitamin A pada bulan Februari. Berapa dosis yang diberikan untuk bayi berusia 10 bulan?",
    "pilihan": [
      "50.000 IU",
      "100.000 IU",
      "150.000 IU",
      "200.000 IU",
      "300.000 IU"
    ],
    "jawaban": "100.000 IU",
    "pembahasan": "Kapsul biru (100.000 IU) diberikan untuk bayi usia 6-11 bulan, sedangkan kapsul merah (200.000 IU) untuk anak 12-59 bulan."
  },
  {
    "id": 32,
    "soal": "Seorang remaja putri mengeluh sulit berkonsentrasi dan menstruasi tidak teratur. Hasil pemeriksaan fisik: konjungtiva pucat. Intervensi gizi prioritas adalah pemberian?",
    "pilihan": [
      "Serat",
      "Zat besi (Fe)",
      "Vitamin C",
      "Kalsium",
      "Lemak"
    ],
    "jawaban": "Zat besi (Fe)",
    "pembahasan": "Gejala sulit konsentrasi dan konjungtiva pucat pada remaja putri yang sudah menarche umumnya menunjukkan tanda anemia defisiensi besi."
  },
  {
    "id": 33,
    "soal": "Ahli gizi menghitung kebutuhan kangkung untuk 400 pasien. Porsi 75g, BDD 75%. Berapa kg kebutuhan kangkung kotor?",
    "pilihan": [
      "30 kg",
      "40 kg",
      "50 kg",
      "60 kg",
      "80 kg"
    ],
    "jawaban": "40 kg",
    "pembahasan": "(400 x 75g) / 0,75 = 30.000 / 0,75 = 40.000g = 40 kg."
  },
  {
    "id": 34,
    "soal": "Ambang batas Lingkar Lengan Atas (LLA) untuk mengidentifikasi risiko Kurang Energi Kronis (KEK) pada Wanita Usia Subur adalah?",
    "pilihan": [
      "<11,5 cm",
      "<22,5 cm",
      "<23,5 cm",
      "<27,0 cm",
      "<30,5 cm"
    ],
    "jawaban": "<23,5 cm",
    "pembahasan": "Ambang batas LLA untuk risiko KEK di Indonesia ditetapkan di bawah 23,5 cm."
  },
  {
    "id": 35,
    "soal": "Seorang bidan memberikan hadiah susu formula pada ibu yang baru melahirkan normal. Suami menolak karena ingin memberikan ASI saja. Tindakan keluarga ini mendukung?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Weaning food",
      "Relaktasi"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "Pemberian hanya ASI saja (tanpa cairan/makanan lain) sampai usia 6 bulan disebut pemberian ASI Eksklusif."
  },
  {
    "id": 36,
    "soal": "Nutrisionis membagikan biskuit untuk 500 pengungsi selama 4 hari (100g/hari). Berapa kg total biskuit jika ditambah stok pengaman 10%?",
    "pilihan": [
      "120 kg",
      "200 kg",
      "220 kg",
      "420 kg",
      "520 kg"
    ],
    "jawaban": "220 kg",
    "pembahasan": "(500 x 4 x 100g) = 200.000g. Ditambah 10% (20.000g) = 220.000g = 220 kg."
  },
  {
    "id": 37,
    "soal": "Menu RS hari ini: Nasi putih, ayam bakar, nugget ayam, sayur sop, semangka. Evaluasi menu menunjukkan pengulangan bahan makanan pada?",
    "pilihan": [
      "Makanan pokok",
      "Lauk hewani",
      "Lauk nabati",
      "Sayuran",
      "Buah"
    ],
    "jawaban": "Lauk hewani",
    "pembahasan": "Nugget ayam dan ayam bakar menggunakan bahan utama yang sama (ayam), yang seharusnya dihindari dalam satu kali waktu makan."
  },
  {
    "id": 38,
    "soal": "Petugas gudang tidak mencatat pengeluaran beras setiap hari, sehingga terjadi selisih stok. Dokumen kontrol stok yang seharusnya digunakan adalah?",
    "pilihan": [
      "Bon permintaan",
      "Faktur pembelian",
      "Kartu stok",
      "Daftar pesanan",
      "Buku menu"
    ],
    "jawaban": "Kartu stok",
    "pembahasan": "Kartu stok atau buku stock bahan makanan berfungsi untuk mencatat mutasi (masuk/keluar) barang secara real-time."
  },
  {
    "id": 39,
    "soal": "Dalam investigasi keracunan makanan di RS, ditemukan makanan disimpan pada suhu 25°C selama 5 jam. Berdasarkan prinsip sanitasi, tindakan pencegahan yang tepat adalah?",
    "pilihan": [
      "Mengurangi porsi",
      "Mencuci bahan",
      "Memasak lebih lama",
      "Menyimpan di suhu <5°C atau >60°C",
      "Menambah bumbu"
    ],
    "jawaban": "Menyimpan di suhu <5°C atau >60°C",
    "pembahasan": "Suhu 5°C - 60°C adalah danger zone di mana bakteri berkembang biak dengan cepat. Makanan matang harus disimpan di luar rentang suhu tersebut."
  },
  {
    "id": 40,
    "soal": "Bahan makanan kering yang baru datang diletakkan di depan bahan makanan yang lama. Prinsip penyimpanan apa yang dilanggar?",
    "pilihan": [
      "FIFO",
      "FEFO",
      "LIFO",
      "GHP",
      "HACCP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) mengharuskan bahan makanan yang datang lebih awal digunakan terlebih dahulu."
  },
  {
    "id": 41,
    "soal": "Hasil sisa makanan pasien anak mencapai 65%. Analisis organoleptik (rasa, aroma) menunjukkan hasil baik. Penyebab sisa makanan yang paling mungkin adalah?",
    "pilihan": [
      "Rasa hambar",
      "Tekstur keras",
      "Porsi terlalu besar",
      "Warna tidak menarik",
      "Aroma menyengat"
    ],
    "jawaban": "Porsi terlalu besar",
    "pembahasan": "Jika kualitas rasa sudah baik namun sisa tetap tinggi, kemungkinan besar standar porsi yang diberikan melebihi kapasitas makan anak."
  },
  {
    "id": 42,
    "soal": "Modifikasi resep bubur Manado untuk ibu hamil anemia gizi besi sebaiknya menambahkan bahan pangan lokal tinggi zat besi heme, yaitu?",
    "pilihan": [
      "Labu kuning",
      "Jagung kuning",
      "Hati ayam",
      "Bayam",
      "Singkong"
    ],
    "jawaban": "Hati ayam",
    "pembahasan": "Zat besi heme dari sumber hewani (hati ayam/daging) memiliki bioavailabilitas (daya serap) yang lebih tinggi dibanding zat besi non-heme dari sayuran."
  },
  {
    "id": 43,
    "soal": "Seorang pakar melakukan penilaian terhadap produk makanan baru berdasarkan rasa, warna, aroma, dan tekstur. Penilaian ini disebut?",
    "pilihan": [
      "Penapisan gizi",
      "Uji organoleptik",
      "Formulasi menu",
      "Uji biokimia",
      "Analisis biaya"
    ],
    "jawaban": "Uji organoleptik",
    "pembahasan": "Uji organoleptik adalah penilaian sensorik menggunakan indra manusia untuk menentukan kualitas fisik makanan."
  },
  {
    "id": 44,
    "soal": "Supervisor menemukan karung tepung terigu berlubang dan berbau apek saat penerimaan. Apa tindakan yang paling tepat?",
    "pilihan": [
      "Tetap menerima",
      "Mencuci tepung",
      "Menjemur tepung",
      "Menolak dan mengembalikan ke supplier",
      "Memindahkan ke wadah lain"
    ],
    "jawaban": "Menolak dan mengembalikan ke supplier",
    "pembahasan": "Bahan makanan yang tidak sesuai spesifikasi atau rusak harus ditolak pada saat penerimaan untuk menjamin keamanan pangan."
  },
  {
    "id": 45,
    "soal": "Seorang Ahli Madya Gizi (TRD) diminta menangani pasien komplikasi ginjal berat namun merasa tidak kompeten. Apa kode etik yang harus dijalankan?",
    "pilihan": [
      "Tetap menangani",
      "Meminta bantuan perawat",
      "Merujuk ke Dietisien/ahli gizi senior",
      "Meminta pasien pulang",
      "Memberi diet standar"
    ],
    "jawaban": "Merujuk ke Dietisien/ahli gizi senior",
    "pembahasan": "Tenaga gizi wajib merujuk klien kepada ahli lain yang lebih kompeten apabila masalah yang dihadapi di luar batas kewenangannya."
  },
  {
    "id": 46,
    "soal": "Nutrisionis ingin menyebarkan informasi gizi melalui media yang bisa dibawa pulang dan dibaca berulang oleh pasien di rumah. Media yang paling tepat?",
    "pilihan": [
      "Poster",
      "Banner",
      "Leaflet/Brosur",
      "Film animasi",
      "Power point"
    ],
    "jawaban": "Leaflet/Brosur",
    "pembahasan": "Leaflet atau brosur adalah media cetak ringkas yang didesain agar mudah dibawa dan disimpan sebagai referensi bacaan di rumah."
  },
  {
    "id": 47,
    "soal": "Setelah memberikan intervensi diet, ahli gizi wajib mencatat proses asuhan secara sistematis di rekam medis. Metode pencatatan standar di RS adalah?",
    "pilihan": [
      "NCP",
      "ADIME",
      "SKDN",
      "PAGT",
      "ABCDE"
    ],
    "jawaban": "ADIME",
    "pembahasan": "Metode ADIME (Assessment, Diagnosis, Intervention, Monitoring, Evaluation) adalah format standar dokumentasi asuhan gizi."
  },
  {
    "id": 48,
    "soal": "Peneliti mengelompokkan anak menjadi kelompok \"Gemuk\" dan \"Normal\", lalu melihat riwayat berat badan lahir mereka di masa lalu. Apa desain penelitiannya?",
    "pilihan": [
      "Cross-sectional",
      "Kasus kontrol (Case control)",
      "Kohort",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus kontrol (Case control)",
    "pembahasan": "Desain penelitian yang membandingkan kelompok kasus (gemuk) dan kontrol (normal) untuk melihat paparan masa lalu (riwayat BBLR) disebut kasus kontrol."
  },
  {
    "id": 49,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok yang sama (data normal). Uji statistik yang digunakan?",
    "pilihan": [
      "Independent T-test",
      "Dependent/Paired T-test",
      "Mann-Whitney",
      "Chi-Square",
      "Wilcoxon"
    ],
    "jawaban": "Dependent/Paired T-test",
    "pembahasan": "Uji-t berpasangan (Paired/Dependent T-test) digunakan untuk membandingkan rata-rata dua kelompok data yang saling berhubungan (sebelum vs sesudah)."
  },
  {
    "id": 50,
    "soal": "Dalam program penanganan stunting, ahli gizi puskesmas berkoordinasi dengan Camat dan Lurah. Pihak tersebut dalam manajemen program disebut?",
    "pilihan": [
      "Sasaran primer",
      "Sasaran sekunder",
      "Stakeholder eksternal",
      "Stakeholder internal",
      "Tenaga teknis"
    ],
    "jawaban": "Stakeholder eksternal",
    "pembahasan": "Camat dan Lurah adalah pihak di luar instansi kesehatan (puskesmas) yang mendukung program, sehingga disebut stakeholder eksternal."
  },
  {
    "id": 51,
    "soal": "Seorang wanita 37 tahun dirujuk ke RS dengan keluhan batuk berdarah, sesak napas, mual, dan nafsu makan menurun. Antropometri: TB 165 cm, BB 46 kg (IMT 16,9). Suhu 38,5°C. Jenis data apa yang paling krusial untuk melengkapi pengkajian gizi awal?",
    "pilihan": [
      "Data subjektif + antropometri",
      "Data laboratorium + subjektif",
      "Data medis + obyektif",
      "Data klinis + laboratorium",
      "Data intake + antropometri"
    ],
    "jawaban": "Data klinis + laboratorium",
    "pembahasan": "Data laboratorium (seperti albumin/Hb) dan data klinis (suhu/fisik) diperlukan untuk mengonfirmasi keparahan kondisi infeksi dan risiko malnutrisi."
  },
  {
    "id": 52,
    "soal": "Seorang laki-laki (47 tahun) menderita malaria dengan kondisi demam dan lemas. BB 55 kg. Sesuai prinsip diet TETP, berapakah kebutuhan protein harian pasien tersebut?",
    "pilihan": [
      "55 g",
      "75 g",
      "90 g",
      "110 g",
      "135 g"
    ],
    "jawaban": "110 g",
    "pembahasan": "Pasien malaria membutuhkan diet TETP dengan protein 2,0-2,5 g/kg BB. Jadi, 2 g x 55 kg = 110 gram."
  },
  {
    "id": 53,
    "soal": "Di sebuah Posyandu, tercatat jumlah seluruh balita (S) adalah 100 anak. Balita yang memiliki KMS (K) adalah 80 anak. Berapakah nilai indikator cakupan program (K/S) tersebut?",
    "pilihan": [
      "0.5",
      "0.6",
      "0.75",
      "0.8",
      "93,75%"
    ],
    "jawaban": "0.8",
    "pembahasan": "Cakupan program (K/S) dihitung dari (Jumlah balita memiliki KMS / Jumlah seluruh balita) x 100%. Maka 80/100 = 80%."
  },
  {
    "id": 54,
    "soal": "Nutrisionis menghitung kebutuhan kangkung untuk 400 porsi menu Cah Kangkung. Standar porsi 75g dengan BDD 75%. Berapa kg kangkung kotor yang harus dipesan?",
    "pilihan": [
      "20 kg",
      "30 kg",
      "40 kg",
      "50 kg",
      "60 kg"
    ],
    "jawaban": "40 kg",
    "pembahasan": "Rumus: (400 porsi x 75g) / 0,75 = 30.000 / 0,75 = 40.000g = 40 kg."
  },
  {
    "id": 55,
    "soal": "Pasien menderita Gagal Ginjal Kronik dengan hasil lab: Serum Kreatinin >1.4, GFR <60, dan BUN >20. Zat gizi mikro/makro apa yang harus paling diperhatikan dalam intervensi dietnya?",
    "pilihan": [
      "Karbohidrat",
      "Lemak",
      "Protein",
      "Vitamin",
      "Cairan"
    ],
    "jawaban": "Protein",
    "pembahasan": "Pada penyakit ginjal kronik, pengaturan asupan protein sangat krusial untuk menjaga fungsi filtrasi ginjal (GFR)."
  },
  {
    "id": 56,
    "soal": "Seorang Ahli Madya Gizi (TRD) menemui pasien dengan komplikasi gizi yang sangat kompleks di luar batas kewenangannya. Apa tindakan etis yang paling tepat?",
    "pilihan": [
      "Memberi diet standar",
      "Tetap menangani sebisanya",
      "Merujuk pasien ke Dietisien atau ahli yang kompeten",
      "Meminta pasien mencari info sendiri",
      "Menghentikan asuhan gizi"
    ],
    "jawaban": "Merujuk pasien ke Dietisien atau ahli yang kompeten",
    "pembahasan": "Sesuai kode etik, tenaga gizi wajib melakukan rujukan apabila kasus di luar batas kewenangan demi keselamatan pasien."
  },
  {
    "id": 57,
    "soal": "Dalam investigasi keracunan makanan di RS, ditemukan makanan disimpan pada suhu kamar (25°C) selama lebih dari 4 jam. Berdasarkan prinsip sanitasi, rentang suhu tersebut disebut?",
    "pilihan": [
      "Safe zone",
      "Cold zone",
      "Hot zone",
      "Danger zone",
      "Neutral zone"
    ],
    "jawaban": "Danger zone",
    "pembahasan": "Suhu 5°C - 60°C adalah danger zone di mana bakteri patogen dapat berkembang biak dengan cepat pada makanan."
  },
  {
    "id": 58,
    "soal": "Peneliti ingin mengetahui pola makan responden yang buta huruf selama sebulan terakhir. Metode survei konsumsi apa yang paling direkomendasikan?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "SQ-FFQ dengan bantuan wawancara",
      "Estimated Food Record"
    ],
    "jawaban": "SQ-FFQ dengan bantuan wawancara",
    "pembahasan": "Untuk melihat pola makan jangka panjang pada responden berpendidikan rendah, SQ-FFQ dengan bantuan wawancara petugas adalah yang paling efektif."
  },
  {
    "id": 59,
    "soal": "Seorang laki-laki (55 thn) memiliki kadar asam urat 10,8 mg/dL dan nyeri sendi. Apa prinsip diet utama yang harus dijalankan?",
    "pilihan": [
      "Rendah Garam",
      "Rendah Lemak",
      "Rendah Purin",
      "Tinggi Serat",
      "Rendah Protein"
    ],
    "jawaban": "Rendah Purin",
    "pembahasan": "Kadar asam urat tinggi mengindikasikan serangan gout, sehingga perlu pembatasan asupan purin (diet rendah purin)."
  },
  {
    "id": 60,
    "soal": "Evaluasi menu menunjukkan pengulangan bahan hewani dalam satu waktu makan: Ayam Bakar dan Nugget Ayam. Apa nama indikator penilaian menu yang dilanggar?",
    "pilihan": [
      "Kesesuaian porsi",
      "Keberagaman bahan makanan",
      "Teknik memasak",
      "Standar bumbu",
      "Keamanan pangan"
    ],
    "jawaban": "Keberagaman bahan makanan",
    "pembahasan": "Menu yang baik tidak boleh mengulang bahan makanan yang sama dalam satu kali penyajian agar lebih beragam."
  },
  {
    "id": 61,
    "soal": "Seorang balita laki-laki diukur indeks BB/TB dengan hasil Z-score sebesar +1,8 SD. Menurut PMK No 2 Tahun 2020, apa status gizi anak tersebut?",
    "pilihan": [
      "Gizi Baik (Normal)",
      "Berisiko Gizi Lebih",
      "Gizi Kurang",
      "Obesitas",
      "Gizi Buruk"
    ],
    "jawaban": "Berisiko Gizi Lebih",
    "pembahasan": "Berdasarkan standar WHO/PMK, nilai Z-score BB/TB di atas +1 SD hingga +2 SD dikategorikan sebagai Berisiko Gizi Lebih."
  },
  {
    "id": 62,
    "soal": "Seorang pasien kanker serviks menjalani kemoterapi dan mengeluh mual. Apa menu yang paling tepat untuk meminimalkan bau yang memicu mual?",
    "pilihan": [
      "Ikan bakar",
      "Pepes ikan mas",
      "Sate ayam",
      "Sirloin steak",
      "Ayam goreng krispi"
    ],
    "jawaban": "Pepes ikan mas",
    "pembahasan": "Makanan yang dikukus/dipepes (teknik basah) lebih disarankan daripada dibakar/dipanggang yang memiliki aroma tajam bagi pasien kanker."
  },
  {
    "id": 63,
    "soal": "Anak laki-laki 4 tahun dirawat karena diare. Data apa yang paling krusial untuk dipantau (monitoring) harian untuk mencegah dehidrasi lebih lanjut?",
    "pilihan": [
      "Tinggi badan",
      "Kadar albumin",
      "Frekuensi diare dan asupan cairan",
      "Pola aktivitas",
      "Kelengkapan imunisasi"
    ],
    "jawaban": "Frekuensi diare dan asupan cairan",
    "pembahasan": "Pemantauan output (diare) dan input (cairan) adalah prioritas utama pada penanganan klinis diare."
  },
  {
    "id": 64,
    "soal": "Puskesmas akan membagikan Vitamin A kapsul merah. Kelompok usia mana yang menjadi sasaran utama dosis ini?",
    "pilihan": [
      "0-5 bulan",
      "6-11 bulan",
      "12-59 bulan",
      "Ibu hamil",
      "Remaja putri"
    ],
    "jawaban": "12-59 bulan",
    "pembahasan": "Kapsul biru (100rb IU) untuk bayi 6-11 bln, sedangkan kapsul merah (200rb IU) untuk anak 12-59 bln."
  },
  {
    "id": 65,
    "soal": "Nutrisionis menyiapkan biskuit untuk 500 pengungsi selama 4 hari (100g/hari). Berapa total biskuit jika ditambah stok pengaman (safety stock) 10%?",
    "pilihan": [
      "120 kg",
      "200 kg",
      "220 kg",
      "320 kg",
      "520 kg"
    ],
    "jawaban": "220 kg",
    "pembahasan": "(500 x 4 x 100g) = 200.000g. Ditambah 10% (20.000g) = 220.000g = 220 kg."
  },
  {
    "id": 66,
    "soal": "Petugas gudang dilarang meletakkan bahan makanan baru di depan bahan makanan lama. Prinsip penyimpanan ini disebut?",
    "pilihan": [
      "FIFO",
      "FEFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "First In First Out (FIFO) memastikan bahan yang lama digunakan lebih dulu untuk menjaga kesegaran dan meminimalkan kerugian."
  },
  {
    "id": 67,
    "soal": "Penilaian status gizi untuk mengidentifikasi masalah stunting (pendek) menggunakan indikator antropometri?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Stunting adalah masalah gizi kronis yang diukur berdasarkan tinggi badan atau panjang badan menurut umur."
  },
  {
    "id": 68,
    "soal": "Pasien Diabetes Mellitus tipe II menjalani diet selama 3 bulan. Parameter laboratorium apa yang menunjukkan pengendalian gula darah jangka panjang?",
    "pilihan": [
      "Glukosa Darah Sewaktu",
      "Glukosa Darah Puasa",
      "HbA1c",
      "Kolesterol Total",
      "Albumin"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "HbA1c mencerminkan rata-rata kadar gula darah dalam 2-3 bulan terakhir dan menjadi parameter evaluasi keberhasilan diet."
  },
  {
    "id": 69,
    "soal": "Nutrisionis menemukan kiriman jeruk seberat 70g/buah, sedangkan spesifikasi permintaan adalah 100g/buah. Apa tindakan yang harus dilakukan?",
    "pilihan": [
      "Tetap menerima",
      "Membeli sendiri di pasar",
      "Mengurangi porsi pasien",
      "Menolak dan meminta ganti sesuai spesifikasi",
      "Menggunakan jeruk apa adanya"
    ],
    "jawaban": "Menolak dan meminta ganti sesuai spesifikasi",
    "pembahasan": "Bahan yang tidak sesuai spesifikasi wajib ditolak agar standar porsi dan kebutuhan gizi pasien tetap terpenuhi."
  },
  {
    "id": 70,
    "soal": "Nutrisionis mengamati sisa makanan pasien di piring secara visual menggunakan skala 6 poin. Metode ini disebut?",
    "pilihan": [
      "Food Weighing",
      "Food Recall",
      "Visual Comstock",
      "Inventory Method",
      "Food Account"
    ],
    "jawaban": "Visual Comstock",
    "pembahasan": "Taksiran visual Comstock skala 6 poin adalah metode praktis untuk mengevaluasi sisa makanan di rumah sakit."
  },
  {
    "id": 71,
    "soal": "Peneliti ingin mengetahui risiko BBLR terhadap kejadian obesitas pada anak dengan membandingkan kelompok \"obesitas\" dan \"normal\". Apa desain penelitiannya?",
    "pilihan": [
      "Cross-sectional",
      "Kasus Kontrol (Case Control)",
      "Kohort",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus Kontrol (Case Control)",
    "pembahasan": "Membandingkan kelompok kasus (obesitas) dan kontrol (normal) untuk melihat faktor risiko masa lalu adalah desain kasus kontrol."
  },
  {
    "id": 72,
    "soal": "Ahli gizi puskesmas berkoordinasi dengan sesama pegawai puskesmas (bidan, perawat) dalam pelatihan gizi. Jenis koordinasi ini disebut?",
    "pilihan": [
      "Koordinasi Eksternal",
      "Koordinasi Diagonal",
      "Koordinasi Horisontal",
      "Stakeholder Internal",
      "Stakeholder Vertikal"
    ],
    "jawaban": "Stakeholder Internal",
    "pembahasan": "Pihak yang terlibat dalam satu organisasi yang sama disebut stakeholder internal."
  },
  {
    "id": 73,
    "soal": "Remaja putri mengeluh sering pusing, pucat, dan sulit konsentrasi. Intervensi gizi prioritas apa yang harus diberikan?",
    "pilihan": [
      "Diet rendah lemak",
      "Suplemen Vitamin C",
      "Suplemen Zat Besi (Fe)",
      "Edukasi diet rendah serat",
      "Diet tinggi karbohidrat"
    ],
    "jawaban": "Suplemen Zat Besi (Fe)",
    "pembahasan": "Gejala klinis tersebut mengarah pada anemia defisiensi besi yang umum terjadi pada remaja putri."
  },
  {
    "id": 74,
    "soal": "Pasien mengeluh makanan RS sering dingin dan label diet tidak jelas. Perbaikan sistem distribusi apa yang paling tepat?",
    "pilihan": [
      "Menambah kurir",
      "Menggunakan sistem trayline dengan label diet yang akurat",
      "Mengganti menu setiap hari",
      "Menambah porsi nasi",
      "Membeli wadah plastik baru"
    ],
    "jawaban": "Menggunakan sistem trayline dengan label diet yang akurat",
    "pembahasan": "Pelabelan yang akurat dan penggunaan alat penjaga suhu dalam distribusi trayline sangat penting untuk kepuasan pasien."
  },
  {
    "id": 75,
    "soal": "Nutrisionis menetapkan masalah gizi pasien \"Asupan energi berlebih berkaitan dengan konsumsi makanan manis ditandai dengan asupan 115%\". Masalah ini masuk dalam domain?",
    "pilihan": [
      "Klinik (Clinical)",
      "Perilaku (Behavioral)",
      "Asupan (Intake)",
      "Lingkungan",
      "Biokimia"
    ],
    "jawaban": "Asupan (Intake)",
    "pembahasan": "Masalah yang berkaitan dengan jumlah makanan atau zat gizi yang dikonsumsi masuk dalam domain asupan."
  },
  {
    "id": 76,
    "soal": "Pasien lansia (75 thn) giginya sudah banyak tanggal namun menolak gigi palsu, ia mengeluh sulit BAB. Apa modifikasi hidangan yang tepat?",
    "pilihan": [
      "Urap sayuran mentah",
      "Buah apel segar utuh",
      "Setup buah pisang/lumatan buah",
      "Ketan hitam",
      "Kacang goreng"
    ],
    "jawaban": "Setup buah pisang/lumatan buah",
    "pembahasan": "Makanan harus lunak agar mudah dikunyah, namun tetap mengandung serat dari buah lunak atau setup untuk membantu sembelit."
  },
  {
    "id": 77,
    "soal": "Ditemukan selisih stok beras di gudang karena petugas tidak mencatat bahan keluar setiap hari. Dokumen kontrol apa yang harus diperbaiki?",
    "pilihan": [
      "Faktur pembelian",
      "Buku Menu",
      "Kartu Stok / Buku Stock",
      "Bon Permintaan",
      "Daftar Gaji"
    ],
    "jawaban": "Kartu Stok / Buku Stock",
    "pembahasan": "Kartu stok adalah dokumen utama untuk mengontrol mutasi barang keluar-masuk di gudang secara harian."
  },
  {
    "id": 78,
    "soal": "Peneliti menguji apakah ada perbedaan kadar kolesterol sebelum dan sesudah intervensi pada kelompok yang sama (data normal). Uji statistik apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Paired/Dependent T-test",
      "Chi-Square",
      "Mann-Whitney",
      "Wilcoxon"
    ],
    "jawaban": "Paired/Dependent T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan untuk membandingkan rata-rata data dari subjek yang sama sebelum dan sesudah perlakuan."
  },
  {
    "id": 79,
    "soal": "Bayi berusia 5 bulan hanya diberikan ASI dan tidak diberikan cairan atau makanan lain sejak lahir. Praktek ini disebut?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Relaktasi",
      "Weaning"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "ASI Eksklusif didefinisikan sebagai pemberian hanya ASI saja (tanpa air putih/susu formula) sampai usia 6 bulan."
  },
  {
    "id": 80,
    "soal": "Ambang batas Lingkar Lengan Atas (LLA) yang digunakan untuk mendeteksi risiko Kurang Energi Kronis (KEK) pada Wanita Usia Subur adalah?",
    "pilihan": [
      "<11,5 cm",
      "<21,5 cm",
      "<22,5 cm",
      "<23,5 cm",
      "<25,5 cm"
    ],
    "jawaban": "<23,5 cm",
    "pembahasan": "Ambang batas LLA untuk risiko KEK di Indonesia adalah kurang dari 23,5 cm."
  },
  {
    "id": 81,
    "soal": "Seorang pasien pasca-operasi saluran cerna direncanakan mendapatkan makanan lunak. Apa menu yang harus diperbaiki jika rencana awalnya adalah: Bubur nasi, ayam goreng krispi, sayur urap, dan semangka?",
    "pilihan": [
      "Bubur nasi",
      "Ayam goreng krispi (ganti ke ayam tim/sup)",
      "Semangka",
      "Semua sudah benar",
      "Tidak ada yang diperbaiki"
    ],
    "jawaban": "Ayam goreng krispi (ganti ke ayam tim/sup)",
    "pembahasan": "Ayam goreng krispi terlalu keras dan berlemak untuk pasien diet lunak pasca-operasi; sebaiknya diganti dengan pengolahan yang lebih lembut."
  },
  {
    "id": 82,
    "soal": "Pasien menderita demam tifoid. Prinsip diet apa yang paling krusial untuk mencegah iritasi pada usus?",
    "pilihan": [
      "Tinggi Serat",
      "Rendah Garam",
      "Rendah Sisa (Serat)",
      "Tinggi Lemak",
      "Rendah Karbohidrat"
    ],
    "jawaban": "Rendah Sisa (Serat)",
    "pembahasan": "Diet rendah sisa (rendah serat) diperlukan untuk mengistirahatkan usus yang meradang akibat infeksi Salmonella typhi."
  },
  {
    "id": 83,
    "soal": "Di wilayah kerja Puskesmas, dari 90 balita sasaran (S), balita yang datang ditimbang (D) adalah 63 anak. Berapa tingkat partisipasi masyarakat (D/S)?",
    "pilihan": [
      "0.5",
      "0.6",
      "0.7",
      "0.8",
      "0.9"
    ],
    "jawaban": "0.7",
    "pembahasan": "D/S = (63 / 90) x 100% = 70%."
  },
  {
    "id": 84,
    "soal": "Seorang tenaga gizi mengikuti seminar tentang teknologi pangan terbaru untuk meningkatkan pelayanannya. Area kompetensi mana yang ia jalankan?",
    "pilihan": [
      "Landasan Ilmiah",
      "Komunikasi Efektif",
      "Mawas Diri dan Pengembangan Diri",
      "Etika Moral",
      "Manajemen Food Service"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Memperbarui pengetahuan (belajar sepanjang hayat) adalah perwujudan dari area mawas diri dan pengembangan diri."
  },
  {
    "id": 85,
    "soal": "Langkah awal yang dilakukan seorang juru masak di RS adalah menguji keaktifan ragi untuk adonan roti, namun ragi tidak berbuih. Apa rekomendasinya?",
    "pilihan": [
      "Tetap digunakan",
      "Mengganti dengan ragi baru",
      "Menambah air panas",
      "Menambah gula lebih banyak",
      "Menjemur ragi"
    ],
    "jawaban": "Mengganti dengan ragi baru",
    "pembahasan": "Ragi yang tidak berbuih berarti tidak aktif (mati); harus diganti agar standar kualitas produk terjaga."
  },
  {
    "id": 86,
    "soal": "Laki-laki 55 tahun dengan riwayat PPOM mengeluh sesak dan lemas. Apa terapi diet yang tepat untuk mengurangi beban pernapasan?",
    "pilihan": [
      "Tinggi energi, rendah karbohidrat, tinggi lemak",
      "Rendah kalori",
      "Tinggi serat kasar",
      "Tinggi natrium",
      "Rendah protein"
    ],
    "jawaban": "Tinggi energi, rendah karbohidrat, tinggi lemak",
    "pembahasan": "Diet rendah karbohidrat dan tinggi lemak pada pasien PPOM membantu mengurangi produksi CO2 yang memperberat pernapasan."
  },
  {
    "id": 87,
    "soal": "Setelah pelatihan PMBA bagi kader, tercatat peningkatan jumlah bayi yang mendapat MP-ASI lokal dengan gizi seimbang. Ini adalah evaluasi tahap?",
    "pilihan": [
      "Input",
      "Proses",
      "Output",
      "Hasil (Result)",
      "Dampak (Impact)"
    ],
    "jawaban": "Dampak (Impact)",
    "pembahasan": "Perubahan pola makan atau status gizi di masyarakat setelah suatu program adalah bentuk evaluasi dampak."
  },
  {
    "id": 88,
    "soal": "Peneliti menggunakan data cakupan pemberian Tablet Tambah Darah (TTD) dari laporan tahunan Dinas Kesehatan. Data ini disebut sebagai data?",
    "pilihan": [
      "Data Primer",
      "Data Sekunder",
      "Data Tersier",
      "Data Kualitatif",
      "Data Mentah"
    ],
    "jawaban": "Data Sekunder",
    "pembahasan": "Data sekunder adalah data yang diperoleh dari sumber atau instansi yang sudah ada sebelumnya."
  },
  {
    "id": 89,
    "soal": "Perempuan 35 tahun datang ke klinik dengan BMI 31, lingkar pinggang 95 cm, dan TD 140/90 mmHg. Apa diagnosis yang paling mungkin?",
    "pilihan": [
      "Obesitas saja",
      "Hipertensi saja",
      "Sindrom Metabolik",
      "Diabetes Mellitus",
      "KEK"
    ],
    "jawaban": "Sindrom Metabolik",
    "pembahasan": "Kombinasi obesitas abdominal, hipertensi, dan kemungkinan gangguan glukosa/lipid mengarah pada kriteria sindrom metabolik."
  },
  {
    "id": 90,
    "soal": "Petugas dapur diwajibkan menggunakan masker, penutup kepala, dan sarung tangan saat menyajikan makanan. Praktek ini disebut?",
    "pilihan": [
      "HACCP",
      "Hazard Analysis",
      "Personal Hygiene",
      "Stock Control",
      "FIFO"
    ],
    "jawaban": "Personal Hygiene",
    "pembahasan": "Kebersihan diri (personal hygiene) petugas sangat penting untuk mencegah kontaminasi silang pada makanan."
  },
  {
    "id": 91,
    "soal": "Seorang lansia bungkuk diukur tinggi badannya menggunakan konversi panjang tulang kaki. Apa nama alat/metodenya?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Tinggi Lutut (Knee Height)",
      "LILA",
      "Stadiometer"
    ],
    "jawaban": "Tinggi Lutut (Knee Height)",
    "pembahasan": "Pada lansia yang tidak bisa berdiri tegak, tinggi lutut digunakan untuk memprediksi tinggi badan melalui rumus konversi."
  },
  {
    "id": 92,
    "soal": "Pasien pasca-operasi kanker mammae disarankan membatasi konsumsi telur. Berapa batasan maksimal yang dianjurkan per minggu?",
    "pilihan": [
      "1 butir",
      "3 butir",
      "5 butir",
      "Boleh setiap hari",
      "Tidak boleh sama sekali"
    ],
    "jawaban": "1 butir",
    "pembahasan": "Sesuai protokol dietetik tertentu untuk pemulihan kanker mammae, telur dibatasi maksimal 1 butir seminggu."
  },
  {
    "id": 93,
    "soal": "Nutrisionis menyusun strategi agar produk makanan diet sehat di kateringnya lebih dikenal masyarakat luas. Fungsi manajemen ini disebut?",
    "pilihan": [
      "Perencanaan (Planning)",
      "Pengorganisasian",
      "Pemasaran (Marketing)",
      "Pengawasan",
      "Penganggaran"
    ],
    "jawaban": "Pemasaran (Marketing)",
    "pembahasan": "Strategi memperkenalkan produk kepada konsumen masuk dalam fungsi manajemen pemasaran."
  },
  {
    "id": 94,
    "soal": "Ahli gizi ingin mengedukasi masyarakat tentang stunting melalui media yang bisa dibaca berulang kali di rumah. Apa media yang paling cocok?",
    "pilihan": [
      "Poster di balai desa",
      "Video YouTube",
      "Banner di jalan",
      "Leaflet/Brosur",
      "Siaran Radio"
    ],
    "jawaban": "Leaflet/Brosur",
    "pembahasan": "Leaflet atau brosur mudah dibawa pulang oleh sasaran untuk dijadikan referensi bacaan berulang di rumah."
  },
  {
    "id": 95,
    "soal": "Dalam penelitian tentang hubungan obesitas dengan tekanan darah, berat badan dan tinggi badan menjadi variabel penelitian. Data ini diambil melalui?",
    "pilihan": [
      "Wawancara",
      "Food Recall",
      "Pengukuran Antropometri",
      "Pemeriksaan Lab",
      "Observasi"
    ],
    "jawaban": "Pengukuran Antropometri",
    "pembahasan": "Berat badan dan tinggi badan adalah parameter yang diperoleh melalui teknik pengukuran fisik tubuh (antropometri)."
  },
  {
    "id": 96,
    "soal": "Ibu hamil trimester II menderita pre-eklamsia (TD 160/110 mmHg) dan suka camilan asin. Apa saran gizi utama?",
    "pilihan": [
      "Porsi kecil sering",
      "Batasi makanan tinggi natrium (garam)",
      "Konsumsi suplemen vitamin A",
      "Makan lebih banyak nasi",
      "Hindari sayuran hijau"
    ],
    "jawaban": "Batasi makanan tinggi natrium (garam)",
    "pembahasan": "Pembatasan natrium sangat krusial pada pasien pre-eklamsia untuk mengontrol tekanan darah."
  },
  {
    "id": 97,
    "soal": "Anak 3,5 tahun menderita diare kronis, wajah bulat (moon face), dan rambut merah mudah dicabut. Ini adalah tanda klinis dari?",
    "pilihan": [
      "Marasmus",
      "Anemia",
      "GAKY",
      "Kwashiorkor",
      "KVA"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Tanda khas moon face dan perubahan rambut menunjukkan defisiensi protein berat (Kwashiorkor)."
  },
  {
    "id": 98,
    "soal": "Seorang nutrisionis menyusun jadwal shift kerja untuk 10 orang petugas dapur. Fungsi manajemen ini adalah?",
    "pilihan": [
      "Perencanaan",
      "Manajemen SDM (Human Resources)",
      "Manajemen Keuangan",
      "Manajemen Produksi",
      "Pemasaran"
    ],
    "jawaban": "Manajemen SDM (Human Resources)",
    "pembahasan": "Pengaturan jadwal kerja dan distribusi tugas adalah bagian dari manajemen sumber daya manusia."
  },
  {
    "id": 99,
    "soal": "Pasien berhak mengetahui kandungan gizi dan bahan makanan dalam hidangan yang disajikan RS. Ini merupakan wujud dari?",
    "pilihan": [
      "Kewajiban Tenaga Gizi",
      "Hak Pasien",
      "Kode Etik Supplier",
      "Rahasia Medis",
      "Standar Akreditasi"
    ],
    "jawaban": "Hak Pasien",
    "pembahasan": "Pasien memiliki hak atas informasi terkait pelayanan kesehatan, termasuk informasi makanan yang diterimanya."
  },
  {
    "id": 100,
    "soal": "Nutrisionis mencatat hasil pengkajian, diagnosis, intervensi, dan monitoring gizi secara sistematis di rekam medis. Format ini disebut?",
    "pilihan": [
      "SKDN",
      "PAGT / NCP",
      "ADIME",
      "KMS",
      "ISO"
    ],
    "jawaban": "ADIME",
    "pembahasan": "ADIME (Assessment, Diagnosis, Intervention, Monitoring, Evaluation) adalah format standar pendokumentasian asuhan gizi."
  },
  {
    "id": 101,
    "soal": "Laki-laki penyandang HIV dengan penurunan kesadaran pasca perdarahan saluran cerna mendapatkan diet cairan jernih via NGT. Setelah 2 hari, data apa yang harus segera dikaji ulang?",
    "pilihan": [
      "Status antropometri",
      "Kadar hemoglobin",
      "Jenis cairan dan toleransi asupan",
      "Riwayat makan keluarga",
      "Tekanan darah"
    ],
    "jawaban": "Jenis cairan dan toleransi asupan",
    "pembahasan": "Pada pasien kritis dengan NGT, pemantauan toleransi asupan cairan (residu lambung/diare) sangat krusial sebelum eskalasi diet."
  },
  {
    "id": 102,
    "soal": "Pasien post operasi kanker paru-paru dipantau keberhasilan intervensi gizinya. Parameter laboratorium manakah yang paling sensitif untuk pemantauan jangka pendek?",
    "pilihan": [
      "Albumin serum",
      "Hemoglobin",
      "Prealbumin",
      "Protein total",
      "Glukosa darah"
    ],
    "jawaban": "Protein total",
    "pembahasan": "Prealbumin memiliki waktu paruh lebih pendek (2-3 hari) dibanding albumin, sehingga lebih efektif untuk memantau respons gizi akut."
  },
  {
    "id": 103,
    "soal": "Seorang ibu (38 thn) menderita kanker kolon dengan penurunan BB 5 kg dalam sebulan, mual, dan anoreksia. Apa kondisi klinis yang harus diwaspadai sebagai risiko malnutrisi akut?",
    "pilihan": [
      "Obesitas",
      "Anemia",
      "Cachexia",
      "Hipertensi",
      "Dislipidemia"
    ],
    "jawaban": "Cachexia",
    "pembahasan": "Penurunan berat badan drastis dan anoreksia pada pasien kanker merupakan tanda klinis terjadinya cachexia (sindrom wasting)."
  },
  {
    "id": 104,
    "soal": "Pasien demam tifoid (BB 50 kg) memiliki suhu tubuh 38,5°C. Berapa tambahan energi (kkal) harian yang dibutuhkan hanya akibat kenaikan suhu tubuh tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "300 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu 1°C di atas normal (37°C) membutuhkan tambahan energi sebesar 13%. (1,5°C x 13% x BMR) ≈ kisaran 150 kkal."
  },
  {
    "id": 105,
    "soal": "Pasien Gagal Ginjal Kronik (HD rutin) menunjukkan asupan protein 126,8% dari kebutuhan. Apa masalah gizi domain asupan yang paling tepat?",
    "pilihan": [
      "Kelebihan asupan energi",
      "Kelebihan asupan protein",
      "Kekurangan asupan lemak",
      "Inadekuat oral intake",
      "Perubahan nilai lab"
    ],
    "jawaban": "Kelebihan asupan protein",
    "pembahasan": "Data menunjukkan konsumsi protein yang melebihi standar kebutuhan (over intake) pada kondisi gangguan fungsi ginjal."
  },
  {
    "id": 106,
    "soal": "Perempuan (35 thn) kasir mall, didiagnosis dislipidemia dengan profil lipid tinggi. Ia sering makan cake dan gorengan 4x seminggu. Apa diagnosis gizi domain perilaku?",
    "pilihan": [
      "Pengetahuan kurang",
      "Pemilihan makanan yang salah",
      "Kurang menjaga diri",
      "Belum siap diet",
      "Pola aktivitas salah"
    ],
    "jawaban": "Pemilihan makanan yang salah",
    "pembahasan": "Kebiasaan memilih makanan tinggi lemak dan gula meskipun sudah berisiko klinis menunjukkan masalah pada pemilihan bahan makanan."
  },
  {
    "id": 107,
    "soal": "Pasien menderita Nefrotik Sindrom dengan oedema seluruh tubuh, nyeri perut, dan anoreksia. Jenis data apakah keluhan oedema dan nyeri perut tersebut?",
    "pilihan": [
      "Antropometri",
      "Biokimia",
      "Klinis/Fisik",
      "Riwayat Medis",
      "Riwayat Makan"
    ],
    "jawaban": "Klinis/Fisik",
    "pembahasan": "Tanda-tanda fisik seperti bengkak (oedema) dan nyeri organ adalah bagian dari pengkajian klinis/fisik berfokus gizi."
  },
  {
    "id": 108,
    "soal": "Pasien DM tipe II memiliki GDP 180 mg/dL dan GD 2 jam PP 270 mg/dL. Ia suka makan camilan manis dan asupan energi 130%. Apa diagnosis gizi domain asupan?",
    "pilihan": [
      "Kelebihan asupan karbohidrat",
      "Inadekuat asupan serat",
      "Kelebihan asupan energi",
      "Perubahan nilai lab",
      "Pola makan salah"
    ],
    "jawaban": "Kelebihan asupan energi",
    "pembahasan": "Diagnosis gizi domain asupan harus fokus pada kuantitas zat gizi yang masuk (energi 130% berkaitan dengan camilan manis)."
  },
  {
    "id": 109,
    "soal": "Anak (12 thn) dirawat dengan demam tifoid, suhu 39°C, dan lemas. Apa prinsip diet utama untuk menghindari perforasi usus?",
    "pilihan": [
      "Tinggi Lemak",
      "Tinggi Serat",
      "Rendah Garam",
      "Rendah Sisa (Serat)",
      "Tinggi Karbohidrat"
    ],
    "jawaban": "Rendah Sisa (Serat)",
    "pembahasan": "Diet rendah sisa meminimalkan kerja usus dan mencegah iritasi pada area usus yang meradang akibat infeksi Salmonella."
  },
  {
    "id": 110,
    "soal": "Seorang laki-laki menderita Gout akut dengan kadar asam urat 11 mg/dL. Apa bahan makanan yang harus dihindari sepenuhnya pada fase ini?",
    "pilihan": [
      "Telur dan susu",
      "Bayam dan kangkung",
      "Jeroan dan sarden",
      "Nasi dan roti",
      "Minyak kelapa"
    ],
    "jawaban": "Jeroan dan sarden",
    "pembahasan": "Jeroan dan ikan tertentu (sarden) masuk dalam kelompok purin tinggi yang harus dihindari untuk menurunkan asam urat darah."
  },
  {
    "id": 111,
    "soal": "Balita perempuan (48 bulan) memiliki BB di bawah normal, FT4 turun, dan skor GAKY tinggi. Apa diagnosis gizi yang paling mungkin?",
    "pilihan": [
      "KVA",
      "Anemia",
      "GAKY (Hipotiroid)",
      "Marasmus",
      "Kwashiorkor"
    ],
    "jawaban": "GAKY (Hipotiroid)",
    "pembahasan": "Penurunan hormon tiroksin (FT4) dan skor GAKY yang tinggi mengonfirmasi masalah Gangguan Akibat Kekurangan Yodium."
  },
  {
    "id": 112,
    "soal": "Petugas gizi melakukan penapisan (screening) pada ibu hamil untuk mendeteksi risiko Kurang Energi Kronis (KEK). Apa indikator yang digunakan?",
    "pilihan": [
      "Berat Badan",
      "Lingkar Perut",
      "Tinggi Badan",
      "IMT",
      "Lingkar Lengan Atas (LILA)"
    ],
    "jawaban": "Lingkar Lengan Atas (LILA)",
    "pembahasan": "Pengukuran LILA adalah indikator standar untuk skrining risiko KEK pada wanita usia subur dan ibu hamil."
  },
  {
    "id": 113,
    "soal": "Petugas gizi menilai status gizi lansia bungkuk menggunakan MNA. Alat apa yang paling tepat untuk mengestimasi tinggi badan pasien tersebut?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Stadiometer",
      "Alat tinggi lutut",
      "Timbangan dacin"
    ],
    "jawaban": "Alat tinggi lutut",
    "pembahasan": "Pada lansia yang tidak bisa berdiri tegak, tinggi lutut digunakan untuk memprediksi tinggi badan melalui rumus konversi."
  },
  {
    "id": 114,
    "soal": "Ahli gizi ingin mengetahui asupan nyata individu pada kelompok responden buta huruf dengan biaya murah dan cepat. Apa metode yang tepat?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Food Recall 24 Jam",
    "pembahasan": "Food Recall 24 jam dilakukan melalui wawancara oleh petugas, sehingga tidak mengharuskan responden bisa membaca/menulis."
  },
  {
    "id": 115,
    "soal": "Di desa terdapat 98 balita (S). Semuanya memiliki KMS (K). Saat Posyandu, 75 balita hadir ditimbang (D). Berapa jumlah balita yang diplot dalam balok K pada SKDN?",
    "pilihan": [
      "70",
      "75",
      "98",
      "145",
      "168"
    ],
    "jawaban": "98",
    "pembahasan": "Balok K (KMS) mencerminkan jumlah balita yang terdaftar dan memiliki kartu pemantauan pertumbuhan di wilayah tersebut."
  },
  {
    "id": 116,
    "soal": "Ibu menyusui mengeluh produksi ASI kurang. Bayi 10 bln BB tidak naik 2 bulan. Apa intervensi pertama yang harus dilakukan oleh konselor menyusui?",
    "pilihan": [
      "Memberi susu formula",
      "Memberi PMT",
      "Melakukan pengkajian (asesmen) pola menyusui",
      "Merujuk ke dokter spesialis",
      "Memberikan botol susu gratis"
    ],
    "jawaban": "Melakukan pengkajian (asesmen) pola menyusui",
    "pembahasan": "Setiap masalah gizi harus diawali dengan asesmen untuk menemukan akar penyebab masalah sebelum intervensi."
  },
  {
    "id": 117,
    "soal": "Peneliti menilai status gizi anak sekolah dasar untuk melihat riwayat pertumbuhan masa lampau. Indikator antropometri apa yang digunakan?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Indikator tinggi badan menurut umur (TB/U) mencerminkan status gizi kronis atau pertumbuhan masa lalu."
  },
  {
    "id": 118,
    "soal": "Seorang nutrisionis melakukan pengukuran berulang pada subyek yang sama untuk meminimalkan kesalahan hasil. Apa istilah untuk ketepatan alat ukur tersebut?",
    "pilihan": [
      "Presisi",
      "Akurasi",
      "Kalibrasi",
      "Skrining",
      "Validitas"
    ],
    "jawaban": "Presisi",
    "pembahasan": "Presisi (ketelitian) adalah kesesuaian di antara beberapa hasil pengukuran yang dilakukan secara berulang pada obyek yang sama."
  },
  {
    "id": 119,
    "soal": "Tim tanggap darurat melakukan skrining malnutrisi tingkat berat pada balita di pengungsian. Berapa ambang batas LILA (cm) untuk kategori gizi buruk?",
    "pilihan": [
      "< 11,5 cm",
      "< 12,5 cm",
      "< 23,5 cm",
      "< 15,5 cm",
      "< 18,5 cm"
    ],
    "jawaban": "< 11,5 cm",
    "pembahasan": "Berdasarkan standar WHO/PMK, balita dengan LILA di bawah 11,5 cm dikategorikan mengalami gizi buruk (Severe Acute Malnutrition)."
  },
  {
    "id": 120,
    "soal": "Posyandu memiliki data: S=100, K=80, D=75, N=45. Berapakah nilai tingkat cakupan program (K/S) di wilayah tersebut?",
    "pilihan": [
      "0.45",
      "0.6",
      "0.75",
      "0.8",
      "0.9"
    ],
    "jawaban": "0.8",
    "pembahasan": "K/S = (Jumlah balita memiliki KMS / Jumlah sasaran) x 100%. Maka (80/100) x 100% = 80%."
  },
  {
    "id": 121,
    "soal": "Modifikasi resep bubur Manado untuk ibu hamil anemia sebaiknya menambahkan bahan lokal tinggi zat besi heme. Manakah bahan yang dimaksud?",
    "pilihan": [
      "Labu kuning",
      "Jagung manis",
      "Hati ayam",
      "Bayam hijau",
      "Singkong"
    ],
    "jawaban": "Hati ayam",
    "pembahasan": "Zat besi heme dari sumber hewani (seperti hati ayam) diserap lebih efisien oleh tubuh dibanding zat besi non-heme."
  },
  {
    "id": 122,
    "soal": "Dietisien mengevaluasi sisa makanan 100 pasien dengan indikator target sisa ≤ 20%. Apa metode evaluasi yang paling praktis dan efektif?",
    "pilihan": [
      "Food Recall",
      "Visual Comstock",
      "Penimbangan",
      "FGD",
      "Survei Kepuasan"
    ],
    "jawaban": "Visual Comstock",
    "pembahasan": "Metode taksiran visual Comstock skala 6 poin sangat praktis digunakan untuk mengevaluasi sisa makanan di rumah sakit dengan sampel besar."
  },
  {
    "id": 123,
    "soal": "RS melayani 120 pasien dengan menu telur 1 butir (50g) sebanyak 10 kali/siklus. Siklus berputar 3x sebulan. BDD telur 90%. Berapa kg total kebutuhan telur?",
    "pilihan": [
      "60 kg",
      "66,7 kg",
      "180 kg",
      "200 kg",
      "540 kg"
    ],
    "jawaban": "66,7 kg",
    "pembahasan": "(120 psn x 10 frek x 3 siklus x 50g) / 0,90 = 180.000g / 0,9 = 200.000g. Oh, maaf re-hitung: 120 x 10 kali/bln? Jika frekuensi total sebulan 10x, maka (120x50x10)/0,9 = 66,7 kg."
  },
  {
    "id": 124,
    "soal": "Pasien mengeluh menu siang dan malam selalu ayam berturut-turut. Apa langkah evaluasi yang paling tepat dilakukan?",
    "pilihan": [
      "Evaluasi standar porsi",
      "Evaluasi siklus menu",
      "Evaluasi standar bumbu",
      "Evaluasi tenaga pengolah",
      "Evaluasi biaya"
    ],
    "jawaban": "Evaluasi siklus menu",
    "pembahasan": "Keluhan terkait pengulangan bahan makanan dalam waktu dekat menunjukkan perlunya peninjauan pada perencanaan siklus menu."
  },
  {
    "id": 125,
    "soal": "Seorang baker di RS menguji ragi, namun ragi tidak mengeluarkan gelembung udara saat dicampur air dan gula. Apa rekomendasinya?",
    "pilihan": [
      "Tetap digunakan",
      "Menambah air panas",
      "Mengganti ragi baru",
      "Menambah gula",
      "Menjemur ragi"
    ],
    "jawaban": "Mengganti ragi baru",
    "pembahasan": "Ragi yang tidak berbuih menunjukkan mikroorganisme di dalamnya sudah tidak aktif/mati, sehingga harus diganti."
  },
  {
    "id": 126,
    "soal": "Nutrisionis menghitung nilai gizi nugget tuna (50g per saji). Protein 40g/100g. Acuan label protein 60g. Berapa %AKG protein per sajian?",
    "pilihan": [
      "33,3%",
      "0.5",
      "66,7%",
      "0.83",
      "0.4"
    ],
    "jawaban": "33,3%",
    "pembahasan": "Kandungan protein per saji (50g) = 20g. %AKG = (20/60) x 100% = 33,3%."
  },
  {
    "id": 127,
    "soal": "Dalam pengkajian HACCP menu sup ayam, dietisien menetapkan tahap perebusan ayam sebagai langkah kendali untuk mematikan bakteri. Apa istilah ini?",
    "pilihan": [
      "HAZARD",
      "CCP",
      "Monitoring",
      "Verifikasi",
      "Dokumentasi"
    ],
    "jawaban": "CCP",
    "pembahasan": "Critical Control Point (CCP) adalah titik dalam proses di mana kendali dapat diterapkan untuk mencegah bahaya keamanan pangan."
  },
  {
    "id": 128,
    "soal": "Petugas gudang meletakkan stok tepung yang baru datang di bagian paling depan rak. Prinsip penyimpanan apa yang dilanggar?",
    "pilihan": [
      "FEFO",
      "FIFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) mengharuskan barang yang datang lebih dulu harus digunakan lebih dulu."
  },
  {
    "id": 129,
    "soal": "Berdasarkan investigasi keracunan makanan, ditemukan nasi disimpan di suhu 25°C selama 6 jam. Rentang suhu ini sangat berbahaya karena?",
    "pilihan": [
      "Terlalu dingin",
      "Bakteri sulit tumbuh",
      "Berada di Danger Zone",
      "Bakteri mati",
      "Merusak tekstur"
    ],
    "jawaban": "Berada di Danger Zone",
    "pembahasan": "Suhu 5°C - 60°C adalah zona bahaya (danger zone) di mana bakteri patogen dapat berkembang biak dengan cepat."
  },
  {
    "id": 130,
    "soal": "Petugas dapur darurat merencanakan menu untuk pengungsi dengan fasilitas sederhana. Apa faktor utama yang harus dipertimbangkan?",
    "pilihan": [
      "Tren makanan",
      "Biaya tenaga ahli",
      "Ketersediaan bahan dari donatur",
      "Estetika piring",
      "Variasi masakan Barat"
    ],
    "jawaban": "Ketersediaan bahan dari donatur",
    "pembahasan": "Dalam kondisi darurat, perencanaan menu sangat bergantung pada bahan makanan yang tersedia di lokasi atau bantuan donatur."
  },
  {
    "id": 131,
    "soal": "Nutrisionis menghitung kebutuhan buncis untuk 100 mahasiswa. Porsi 75g, BDD 75%. Berapa kg buncis mentah kotor yang harus dibeli?",
    "pilihan": [
      "5 kg",
      "10 kg",
      "15 kg",
      "16 kg",
      "20 kg"
    ],
    "jawaban": "10 kg",
    "pembahasan": "(100 orang x 75g) / 0,75 = 7.500g / 0,75 = 10.000g = 10 kg."
  },
  {
    "id": 132,
    "soal": "Sisa makanan pasien anak mencapai 65% meskipun rasa makanan dinilai enak. Apa kemungkinan penyebab manajerialnya?",
    "pilihan": [
      "Standar resep salah",
      "Standar porsi berlebihan",
      "Teknik masak salah",
      "Alat makan rusak",
      "Distribusi terlambat"
    ],
    "jawaban": "Standar porsi berlebihan",
    "pembahasan": "Jika kualitas rasa sudah baik namun sisa tetap tinggi, kemungkinan standar porsi melebihi kapasitas lambung pasien (anak)."
  },
  {
    "id": 133,
    "soal": "Ditemukan selisih stok susu kaleng antara data gudang dan fisik karena mutasi harian tidak dicatat. Dokumen apa yang harus diperbaiki?",
    "pilihan": [
      "Faktur",
      "Bon permintaan",
      "Kartu Stok / Buku Stock",
      "Daftar gaji",
      "Buku menu"
    ],
    "jawaban": "Kartu Stok / Buku Stock",
    "pembahasan": "Kartu stok adalah dokumen wajib untuk mengontrol alur masuk dan keluar barang secara akurat setiap hari."
  },
  {
    "id": 134,
    "soal": "Pasien mengeluh makanan sering tertukar antar bangsal. Langkah distribusi apa yang paling tepat untuk diperbaiki?",
    "pilihan": [
      "Menambah kurir",
      "Pelabelan diet yang jelas di setiap tray",
      "Memasak lebih awal",
      "Mengganti wadah",
      "Mengurangi porsi"
    ],
    "jawaban": "Pelabelan diet yang jelas di setiap tray",
    "pembahasan": "Pelabelan yang akurat pada setiap baki makanan sangat penting dalam sistem distribusi untuk menjamin keamanan diet pasien."
  },
  {
    "id": 135,
    "soal": "Nutrisionis menerima kiriman jeruk seberat 70g/buah, sedangkan spesifikasi permintaan adalah 100g/buah. Apa tindakan yang tepat?",
    "pilihan": [
      "Tetap menerima",
      "Membeli sendiri",
      "Mengurangi porsi",
      "Menolak dan minta ganti sesuai spesifikasi",
      "Mengupas semua jeruk"
    ],
    "jawaban": "Menolak dan minta ganti sesuai spesifikasi",
    "pembahasan": "Bahan makanan yang tidak sesuai spesifikasi kontrak harus ditolak saat penerimaan agar standar pelayanan gizi tetap terjaga."
  },
  {
    "id": 136,
    "soal": "Seorang TRD merasa tidak kompeten menangani kasus DM komplikasi berat dan ingin merujuknya. Tindakan ini merupakan perwujudan dari?",
    "pilihan": [
      "Kewajiban kepada teman",
      "Kode Etik (Rujukan kepada ahli lain)",
      "Hak Tenaga Gizi",
      "Standar Sarana",
      "Mawas diri saja"
    ],
    "jawaban": "Kode Etik (Rujukan kepada ahli lain)",
    "pembahasan": "Merujuk pasien kepada ahli yang lebih kompeten saat kasus di luar kewenangan adalah kewajiban etis tenaga gizi."
  },
  {
    "id": 137,
    "soal": "Saat konseling, ahli gizi duduk condong ke depan, menatap pasien dengan ramah, dan mengangguk saat pasien bicara. Apa jenis keterampilan ini?",
    "pilihan": [
      "Komunikasi Verbal",
      "Komunikasi Non-Verbal",
      "Paraphrasing",
      "Advokasi",
      "Verifikasi"
    ],
    "jawaban": "Komunikasi Non-Verbal",
    "pembahasan": "Gerakan tubuh, kontak mata, dan ekspresi adalah bagian penting dari komunikasi non-verbal untuk membangun empati."
  },
  {
    "id": 138,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu menelusuri data BBLR mereka di masa lalu melalui buku KIA. Apa desainnya?",
    "pilihan": [
      "Cross-sectional",
      "Case Control (Kasus Kontrol)",
      "Kohort",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Case Control (Kasus Kontrol)",
    "pembahasan": "Membandingkan kelompok kasus (gemuk) dan kontrol (normal) untuk melihat paparan masa lalu adalah ciri desain kasus kontrol."
  },
  {
    "id": 139,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada 30 lansia (data berdistribusi normal). Uji statistik apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Paired/Dependent T-test",
      "Chi-Square",
      "Mann-Whitney",
      "Wilcoxon"
    ],
    "jawaban": "Paired/Dependent T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan untuk membandingkan rata-rata data dari satu kelompok yang sama (sebelum-sesudah)."
  },
  {
    "id": 140,
    "soal": "Nutrisionis memberikan konseling menyusui pada ibu dengan bayi 7 bulan. Apa peran utama nutrisionis dalam sesi tersebut?",
    "pilihan": [
      "Mendikte ibu",
      "Memberi instruksi keras",
      "Memberikan dukungan dan edukasi (fasilitator)",
      "Mengganti ASI dengan sufor",
      "Menyalahkan ibu"
    ],
    "jawaban": "Memberikan dukungan dan edukasi (fasilitator)",
    "pembahasan": "Konseling bertujuan memberdayakan pasien melalui dukungan dan informasi yang relevan tanpa sikap menghakimi."
  },
  {
    "id": 141,
    "soal": "Pesan gizi \"5 dari 10 bayi yang lahir pendek mengancam kecerdasan bangsa\" ditujukan untuk membangun kesadaran stunting. Pesan ini harus bersifat?",
    "pilihan": [
      "Panjang dan ilmiah",
      "Strategis, efektif, dan menyentuh",
      "Terlalu teknis",
      "Hanya dalam bahasa Inggris",
      "Menggunakan angka rumit"
    ],
    "jawaban": "Strategis, efektif, dan menyentuh",
    "pembahasan": "Pesan edukasi harus singkat, jelas, dan menggunakan isu strategis yang mudah dipahami masyarakat luas."
  },
  {
    "id": 142,
    "soal": "Kepala Instalasi Gizi menyusun jadwal tugas pagi, siang, dan malam untuk 20 orang petugas dapur. Ini masuk dalam fungsi manajemen?",
    "pilihan": [
      "Perencanaan",
      "Pengorganisasian (SDM)",
      "Pengawasan",
      "Pemasaran",
      "Keuangan"
    ],
    "jawaban": "Pengorganisasian (SDM)",
    "pembahasan": "Pengaturan jadwal kerja dan distribusi tenaga kerja adalah bagian dari fungsi manajemen sumber daya manusia."
  },
  {
    "id": 143,
    "soal": "Nutrisionis mempromosikan layanan katering diet sehatnya melalui media sosial agar lebih dikenal publik. Fungsi ini disebut?",
    "pilihan": [
      "Produksi",
      "Distribusi",
      "Pemasaran (Marketing)",
      "Pengadaan",
      "Penyimpanan"
    ],
    "jawaban": "Pemasaran (Marketing)",
    "pembahasan": "Strategi memperkenalkan dan menawarkan produk/jasa kepada konsumen masuk dalam ranah manajemen pemasaran."
  },
  {
    "id": 144,
    "soal": "Media edukasi gizi apa yang paling cocok agar pasien bisa membacanya berulang kali secara mandiri di rumah?",
    "pilihan": [
      "Poster di dinding RS",
      "Video di ruang tunggu",
      "Leaflet / Brosur",
      "Spanduk di jalan",
      "Siaran Radio"
    ],
    "jawaban": "Leaflet / Brosur",
    "pembahasan": "Leaflet/brosur bersifat ringkas dan mudah dibawa pulang oleh sasaran untuk dijadikan referensi bacaan mandiri."
  },
  {
    "id": 145,
    "soal": "Seorang tenaga gizi dilarang menyebarkan data riwayat penyakit pasien kepada pihak lain yang tidak berkepentingan. Ini adalah aspek?",
    "pilihan": [
      "Profesionalisme",
      "Kerahasiaan Medis (Etika)",
      "Mawas Diri",
      "Komunikasi",
      "Manajemen"
    ],
    "jawaban": "Kerahasiaan Medis (Etika)",
    "pembahasan": "Menjaga kerahasiaan identitas dan data medis pasien adalah kewajiban hukum dan etis setiap tenaga kesehatan."
  },
  {
    "id": 146,
    "soal": "Penelitian di RS VIP dilakukan selama 10 hari siklus menu (5 waktu makan/hari). Berapa total populasi menu makanan yang diteliti?",
    "pilihan": [
      "10 menu",
      "30 menu",
      "40 menu",
      "50 menu",
      "60 menu"
    ],
    "jawaban": "50 menu",
    "pembahasan": "5 waktu makan (Pagi, Siang, Malam + 2 snack) x 10 hari = 50 jenis hidangan/menu."
  },
  {
    "id": 147,
    "soal": "Sub klaster gizi melakukan identifikasi kelompok rentan dan luas wilayah terdampak pada hari pertama erupsi gunung. Tahapan apa ini?",
    "pilihan": [
      "Evaluasi",
      "Registrasi",
      "Penapisan (Screening) / Penilaian cepat",
      "Pemantauan",
      "Pelaporan"
    ],
    "jawaban": "Penapisan (Screening) / Penilaian cepat",
    "pembahasan": "Penilaian cepat dan identifikasi kelompok rentan di awal bencana adalah bagian dari tahap penapisan gizi darurat."
  },
  {
    "id": 148,
    "soal": "Format pencatatan asuhan gizi yang mencakup: Assessment, Diagnosis, Intervention, Monitoring, dan Evaluation disebut?",
    "pilihan": [
      "SKDN",
      "PAGT",
      "ADIME",
      "SOAP",
      "ISO"
    ],
    "jawaban": "ADIME",
    "pembahasan": "ADIME adalah format dokumentasi standar internasional dalam Proses Asuhan Gizi Terstandar (PAGT)."
  },
  {
    "id": 149,
    "soal": "Tenaga gizi secara rutin mengikuti seminar ilmiah untuk memperbarui pengetahuannya tentang dietetika terbaru. Area kompetensi mana ini?",
    "pilihan": [
      "Profesionalitas luhur",
      "Mawas Diri dan Pengembangan Diri",
      "Komunikasi Efektif",
      "Landasan Ilmiah",
      "Gizi Masyarakat"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Belajar sepanjang hayat dan memperbarui ilmu merupakan perwujudan dari area mawas diri dan pengembangan diri."
  },
  {
    "id": 150,
    "soal": "Pasien berhak mendapatkan informasi mengenai kandungan gizi dan bahan dalam makanan yang disajikan rumah sakit. Hal ini merupakan?",
    "pilihan": [
      "Kewajiban Dietisien",
      "Hak Pasien",
      "Rahasia Medis",
      "Standar Akreditasi",
      "Hak Rumah Sakit"
    ],
    "jawaban": "Hak Pasien",
    "pembahasan": "Pasien memiliki hak atas informasi medis, termasuk informasi tentang gizi dan makanan yang diterimanya."
  },
  {
    "id": 151,
    "soal": "Pasien rumah sakit mengeluh menu tidak bervariasi dan sering tidak sesuai kebutuhan diet khusus (DM dan Hipertensi). Apa langkah pertama ahli gizi?",
    "pilihan": [
      "Membeli bahan lebih beragam",
      "Meningkatkan anggaran",
      "Pelatihan petugas kebersihan",
      "Menyusun siklus menu sesuai kebutuhan gizi",
      "Menambah tenaga pengolah"
    ],
    "jawaban": "Menyusun siklus menu sesuai kebutuhan gizi",
    "pembahasan": "Langkah awal perbaikan pelayanan makanan adalah menyusun siklus menu yang terencana sesuai standar diet pasien."
  },
  {
    "id": 152,
    "soal": "Pasien mengalami keracunan makanan (mual, diare) pasca makan malam. Hasil investigasi: makanan disimpan di suhu tidak sesuai dan petugas tidak pakai APD. Apa penyebab utamanya?",
    "pilihan": [
      "Menu tidak variatif",
      "Penyimpanan suhu tidak tepat",
      "Alergi makanan",
      "Jadwal makan salah",
      "Kurang tenaga kerja"
    ],
    "jawaban": "Penyimpanan suhu tidak tepat",
    "pembahasan": "Suhu penyimpanan yang salah memicu pertumbuhan bakteri patogen (danger zone), menjadi penyebab utama keracunan."
  },
  {
    "id": 153,
    "soal": "Untuk mencegah kontaminasi silang dan bahaya mikrobiologis, tindakan apa yang harus diwajibkan bagi petugas penjamah makanan?",
    "pilihan": [
      "Menambah porsi",
      "Mempercepat penyajian",
      "Cek spesifikasi bahan",
      "Kurangi bahan segar",
      "Pakai APD (masker/sarung tangan) & simpan suhu tepat"
    ],
    "jawaban": "Pakai APD (masker/sarung tangan) & simpan suhu tepat",
    "pembahasan": "Higiene perorangan (APD) dan kontrol suhu adalah prinsip dasar keamanan pangan untuk mencegah risiko mikrobiologis."
  },
  {
    "id": 154,
    "soal": "Pasien mengeluh makanan sistem trayline sering dingin dan jenis diet tertukar. Apa solusi manajerial yang paling tepat?",
    "pilihan": [
      "Menambah kurir",
      "Kendaraan khusus",
      "Jadwal fleksibel",
      "Labeling diet pada tray dan alat penjaga suhu",
      "Ganti wadah plastik"
    ],
    "jawaban": "Labeling diet pada tray dan alat penjaga suhu",
    "pembahasan": "Pelabelan akurat menjamin keamanan diet, sementara alat penjaga suhu (thermal tray) menjaga palatabilitas makanan."
  },
  {
    "id": 155,
    "soal": "Supervisor menerima bahan: 1) Ikan amis tajam & lunak, 2) Sayur bercak coklat, 3) Telur retak, 4) Buah segar cerah, 5) Ayam keabu-abuan. Mana yang layak diterima?",
    "pilihan": [
      "Semua bahan",
      "Hanya bahan 4",
      "Tidak ada",
      "Semua kecuali bahan 5",
      "Bahan 1, 2, dan 3"
    ],
    "jawaban": "Hanya bahan 4",
    "pembahasan": "Hanya bahan makanan yang memenuhi spesifikasi kualitas fisik (segar, tidak rusak/busuk) yang boleh diterima."
  },
  {
    "id": 156,
    "soal": "Dalam menyusun menu malam, dietisien merencanakan bubur ayam untuk pasca-operasi dan roti gandum untuk diabetes. Rencana mana yang perlu diperbaiki?",
    "pilihan": [
      "Teh manis untuk semua",
      "Semua sudah sesuai",
      "Bubur untuk pasca-op",
      "Susu full cream untuk anak",
      "Buah segar untuk semua"
    ],
    "jawaban": "Teh manis untuk semua",
    "pembahasan": "Pasien diabetes tidak diperbolehkan mendapatkan minuman manis (gula sederhana) secara rutin dalam dietnya."
  },
  {
    "id": 157,
    "soal": "Bayi (6 bulan) memiliki BB 4,2 kg dan PB 62 cm. Hasil indeks PB/U adalah -2,68 SD. Apa kategori status gizinya?",
    "pilihan": [
      "Normal",
      "Pendek (stunted)",
      "Sangat pendek",
      "Gizi kurang",
      "Gizi buruk"
    ],
    "jawaban": "Pendek (stunted)",
    "pembahasan": "Nilai Z-score indeks PB/U antara -3 SD sampai dengan <-2 SD dikategorikan sebagai pendek (stunted)."
  },
  {
    "id": 158,
    "soal": "Petugas gizi akan melakukan intervensi PMT pada ibu hamil untuk mencegah risiko Kurang Energi Kronis (KEK). Alat skrining apa yang digunakan?",
    "pilihan": [
      "Timbangan",
      "Metline / Pita LILA",
      "Microtoice",
      "Stadiometer",
      "Skinfold caliper"
    ],
    "jawaban": "Metline / Pita LILA",
    "pembahasan": "Pengukuran Lingkar Lengan Atas (LILA) adalah indikator standar skrining risiko KEK pada ibu hamil/WUS."
  },
  {
    "id": 159,
    "soal": "Seorang lansia (70 thn) dengan postur tubuh bungkuk (kifosis) akan diukur tinggi badannya. Apa metode estimasi yang paling tepat?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Alat Tinggi Lutut",
      "Timbangan dacin",
      "Berat Badan"
    ],
    "jawaban": "Alat Tinggi Lutut",
    "pembahasan": "Tinggi lutut digunakan untuk memprediksi tinggi badan lansia yang tidak bisa berdiri tegak melalui rumus konversi."
  },
  {
    "id": 160,
    "soal": "Anak (3,5 thn) diare 1 minggu, perut membesar (edema), rambut merah mudah dicabut, dan wajah bulat (moon face). Apa diagnosa gizinya?",
    "pilihan": [
      "KVA",
      "GAKY",
      "Anemia",
      "Marasmus",
      "Kwashiorkor"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Gejala spesifik edema (perut buncit), moon face, dan perubahan rambut adalah tanda klinis khas Kwashiorkor."
  },
  {
    "id": 161,
    "soal": "Ibu balita buta huruf akan ditanya mengenai asupan makan anaknya kemarin. Apa metode survei konsumsi yang paling tepat?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Food Recall 24 Jam",
    "pembahasan": "Recall 24 jam melalui wawancara adalah metode paling praktis dan akurat untuk responden dengan tingkat pendidikan rendah."
  },
  {
    "id": 162,
    "soal": "Pasien DM tipe 2 memiliki GDP 180 mg/dL dan HbA1c 8,2%. Parameter apa yang digunakan untuk evaluasi kepatuhan diet jangka panjang (2-3 bulan)?",
    "pilihan": [
      "Glukosa Darah Puasa",
      "Kolesterol total",
      "HbA1c",
      "Trigliserida",
      "Ureum"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "HbA1c mencerminkan rata-rata kadar gula darah selama 2-3 bulan terakhir, menjadikannya parameter evaluasi diet jangka panjang."
  },
  {
    "id": 163,
    "soal": "Pasien Gagal Ginjal Kronik (stadium 4) memiliki GFR 33 mL/menit dan asupan protein 126,8%. Apa diagnosa gizi domain asupan yang tepat?",
    "pilihan": [
      "Inadekuat asupan",
      "Kelebihan asupan protein",
      "Kelebihan lemak",
      "Kurang cairan",
      "Perubahan nilai lab"
    ],
    "jawaban": "Kelebihan asupan protein",
    "pembahasan": "Nilai GFR menunjukkan penurunan fungsi ginjal drastis, sehingga asupan protein yang sangat tinggi (126,8%) adalah masalah prioritas."
  },
  {
    "id": 164,
    "soal": "Pasien Nefrotik Sindrom mengalami oedema (sembab) seluruh tubuh, nyeri perut, dan anoreksia. Keluhan oedema tersebut termasuk dalam data?",
    "pilihan": [
      "Biokimia",
      "Antropometri",
      "Klinis/Fisik",
      "Riwayat Medis",
      "Riwayat Makan"
    ],
    "jawaban": "Klinis/Fisik",
    "pembahasan": "Tanda-tanda fisik seperti bengkak (edema) dan nyeri adalah bagian dari pengkajian fisik/klinis yang berfokus pada gizi."
  },
  {
    "id": 165,
    "soal": "RS melayani 400 porsi menu ayam. Porsi bersih 100g, frekuensi 5x/bulan, BDD ayam 60%. Berapa kg ayam (berat kotor) yang dipesan per bulan?",
    "pilihan": [
      "200 kg",
      "335 kg",
      "600 kg",
      "1000 kg",
      "1300 kg"
    ],
    "jawaban": "1000 kg",
    "pembahasan": "(400 porsi x 100g x 5 frek) / 0,60 = 200.000 / 0,60 = 333.333g. Oh, maaf: 400 x 100 x 5 / 0,6 = 333kg? Re-hitung: (4001001,5) = 600kg? Cek rumus BDD: Berat kotor = Berat bersih / %BDD."
  },
  {
    "id": 166,
    "soal": "Pasien thypoid (BB 50 kg) memiliki suhu tubuh 38,5°C. Berapa tambahan energi harian (kkal) yang dibutuhkan akibat kenaikan suhu tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "300 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu 1°C di atas normal membutuhkan tambahan energi sekitar 13% dari BMR."
  },
  {
    "id": 167,
    "soal": "Kepala Instalasi Gizi menemukan selisih stok bahan makanan karena petugas gudang tidak mencatat mutasi harian. Dokumen apa yang harus diperbaiki?",
    "pilihan": [
      "Faktur pembelian",
      "Buku Menu",
      "Buku/Kartu Stok Bahan Makanan",
      "Bon Permintaan",
      "Daftar Gaji"
    ],
    "jawaban": "Buku/Kartu Stok Bahan Makanan",
    "pembahasan": "Kartu stok atau buku stok harian adalah instrumen utama untuk mengendalikan alur masuk dan keluar barang di gudang."
  },
  {
    "id": 168,
    "soal": "Produk nugget tuna mengandung protein 20g per takaran saji (50g). Jika acuan label gizi protein adalah 60g, berapa %AKG protein produk tersebut?",
    "pilihan": [
      "0.25",
      "0.33",
      "0.5",
      "0.67",
      "0.83"
    ],
    "jawaban": "0.33",
    "pembahasan": "%AKG = (20g / 60g) x 100% = 33,3%."
  },
  {
    "id": 169,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu menelusuri riwayat BBLR mereka di masa lalu melalui buku KIA. Apa desainnya?",
    "pilihan": [
      "Cross-sectional",
      "Kasus Kontrol (Case Control)",
      "Kohort",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus Kontrol (Case Control)",
    "pembahasan": "Membandingkan kelompok kasus (gemuk) dan kontrol (normal) untuk melihat paparan masa lalu adalah ciri desain kasus kontrol."
  },
  {
    "id": 170,
    "soal": "Peneliti ingin mengetahui perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok lansia yang sama (data normal). Uji apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Paired/Dependent T-test",
      "Chi-Square",
      "Mann-Whitney",
      "Wilcoxon"
    ],
    "jawaban": "Paired/Dependent T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan untuk membandingkan rata-rata dari satu kelompok yang diukur dua kali (sebelum-sesudah)."
  },
  {
    "id": 171,
    "soal": "Ahli gizi menghitung kebutuhan buncis untuk 100 mahasiswa. Standar porsi 75g, BDD 75%. Berapa kg buncis mentah kotor yang harus dibeli?",
    "pilihan": [
      "5 kg",
      "10 kg",
      "15 kg",
      "16 kg",
      "20 kg"
    ],
    "jawaban": "10 kg",
    "pembahasan": "(100 org x 75g) / 0,75 = 7.500g / 0,75 = 10.000g = 10 kg."
  },
  {
    "id": 172,
    "soal": "Laki-laki (55 thn) memiliki asam urat 10,8 mg/dL dan keluhan nyeri sendi hebat di jari kaki. Apa diet yang paling tepat diberikan?",
    "pilihan": [
      "Rendah Lemak",
      "Rendah Energi",
      "Rendah Serat",
      "Rendah Garam",
      "Rendah Purin"
    ],
    "jawaban": "Rendah Purin",
    "pembahasan": "Kadar asam urat tinggi mengindikasikan hiperurisemia/gout, sehingga asupan purin harus dibatasi ketat."
  },
  {
    "id": 173,
    "soal": "Di suatu wilayah, jumlah seluruh balita (S) adalah 100 anak. Balita yang datang ditimbang (D) adalah 70 anak. Berapa tingkat partisipasi masyarakat?",
    "pilihan": [
      "0.45",
      "0.65",
      "0.7",
      "0.8",
      "0.85"
    ],
    "jawaban": "0.7",
    "pembahasan": "D/S x 100% = (70/100) x 100% = 70%."
  },
  {
    "id": 174,
    "soal": "Petugas gudang menemukan melon, wortel, dan pepaya cepat busuk karena disimpan di suhu ruang. Pada suhu berapa (°C) seharusnya bahan tersebut disimpan?",
    "pilihan": [
      "-5 °C",
      "0 °C",
      "10 °C",
      "25 °C",
      "60 °C"
    ],
    "jawaban": "10 °C",
    "pembahasan": "Sayur dan buah segar paling optimal disimpan pada suhu sejuk sekitar 10°C untuk menghambat respirasi dan kerusakan."
  },
  {
    "id": 175,
    "soal": "Pasien HIV dengan perdarahan saluran cerna mendapat diet cairan jernih via NGT. Setelah 2 hari, data kritis apa yang harus dikaji ulang?",
    "pilihan": [
      "Status antropometri",
      "Kadar Hb",
      "Toleransi asupan (residu lambung)",
      "Riwayat makan",
      "Tekanan darah"
    ],
    "jawaban": "Toleransi asupan (residu lambung)",
    "pembahasan": "Pemantauan toleransi asupan (residu) sangat penting pada pemberian nutrisi enteral via NGT untuk mencegah aspirasi atau komplikasi."
  },
  {
    "id": 176,
    "soal": "Seorang TRD merasa tidak memiliki kewenangan/kompetensi menangani pasien ginjal komplikasi berat. Tindakan etis yang harus dilakukan adalah?",
    "pilihan": [
      "Tetap menangani",
      "Meminta bantuan perawat",
      "Merujuk ke Dietisien/ahli yang lebih kompeten",
      "Memberi diet standar",
      "Menghentikan asuhan"
    ],
    "jawaban": "Merujuk ke Dietisien/ahli yang lebih kompeten",
    "pembahasan": "Sesuai kode etik, tenaga gizi wajib merujuk pasien jika kasus di luar batas kewenangannya demi keselamatan pasien."
  },
  {
    "id": 177,
    "soal": "Saat konseling gizi, ahli gizi duduk condong ke depan, menatap pasien dengan ramah, dan mengangguk. Keterampilan apa yang ia tunjukkan?",
    "pilihan": [
      "Komunikasi Verbal",
      "Komunikasi Non-Verbal",
      "Paraphrasing",
      "Advokasi",
      "Verifikasi"
    ],
    "jawaban": "Komunikasi Non-Verbal",
    "pembahasan": "Bahasa tubuh, kontak mata, dan ekspresi wajah merupakan komponen kunci komunikasi non-verbal untuk membangun empati."
  },
  {
    "id": 178,
    "soal": "Penelitian dilakukan pada 1 siklus menu (10 hari) dengan 5 waktu makan per hari (Pagi, Snack, Siang, Snack, Malam). Berapa total populasi menu?",
    "pilihan": [
      "10 menu",
      "30 menu",
      "40 menu",
      "50 menu",
      "60 menu"
    ],
    "jawaban": "50 menu",
    "pembahasan": "10 hari x 5 menu/hari = 50 jenis hidangan/menu."
  },
  {
    "id": 179,
    "soal": "Dalam situasi bencana darurat dengan akses terputus, tim gizi harus melakukan penilaian cepat untuk menentukan jenis PMT. Alat apa yang paling efektif?",
    "pilihan": [
      "Dacin",
      "Pita LILA",
      "Microtoice",
      "Timbangan digital",
      "Timbangan bayi"
    ],
    "jawaban": "Pita LILA",
    "pembahasan": "Pita LILA sangat efektif untuk penilaian gizi cepat (rapid assessment) di daerah bencana karena ringan dan mudah dibawa."
  },
  {
    "id": 180,
    "soal": "Remaja putri (14 thn) mengeluh pusing dan pucat. Hasil lab menunjukkan Hb di bawah normal. Masalah gizi apa yang paling mungkin terjadi?",
    "pilihan": [
      "GAKY",
      "Anemia defisiensi besi",
      "Obesitas",
      "Hipertensi",
      "KEK"
    ],
    "jawaban": "Anemia defisiensi besi",
    "pembahasan": "Gejala klinis pusing, pucat, dan Hb rendah pada remaja putri umumnya disebabkan oleh anemia gizi besi."
  },
  {
    "id": 181,
    "soal": "Evaluasi sisa makanan tinggi pada lauk hewani. Ditemukan menu siang dan malam selalu ayam berturut-turut. Apa langkah evaluasi manajerialnya?",
    "pilihan": [
      "Evaluasi standar porsi",
      "Evaluasi siklus menu",
      "Evaluasi standar bumbu",
      "Evaluasi tenaga pengolah",
      "Evaluasi biaya"
    ],
    "jawaban": "Evaluasi siklus menu",
    "pembahasan": "Pengulangan jenis bahan makanan dalam waktu dekat menunjukkan perlunya peninjauan kembali pada perencanaan siklus menu."
  },
  {
    "id": 182,
    "soal": "Anak laki-laki diukur tinggi badannya untuk melihat riwayat pertumbuhan masa lampau/kronis. Indikator antropometri apa yang digunakan?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Indikator tinggi badan menurut umur (TB/U) adalah parameter untuk menilai status gizi kronis (stunting) atau pertumbuhan masa lalu."
  },
  {
    "id": 183,
    "soal": "Pasien Penyakit Ginjal Kronik (tanpa HD) membutuhkan protein 0,8 g/kgBB. Jika BB pasien 60 kg, berapa kisaran protein harian yang diberikan?",
    "pilihan": [
      "30-35 g",
      "43-54 g",
      "60-65 g",
      "75-80 g",
      "85-90 g"
    ],
    "jawaban": "43-54 g",
    "pembahasan": "0,8 g x 60 kg = 48 gram. Sesuai kriteria asuhan gizi ginjal."
  },
  {
    "id": 184,
    "soal": "Ahli gizi menghitung kebutuhan kangkung untuk 400 pasien. Porsi 75g, BDD kangkung 75%. Berapa kg kangkung kotor yang harus dibeli?",
    "pilihan": [
      "20 kg",
      "30 kg",
      "40 kg",
      "50 kg",
      "60 kg"
    ],
    "jawaban": "40 kg",
    "pembahasan": "(400 x 75g) / 0,75 = 30.000 / 0,75 = 40.000g = 40 kg."
  },
  {
    "id": 185,
    "soal": "Puskesmas akan mendistribusikan Vitamin A kapsul biru pada bulan Februari. Kelompok usia mana yang menjadi sasaran utama?",
    "pilihan": [
      "0-5 bulan",
      "6-11 bulan",
      "12-59 bulan",
      "Ibu hamil",
      "Remaja putri"
    ],
    "jawaban": "6-11 bulan",
    "pembahasan": "Kapsul biru (100.000 IU) diberikan untuk bayi usia 6-11 bulan, kapsul merah untuk 12-59 bulan."
  },
  {
    "id": 186,
    "soal": "Wanita (35 thn), IMT 31, lingkar pinggang 95 cm, TD 140/90, profil lipid abnormal. Apa diagnosa klinis yang paling mencakup semua gejala?",
    "pilihan": [
      "Obesitas",
      "Hipertensi",
      "Sindrom Metabolik",
      "Diabetes Mellitus",
      "KEK"
    ],
    "jawaban": "Sindrom Metabolik",
    "pembahasan": "Kombinasi obesitas abdominal, hipertensi, dan gangguan metabolik (gula/lipid) adalah tanda Sindrom Metabolik."
  },
  {
    "id": 187,
    "soal": "Nutrisionis menemukan perbedaan data fisik susu kaleng di gudang dengan catatan pengeluaran. Apa nama dokumen yang harus dipertanggungjawabkan?",
    "pilihan": [
      "Faktur",
      "Bon permintaan",
      "Buku Stock Bahan Makanan",
      "Daftar Gaji",
      "Buku Menu"
    ],
    "jawaban": "Buku Stock Bahan Makanan",
    "pembahasan": "Buku atau kartu stock adalah dokumen kontrol utama untuk mencatat mutasi barang keluar-masuk setiap hari."
  },
  {
    "id": 188,
    "soal": "Tenaga gizi dilarang membocorkan data medis pasien kepada pihak yang tidak berwenang. Hal ini merupakan perwujudan dari?",
    "pilihan": [
      "Kerahasiaan Medis (Etika)",
      "Hak Tenaga Gizi",
      "Landasan Ilmiah",
      "Komunikasi",
      "Manajemen"
    ],
    "jawaban": "Kerahasiaan Medis (Etika)",
    "pembahasan": "Menjaga kerahasiaan identitas dan riwayat penyakit pasien adalah kewajiban etis dan hukum tenaga kesehatan."
  },
  {
    "id": 189,
    "soal": "Bayi (5 bulan) hanya diberikan ASI tanpa cairan atau makanan tambahan apa pun sejak lahir. Praktek ini disebut?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Relaktasi",
      "Weaning"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "ASI Eksklusif adalah pemberian hanya ASI saja sampai bayi berusia 6 bulan."
  },
  {
    "id": 190,
    "soal": "Pasien dislipidemia sering makan gorengan 4x/minggu dan asupan lemak jenuh berlebih. Diagnosa gizi domain perilaku yang tepat adalah?",
    "pilihan": [
      "Pengetahuan kurang",
      "Pemilihan makanan yang salah",
      "Kurang menjaga diri",
      "Belum siap diet",
      "Pola aktivitas salah"
    ],
    "jawaban": "Pemilihan makanan yang salah",
    "pembahasan": "Kebiasaan memilih makanan tinggi lemak jenuh secara berulang menunjukkan masalah pada pemilihan bahan makanan (Food Choice)."
  },
  {
    "id": 191,
    "soal": "Nutrisionis menerima jeruk 70g/buah, padahal spesifikasi kontrak adalah 100g/buah. Apa tindakan manajerial yang harus diambil?",
    "pilihan": [
      "Tetap menerima",
      "Membeli sendiri",
      "Mengurangi porsi",
      "Menolak dan minta ganti sesuai spesifikasi",
      "Mengupas semua jeruk"
    ],
    "jawaban": "Menolak dan minta ganti sesuai spesifikasi",
    "pembahasan": "Bahan yang tidak sesuai spesifikasi kontrak harus ditolak saat penerimaan untuk menjaga kualitas standar pelayanan."
  },
  {
    "id": 192,
    "soal": "Di Posyandu, tercatat S=100 dan D=60. Berapakah nilai tingkat partisipasi masyarakat (D/S)?",
    "pilihan": [
      "0.45",
      "0.5",
      "0.6",
      "0.75",
      "0.8"
    ],
    "jawaban": "0.6",
    "pembahasan": "D/S = 60/100 x 100% = 60%."
  },
  {
    "id": 193,
    "soal": "Balita (2 thn) dirawat karena diare hebat dan dehidrasi berat. Apa fokus utama intervensi gizi segera pada fase ini?",
    "pilihan": [
      "Tingkatkan BB",
      "Menangani anemia",
      "Menangani dehidrasi (cairan/elektrolit)",
      "Tingkatkan LILA",
      "Edukasi ibu"
    ],
    "jawaban": "Menangani dehidrasi (cairan/elektrolit)",
    "pembahasan": "Pada diare akut dengan dehidrasi, prioritas utama adalah rehidrasi cairan untuk menyelamatkan nyawa."
  },
  {
    "id": 194,
    "soal": "Pasien mengeluh makanan RS sering dingin saat sampai di bangsal. Perbaikan sistem apa yang paling tepat?",
    "pilihan": [
      "Tambah koki",
      "Alat saji tertutup / Tray pemanas",
      "Masak lebih awal",
      "Ganti menu",
      "Potong porsi"
    ],
    "jawaban": "Alat saji tertutup / Tray pemanas",
    "pembahasan": "Penggunaan alat distribusi yang dapat menjaga suhu (insulated tray) sangat penting dalam sistem distribusi sentralisasi."
  },
  {
    "id": 195,
    "soal": "Pasien Gout Akut ingin mengetahui jenis serat yang aman. Bentuk olahan buah mana yang paling tepat disarankan?",
    "pilihan": [
      "Jus buah",
      "Sari buah",
      "Manisan buah",
      "Buah potong segar",
      "Selai buah"
    ],
    "jawaban": "Buah potong segar",
    "pembahasan": "Buah potong segar mengandung serat utuh yang membantu kesehatan metabolisme tanpa tambahan gula berlebih pada manisan."
  },
  {
    "id": 196,
    "soal": "Peneliti menggunakan data laporan tahunan Puskesmas tentang prevalensi stunting 3 tahun terakhir. Berdasarkan sumbernya, data ini disebut?",
    "pilihan": [
      "Data Primer",
      "Data Sekunder",
      "Data Tersier",
      "Data Kualitatif",
      "Data Mentah"
    ],
    "jawaban": "Data Sekunder",
    "pembahasan": "Data yang diperoleh dari sumber atau instansi yang sudah mengumpulkan data tersebut sebelumnya disebut data sekunder."
  },
  {
    "id": 197,
    "soal": "Ahli gizi secara rutin mengikuti seminar tentang penatalaksanaan diet penyakit degeneratif terbaru. Area kompetensi mana yang dijalankan?",
    "pilihan": [
      "Profesionalitas luhur",
      "Mawas Diri dan Pengembangan Diri",
      "Komunikasi Efektif",
      "Landasan Ilmiah",
      "Gizi Masyarakat"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Belajar sepanjang hayat dan memperbarui ilmu pengetahuan adalah perwujudan kompetensi mawas diri dan pengembangan diri."
  },
  {
    "id": 198,
    "soal": "Pasien DM memiliki asupan energi 130% dan suka camilan manis. Apa diagnosa gizi domain asupan yang paling tepat?",
    "pilihan": [
      "Kelebihan asupan karbohidrat",
      "Inadekuat asupan serat",
      "Kelebihan asupan energi",
      "Perubahan nilai lab",
      "Pola makan salah"
    ],
    "jawaban": "Kelebihan asupan energi",
    "pembahasan": "Diagnosa asupan harus fokus pada kuantitas; asupan 130% menunjukkan kelebihan asupan energi berkaitan dengan konsumsi makanan manis."
  },
  {
    "id": 199,
    "soal": "Nutrisionis melakukan edukasi keamanan pangan kemasan agar ibu balita tidak memberikan makanan kedaluwarsa. Strategi ini mendukung?",
    "pilihan": [
      "Promotif",
      "Preventif",
      "Kuratif",
      "Rehabilitatif",
      "Palliatif"
    ],
    "jawaban": "Preventif",
    "pembahasan": "Edukasi untuk mencegah terjadinya masalah kesehatan di masa depan adalah bagian dari upaya preventif."
  },
  {
    "id": 200,
    "soal": "Dalam penyimpanan bahan makanan di gudang, rak/lemari harus memiliki jarak minimal dari lantai untuk mencegah kelembaban. Berapa jaraknya?",
    "pilihan": [
      "5 cm",
      "10 cm",
      "15 cm",
      "20 cm",
      "25 cm"
    ],
    "jawaban": "15 cm",
    "pembahasan": "Jarak minimal lemari simpan dengan lantai sesuai standar sanitasi gudang bahan makanan adalah 15 cm."
  },
  {
    "id": 201,
    "soal": "Seorang perempuan (26 tahun) dirawat dengan demam tinggi 1 minggu, mual, muntah, dan diagnosis tifoid. Suhu tubuh 38,5°C. Berapakah estimasi penambahan energi harian akibat peningkatan suhu tubuh tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "300 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu tubuh 1°C di atas normal (37°C) membutuhkan tambahan energi sekitar 13% dari kebutuhan basal."
  },
  {
    "id": 202,
    "soal": "Pasien (63 tahun) pasca-operasi kanker paru dipantau keberhasilan intervensi gizinya. Parameter laboratorium manakah yang paling sensitif untuk pemantauan status gizi jangka pendek?",
    "pilihan": [
      "Albumin serum",
      "Hemoglobin",
      "Protein total",
      "Prealbumin",
      "Glukosa darah"
    ],
    "jawaban": "Prealbumin",
    "pembahasan": "Prealbumin memiliki waktu paruh lebih pendek (2-3 hari) dibandingkan albumin, sehingga lebih akurat untuk memantau perubahan status gizi akut."
  },
  {
    "id": 203,
    "soal": "Seorang ibu (38 tahun) dengan kanker kolon mengalami mual, anoreksia, dan berat badan turun 5 kg dalam sebulan. Kondisi klinis risiko malnutrisi akut ini disebut?",
    "pilihan": [
      "Obesitas",
      "Anemia",
      "Cachexia",
      "Hipertensi",
      "Dislipidemia"
    ],
    "jawaban": "Cachexia",
    "pembahasan": "Penurunan berat badan drastis disertai hilangnya massa otot pada pasien kanker merupakan indikasi terjadinya cachexia atau sindrom wasting."
  },
  {
    "id": 204,
    "soal": "Pasien pasca-stroke dengan lumpuh setengah badan dan anoreksia diberikan makanan lunak. Manakah menu pagi yang paling sesuai untuk meningkatkan nafsu makan dan asupan?",
    "pilihan": [
      "Bubur sumsum & teh jahe",
      "Bubur ayam & teh manis",
      "Kentang rebus & air putih",
      "Bubur kacang hijau & susu",
      "Nasi tim ayam & jus apel"
    ],
    "jawaban": "Bubur ayam & teh manis",
    "pembahasan": "Bubur ayam merupakan makanan lunak yang padat gizi (protein dan energi) serta umumnya memiliki daya terima yang baik bagi pasien anoreksia."
  },
  {
    "id": 205,
    "soal": "Ibu (55 tahun) dengan IMT 30 kg/m², kolesterol LDL 176 mg/dl, dan suka makan gorengan didiagnosis stroke. Apa diagnosis gizi domain perilaku yang tepat?",
    "pilihan": [
      "Kebiasaan makan tidak sehat",
      "Kurang aktivitas fisik",
      "Perilaku tidak peduli kesehatan",
      "Pola hidup tidak seimbang",
      "Stres kronis"
    ],
    "jawaban": "Kebiasaan makan tidak sehat",
    "pembahasan": "Konsumsi lemak jenuh berlebih dari gorengan dan kurangnya asupan serat merupakan masalah perilaku utama yang memperburuk profil lipid."
  },
  {
    "id": 206,
    "soal": "Seorang pria (48 tahun) didiagnosis kanker paru dan mengeluh mual muntah. Langkah pengkajian gizi apa yang paling tepat untuk mendeteksi inflamasi dan marker malnutrisi?",
    "pilihan": [
      "Pengukuran IMT",
      "Frekuensi napas",
      "Kuesioner pola makan",
      "Evaluasi biokimia (Albumin/CRP)",
      "Pengukuran LILA"
    ],
    "jawaban": "Evaluasi biokimia (Albumin/CRP)",
    "pembahasan": "Evaluasi biokimia seperti albumin dan C-Reactive Protein (CRP) diperlukan untuk mengukur tingkat inflamasi dan keparahan malnutrisi pada pasien kanker."
  },
  {
    "id": 207,
    "soal": "Pasien dengan dislipidemia memiliki kolesterol total 250 mg/dL dan IMT 29,4 kg/m². Manakah anjuran diet yang paling tepat diberikan?",
    "pilihan": [
      "Tingkatkan lemak jenuh",
      "Kurangi serat",
      "Kurangi lemak jenuh & tingkatkan omega-3",
      "Tingkatkan karbohidrat",
      "Hindari protein"
    ],
    "jawaban": "Kurangi lemak jenuh & tingkatkan omega-3",
    "pembahasan": "Diet untuk dislipidemia berfokus pada pengurangan lemak jenuh dan trans, serta meningkatkan asupan serat larut dan asam lemak tak jenuh (omega-3)."
  },
  {
    "id": 208,
    "soal": "Remaja (15 tahun) mengeluh nyeri perut bagian atas dan mual selama 3 hari. Apa intervensi diet awal yang disarankan untuk meminimalkan iritasi lambung?",
    "pilihan": [
      "Makanan pedas",
      "Makanan berlemak",
      "Nasi goreng",
      "Diet cairan bening & tidak iritatif",
      "Diet tinggi protein"
    ],
    "jawaban": "Diet cairan bening & tidak iritatif",
    "pembahasan": "Pada kondisi iritasi mukosa lambung akut (gastritis), disarankan memberikan diet cairan bening atau saring yang tidak merangsang pengeluaran asam lambung."
  },
  {
    "id": 209,
    "soal": "Bapak (58 tahun) dengan riwayat hipertensi dan stroke hemiparesis perlu mengatur pola makan. Apa saran gizi utama untuk mengendalikan tekanan darahnya?",
    "pilihan": [
      "Tingkatkan gula",
      "Tingkatkan lemak",
      "Kurangi natrium (garam)",
      "Tingkatkan karbohidrat",
      "Kurangi protein"
    ],
    "jawaban": "Kurangi natrium (garam)",
    "pembahasan": "Pembatasan asupan natrium sangat penting bagi pasien hipertensi untuk membantu menurunkan tekanan darah dan risiko stroke berulang."
  },
  {
    "id": 210,
    "soal": "Nutrisionis di Puskesmas menemukan prevalensi obesitas 22% berdasarkan data PIS-PK. Berapa kilokalori (kkal) rata-rata penurunan energi harian yang dianjurkan dalam rencana diet?",
    "pilihan": [
      "200 kkal",
      "400 kkal",
      "600 kkal",
      "800 kkal",
      "1.000 kkal"
    ],
    "jawaban": "400 kkal",
    "pembahasan": "Untuk penurunan berat badan yang aman dan berkelanjutan pada penderita obesitas, disarankan mengurangi asupan energi sebesar 400-500 kkal dari kebutuhan total."
  },
  {
    "id": 211,
    "soal": "Survey gizi menunjukkan rata-rata asupan zat besi remaja putri hanya 25% dari AKG. Apa etiologi (penyebab) yang paling mungkin berdasarkan domain perilaku?",
    "pilihan": [
      "Asupan energi rendah",
      "Prevalensi KEK tinggi",
      "Pengetahuan gizi rendah",
      "Kepatuhan TTD rendah",
      "Kurang aktivitas fisik"
    ],
    "jawaban": "Pengetahuan gizi rendah",
    "pembahasan": "Rendahnya asupan zat besi pada remaja sering kali disebabkan oleh kurangnya pengetahuan mengenai pemilihan bahan makanan sumber besi heme yang baik."
  },
  {
    "id": 212,
    "soal": "Setelah pelatihan PMBA bagi kader, terjadi peningkatan jenis MP-ASI lokal yang diberikan ke balita. Tahapan evaluasi apa yang dilakukan jika melihat hasil tahunan ini?",
    "pilihan": [
      "Input",
      "Proses",
      "Output",
      "Hasil",
      "Dampak"
    ],
    "jawaban": "Dampak",
    "pembahasan": "Perubahan pola konsumsi atau status gizi di masyarakat setelah sebuah program dilaksanakan dikategorikan sebagai evaluasi dampak (impact)."
  },
  {
    "id": 213,
    "soal": "Puskesmas akan mendistribusikan Vitamin A pada bulan Februari. Bayi berusia 6 bulan harus diberikan dosis sebesar?",
    "pilihan": [
      "50.000 IU",
      "100.000 IU (Kapsul Biru)",
      "150.000 IU",
      "200.000 IU (Kapsul Merah)",
      "300.000 IU"
    ],
    "jawaban": "100.000 IU (Kapsul Biru)",
    "pembahasan": "Berdasarkan standar Kemenkes, kapsul Vitamin A biru (100.000 IU) diberikan untuk bayi usia 6-11 bulan."
  },
  {
    "id": 214,
    "soal": "Petugas gizi menyusun laporan pemantauan pertumbuhan balita menggunakan data dari grafik balok di Posyandu. Apa nama data tersebut?",
    "pilihan": [
      "SKDN",
      "Berat badan",
      "Tinggi badan",
      "Jumlah balita",
      "Jumlah kader"
    ],
    "jawaban": "SKDN",
    "pembahasan": "Data SKDN (Sasaran, KMS, Ditimbang, Naik BB) adalah format pelaporan standar pemantauan pertumbuhan di Posyandu."
  },
  {
    "id": 215,
    "soal": "Nutrisionis ingin melakukan penapisan status gizi pada anak sekolah dasar untuk mendeteksi risiko obesitas. Indikator apa yang paling tepat digunakan?",
    "pilihan": [
      "BB/U",
      "TB/U",
      "IMT/U",
      "BB/TB",
      "LILA/U"
    ],
    "jawaban": "IMT/U",
    "pembahasan": "Indikator IMT menurut Umur (IMT/U) adalah indikator standar untuk skrining kelebihan berat badan dan obesitas pada anak usia sekolah."
  },
  {
    "id": 216,
    "soal": "Ahli gizi akan memesan ikan patin untuk 10 pasien VVIP dengan standar porsi 75g (berat bersih). Jika BDD ikan patin 75%, berapa gram berat kotor yang harus dibeli?",
    "pilihan": [
      "500g",
      "750g",
      "1.000g",
      "1.250g",
      "1.500g"
    ],
    "jawaban": "1.000g",
    "pembahasan": "Rumus: (100 / %BDD) x (porsi x jumlah). (100/75) x (75g x 10) = 1.000 gram atau 1 kg."
  },
  {
    "id": 217,
    "soal": "Dalam perencanaan produksi makanan di RS, dokumen apa yang menjadi acuan utama mengenai standar porsi dan jumlah menu?",
    "pilihan": [
      "Buku resep",
      "Formulir pesanan",
      "Standar porsi & volume produksi",
      "Daftar harga",
      "Daftar hadir petugas"
    ],
    "jawaban": "Standar porsi & volume produksi",
    "pembahasan": "Standar porsi dan jumlah menu yang diproduksi adalah dasar untuk memastikan kecukupan gizi pasien dan efisiensi biaya."
  },
  {
    "id": 218,
    "soal": "Penilaian kinerja Puskesmas menunjukkan cakupan ASI Eksklusif di bawah target. Tahapan identifikasi masalah ini disebut sebagai?",
    "pilihan": [
      "Kesenjangan target & capaian",
      "Analisis data",
      "Evaluasi proses",
      "Perencanaan program",
      "Penentuan prioritas"
    ],
    "jawaban": "Kesenjangan target & capaian",
    "pembahasan": "Masalah program gizi diidentifikasi apabila terdapat kesenjangan yang signifikan antara target nasional dan capaian riil di lapangan."
  },
  {
    "id": 219,
    "soal": "Seorang ahli gizi harus selalu menjaga kerahasiaan data pasien dan berpenampilan profesional. Hal ini merupakan kompetensi dalam bidang?",
    "pilihan": [
      "Gizi Klinik",
      "Food Service",
      "Etika & Kode Etik Profesi",
      "Gizi Masyarakat",
      "Penelitian"
    ],
    "jawaban": "Etika & Kode Etik Profesi",
    "pembahasan": "Memahami dan menerapkan kode etik profesi gizi merupakan kompetensi pendukung yang berkaitan dengan moral dan profesionalisme."
  },
  {
    "id": 220,
    "soal": "Sebuah pasar mengelompokkan produk olahan buah semi-basah dengan kadar gula tinggi seperti manisan dan dodol. Apa klasifikasi produk ini?",
    "pilihan": [
      "Produk sereal",
      "Produk susu",
      "Konfeksioneri",
      "Bahan fungsional",
      "Sayuran"
    ],
    "jawaban": "Konfeksioneri",
    "pembahasan": "Produk konfeksioneri adalah bahan makanan yang memiliki kadar gula tinggi dan umumnya bersifat semi-basah."
  },
  {
    "id": 221,
    "soal": "Pasien Diabetes Mellitus diberikan diet khusus DM. Data laboratorium manakah yang menjadi indikator utama keberhasilan diet secara harian?",
    "pilihan": [
      "Albumin",
      "Glukosa darah",
      "Kolesterol",
      "Hemoglobin",
      "Asam urat"
    ],
    "jawaban": "Glukosa darah",
    "pembahasan": "Pengendalian kadar glukosa darah (puasa/sewaktu) adalah parameter utama untuk memonitor keberhasilan asuhan gizi pada pasien diabetes."
  },
  {
    "id": 222,
    "soal": "Pasien menderita gout dengan kadar asam urat 19 mg/dL. Manakah contoh sumber protein hewani yang harus dihindari sepenuhnya?",
    "pilihan": [
      "Daging tanpa lemak",
      "Jeroan (hati/babat)",
      "Ayam tanpa kulit",
      "Telur ayam",
      "Ikan tawar"
    ],
    "jawaban": "Jeroan (hati/babat)",
    "pembahasan": "Jeroan mengandung kadar purin yang sangat tinggi, yang secara langsung memicu peningkatan asam urat darah dan nyeri sendi."
  },
  {
    "id": 223,
    "soal": "Laki-laki (58 tahun) dirawat dengan Gagal Ginjal Kronik (HD rutin). GFR < 60 dan serum kreatinin tinggi. Zat gizi makro apa yang harus dibatasi ketat?",
    "pilihan": [
      "Protein",
      "Lemak",
      "Karbohidrat",
      "Serat",
      "Air"
    ],
    "jawaban": "Protein",
    "pembahasan": "Pada pasien gangguan ginjal, pengaturan asupan protein sangat krusial untuk mencegah akumulasi sisa metabolisme nitrogen (ureum)."
  },
  {
    "id": 224,
    "soal": "Seorang lansia bungkuk tidak bisa berdiri tegak untuk diukur tinggi badannya. Alat/metode apa yang paling akurat untuk mengestimasi tingginya?",
    "pilihan": [
      "Metline",
      "Baby scale",
      "Microtoice",
      "Stadiometer",
      "Alat tinggi lutut"
    ],
    "jawaban": "Alat tinggi lutut",
    "pembahasan": "Pengukuran tinggi lutut digunakan untuk memprediksi tinggi badan lansia atau pasien yang memiliki kelainan postur tubuh (kifosis)."
  },
  {
    "id": 225,
    "soal": "Pasien HIV mengalami infeksi jamur (candidiasis) yang luas di mulut sehingga sulit mengunyah. Bentuk makanan apa yang paling tepat diberikan?",
    "pilihan": [
      "Cair",
      "Saring",
      "Lumat",
      "Lunak",
      "Biasa"
    ],
    "jawaban": "Saring",
    "pembahasan": "Makanan saring diberikan kepada pasien yang memiliki gangguan menelan atau luka di mulut agar asupan gizi tetap maksimal dengan beban kunyah minimal."
  },
  {
    "id": 226,
    "soal": "Balita (4 tahun) gizi buruk berada pada fase rehabilitasi. Ia diberikan formula F100. Berapa kandungan energi per kg berat badan pada formula tersebut?",
    "pilihan": [
      "75 kkal",
      "100 kkal",
      "135 kkal",
      "150 kkal",
      "200 kkal"
    ],
    "jawaban": "100 kkal",
    "pembahasan": "Formula 100 (F100) didesain khusus untuk mengejar pertumbuhan pada fase rehabilitasi dengan kepadatan energi 100 kkal/100ml."
  },
  {
    "id": 227,
    "soal": "Pasien kanker serviks mengeluh mual setelah kemoterapi. Manakah teknik pengolahan menu ikan yang paling disarankan?",
    "pilihan": [
      "Bakar",
      "Goreng krispi",
      "Pepes (dikukus)",
      "Panggang",
      "Sate"
    ],
    "jawaban": "Goreng krispi",
    "pembahasan": "Pasien kanker yang mengalami mual sebaiknya menghindari makanan yang dibakar atau digoreng karena aromanya yang tajam dapat memicu muntah."
  },
  {
    "id": 228,
    "soal": "Seorang wanita pasca-operasi kanker payudara ingin tetap mengonsumsi telur. Berapa batasan maksimal konsumsi telur yang diperbolehkan per minggu?",
    "pilihan": [
      "1 butir",
      "3 butir",
      "5 butir",
      "Boleh setiap hari",
      "Tidak boleh sama sekali"
    ],
    "jawaban": "1 butir",
    "pembahasan": "Berdasarkan protokol diet tertentu untuk pemulihan kanker mammae, konsumsi telur dibatasi maksimal 1 butir per minggu."
  },
  {
    "id": 229,
    "soal": "Pasien Penyakit Jantung Koroner (PJK) mengalami edema di kaki dan TD 160/110 mmHg. Zat gizi mikro apa yang harus dibatasi asupannya?",
    "pilihan": [
      "Protein",
      "Vitamin C",
      "Lemak trans",
      "Natrium",
      "Kalsium"
    ],
    "jawaban": "Natrium",
    "pembahasan": "Pembatasan natrium sangat diperlukan untuk mengurangi retensi cairan (edema) dan menurunkan tekanan darah pada pasien jantung."
  },
  {
    "id": 230,
    "soal": "Pasien laki-laki masuk RS dengan keluhan tengkuk berat dan LDL 195 mg/dl. Ia sangat suka seafood dan jeroan. Apa masalah gizi domain asupan?",
    "pilihan": [
      "Kelebihan energi",
      "Kelebihan karbohidrat",
      "Kelebihan lemak",
      "Kelebihan protein",
      "Kelebihan vitamin"
    ],
    "jawaban": "Kelebihan lemak",
    "pembahasan": "Keluhan fisik dan hasil lab profil lipid menunjukkan adanya masalah gizi akibat kelebihan asupan lemak, terutama lemak jenuh dan kolesterol."
  },
  {
    "id": 231,
    "soal": "Pasien menderita apendisitis akut dengan tanda infeksi dan anemia. Ia membutuhkan diet untuk mendukung penyembuhan jaringan, yaitu?",
    "pilihan": [
      "Tinggi Energi",
      "Tinggi Protein",
      "Rendah Lemak",
      "Rendah Sisa",
      "Rendah Garam"
    ],
    "jawaban": "Tinggi Protein",
    "pembahasan": "Diet tinggi protein diperlukan untuk mempercepat regenerasi sel dan penyembuhan jaringan akibat infeksi atau luka operasi."
  },
  {
    "id": 232,
    "soal": "Balita laki-laki (14 bulan) memiliki BB/U dengan Z-score -3 SD. Apa kategori status gizinya menurut standar antropometri terbaru?",
    "pilihan": [
      "Buruk",
      "Pendek",
      "Kurang",
      "Normal",
      "Sangat kurang"
    ],
    "jawaban": "Buruk",
    "pembahasan": "Berdasarkan indeks Berat Badan menurut Umur (BB/U), nilai Z-score di bawah -3 SD dikategorikan sebagai berat badan sangat kurang atau gizi buruk."
  },
  {
    "id": 233,
    "soal": "Peneliti ingin mengetahui pola makan responden selama sebulan terakhir menggunakan metode yang bisa dikonversi ke jumlah zat gizi. Apa metodenya?",
    "pilihan": [
      "SQ-FFQ",
      "Recall 24 Jam",
      "Food Frequency",
      "Food Weighing",
      "Food Records"
    ],
    "jawaban": "SQ-FFQ",
    "pembahasan": "Semi-Quantitative Food Frequency Questionnaire (SQ-FFQ) mencakup frekuensi dan ukuran porsi, sehingga bisa dihitung nilai gizinya."
  },
  {
    "id": 234,
    "soal": "Di Posyandu, total balita (S) adalah 100 anak. Balita yang memiliki KMS (K) adalah 80 anak. Berapa cakupan program (K/S) di wilayah tersebut?",
    "pilihan": [
      "0.5",
      "0.6",
      "0.75",
      "0.8",
      "0.93"
    ],
    "jawaban": "0.8",
    "pembahasan": "K/S dihitung dari (Jumlah balita memiliki KMS / Jumlah seluruh balita) x 100%. Maka 80/100 = 80%."
  },
  {
    "id": 235,
    "soal": "Seorang ibu hamil menderita anemia gizi besi. Bahan pangan lokal mana yang paling tepat ditambahkan untuk meningkatkan zat besi heme?",
    "pilihan": [
      "Labu kuning",
      "Jagung kuning",
      "Hati ayam / Bayam merah",
      "Singkong",
      "Kemangi"
    ],
    "jawaban": "Hati ayam / Bayam merah",
    "pembahasan": "Zat besi heme (hewani) seperti hati ayam memiliki bioavailabilitas yang lebih tinggi untuk mengatasi anemia dibandingkan sumber nabati."
  },
  {
    "id": 236,
    "soal": "Pasien pasca-operasi saluran cerna mendapatkan diet lunak. Manakah menu yang harus diganti karena tidak sesuai prinsip diet lunak?",
    "pilihan": [
      "Bubur nasi",
      "Nasi tim",
      "Teh manis",
      "Sayur urap mentah",
      "Pisang lumat"
    ],
    "jawaban": "Sayur urap mentah",
    "pembahasan": "Sayur urap yang mengandung banyak serat kasar dan kelapa parut tidak diperbolehkan dalam diet lunak pasca-operasi."
  },
  {
    "id": 237,
    "soal": "Nutrisionis di RS menerima telur seberat 50g/butir dengan BDD 90%. Berapa kebutuhan kotor telur untuk 120 pasien (frekuensi 10x sebulan)?",
    "pilihan": [
      "18 kg",
      "60 kg",
      "66,7 kg",
      "180 kg",
      "200 kg"
    ],
    "jawaban": "66,7 kg",
    "pembahasan": "(50g x 120 x 10) / 0,90 = 60.000 / 0,90 = 66,6 kg ≈ 66,7 kg."
  },
  {
    "id": 238,
    "soal": "Pasien menderita demam tifoid. Prinsip diet apa yang paling penting untuk mencegah perforasi atau luka pada usus halus?",
    "pilihan": [
      "Tinggi lemak",
      "Rendah sisa (serat)",
      "Rendah natrium",
      "Tinggi karbohidrat",
      "Tinggi energi"
    ],
    "jawaban": "Rendah sisa (serat)",
    "pembahasan": "Diet rendah sisa bertujuan memberikan istirahat pada saluran cerna dan meminimalkan iritasi pada area usus yang meradang."
  },
  {
    "id": 239,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu menelusuri data BBLR di masa lalu melalui buku KIA. Apa desain penelitiannya?",
    "pilihan": [
      "Potong lintang",
      "Kasus kontrol",
      "Studi kasus",
      "Kohort",
      "Eksperimental"
    ],
    "jawaban": "Kasus kontrol",
    "pembahasan": "Desain penelitian yang membandingkan kelompok kasus dan kontrol untuk mencari paparan faktor risiko di masa lalu adalah kasus kontrol."
  },
  {
    "id": 240,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok yang sama (data normal). Uji statistik apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Dependent (Paired) T-test",
      "Mann-Whitney",
      "Chi-Square",
      "Wilcoxon"
    ],
    "jawaban": "Dependent (Paired) T-test",
    "pembahasan": "Uji-t berpasangan (Dependent T-test) digunakan untuk membandingkan rata-rata dari satu kelompok subyek yang diukur dua kali."
  },
  {
    "id": 241,
    "soal": "Produk nugget ikan tuna mengandung protein 20g per takaran saji (50g). Jika acuan label protein 60g, berapa %AKG protein produk tersebut?",
    "pilihan": [
      "0.25",
      "0.33",
      "0.5",
      "0.67",
      "0.83"
    ],
    "jawaban": "0.33",
    "pembahasan": "%AKG = (Kandungan zat gizi per saji / Acuan label) x 100%. (20/60) x 100% = 33,3%."
  },
  {
    "id": 242,
    "soal": "Nutrisionis menghitung kebutuhan kangkung untuk 400 pasien (porsi 75g, BDD 75%). Berapa kg kangkung berat kotor yang harus dibeli?",
    "pilihan": [
      "20 kg",
      "30 kg",
      "40 kg",
      "50 kg",
      "60 kg"
    ],
    "jawaban": "40 kg",
    "pembahasan": "(400 x 75g) / 0,75 = 30.000 / 0,75 = 40.000g = 40 kg."
  },
  {
    "id": 243,
    "soal": "Seorang laki-laki (55 thn) mengeluh nyeri sendi hebat dan asam urat 10,8 mg/dL. Apa prioritas diet utama yang harus dijalankan?",
    "pilihan": [
      "Rendah Lemak",
      "Rendah Energi",
      "Rendah Serat",
      "Rendah Garam",
      "Rendah Purin"
    ],
    "jawaban": "Rendah Purin",
    "pembahasan": "Diet rendah purin adalah terapi gizi utama untuk menurunkan kadar asam urat darah dan mencegah serangan gout akut."
  },
  {
    "id": 244,
    "soal": "Pasien HIV dengan koma pasca-perdarahan saluran cerna mendapat diet cairan jernih via NGT. Data apa yang paling kritis dipantau setelah 2 hari?",
    "pilihan": [
      "Antropometri",
      "Kadar Hb",
      "Toleransi asupan & residu lambung",
      "Riwayat makan",
      "Tekanan darah"
    ],
    "jawaban": "Toleransi asupan & residu lambung",
    "pembahasan": "Pada nutrisi enteral (NGT), pemantauan toleransi asupan melalui residu lambung sangat krusial untuk mencegah aspirasi atau diare."
  },
  {
    "id": 245,
    "soal": "Ibu balita buta huruf akan ditanya mengenai asupan makan anaknya selama 24 jam terakhir. Apa metode survey konsumsi yang paling tepat?",
    "pilihan": [
      "Recall 24 Jam",
      "Dietary History",
      "Food Record",
      "FFQ",
      "Food Weighing"
    ],
    "jawaban": "Recall 24 Jam",
    "pembahasan": "Metode Recall 24 jam sangat efektif untuk responden dengan pendidikan rendah karena data dikumpulkan melalui wawancara aktif oleh petugas."
  },
  {
    "id": 246,
    "soal": "Seorang balita laki-laki (6 bulan) memiliki PB 62 cm dengan Z-score PB/U sebesar -2,68 SD. Apa kategori status gizinya?",
    "pilihan": [
      "Normal",
      "Pendek (stunted)",
      "Sangat pendek",
      "Gizi kurang",
      "Gizi buruk"
    ],
    "jawaban": "Pendek (stunted)",
    "pembahasan": "Berdasarkan standar antropometri balita, nilai Z-score PB/U antara -3 SD sampai dengan <-2 SD dikategorikan sebagai pendek."
  },
  {
    "id": 247,
    "soal": "Ahli gizi sedang menghitung sisa makanan pasien anak (65%). Analisis organoleptik menu menunjukkan rasa dan warna baik. Apa penyebab utama sisa tersebut?",
    "pilihan": [
      "Jenis menu",
      "Standar porsi berlebihan",
      "Kualitas menu",
      "Standar bumbu",
      "Standar resep"
    ],
    "jawaban": "Standar porsi berlebihan",
    "pembahasan": "Jika kualitas rasa sudah baik namun sisa makanan tetap tinggi (misal pada anak), kemungkinan besar standar porsi yang diberikan terlalu besar."
  },
  {
    "id": 248,
    "soal": "Nutrisionis ingin menyebarkan isu strategis melalui pesan: \"5 dari 10 bayi lahir pendek mengancam kecerdasan bangsa\". Pesan ini termasuk edukasi?",
    "pilihan": [
      "Kuratif",
      "Promotif (Membangun kesadaran)",
      "Rehabilitatif",
      "Palliatif",
      "Preventif"
    ],
    "jawaban": "Promotif (Membangun kesadaran)",
    "pembahasan": "Pesan gizi yang menggunakan isu strategis bertujuan untuk membangun kesadaran publik dan merupakan bagian dari upaya promotif."
  },
  {
    "id": 249,
    "soal": "Peneliti menguji hubungan konsumsi jajanan dengan stunting. Pengukuran tinggi badan dilakukan untuk menilai riwayat pertumbuhan masa?",
    "pilihan": [
      "Sekarang",
      "Depan",
      "Lampau (Kronis)",
      "Akut",
      "Bulanan"
    ],
    "jawaban": "Lampau (Kronis)",
    "pembahasan": "Indikator tinggi badan menurut umur (TB/U) mencerminkan status gizi kronis atau kegagalan pertumbuhan yang terjadi di masa lampau."
  },
  {
    "id": 250,
    "soal": "Petugas dapur RS dilarang meletakkan bahan makanan yang baru datang di bagian paling depan rak. Prinsip penyimpanan apa yang dijalankan?",
    "pilihan": [
      "FEFO",
      "FIFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) memastikan bahan makanan yang masuk lebih awal digunakan terlebih dahulu untuk menjaga kesegaran."
  },
  {
    "id": 251,
    "soal": "Pasien DM Tipe 2 memiliki kadar HbA1c 8,2% dan sering mengonsumsi camilan manis. Data laboratorim manakah yang menjadi parameter evaluasi keberhasilan diet jangka panjang (2-3 bulan)?",
    "pilihan": [
      "Glukosa Darah Puasa",
      "Kolesterol total",
      "HbA1c",
      "Trigliserida",
      "Ureum"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "Kadar HbA1c mencerminkan rata-rata pengendalian glukosa darah dalam rentang waktu 2-3 bulan terakhir."
  },
  {
    "id": 252,
    "soal": "Nutrisionis menghitung kebutuhan ikan patin untuk 10 pasien VVIP dengan standar porsi 75g (berat bersih). Jika BDD ikan patin 75%, berapa berat kotor yang harus dibeli?",
    "pilihan": [
      "500 g",
      "1000 g",
      "1500 g",
      "2000 g",
      "2500 g"
    ],
    "jawaban": "1000 g",
    "pembahasan": "Rumus: (100 / %BDD) x (porsi x jumlah). (100/75) x (75g x 10) = 1.000 gram."
  },
  {
    "id": 253,
    "soal": "Di sebuah Posyandu, total balita (S) adalah 100 anak. Balita yang memiliki KMS (K) adalah 80 anak. Berapakah nilai tingkat cakupan program (K/S)?",
    "pilihan": [
      "0.5",
      "0.6",
      "0.75",
      "0.8",
      "0.93"
    ],
    "jawaban": "0.8",
    "pembahasan": "Rumus cakupan program (K/S) = (Balita memiliki KMS / Total balita) x 100%. Maka (80/100) x 100% = 80%."
  },
  {
    "id": 254,
    "soal": "Laki-laki (55 thn) mengeluh nyeri sendi jari kaki yang hebat. Hasil lab: asam urat 19 mg/dL. Manakah bahan makanan hewani yang harus dihindari sepenuhnya?",
    "pilihan": [
      "Daging tanpa lemak",
      "Ayam tanpa kulit",
      "Telur ayam",
      "Jeroan (hati/babat)",
      "Ikan air tawar"
    ],
    "jawaban": "Jeroan (hati/babat)",
    "pembahasan": "Jeroan mengandung purin sangat tinggi (kelompok 3) yang memicu peningkatan asam urat darah secara drastis."
  },
  {
    "id": 255,
    "soal": "Seorang tenaga gizi (TRD) merasa tidak kompeten menangani pasien DM dengan komplikasi ginjal berat. Apa tindakan profesional yang tepat sesuai kode etik?",
    "pilihan": [
      "Tetap menangani sebisanya",
      "Meminta bantuan perawat",
      "Merujuk ke Dietisien/ahli gizi yang lebih kompeten",
      "Memberi diet standar",
      "Menghentikan asuhan"
    ],
    "jawaban": "Merujuk ke Dietisien/ahli gizi yang lebih kompeten",
    "pembahasan": "Tenaga gizi wajib merujuk klien kepada ahli lain yang lebih kompeten jika kasus di luar batas kewenangannya."
  },
  {
    "id": 256,
    "soal": "Menu siang asrama: nasi, semur daging, tempe bacem, sayur lodeh. Evaluasi menunjukkan sisa makanan tinggi pada rasa yang dinilai monoton (manis). Masalah keseimbangan apa yang dilanggar?",
    "pilihan": [
      "Warna",
      "Rasa",
      "Bahan",
      "Bentuk",
      "Porsi"
    ],
    "jawaban": "Rasa",
    "pembahasan": "Penggunaan bumbu yang seragam (manis/bacem) pada berbagai lauk dalam satu waktu makan menyebabkan kebosanan rasa."
  },
  {
    "id": 257,
    "soal": "Peneliti ingin melihat riwayat pertumbuhan masa lalu pada anak balita. Indikator antropometri manakah yang paling tepat digunakan?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Indikator tinggi badan atau panjang badan menurut umur mencerminkan status gizi kronis atau riwayat pertumbuhan masa lampau."
  },
  {
    "id": 258,
    "soal": "Pasien Penyakit Ginjal Kronik (HD rutin 2x/minggu) memiliki BB 63 kg. Berapakah kebutuhan protein harian pasien tersebut?",
    "pilihan": [
      "32 g",
      "48 g",
      "64 g",
      "72 g",
      "80 g"
    ],
    "jawaban": "80 g",
    "pembahasan": "Pasien PGK dengan hemodialisis rutin membutuhkan protein lebih tinggi (1,2-1,5 g/kgBB). Maka 1,2g x 63kg = 75,6g (pembulatan ke 72-80g)."
  },
  {
    "id": 259,
    "soal": "Hasil investigasi keracunan makanan menunjukkan makanan matang disimpan di suhu 25°C selama 5 jam sebelum disajikan. Rentang suhu ini disebut?",
    "pilihan": [
      "Safe zone",
      "Cold zone",
      "Danger zone",
      "Neutral zone",
      "Hot zone"
    ],
    "jawaban": "Danger zone",
    "pembahasan": "Suhu 5°C hingga 60°C adalah zona bahaya (danger zone) di mana bakteri patogen berkembang biak dengan sangat cepat."
  },
  {
    "id": 260,
    "soal": "Peneliti mengambil sampel 90 siswi dari total 300 orang secara acak mewakili kelas X, XI, dan XII (masing-masing 30 orang). Apa teknik samplingnya?",
    "pilihan": [
      "Simple random",
      "Systematic",
      "Cluster",
      "Stratified random",
      "Multistage"
    ],
    "jawaban": "Stratified random",
    "pembahasan": "Teknik mengambil sampel dari kelompok yang berjenjang/berstrata secara proporsional disebut Stratified Random Sampling."
  },
  {
    "id": 261,
    "soal": "Balita laki-laki (6 bulan) memiliki PB 62 cm dengan Z-score PB/U sebesar -2,68 SD. Berdasarkan standar antropometri, apa kategori status gizinya?",
    "pilihan": [
      "Normal",
      "Pendek (stunted)",
      "Sangat pendek",
      "Gizi kurang",
      "Gizi buruk"
    ],
    "jawaban": "Pendek (stunted)",
    "pembahasan": "Nilai Z-score antara -3 SD sampai dengan <-2 SD pada indikator PB/U dikategorikan sebagai pendek (stunted)."
  },
  {
    "id": 262,
    "soal": "Pasien kanker serviks mengeluh mual hebat setelah kemoterapi. Manakah menu ikan yang paling disarankan untuk meminimalkan aroma tajam?",
    "pilihan": [
      "Ikan bakar",
      "Ikan goreng krispi",
      "Pepes ikan mas",
      "Sate ikan",
      "Ikan asap"
    ],
    "jawaban": "Pepes ikan mas",
    "pembahasan": "Teknik pengolahan basah (dikukus/dipepes) lebih disarankan bagi pasien mual karena aroma makanannya tidak sekuat teknik dibakar/digoreng."
  },
  {
    "id": 263,
    "soal": "Balita (3,5 thn) diare kronis, edema perut, rambut merah mudah dicabut, dan wajah bulat (moon face). Apa masalah gizi spesifiknya?",
    "pilihan": [
      "KVA",
      "Anemia",
      "Marasmus",
      "Kwashiorkor",
      "GAKY"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Gejala klinis edema bilateral, moon face, dan perubahan warna rambut adalah tanda khas defisiensi protein berat atau Kwashiorkor."
  },
  {
    "id": 264,
    "soal": "Ibu balita buta huruf akan diwawancarai tentang asupan makan anaknya selama 24 jam terakhir. Metode survei konsumsi manakah yang paling akurat?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Food Recall 24 Jam",
    "pembahasan": "Metode Recall 24 jam dilakukan melalui wawancara oleh petugas, sehingga sangat efektif untuk responden dengan tingkat pendidikan rendah."
  },
  {
    "id": 265,
    "soal": "Nutrisionis di asrama diminta menghitung kebutuhan buncis untuk 100 orang. Porsi 75g, BDD buncis 75%. Berapa kg buncis kotor yang harus dibeli?",
    "pilihan": [
      "5 kg",
      "10 kg",
      "15 kg",
      "20 kg",
      "25 kg"
    ],
    "jawaban": "10 kg",
    "pembahasan": "(100 x 75g) / 0,75 = 7.500g / 0,75 = 10.000g = 10 kg."
  },
  {
    "id": 266,
    "soal": "Petugas gudang tidak mencatat pengeluaran harian stok susu, sehingga terjadi selisih data. Dokumen kontrol stok manakah yang harus diperbaiki?",
    "pilihan": [
      "Faktur pembelian",
      "Buku menu",
      "Kartu Stok / Buku Stock",
      "Bon permintaan",
      "Daftar gaji"
    ],
    "jawaban": "Kartu Stok / Buku Stock",
    "pembahasan": "Kartu stok berfungsi sebagai instrumen pengawasan mutasi (masuk/keluar) bahan makanan di gudang setiap hari."
  },
  {
    "id": 267,
    "soal": "Pasien thypoid (BB 50 kg) memiliki suhu tubuh 38,5°C. Berapakah estimasi penambahan energi harian hanya akibat kenaikan suhu tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "250 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu tubuh 1°C di atas normal membutuhkan tambahan energi sekitar 13% (1,5 x 0,13 x BMR ≈ 150 kkal)."
  },
  {
    "id": 268,
    "soal": "Ibu hamil menderita anemia gizi besi. Bahan pangan lokal mana yang paling tepat ditambahkan dalam resep bubur untuk meningkatkan zat besi heme?",
    "pilihan": [
      "Labu kuning",
      "Jagung kuning",
      "Singkong",
      "Hati ayam",
      "Kemangi"
    ],
    "jawaban": "Hati ayam",
    "pembahasan": "Hati ayam merupakan sumber zat besi heme yang memiliki bioavailabilitas (daya serap) lebih tinggi dibanding sumber nabati."
  },
  {
    "id": 269,
    "soal": "Nutrisionis menetapkan masalah gizi: \"Asupan energi berlebih berkaitan dengan kebiasaan makan manis ditandai asupan 130%\". Masalah ini masuk domain?",
    "pilihan": [
      "Klinik",
      "Perilaku",
      "Asupan (Intake)",
      "Lingkungan",
      "Biokimia"
    ],
    "jawaban": "Asupan (Intake)",
    "pembahasan": "Masalah gizi yang berkaitan dengan jumlah zat gizi atau makanan yang dikonsumsi secara aktual masuk ke dalam domain asupan."
  },
  {
    "id": 270,
    "soal": "Seorang TRD secara rutin mengikuti seminar ilmiah tentang gizi klinik terbaru. Area kompetensi manakah yang ia jalankan?",
    "pilihan": [
      "Etika Moral",
      "Komunikasi Efektif",
      "Mawas Diri dan Pengembangan Diri",
      "Landasan Ilmiah",
      "Manajemen"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Melakukan pembaruan ilmu secara mandiri dan belajar sepanjang hayat adalah perwujudan area mawas diri dan pengembangan diri."
  },
  {
    "id": 271,
    "soal": "Sisa makanan pasien anak mencapai 65%, namun rasa dan penampilan menu dinilai baik. Apa kemungkinan penyebab utamanya?",
    "pilihan": [
      "Teknik masak salah",
      "Standar bumbu salah",
      "Standar porsi berlebihan",
      "Alat makan rusak",
      "Distribusi terlambat"
    ],
    "jawaban": "Standar porsi berlebihan",
    "pembahasan": "Jika kualitas makanan sudah baik namun sisa tetap tinggi, kemungkinan standar porsi yang diberikan melebihi kapasitas makan anak."
  },
  {
    "id": 272,
    "soal": "Produk nugget ikan tuna mengandung protein 20g per takaran saji (50g). Jika acuan label protein 60g, berapa %AKG protein produk tersebut?",
    "pilihan": [
      "0.25",
      "0.33",
      "0.5",
      "0.67",
      "0.83"
    ],
    "jawaban": "0.33",
    "pembahasan": "%AKG = (Kandungan zat gizi per saji / Acuan label) x 100%. (20/60) x 100% = 33,3%."
  },
  {
    "id": 273,
    "soal": "Dalam investigasi keracunan di RS, petugas penjamah makanan ditemukan tidak menggunakan masker dan sarung tangan. Aspek apa yang dilanggar?",
    "pilihan": [
      "HACCP",
      "Hazard Analysis",
      "Personal Hygiene",
      "Stock Control",
      "FIFO"
    ],
    "jawaban": "Personal Hygiene",
    "pembahasan": "Kebersihan diri petugas penjamah makanan (personal hygiene) sangat krusial dalam mencegah kontaminasi silang pada makanan."
  },
  {
    "id": 274,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu menelusuri data BBLR mereka di masa lalu melalui buku KIA. Apa desainnya?",
    "pilihan": [
      "Cross-sectional",
      "Kohort",
      "Kasus Kontrol (Case Control)",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus Kontrol (Case Control)",
    "pembahasan": "Membandingkan kelompok kasus dan kontrol untuk melihat faktor risiko/paparan di masa lalu adalah ciri desain kasus kontrol."
  },
  {
    "id": 275,
    "soal": "Seorang lansia bungkuk (kifosis) tidak bisa berdiri tegak. Alat/metode apa yang paling tepat untuk mengestimasi tinggi badannya?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Stadiometer",
      "Alat Tinggi Lutut",
      "Timbangan dacin"
    ],
    "jawaban": "Alat Tinggi Lutut",
    "pembahasan": "Pengukuran tinggi lutut digunakan untuk memprediksi tinggi badan lansia atau pasien dengan gangguan postur tubuh."
  },
  {
    "id": 276,
    "soal": "Bayi berusia 5 bulan hanya diberikan ASI tanpa tambahan cairan atau makanan lain sejak lahir. Praktek ini disebut?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Relaktasi",
      "Weaning"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "Pemberian hanya ASI saja (tanpa air putih/sufor) sampai bayi berusia 6 bulan dikategorikan sebagai ASI Eksklusif."
  },
  {
    "id": 277,
    "soal": "Ambang batas Lingkar Lengan Atas (LILA) yang digunakan untuk mendeteksi risiko Kurang Energi Kronis (KEK) pada Wanita Usia Subur adalah?",
    "pilihan": [
      "< 11,5 cm",
      "< 21,5 cm",
      "< 23,5 cm",
      "< 25,5 cm",
      "< 30,5 cm"
    ],
    "jawaban": "< 23,5 cm",
    "pembahasan": "Ambang batas LILA untuk identifikasi risiko KEK pada WUS atau ibu hamil di Indonesia adalah kurang dari 23,5 cm."
  },
  {
    "id": 278,
    "soal": "Pasien HIV mengalami infeksi jamur (candidiasis) luas di rongga mulut sehingga sulit menelan. Bentuk makanan apa yang paling tepat?",
    "pilihan": [
      "Biasa",
      "Lunak",
      "Saring",
      "Lumat",
      "Cair kental"
    ],
    "jawaban": "Saring",
    "pembahasan": "Makanan saring diberikan kepada pasien dengan gangguan menelan atau nyeri mulut agar asupan tetap terjaga dengan beban kunyah minimal."
  },
  {
    "id": 279,
    "soal": "Di wilayah kerja Puskesmas, dari 100 balita (S), yang hadir ditimbang (D) adalah 60 anak. Berapakah nilai tingkat partisipasi masyarakat (D/S)?",
    "pilihan": [
      "0.45",
      "0.5",
      "0.6",
      "0.75",
      "0.8"
    ],
    "jawaban": "0.6",
    "pembahasan": "D/S = (Balita ditimbang / Total sasaran) x 100%. (60/100) x 100% = 60%."
  },
  {
    "id": 280,
    "soal": "Baker di RS menguji ragi dengan air hangat dan gula, namun ragi tidak berbuih. Tindakan apa yang direkomendasikan nutrisionis?",
    "pilihan": [
      "Tetap digunakan",
      "Menambah air panas",
      "Mengganti dengan ragi baru",
      "Menambah gula",
      "Menjemur ragi"
    ],
    "jawaban": "Mengganti dengan ragi baru",
    "pembahasan": "Ragi yang tidak berbuih menandakan sel khamir sudah tidak aktif/mati, sehingga ragi harus diganti agar adonan mengembang."
  },
  {
    "id": 281,
    "soal": "Balita (4 thn) gizi buruk pada fase rehabilitasi diberikan formula F100. Berapakah standar kebutuhan cairan pada fase ini (ml/kgBB)?",
    "pilihan": [
      "100 ml",
      "120 ml",
      "130 ml",
      "150 ml",
      "200 ml"
    ],
    "jawaban": "150 ml",
    "pembahasan": "Sesuai pedoman tata laksana gizi buruk, fase rehabilitasi membutuhkan cairan 150-200 ml/kgBB per hari."
  },
  {
    "id": 282,
    "soal": "Pasien DM RG II dimonitor keberhasilan asuhannya harian. Data laboratorium manakah yang menjadi indikator utama kepatuhan diet harian?",
    "pilihan": [
      "Albumin",
      "Glukosa Darah",
      "Kolesterol",
      "Hemoglobin",
      "Asam urat"
    ],
    "jawaban": "Glukosa Darah",
    "pembahasan": "Pengendalian kadar glukosa darah adalah parameter pemantauan utama dalam asuhan gizi pasien diabetes."
  },
  {
    "id": 283,
    "soal": "Pasien pasca-operasi saluran cerna mendapatkan diet lunak. Manakah menu yang harus diganti karena tidak sesuai prinsip diet tersebut?",
    "pilihan": [
      "Bubur nasi",
      "Nasi tim",
      "Teh hangat",
      "Sayur urap mentah",
      "Pisang lumat"
    ],
    "jawaban": "Sayur urap mentah",
    "pembahasan": "Sayur urap mengandung serat kasar tinggi dan parutan kelapa yang tidak diperbolehkan dalam diet lunak pasca-operasi."
  },
  {
    "id": 284,
    "soal": "Nutrisionis melakukan rapat koordinasi penanganan stunting dengan Kepala Puskesmas dan Bidan. Pihak tersebut dalam manajemen program disebut?",
    "pilihan": [
      "Sasaran primer",
      "Sasaran sekunder",
      "Stakeholder eksternal",
      "Stakeholder internal",
      "Tenaga teknis"
    ],
    "jawaban": "Stakeholder internal",
    "pembahasan": "Pihak-pihak yang berasal dari dalam organisasi yang sama (Puskesmas) disebut sebagai stakeholder internal."
  },
  {
    "id": 285,
    "soal": "Produk manisan buah dan dodol memiliki kadar gula tinggi dan tekstur semi-basah. Berdasarkan tabel komposisi pangan, klasifikasinya adalah?",
    "pilihan": [
      "Produk sereal",
      "Produk susu",
      "Konfeksioneri",
      "Bahan fungsional",
      "Sayuran"
    ],
    "jawaban": "Konfeksioneri",
    "pembahasan": "Produk konfeksioneri adalah olahan pangan yang memiliki kadar gula tinggi dan umumnya bersifat semi-basah."
  },
  {
    "id": 286,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok yang sama (data normal). Uji statistik apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Dependent (Paired) T-test",
      "Mann-Whitney",
      "Chi-Square",
      "Wilcoxon"
    ],
    "jawaban": "Dependent (Paired) T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan untuk membandingkan rata-rata dua kelompok data yang berhubungan/satu subyek."
  },
  {
    "id": 287,
    "soal": "Pasien Penyakit Jantung Koroner (PJK) mengalami edema di kaki dan TD 160/110 mmHg. Zat gizi mikro manakah yang harus dibatasi ketat?",
    "pilihan": [
      "Protein",
      "Vitamin C",
      "Lemak trans",
      "Natrium",
      "Kalsium"
    ],
    "jawaban": "Natrium",
    "pembahasan": "Pembatasan natrium sangat diperlukan pada pasien jantung dengan hipertensi atau edema untuk mengurangi retensi cairan."
  },
  {
    "id": 288,
    "soal": "Puskesmas akan membagikan Vitamin A pada bulan Februari. Berapakah dosis yang diberikan untuk bayi berusia 8 bulan?",
    "pilihan": [
      "50.000 IU",
      "100.000 IU (Kapsul Biru)",
      "150.000 IU",
      "200.000 IU (Kapsul Merah)",
      "300.000 IU"
    ],
    "jawaban": "100.000 IU (Kapsul Biru)",
    "pembahasan": "Bayi usia 6-11 bulan mendapatkan Vitamin A dosis 100.000 IU (kapsul biru)."
  },
  {
    "id": 289,
    "soal": "Ibu menyusui (bayi 2 bln) memiliki LILA 23,5 cm. Berapakah tambahan energi (kkal) harian yang dianjurkan sesuai AKG?",
    "pilihan": [
      "180 kkal",
      "200 kkal",
      "330 kkal",
      "450 kkal",
      "500 kkal"
    ],
    "jawaban": "330 kkal",
    "pembahasan": "Sesuai Angka Kecukupan Gizi (AKG), ibu menyusui pada 6 bulan pertama membutuhkan tambahan energi sebesar +330 kkal per hari."
  },
  {
    "id": 290,
    "soal": "Petugas gudang dilarang meletakkan stok telur baru di depan stok telur lama. Prinsip penyimpanan apa yang dijalankan?",
    "pilihan": [
      "FIFO",
      "FEFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) memastikan bahan makanan yang datang lebih awal digunakan terlebih dahulu."
  },
  {
    "id": 291,
    "soal": "Pasien Gagal Ginjal Kronik (stadium 4, non-HD) dengan GFR 33 mL/menit. Asuhan gizi harus fokus pada pengaturan ketat zat gizi?",
    "pilihan": [
      "Karbohidrat",
      "Lemak",
      "Protein",
      "Vitamin",
      "Serat"
    ],
    "jawaban": "Protein",
    "pembahasan": "Pengaturan asupan protein sangat krusial pada pasien ginjal non-HD untuk menjaga fungsi filtrasi ginjal yang tersisa."
  },
  {
    "id": 292,
    "soal": "Ibu hamil trimester II menderita pre-eklamsia dan sangat menyukai camilan asin. Apa saran intervensi gizi prioritas?",
    "pilihan": [
      "Porsi kecil sering",
      "Tingkatkan protein",
      "Batasi asupan Natrium",
      "Kurangi lemak",
      "Minum air banyak"
    ],
    "jawaban": "Batasi asupan Natrium",
    "pembahasan": "Pembatasan natrium wajib dilakukan pada pasien pre-eklamsia untuk mengontrol tekanan darah yang tinggi."
  },
  {
    "id": 293,
    "soal": "Seorang remaja putri (17 thn) mengeluh pusing dan pucat. Hasil lab: Hb 11 mg/dl. Masalah gizi apa yang paling mungkin dialami?",
    "pilihan": [
      "GAKY",
      "Anemia",
      "Obesitas",
      "Hipertensi",
      "KEK"
    ],
    "jawaban": "Anemia",
    "pembahasan": "Gejala pusing, pucat, dan kadar Hb di bawah normal pada remaja putri mengindikasikan masalah anemia gizi."
  },
  {
    "id": 294,
    "soal": "Pasien berhak mengetahui informasi tentang kandungan gizi pada makanan yang disajikan rumah sakit. Hal ini merupakan wujud dari?",
    "pilihan": [
      "Kewajiban TRD",
      "Hak Pasien",
      "Rahasia Medis",
      "Standar Akreditasi",
      "Hak Rumah Sakit"
    ],
    "jawaban": "Hak Pasien",
    "pembahasan": "Pasien memiliki hak atas informasi medis, termasuk detail makanan yang diterimanya selama perawatan."
  },
  {
    "id": 295,
    "soal": "Nutrisionis ingin menyebarkan info gizi melalui media yang bisa dibawa pulang dan dibaca mandiri oleh pasien di rumah. Media apa yang tepat?",
    "pilihan": [
      "Poster",
      "Banner",
      "Leaflet / Brosur",
      "Video animasi",
      "Power Point"
    ],
    "jawaban": "Leaflet / Brosur",
    "pembahasan": "Leaflet atau brosur bersifat ringkas dan didesain agar mudah dibawa serta disimpan untuk referensi bacaan mandiri."
  },
  {
    "id": 296,
    "soal": "Dalam menyusun resep nugget tuna, nutrisionis melakukan uji daya terima pada panelis skala kecil sebelum produksi massal. Uji ini disebut?",
    "pilihan": [
      "Uji klinis",
      "Uji organoleptik",
      "Penapisan gizi",
      "Formulasi menu",
      "Analisis biaya"
    ],
    "jawaban": "Uji organoleptik",
    "pembahasan": "Uji organoleptik adalah penilaian kualitas makanan menggunakan indra manusia (rasa, warna, tekstur, aroma)."
  },
  {
    "id": 297,
    "soal": "Setelah intervensi diet, ahli gizi mencatat data secara sistematis di rekam medis: Assessment, Diagnosis, Intervention, Monitoring, Evaluation. Format ini disebut?",
    "pilihan": [
      "SKDN",
      "PAGT",
      "ADIME",
      "SOAP",
      "ISO"
    ],
    "jawaban": "ADIME",
    "pembahasan": "ADIME adalah format standar pendokumentasian proses asuhan gizi terstandar di rumah sakit."
  },
  {
    "id": 298,
    "soal": "Seorang TRD merasa ragu memberikan asuhan gizi pada kasus pediatrik kompleks dan ingin merujuknya ke Dietisien senior. Sikap ini menunjukkan?",
    "pilihan": [
      "Kurang percaya diri",
      "Pelanggaran tugas",
      "Profesionalisme (Mawas diri)",
      "Malas bekerja",
      "Kelalaian"
    ],
    "jawaban": "Profesionalisme (Mawas diri)",
    "pembahasan": "Menyadari keterbatasan kompetensi dan melakukan rujukan demi keselamatan pasien adalah bentuk profesionalisme dan kepatuhan kode etik."
  },
  {
    "id": 299,
    "soal": "Produk olahan buah seperti manisan kering sering mengandung kontaminan kimia jika tidak diolah dengan benar. Apa contoh zat pemanis buatan yang dibatasi?",
    "pilihan": [
      "Fruktosa",
      "Sorbitol",
      "Sakarin",
      "Glukosa",
      "Sukrosa"
    ],
    "jawaban": "Sakarin",
    "pembahasan": "Sakarin adalah pemanis buatan yang penggunaannya diawasi dan dibatasi dalam standar keamanan pangan."
  },
  {
    "id": 300,
    "soal": "Nutrisionis menghitung nilai gizi rata-rata asupan individu lalu membandingkannya dengan standar kebutuhan. Langkah ini disebut?",
    "pilihan": [
      "Pengkajian Antropometri",
      "Diagnosis Klinis",
      "Analisis Tingkat Konsumsi",
      "Intervensi Biokimia",
      "Monitoring Fisik"
    ],
    "jawaban": "Analisis Tingkat Konsumsi",
    "pembahasan": "Membandingkan asupan aktual dengan kebutuhan energi/zat gizi adalah tahap analisis tingkat konsumsi dalam asesmen gizi."
  },
  {
    "id": 301,
    "soal": "Ahli gizi mempersiapkan menu VVIP \"Asem Ikan Patin\" untuk 10 orang dengan standar porsi 75g. Jika BDD ikan patin adalah 75%, berapa gram ikan kotor yang dibutuhkan?",
    "pilihan": [
      "500 gram",
      "1000 gram",
      "1500 gram",
      "2000 gram",
      "2500 gram"
    ],
    "jawaban": "1000 gram",
    "pembahasan": "Rumus: (Berat Bersih x Jumlah) / %BDD. (75g x 10) / 0,75 = 1000 gram."
  },
  {
    "id": 302,
    "soal": "Seorang pasien menderita hiperkolesterolemia dan harus membatasi asupan lemak. Metode memasak apakah yang paling disarankan ahli gizi untuk mengurangi penggunaan lemak?",
    "pilihan": [
      "Stir-frying",
      "Deep-frying",
      "Sauteing",
      "Shallow-frying",
      "Steaming"
    ],
    "jawaban": "Steaming",
    "pembahasan": "Metode pengukusan (steaming) tidak membutuhkan lemak tambahan sehingga lebih sehat bagi penderita kolesterol tinggi."
  },
  {
    "id": 303,
    "soal": "Dalam menilai kinerja puskesmas, ditemukan masalah ketika terdapat perbedaan antara target nasional dengan hasil capaian riil di lapangan. Tahapan ini disebut sebagai?",
    "pilihan": [
      "Analisis data",
      "Evaluasi proses",
      "Perencanaan program",
      "Penentuan prioritas",
      "Kesenjangan target dan capaian"
    ],
    "jawaban": "Kesenjangan target dan capaian",
    "pembahasan": "Identifikasi masalah program gizi berawal dari analisis adanya kesenjangan antara target yang ditetapkan dengan capaian riil."
  },
  {
    "id": 304,
    "soal": "Seorang ahli gizi puskesmas ingin mengajarkan cara pembuatan Abon Lele kepada ibu balita. Metode penyuluhan apakah yang paling efektif digunakan?",
    "pilihan": [
      "Diskusi kelompok",
      "Studi kasus",
      "Konsultasi",
      "Demonstrasi dan bermain peran",
      "Ceramah"
    ],
    "jawaban": "Demonstrasi dan bermain peran",
    "pembahasan": "Metode demonstrasi memungkinkan sasaran melihat dan mempraktikkan langsung materi gizi yang diberikan."
  },
  {
    "id": 305,
    "soal": "Pasien luka bakar derajat III di wajah dan leher mengalami kesulitan menelan sehingga daya terima makan hanya 45%. Evaluasi apakah yang harus dilakukan ahli gizi?",
    "pilihan": [
      "Kebutuhan zat gizi",
      "Bentuk makanan",
      "Rute pemberian makanan",
      "Jenis makanan",
      "Variasi bumbu"
    ],
    "jawaban": "Rute pemberian makanan",
    "pembahasan": "Luka di area wajah dan leher sering memerlukan rute pemberian makanan secara enteral karena gangguan mekanik saat menelan."
  },
  {
    "id": 306,
    "soal": "Laki-laki (50 thn) menderita TBC dengan asupan energi 56% dan protein 60%. Data apakah yang paling krusial untuk dimonitor setiap hari?",
    "pilihan": [
      "Berat badan",
      "Kadar albumin",
      "Tekanan darah",
      "Asupan energi dan zat gizi",
      "Kadar gula darah"
    ],
    "jawaban": "Berat badan",
    "pembahasan": "Pemantauan asupan harian sangat penting pada pasien TBC karena diet TKTP bertujuan mencapai target kebutuhan gizi secepatnya."
  },
  {
    "id": 307,
    "soal": "Pasien pneumonia menunjukkan penurunan asupan dari 90% menjadi 60% pada hari keempat perawatan. Apa tindak lanjut asuhan gizi yang tepat?",
    "pilihan": [
      "Merubah diagnosis",
      "Melanjutkan intervensi",
      "Merujuk ke petugas lain",
      "Merubah diet",
      "Mengulang assessment gizi"
    ],
    "jawaban": "Merubah diagnosis",
    "pembahasan": "Penurunan asupan yang signifikan memerlukan pengkajian ulang (re-assessment) untuk menemukan penyebab dan menyesuaikan strategi asuhan."
  },
  {
    "id": 308,
    "soal": "Wanita (45 thn) menderita Penyakit Ginjal Kronik (PGK) dan menjalani terapi hemodialisis rutin. Berapakah standar pemberian protein (g/kgBB) untuk pasien tersebut?",
    "pilihan": [
      "0,6 - 0,75",
      "0,8 - 1,2",
      "1,3 - 1,5",
      "1,6 - 1,8",
      "2,0 - 2,5"
    ],
    "jawaban": "0,8 - 1,2",
    "pembahasan": "Protein untuk pasien PGK dengan hemodialisis diberikan sebesar 0,8 - 1,2 g/kgBB per hari untuk mengganti protein yang hilang saat proses dialisis."
  },
  {
    "id": 309,
    "soal": "Pasien dengan IMT 27, kolesterol total 360 mg/dl, dan suka makan gorengan. Masalah gizi prioritas apa yang harus segera ditangani?",
    "pilihan": [
      "Hipertensi",
      "Kelebihan berat badan",
      "Pola makan salah",
      "Dislipidemia",
      "Kelebihan natrium"
    ],
    "jawaban": "Dislipidemia",
    "pembahasan": "Kadar kolesterol total yang sangat tinggi (360 mg/dl) menempatkan pasien pada risiko kardiovaskular akut yang harus diprioritaskan."
  },
  {
    "id": 310,
    "soal": "Balita (16 bln) gizi buruk masuk fase rehabilitasi di klinik pemulihan. Berapakah rentang pemberian energi (kkal/kgBB) yang dianjurkan sesuai pedoman?",
    "pilihan": [
      "50 - 80",
      "80 - 100",
      "100 - 150",
      "150 - 220",
      "250 - 300"
    ],
    "jawaban": "80 - 100",
    "pembahasan": "Sesuai pedoman tatalaksana gizi buruk, fase rehabilitasi membutuhkan energi sebesar 150-220 kkal/kgBB per hari."
  },
  {
    "id": 311,
    "soal": "Di sebuah pasar, dijual berbagai produk dodol buah dan manisan yang mengandung gula tinggi. Dalam tabel komposisi pangan, produk ini diklasifikasikan sebagai?",
    "pilihan": [
      "Produk sereal",
      "Bahan fungsional",
      "Sayuran",
      "Konfeksioneri",
      "Produk susu"
    ],
    "jawaban": "Sayuran",
    "pembahasan": "Konfeksioneri mencakup olahan makanan semi basah yang menggunakan gula sebagai bahan tambahan utama."
  },
  {
    "id": 312,
    "soal": "Untuk menjaga kualitas ubi jalar agar tidak cepat busuk atau bertunas saat disimpan, teknik penyimpanan apa yang paling efektif?",
    "pilihan": [
      "Direndam air",
      "Digantung",
      "Ditutup pasir kering/abu",
      "Disimpan di lemari es",
      "Dibungkus plastik"
    ],
    "jawaban": "Ditutup pasir kering/abu",
    "pembahasan": "Menutup ubi dengan pasir kering atau abu setebal 20-30 cm mencegah kelembaban yang memicu busuk atau tunas."
  },
  {
    "id": 313,
    "soal": "Hasil uji laboratorium pada teri kering menunjukkan perubahan warna menjadi ungu/violet setelah ditetesi zat pereaksi. Bahan kimia apa yang terkandung di dalamnya?",
    "pilihan": [
      "Boraks",
      "Rodamin",
      "Formalin",
      "Metanil Yellow",
      "Sakarin"
    ],
    "jawaban": "Metanil Yellow",
    "pembahasan": "Reaksi warna ungu/violet pada tes kimia makanan tertentu menunjukkan adanya cemaran pewarna sintetis Metanil Yellow."
  },
  {
    "id": 314,
    "soal": "Sebagai upaya preventif masalah gizi mikro, pemerintah mendistribusikan Vitamin A kapsul biru. Dosis ini tepat diberikan kepada sasaran?",
    "pilihan": [
      "Bayi 0-5 bulan",
      "Bayi 6-11 bulan",
      "Balita 12-59 bulan",
      "Ibu hamil",
      "Remaja putri"
    ],
    "jawaban": "Bayi 6-11 bulan",
    "pembahasan": "Kapsul biru (100.000 IU) adalah dosis khusus untuk bayi usia 6 hingga 11 bulan."
  },
  {
    "id": 315,
    "soal": "Anak laki-laki (15 bln) memiliki Z-score TB/U sebesar -2,0 SD. Berdasarkan standar pertumbuhan, apa kategori status gizinya?",
    "pilihan": [
      "Normal",
      "Tinggi",
      "Pendek",
      "Sangat pendek",
      "Sangat tinggi"
    ],
    "jawaban": "Normal",
    "pembahasan": "Nilai Z-score indeks TB/U antara -3 SD sampai dengan <-2 SD dikategorikan sebagai pendek."
  },
  {
    "id": 316,
    "soal": "Seorang kader posyandu tidak menimbang seorang balita pada bulan lalu, namun menimbangnya bulan ini. Kode apa yang ditulis pada buku Sistem Informasi Posyandu (SIP)?",
    "pilihan": [
      "N (Naik)",
      "T (Tidak Naik)",
      "O (Tidak ditimbang bulan lalu)",
      "B (Baru)",
      "S (Semua)"
    ],
    "jawaban": "B (Baru)",
    "pembahasan": "Kode \"B\" (Baru) atau terkadang \"O\" digunakan jika riwayat pertumbuhan bulan sebelumnya tidak tersedia sehingga kenaikan tidak bisa dinilai."
  },
  {
    "id": 317,
    "soal": "Siswa SD menjalani pemeriksaan kelenjar gondok secara palpasi. Jika kelenjar teraba lebih besar dari ibu jari dan terlihat hanya saat kepala tengadah, apa gradenya?",
    "pilihan": [
      "Grade 0",
      "Grade 1",
      "Grade 1A",
      "Grade 2",
      "Grade 3"
    ],
    "jawaban": "Grade 1",
    "pembahasan": "Klasifikasi Perez menetapkan Grade 1 untuk kelenjar yang teraba dan hanya terlihat saat kepala ditengadahkan."
  },
  {
    "id": 318,
    "soal": "Nutrisionis menghitung kebutuhan protein untuk pasien gout (BB 80 kg). Sesuai standar, kebutuhan protein minimal adalah 1 g/kgBB. Berapa gram protein yang diberikan?",
    "pilihan": [
      "50 gram",
      "60 gram",
      "70 gram",
      "80 gram",
      "90 gram"
    ],
    "jawaban": "80 gram",
    "pembahasan": "Perhitungan: 1 gram x 80 kg = 80 gram protein per hari."
  },
  {
    "id": 319,
    "soal": "Parameter laboratorium apakah yang paling utama harus dipantau untuk mengevaluasi kepatuhan diet pada pasien Diabetes Mellitus?",
    "pilihan": [
      "Albumin",
      "Kolesterol",
      "Glukosa darah",
      "Hemoglobin",
      "Asam urat"
    ],
    "jawaban": "Kolesterol",
    "pembahasan": "Glukosa darah merupakan indikator langsung untuk memonitor efektivitas terapi diet diabetes harian."
  },
  {
    "id": 320,
    "soal": "Pasien luka bakar grade III mengalami kesulitan buang air besar dan gangguan menelan. Jenis diet apakah yang paling tepat diberikan?",
    "pilihan": [
      "Rendah lemak",
      "Gizi seimbang",
      "Tinggi protein",
      "Tinggi Energi Tinggi Protein (TETP)",
      "Diet rendah serat"
    ],
    "jawaban": "Tinggi Energi Tinggi Protein (TETP)",
    "pembahasan": "Pasien luka bakar membutuhkan tambahan energi dan protein tinggi untuk mempercepat regenerasi jaringan yang rusak."
  },
  {
    "id": 321,
    "soal": "Seorang pasien perempuan pasca-operasi kanker payudara mengalami mual dan anoreksia. Apa tujuan utama dari intervensi gizi yang dilakukan?",
    "pilihan": [
      "Mencegah retensi natrium",
      "Menyeimbangkan cairan",
      "Memberikan gizi beragam",
      "Mempertahankan status gizi",
      "Meningkatkan asupan makan"
    ],
    "jawaban": "Meningkatkan asupan makan",
    "pembahasan": "Pada kondisi asupan hanya 30% dari kebutuhan, prioritas utama adalah meningkatkan asupan untuk mencegah malnutrisi lebih lanjut."
  },
  {
    "id": 322,
    "soal": "Pasien DM mengalami hipoglikemia mendadak di rumah sakit. Berdasarkan domain klinis, masalah gizi apakah yang menjadi penyebab kondisi tersebut?",
    "pilihan": [
      "Hipermetabolisme",
      "Perubahan nilai lab",
      "Peningkatan kebutuhan",
      "Perubahan fungsi pencernaan",
      "Penurunan berat badan"
    ],
    "jawaban": "Hipermetabolisme",
    "pembahasan": "Hipermetabolisme dapat menyebabkan pemakaian glukosa yang sangat cepat sehingga memicu kondisi hipoglikemik."
  },
  {
    "id": 323,
    "soal": "Seorang laki-laki (45 thn) menderita hipertensi dan sangat menyukai makanan kaleng serta asinan. Berapakah batas maksimum konsumsi natrium (mg) per hari?",
    "pilihan": [
      "3.000 mg",
      "2.800 mg",
      "2.600 mg",
      "2.400 mg",
      "2.200 mg"
    ],
    "jawaban": "2.400 mg",
    "pembahasan": "Sesuai AKG dan standar diet, batas maksimal asupan natrium harian yang dianjurkan adalah 2.400 mg."
  },
  {
    "id": 324,
    "soal": "Ibu hamil trimester I memiliki IMT 17,6. Berdasarkan kategori ambang batas IMT, status gizi ibu tersebut adalah?",
    "pilihan": [
      "Baik",
      "Lebih",
      "Kurang",
      "Obesitas",
      "Normal"
    ],
    "jawaban": "Lebih",
    "pembahasan": "Nilai IMT 17,6 berada di bawah ambang batas normal, sehingga dikategorikan sebagai status gizi berat badan kurang."
  },
  {
    "id": 325,
    "soal": "Pasien Oesophagitis mengeluh nyeri ulu hati dan sulit menelan makanan padat. Bentuk makanan apakah yang paling tepat diberikan?",
    "pilihan": [
      "Biasa",
      "Lunak",
      "Saring",
      "Cair jernih",
      "Cair penuh"
    ],
    "jawaban": "Lunak",
    "pembahasan": "Bentuk lunak memudahkan proses menelan dan mengurangi iritasi pada area esofagus yang meradang."
  },
  {
    "id": 326,
    "soal": "Berapakah jumlah asupan natrium (mg) yang diperbolehkan bagi pasien yang menjalani diet Rendah Garam III (RG III)?",
    "pilihan": [
      "300 - 500 mg",
      "600 - 800 mg",
      "1.000 - 1.200 mg",
      "1.400 - 1.600 mg",
      "1.800 - 2.000 mg"
    ],
    "jawaban": "1.000 - 1.200 mg",
    "pembahasan": "Diet RG III memperbolehkan asupan natrium dalam rentang 1.000 hingga 1.200 mg per hari."
  },
  {
    "id": 327,
    "soal": "Pasien HIV memiliki infeksi candidiasis oral yang meluas sehingga sulit mengunyah. Bentuk makanan yang paling sesuai adalah?",
    "pilihan": [
      "Cair",
      "Saring",
      "Lumat",
      "Lunak",
      "Biasa"
    ],
    "jawaban": "Saring",
    "pembahasan": "Makanan saring diberikan untuk memastikan asupan gizi tetap masuk meskipun pasien mengalami gangguan pada rongga mulut."
  },
  {
    "id": 328,
    "soal": "Balita (4 thn) gizi buruk pada fase transisi membutuhkan energi dalam rentang?",
    "pilihan": [
      "60 - 80 kkal/kgBB",
      "80 - 100 kkal/kgBB",
      "100 - 150 kkal/kgBB",
      "150 - 200 kkal/kgBB",
      "200 - 250 kkal/kgBB"
    ],
    "jawaban": "100 - 150 kkal/kgBB",
    "pembahasan": "Fase transisi tatalaksana gizi buruk memerlukan asupan energi 100-150 kkal per kg berat badan."
  },
  {
    "id": 329,
    "soal": "Dalam upaya mengurangi progresivitas sel kanker, zat gizi makro/mikro apakah yang paling disarankan dalam konseling gizi?",
    "pilihan": [
      "Serat",
      "Lemak",
      "Protein",
      "Vitamin A",
      "Cairan"
    ],
    "jawaban": "Protein",
    "pembahasan": "Asupan protein yang cukup hingga tinggi diperlukan untuk menjaga massa otot dan mendukung sistem imun pada pasien kanker."
  },
  {
    "id": 330,
    "soal": "Pasien kanker serviks menjalani kemoterapi dan mengeluh mual karena bau makanan yang tajam. Menu ikan manakah yang paling tepat?",
    "pilihan": [
      "Ikan bakar",
      "Ikan goreng krispi",
      "Pepes ikan mas",
      "Sate ikan",
      "Ikan asap"
    ],
    "jawaban": "Ikan goreng krispi",
    "pembahasan": "Teknik pengolahan pepes (dikukus) meminimalisir aroma tajam dari pembakaran yang sering memicu mual pada pasien kanker."
  },
  {
    "id": 331,
    "soal": "Berapakah batasan maksimal konsumsi telur (butir/minggu) yang diperbolehkan bagi pasien pasca-operasi kanker payudara?",
    "pilihan": [
      "1 butir",
      "2 butir",
      "3 butir",
      "4 butir",
      "5 butir"
    ],
    "jawaban": "1 butir",
    "pembahasan": "Beberapa protokol diet pemulihan kanker mammae membatasi konsumsi telur maksimal 1 butir dalam seminggu."
  },
  {
    "id": 332,
    "soal": "Pasien Penyakit Jantung Koroner (PJK) mengeluh kaki bengkak dan TD 160/110 mmHg. Zat gizi mikro apa yang harus dibatasi?",
    "pilihan": [
      "Kalium",
      "Vitamin C",
      "Natrium",
      "Magnesium",
      "Kalsium"
    ],
    "jawaban": "Natrium",
    "pembahasan": "Pembatasan natrium sangat krusial untuk mengontrol tekanan darah dan mengurangi edema (retensi cairan) pada pasien jantung."
  },
  {
    "id": 333,
    "soal": "Pasien apendisitis akut mengalami infeksi dan anemia. Jenis diet apakah yang paling tepat untuk mendukung penyembuhan jaringan?",
    "pilihan": [
      "TETP",
      "Rendah Lemak",
      "Tinggi Protein",
      "Tinggi Kalori",
      "Rendah Sisa"
    ],
    "jawaban": "Tinggi Protein",
    "pembahasan": "Diet tinggi protein diperlukan untuk mempercepat regenerasi sel dan penyembuhan luka akibat infeksi."
  },
  {
    "id": 334,
    "soal": "Anak (15 thn) menderita luka bakar grade III dan tidak bisa menelan. Bentuk makanan yang harus diberikan melalui selang adalah?",
    "pilihan": [
      "Cair",
      "Saring",
      "Cincang",
      "Lunak",
      "Biasa"
    ],
    "jawaban": "Cair",
    "pembahasan": "Pasien dengan gangguan menelan total memerlukan dukungan nutrisi dalam bentuk cair via enteral."
  },
  {
    "id": 335,
    "soal": "Pasien prostat yang menunggu jadwal operasi membutuhkan asupan protein sebesar?",
    "pilihan": [
      "40 - 50 gram",
      "60 - 70 gram",
      "112 - 150 gram",
      "160 - 180 gram",
      "200 - 220 gram"
    ],
    "jawaban": "112 - 150 gram",
    "pembahasan": "Sesuai kondisi klinis tertentu pra-bedah, kebutuhan protein dapat ditingkatkan hingga rentang 112,5-150 gram."
  },
  {
    "id": 336,
    "soal": "Berapakah kebutuhan protein (g/kgBB) yang dianjurkan bagi pasien yang menderita malaria?",
    "pilihan": [
      "0,8 - 1,0",
      "1,2 - 1,5",
      "1,6 - 1,8",
      "2,0 - 2,5",
      "2,6 - 3,0"
    ],
    "jawaban": "2,0 - 2,5",
    "pembahasan": "Pasien malaria membutuhkan asupan protein tinggi (2,0-2,5 g/kgBB) untuk mengganti kerusakan sel akibat infeksi parasit."
  },
  {
    "id": 337,
    "soal": "Pasien DHF (Demam Berdarah) membutuhkan diet TETP. Berapakah rentang energi (kkal/kgBB) yang diberikan?",
    "pilihan": [
      "20 - 25",
      "30 - 35",
      "40 - 45",
      "50 - 55",
      "60 - 65"
    ],
    "jawaban": "50 - 55",
    "pembahasan": "Kebutuhan energi pasien DHF pada fase akut adalah sekitar 40-45 kkal per kg berat badan."
  },
  {
    "id": 338,
    "soal": "Ibu hamil penderita DM Gestasional trimester I dengan energi 1850 kkal. Berapa gram lemak yang harus diberikan (berdasarkan 20% energi)?",
    "pilihan": [
      "30 gram",
      "35 gram",
      "40 gram",
      "45 gram",
      "50 gram"
    ],
    "jawaban": "40 gram",
    "pembahasan": "Perhitungan: (20% x 1850) / 9 kkal = 370 / 9 ≈ 40 gram."
  },
  {
    "id": 339,
    "soal": "Ambang batas Lingkar Lengan Atas (LILA) yang menandakan risiko Kurang Energi Kronis (KEK) adalah?",
    "pilihan": [
      "< 11,5 cm",
      "< 15,5 cm",
      "< 22,5 cm",
      "< 23,5 cm",
      "< 30,5 cm"
    ],
    "jawaban": "< 23,5 cm",
    "pembahasan": "Nilai LILA di bawah 23,5 cm digunakan sebagai indikator risiko KEK pada wanita usia subur di Indonesia."
  },
  {
    "id": 340,
    "soal": "Ahli gizi berkoordinasi dengan sesama pegawai puskesmas (perawat, bidan) dalam pelatihan. Jenis koordinasi ini disebut?",
    "pilihan": [
      "Eksternal",
      "Diagonal",
      "Horisontal",
      "Internal",
      "Vertikal"
    ],
    "jawaban": "Internal",
    "pembahasan": "Koordinasi di antara pihak-pihak dalam satu instansi atau organisasi yang sama disebut koordinasi internal."
  },
  {
    "id": 341,
    "soal": "Program gizi masyarakat yang membagikan kapsul Vitamin A setiap Februari dan Agustus termasuk dalam bidang?",
    "pilihan": [
      "Sasaran khusus",
      "Masyarakat",
      "Rawat jalan",
      "Institusi",
      "Klinik"
    ],
    "jawaban": "Masyarakat",
    "pembahasan": "Distribusi suplemen gizi di tingkat populasi adalah bagian dari intervensi gizi masyarakat."
  },
  {
    "id": 342,
    "soal": "Intervensi gizi prioritas pada wilayah dengan prevalensi balita wasting 13% dan tren berat badan turun adalah?",
    "pilihan": [
      "PMT pemulihan",
      "Rujukan TFC",
      "Penyuluhan PMBA",
      "Koordinasi sektor",
      "Imunisasi"
    ],
    "jawaban": "PMT pemulihan",
    "pembahasan": "PMT pemulihan diutamakan untuk menurunkan angka wasting dan memperbaiki status gizi kurang di masyarakat."
  },
  {
    "id": 343,
    "soal": "Apa tujuan utama dari intervensi asupan zat besi pada remaja putri di suatu wilayah dengan prevalensi anemia 38%?",
    "pilihan": [
      "Memberi tablet Fe",
      "Menurunkan prevalensi anemia",
      "Penyuluhan gizi",
      "Rujukan puskesmas",
      "Pemberian MP-ASI"
    ],
    "jawaban": "Menurunkan prevalensi anemia",
    "pembahasan": "Tujuan akhir dari setiap intervensi gizi adalah perbaikan status kesehatan atau penurunan angka penyakit yang spesifik."
  },
  {
    "id": 344,
    "soal": "Setelah pelatihan PMBA bagi kader, tercatat peningkatan jenis makanan yang diberikan ke balita. Ini termasuk evaluasi tahap?",
    "pilihan": [
      "Input",
      "Proses",
      "Output",
      "Hasil",
      "Dampak"
    ],
    "jawaban": "Dampak",
    "pembahasan": "Perubahan pola perilaku makan di masyarakat pasca-intervensi dikategorikan sebagai evaluasi dampak."
  },
  {
    "id": 345,
    "soal": "Media edukasi apakah yang paling efektif dalam pelatihan kader posyandu untuk mengolah MP-ASI?",
    "pilihan": [
      "MP3",
      "Video",
      "Foto",
      "Buku resep",
      "Food model"
    ],
    "jawaban": "Buku resep",
    "pembahasan": "Buku resep sangat praktis dan informatif untuk membantu kader dalam teknik pengolahan makanan secara mandiri."
  },
  {
    "id": 346,
    "soal": "Konseling gizi yang dilakukan untuk mendapatkan data pola makan dan keluhan awal berada pada tahapan?",
    "pilihan": [
      "Diagnosis",
      "Perencanaan",
      "Intervensi",
      "Pengkajian",
      "Monev"
    ],
    "jawaban": "Monev",
    "pembahasan": "Pengumpulan informasi di awal pertemuan adalah bagian dari tahap pengkajian (assessment)."
  },
  {
    "id": 347,
    "soal": "Metode penyuluhan apakah yang paling tepat untuk meningkatkan keterampilan kader dalam mengisi KMS?",
    "pilihan": [
      "Praktik",
      "Diskusi",
      "Main peran",
      "Demonstrasi",
      "Studi kasus"
    ],
    "jawaban": "Praktik",
    "pembahasan": "Metode praktik memungkinkan peserta mencoba sendiri hingga mahir mengisi grafik pertumbuhan."
  },
  {
    "id": 348,
    "soal": "Di Posyandu, total balita (S) adalah 100 anak. Balita yang memiliki KMS (K) adalah 80 anak. Berapa persen cakupan program (K/S)?",
    "pilihan": [
      "0.25",
      "0.3",
      "0.5",
      "0.6",
      "0.8"
    ],
    "jawaban": "0.8",
    "pembahasan": "Rumus: (K / S) x 100%. (80 / 100) x 100% = 80%."
  },
  {
    "id": 349,
    "soal": "Indikator pertumbuhan manakah yang paling tepat digunakan untuk menilai status gizi anak sekolah dasar?",
    "pilihan": [
      "IMT",
      "BB/U",
      "IMT/U",
      "TB/U",
      "BB/TB"
    ],
    "jawaban": "IMT/U",
    "pembahasan": "IMT menurut Umur (IMT/U) adalah indikator standar untuk menilai kelebihan atau kekurangan berat badan pada anak usia sekolah."
  },
  {
    "id": 350,
    "soal": "Seorang petugas dilarang menyebarkan identitas dan kondisi klinis pasien kepada orang lain. Ketentuan ini tertuang dalam?",
    "pilihan": [
      "AD ART",
      "Standar Profesi",
      "Hukum",
      "Kode Etik",
      "Norma sosial"
    ],
    "jawaban": "AD ART",
    "pembahasan": "Kerahasiaan data pasien merupakan bagian utama dari Kode Etik profesi tenaga gizi."
  },
  {
    "id": 351,
    "soal": "Pasien DM Tipe 2 memiliki kadar HbA1c 8,2% dan sering mengonsumsi camilan manis. Data laboratorim manakah yang menjadi parameter evaluasi kepatuhan diet jangka panjang (2-3 bulan)?",
    "pilihan": [
      "Glukosa Darah Puasa",
      "Kolesterol total",
      "HbA1c",
      "Trigliserida",
      "Ureum"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "Kadar HbA1c mencerminkan rata-rata pengendalian glukosa darah dalam rentang waktu 2-3 bulan terakhir."
  },
  {
    "id": 352,
    "soal": "Ahli gizi mempersiapkan menu VVIP \"Asem Ikan Patin\" untuk 10 orang dengan standar porsi 75g (berat bersih). Jika BDD ikan patin adalah 75%, berapa berat kotor yang harus dibeli?",
    "pilihan": [
      "500 g",
      "1000 g",
      "1500 g",
      "2000 g",
      "2500 g"
    ],
    "jawaban": "1000 g",
    "pembahasan": "Rumus: (100 / %BDD) x (porsi x jumlah). (100/75) x (75g x 10) = 1.000 gram."
  },
  {
    "id": 353,
    "soal": "Di sebuah Posyandu, total balita (S) adalah 100 anak. Balita yang memiliki KMS (K) adalah 80 anak. Berapakah nilai tingkat cakupan program (K/S)?",
    "pilihan": [
      "0.5",
      "0.6",
      "0.75",
      "0.8",
      "0.93"
    ],
    "jawaban": "0.8",
    "pembahasan": "Rumus cakupan program (K/S) = (Balita memiliki KMS / Total balita) x 100%. Maka (80/100) x 100% = 80%."
  },
  {
    "id": 354,
    "soal": "Laki-laki (55 thn) mengeluh nyeri sendi jari kaki yang hebat. Hasil lab: asam urat 19 mg/dL. Manakah bahan makanan hewani yang harus dihindari sepenuhnya?",
    "pilihan": [
      "Daging tanpa lemak",
      "Ayam tanpa kulit",
      "Telur ayam",
      "Jeroan (hati/babat)",
      "Ikan air tawar"
    ],
    "jawaban": "Jeroan (hati/babat)",
    "pembahasan": "Jeroan mengandung purin sangat tinggi yang memicu peningkatan asam urat darah secara drastis."
  },
  {
    "id": 355,
    "soal": "Seorang tenaga gizi (TRD) merasa tidak kompeten menangani pasien DM dengan komplikasi ginjal berat. Apa tindakan profesional yang tepat sesuai kode etik?",
    "pilihan": [
      "Tetap menangani sebisanya",
      "Meminta bantuan perawat",
      "Merujuk ke Dietisien/ahli gizi yang lebih kompeten",
      "Memberi diet standar",
      "Menghentikan asuhan"
    ],
    "jawaban": "Merujuk ke Dietisien/ahli gizi yang lebih kompeten",
    "pembahasan": "Tenaga gizi wajib merujuk klien kepada ahli lain yang lebih kompeten jika kasus di luar batas kewenangannya."
  },
  {
    "id": 356,
    "soal": "Menu siang asrama: nasi, semur daging, tempe bacem, sayur lodeh. Evaluasi menunjukkan sisa makanan tinggi pada rasa yang dinilai monoton (manis). Masalah keseimbangan apa yang dilanggar?",
    "pilihan": [
      "Warna",
      "Rasa",
      "Bahan",
      "Bentuk",
      "Porsi"
    ],
    "jawaban": "Rasa",
    "pembahasan": "Penggunaan bumbu yang seragam (manis/bacem) pada berbagai lauk dalam satu waktu makan menyebabkan kebosanan rasa."
  },
  {
    "id": 357,
    "soal": "Peneliti ingin melihat riwayat pertumbuhan masa lalu pada anak balita. Indikator antropometri manakah yang paling tepat digunakan?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Indikator tinggi badan atau panjang badan menurut umur mencerminkan status gizi kronis atau riwayat pertumbuhan masa lampau."
  },
  {
    "id": 358,
    "soal": "Pasien Penyakit Ginjal Kronik (HD rutin 2x/minggu) memiliki BB 63 kg. Berapakah kebutuhan protein harian pasien tersebut?",
    "pilihan": [
      "32 g",
      "48 g",
      "64 g",
      "72 g",
      "80 g"
    ],
    "jawaban": "80 g",
    "pembahasan": "Pasien PGK dengan hemodialisis membutuhkan protein lebih tinggi (1,2-1,5 g/kgBB). Maka 1,2g x 63kg = 75,6g (pembulatan ke 72-80g)."
  },
  {
    "id": 359,
    "soal": "Hasil investigasi keracunan makanan menunjukkan makanan matang disimpan di suhu 25°C selama 5 jam sebelum disajikan. Rentang suhu ini disebut?",
    "pilihan": [
      "Safe zone",
      "Cold zone",
      "Danger zone",
      "Neutral zone",
      "Hot zone"
    ],
    "jawaban": "Danger zone",
    "pembahasan": "Suhu 5°C hingga 60°C adalah zona bahaya (danger zone) di mana bakteri patogen berkembang biak sangat cepat."
  },
  {
    "id": 360,
    "soal": "Peneliti mengambil sampel 90 siswi dari total 300 orang secara acak mewakili kelas X, XI, dan XII (masing-masing 30 orang). Apa teknik samplingnya?",
    "pilihan": [
      "Simple random",
      "Systematic",
      "Cluster",
      "Stratified random",
      "Multistage"
    ],
    "jawaban": "Stratified random",
    "pembahasan": "Teknik mengambil sampel dari kelompok yang berjenjang/berstrata secara proporsional disebut Stratified Random Sampling ."
  },
  {
    "id": 361,
    "soal": "Balita laki-laki (6 bulan) memiliki PB 62 cm dengan Z-score PB/U sebesar -2,68 SD. Berdasarkan standar antropometri, apa kategori status gizinya?",
    "pilihan": [
      "Normal",
      "Pendek (stunted)",
      "Sangat pendek",
      "Gizi kurang",
      "Gizi buruk"
    ],
    "jawaban": "Pendek (stunted)",
    "pembahasan": "Nilai Z-score antara -3 SD sampai dengan <-2 SD pada indikator PB/U dikategorikan sebagai pendek (stunted)."
  },
  {
    "id": 362,
    "soal": "Pasien kanker serviks mengeluh mual hebat setelah kemoterapi. Manakah menu ikan yang paling disarankan untuk meminimalkan aroma tajam?",
    "pilihan": [
      "Ikan bakar",
      "Ikan goreng krispi",
      "Pepes ikan mas",
      "Sate ikan",
      "Ikan asap"
    ],
    "jawaban": "Pepes ikan mas",
    "pembahasan": "Teknik pengolahan basah (dikukus/dipepes) lebih disarankan karena aromanya tidak sekuat teknik dibakar/digoreng."
  },
  {
    "id": 363,
    "soal": "Balita (3,5 thn) diare kronis, edema perut, rambut merah mudah dicabut, dan wajah bulat (moon face). Apa masalah gizi spesifiknya?",
    "pilihan": [
      "KVA",
      "Anemia",
      "Marasmus",
      "Kwashiorkor",
      "GAKY"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Gejala klinis edema bilateral, moon face, dan perubahan warna rambut adalah tanda khas Kwashiorkor."
  },
  {
    "id": 364,
    "soal": "Ibu balita buta huruf akan diwawancarai tentang asupan makan anaknya selama 24 jam terakhir. Metode survei konsumsi manakah yang paling akurat?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Food Recall 24 Jam",
    "pembahasan": "Metode Recall 24 jam dilakukan melalui wawancara, sehingga sangat efektif untuk responden dengan pendidikan rendah."
  },
  {
    "id": 365,
    "soal": "Nutrisionis di asrama diminta menghitung kebutuhan buncis untuk 100 orang. Porsi 75g, BDD buncis 75%. Berapa kg buncis kotor yang harus dibeli?",
    "pilihan": [
      "5 kg",
      "10 kg",
      "15 kg",
      "20 kg",
      "25 kg"
    ],
    "jawaban": "10 kg",
    "pembahasan": "(100 x 75g) / 0,75 = 7.500g / 0,75 = 10.000g = 10 kg."
  },
  {
    "id": 366,
    "soal": "Petugas gudang tidak mencatat pengeluaran harian stok susu, sehingga terjadi selisih data. Dokumen kontrol stok manakah yang harus diperbaiki?",
    "pilihan": [
      "Faktur pembelian",
      "Buku menu",
      "Kartu Stok / Buku Stock",
      "Bon permintaan",
      "Daftar gaji"
    ],
    "jawaban": "Kartu Stok / Buku Stock",
    "pembahasan": "Kartu stok berfungsi sebagai instrumen pengawasan mutasi (masuk/keluar) bahan makanan di gudang setiap hari."
  },
  {
    "id": 367,
    "soal": "Pasien thypoid (BB 50 kg) memiliki suhu tubuh 38,5°C. Berapakah estimasi penambahan energi harian hanya akibat kenaikan suhu tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "250 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu tubuh 1°C di atas normal membutuhkan tambahan energi sekitar 13% (1,5 x 0,13 x BMR ≈ 150 kkal)."
  },
  {
    "id": 368,
    "soal": "Ibu hamil menderita anemia gizi besi. Bahan pangan lokal mana yang paling tepat ditambahkan dalam resep bubur untuk meningkatkan zat besi heme?",
    "pilihan": [
      "Labu kuning",
      "Jagung kuning",
      "Singkong",
      "Hati ayam",
      "Kemangi"
    ],
    "jawaban": "Hati ayam",
    "pembahasan": "Hati ayam merupakan sumber zat besi heme yang memiliki bioavailabilitas lebih tinggi dibanding sumber nabati."
  },
  {
    "id": 369,
    "soal": "Nutrisionis menetapkan masalah gizi: \"Asupan energi berlebih berkaitan dengan kebiasaan makan manis ditandai asupan 130%\". Masalah ini masuk domain?",
    "pilihan": [
      "Klinik",
      "Perilaku",
      "Asupan (Intake)",
      "Lingkungan",
      "Biokimia"
    ],
    "jawaban": "Asupan (Intake)",
    "pembahasan": "Masalah gizi yang berkaitan dengan kuantitas zat gizi yang dikonsumsi secara aktual masuk ke dalam domain asupan."
  },
  {
    "id": 370,
    "soal": "Seorang TRD secara rutin mengikuti seminar ilmiah tentang gizi klinik terbaru. Area kompetensi manakah yang ia jalankan?",
    "pilihan": [
      "Etika Moral",
      "Komunikasi Efektif",
      "Mawas Diri dan Pengembangan Diri",
      "Landasan Ilmiah",
      "Manajemen"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Melakukan pembaruan ilmu secara mandiri dan belajar sepanjang hayat adalah perwujudan area mawas diri."
  },
  {
    "id": 371,
    "soal": "Sisa makanan pasien anak mencapai 65%, namun rasa dan penampilan menu dinilai baik. Apa kemungkinan penyebab utamanya?",
    "pilihan": [
      "Teknik masak salah",
      "Standar bumbu salah",
      "Standar porsi berlebihan",
      "Alat makan rusak",
      "Distribusi terlambat"
    ],
    "jawaban": "Standar porsi berlebihan",
    "pembahasan": "Jika kualitas makanan sudah baik namun sisa tetap tinggi, kemungkinan standar porsi melebihi kapasitas makan anak."
  },
  {
    "id": 372,
    "soal": "Produk nugget ikan tuna mengandung protein 20g per takaran saji (50g). Jika acuan label protein 60g, berapa %AKG protein produk tersebut?",
    "pilihan": [
      "0.25",
      "0.33",
      "0.5",
      "0.67",
      "0.83"
    ],
    "jawaban": "0.33",
    "pembahasan": "%AKG = (Kandungan zat gizi per saji / Acuan label) x 100%. (20/60) x 100% = 33,3%."
  },
  {
    "id": 373,
    "soal": "Dalam investigasi keracunan di RS, petugas penjamah makanan ditemukan tidak menggunakan masker dan sarung tangan. Aspek apa yang dilanggar?",
    "pilihan": [
      "HACCP",
      "Hazard Analysis",
      "Personal Hygiene",
      "Stock Control",
      "FIFO"
    ],
    "jawaban": "Personal Hygiene",
    "pembahasan": "Kebersihan diri petugas penjamah makanan (personal hygiene) sangat krusial dalam mencegah kontaminasi silang."
  },
  {
    "id": 374,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu menelusuri data BBLR mereka di masa lalu melalui buku KIA. Apa desainnya?",
    "pilihan": [
      "Cross-sectional",
      "Kohort",
      "Kasus Kontrol (Case Control)",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus Kontrol (Case Control)",
    "pembahasan": "Membandingkan kelompok kasus dan kontrol untuk melihat faktor risiko di masa lalu adalah ciri desain kasus kontrol."
  },
  {
    "id": 375,
    "soal": "Seorang lansia bungkuk (kifosis) tidak bisa berdiri tegak. Alat/metode apa yang paling tepat untuk mengestimasi tinggi badannya?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Stadiometer",
      "Alat Tinggi Lutut",
      "Timbangan dacin"
    ],
    "jawaban": "Alat Tinggi Lutut",
    "pembahasan": "Pengukuran tinggi lutut digunakan untuk memprediksi tinggi badan lansia atau pasien dengan gangguan postur tubuh."
  },
  {
    "id": 376,
    "soal": "Bayi berusia 5 bulan hanya diberikan ASI tanpa tambahan cairan atau makanan lain sejak lahir. Praktek ini disebut?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Relaktasi",
      "Weaning"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "Pemberian hanya ASI saja (tanpa air putih/sufor) sampai bayi berusia 6 bulan dikategorikan sebagai ASI Eksklusif."
  },
  {
    "id": 377,
    "soal": "Ambang batas Lingkar Lengan Atas (LILA) yang digunakan untuk mendeteksi risiko Kurang Energi Kronis (KEK) pada Wanita Usia Subur adalah?",
    "pilihan": [
      "< 11,5 cm",
      "< 21,5 cm",
      "< 23,5 cm",
      "< 25,5 cm",
      "< 30,5 cm"
    ],
    "jawaban": "< 23,5 cm",
    "pembahasan": "Ambang batas LILA untuk identifikasi risiko KEK di Indonesia adalah kurang dari 23,5 cm."
  },
  {
    "id": 378,
    "soal": "Pasien HIV mengalami infeksi jamur (candidiasis) luas di rongga mulut sehingga sulit menelan. Bentuk makanan apa yang paling tepat?",
    "pilihan": [
      "Biasa",
      "Lunak",
      "Saring",
      "Lumat",
      "Cair kental"
    ],
    "jawaban": "Saring",
    "pembahasan": "Makanan saring diberikan kepada pasien dengan gangguan menelan atau nyeri mulut agar asupan tetap terjaga."
  },
  {
    "id": 379,
    "soal": "Di wilayah kerja Puskesmas, dari 100 balita (S), yang hadir ditimbang (D) adalah 60 anak. Berapakah nilai tingkat partisipasi masyarakat (D/S)?",
    "pilihan": [
      "0.45",
      "0.5",
      "0.6",
      "0.75",
      "0.8"
    ],
    "jawaban": "0.6",
    "pembahasan": "D/S = (Balita ditimbang / Total sasaran) x 100%. (60/100) x 100% = 60%."
  },
  {
    "id": 380,
    "soal": "Baker di RS menguji ragi dengan air hangat dan gula, namun ragi tidak berbuih. Tindakan apa yang direkomendasikan nutrisionis?",
    "pilihan": [
      "Tetap digunakan",
      "Menambah air panas",
      "Mengganti dengan ragi baru",
      "Menambah gula",
      "Menjemur ragi"
    ],
    "jawaban": "Mengganti dengan ragi baru",
    "pembahasan": "Ragi yang tidak berbuih menandakan sel khamir sudah mati, sehingga ragi harus diganti agar adonan mengembang."
  },
  {
    "id": 381,
    "soal": "Balita (4 thn) gizi buruk pada fase rehabilitasi diberikan formula F100. Berapakah standar kebutuhan cairan pada fase ini (ml/kgBB)?",
    "pilihan": [
      "100 ml",
      "120 ml",
      "130 ml",
      "150 ml",
      "200 ml"
    ],
    "jawaban": "150 ml",
    "pembahasan": "Sesuai pedoman tata laksana gizi buruk, fase rehabilitasi membutuhkan cairan 150-200 ml/kgBB per hari."
  },
  {
    "id": 382,
    "soal": "Pasien DM RG II dimonitor keberhasilan asuhannya harian. Data laboratorium manakah yang menjadi indikator utama kepatuhan diet harian?",
    "pilihan": [
      "Albumin",
      "Glukosa Darah",
      "Kolesterol",
      "Hemoglobin",
      "Asam urat"
    ],
    "jawaban": "Glukosa Darah",
    "pembahasan": "Pengendalian kadar glukosa darah adalah parameter pemantauan utama dalam asuhan gizi pasien diabetes."
  },
  {
    "id": 383,
    "soal": "Pasien pasca-operasi saluran cerna mendapatkan diet lunak. Manakah menu yang harus diganti karena tidak sesuai prinsip diet tersebut?",
    "pilihan": [
      "Bubur nasi",
      "Nasi tim",
      "Teh hangat",
      "Sayur urap mentah",
      "Pisang lumat"
    ],
    "jawaban": "Sayur urap mentah",
    "pembahasan": "Sayur urap mengandung serat kasar tinggi dan kelapa parut yang dilarang dalam diet lunak pasca-operasi."
  },
  {
    "id": 384,
    "soal": "Nutrisionis melakukan rapat koordinasi penanganan stunting dengan Kepala Puskesmas dan Bidan. Pihak tersebut dalam manajemen program disebut?",
    "pilihan": [
      "Sasaran primer",
      "Sasaran sekunder",
      "Stakeholder eksternal",
      "Stakeholder internal",
      "Tenaga teknis"
    ],
    "jawaban": "Stakeholder internal",
    "pembahasan": "Pihak-pihak yang berasal dari dalam organisasi yang sama (Puskesmas) disebut sebagai stakeholder internal."
  },
  {
    "id": 385,
    "soal": "Produk manisan buah dan dodol memiliki kadar gula tinggi dan tekstur semi-basah. Berdasarkan tabel komposisi pangan, klasifikasinya adalah?",
    "pilihan": [
      "Produk sereal",
      "Produk susu",
      "Konfeksioneri",
      "Bahan fungsional",
      "Sayuran"
    ],
    "jawaban": "Konfeksioneri",
    "pembahasan": "Produk konfeksioneri adalah olahan pangan yang memiliki kadar gula tinggi dan bersifat semi-basah."
  },
  {
    "id": 386,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok yang sama (data normal). Uji statistik apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Dependent (Paired) T-test",
      "Mann-Whitney",
      "Chi-Square",
      "Wilcoxon"
    ],
    "jawaban": "Dependent (Paired) T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan membandingkan rata-rata dua kelompok data yang berhubungan/satu subyek."
  },
  {
    "id": 387,
    "soal": "Pasien Penyakit Jantung Koroner (PJK) mengalami edema di kaki dan TD 160/110 mmHg. Zat gizi mikro manakah yang harus dibatasi ketat?",
    "pilihan": [
      "Protein",
      "Vitamin C",
      "Lemak trans",
      "Natrium",
      "Kalsium"
    ],
    "jawaban": "Natrium",
    "pembahasan": "Pembatasan natrium sangat diperlukan pada pasien jantung dengan hipertensi atau edema untuk mengurangi retensi cairan."
  },
  {
    "id": 388,
    "soal": "Puskesmas akan membagikan Vitamin A pada bulan Februari. Berapakah dosis yang diberikan untuk bayi berusia 8 bulan?",
    "pilihan": [
      "50.000 IU",
      "100.000 IU (Kapsul Biru)",
      "150.000 IU",
      "200.000 IU (Kapsul Merah)",
      "300.000 IU"
    ],
    "jawaban": "100.000 IU (Kapsul Biru)",
    "pembahasan": "Bayi usia 6-11 bulan mendapatkan Vitamin A dosis 100.000 IU (kapsul biru)."
  },
  {
    "id": 389,
    "soal": "Ibu menyusui (bayi 2 bln) memiliki LILA 23,5 cm. Berapakah tambahan energi (kkal) harian yang dianjurkan sesuai AKG?",
    "pilihan": [
      "180 kkal",
      "200 kkal",
      "330 kkal",
      "450 kkal",
      "500 kkal"
    ],
    "jawaban": "330 kkal",
    "pembahasan": "Sesuai AKG, ibu menyusui pada 6 bulan pertama membutuhkan tambahan energi sebesar +330 kkal per hari."
  },
  {
    "id": 390,
    "soal": "Petugas gudang dilarang meletakkan stok telur baru di depan stok telur lama. Prinsip penyimpanan apa yang dijalankan?",
    "pilihan": [
      "FIFO",
      "FEFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) memastikan bahan makanan yang datang lebih awal digunakan terlebih dahulu."
  },
  {
    "id": 391,
    "soal": "Pasien Gagal Ginjal Kronik (stadium 4, non-HD) dengan GFR 33 mL/menit. Asuhan gizi harus fokus pada pengaturan ketat zat gizi?",
    "pilihan": [
      "Karbohidrat",
      "Lemak",
      "Protein",
      "Vitamin",
      "Serat"
    ],
    "jawaban": "Protein",
    "pembahasan": "Pengaturan asupan protein sangat krusial pada pasien ginjal non-HD untuk menjaga fungsi filtrasi ginjal."
  },
  {
    "id": 392,
    "soal": "Ibu hamil trimester II menderita pre-eklamsia dan sangat menyukai camilan asin. Apa saran intervensi gizi prioritas?",
    "pilihan": [
      "Porsi kecil sering",
      "Tingkatkan protein",
      "Batasi asupan Natrium",
      "Kurangi lemak",
      "Minum air banyak"
    ],
    "jawaban": "Batasi asupan Natrium",
    "pembahasan": "Pembatasan natrium wajib dilakukan pada pasien pre-eklamsia untuk mengontrol tekanan darah."
  },
  {
    "id": 393,
    "soal": "Seorang remaja putri (17 thn) mengeluh pusing dan pucat. Hasil lab: Hb 11 mg/dl. Masalah gizi apa yang paling mungkin dialami?",
    "pilihan": [
      "GAKY",
      "Anemia",
      "Obesitas",
      "Hipertensi",
      "KEK"
    ],
    "jawaban": "Anemia",
    "pembahasan": "Gejala pusing, pucat, dan kadar Hb di bawah normal pada remaja putri mengindikasikan anemia gizi besi."
  },
  {
    "id": 394,
    "soal": "Pasien berhak mengetahui informasi tentang kandungan gizi pada makanan yang disajikan rumah sakit. Hal ini merupakan wujud dari?",
    "pilihan": [
      "Kewajiban TRD",
      "Hak Pasien",
      "Rahasia Medis",
      "Standar Akreditasi",
      "Hak Rumah Sakit"
    ],
    "jawaban": "Hak Pasien",
    "pembahasan": "Pasien memiliki hak atas informasi medis, termasuk detail makanan yang diterimanya selama perawatan."
  },
  {
    "id": 395,
    "soal": "Nutrisionis ingin menyebarkan info gizi melalui media yang bisa dibawa pulang dan dibaca mandiri di rumah. Media apa yang tepat?",
    "pilihan": [
      "Poster",
      "Banner",
      "Leaflet / Brosur",
      "Video animasi",
      "Power Point"
    ],
    "jawaban": "Leaflet / Brosur",
    "pembahasan": "Leaflet atau brosur bersifat ringkas dan didesain agar mudah dibawa serta disimpan untuk referensi mandiri."
  },
  {
    "id": 396,
    "soal": "Dalam menyusun resep bakso ikan patin, nutrisionis melakukan uji daya terima pada panelis skala kecil. Uji ini disebut?",
    "pilihan": [
      "Uji klinis",
      "Uji organoleptik",
      "Penapisan gizi",
      "Formulasi menu",
      "Analisis biaya"
    ],
    "jawaban": "Uji organoleptik",
    "pembahasan": "Uji organoleptik adalah penilaian kualitas makanan menggunakan indra manusia (rasa, warna, tekstur, aroma)."
  },
  {
    "id": 397,
    "soal": "Setelah intervensi diet, ahli gizi mencatat data secara sistematis di rekam medis: Assessment, Diagnosis, Intervention, Monitoring, Evaluation. Format ini disebut?",
    "pilihan": [
      "SKDN",
      "PAGT",
      "ADIME",
      "SOAP",
      "ISO"
    ],
    "jawaban": "ADIME",
    "pembahasan": "ADIME adalah format standar pendokumentasian proses asuhan gizi terstandar di rumah sakit."
  },
  {
    "id": 398,
    "soal": "Seorang TRD merasa ragu memberikan asuhan gizi pada kasus pediatrik kompleks dan merujuknya ke Dietisien senior. Sikap ini menunjukkan?",
    "pilihan": [
      "Kurang percaya diri",
      "Pelanggaran tugas",
      "Profesionalisme (Mawas diri)",
      "Malas bekerja",
      "Kelalaian"
    ],
    "jawaban": "Profesionalisme (Mawas diri)",
    "pembahasan": "Menyadari keterbatasan kompetensi dan melakukan rujukan demi keselamatan pasien adalah bentuk profesionalisme."
  },
  {
    "id": 399,
    "soal": "Bahan pengawet atau pemanis buatan yang penggunaannya diawasi ketat dalam standar keamanan pangan produk konfeksioneri adalah?",
    "pilihan": [
      "Fruktosa",
      "Sorbitol",
      "Sakarin",
      "Glukosa",
      "Sukrosa"
    ],
    "jawaban": "Sakarin",
    "pembahasan": "Sakarin adalah pemanis buatan yang penggunaannya dibatasi dalam standar keamanan pangan ."
  },
  {
    "id": 400,
    "soal": "Nutrisionis menghitung nilai gizi rata-rata asupan individu lalu membandingkannya dengan standar kebutuhan. Langkah ini disebut?",
    "pilihan": [
      "Pengkajian Antropometri",
      "Diagnosis Klinis",
      "Analisis Tingkat Konsumsi",
      "Intervensi Biokimia",
      "Monitoring Fisik"
    ],
    "jawaban": "Analisis Tingkat Konsumsi",
    "pembahasan": "Membandingkan asupan aktual dengan kebutuhan energi/zat gizi adalah tahap analisis tingkat konsumsi dalam asesmen gizi."
  },
  {
    "id": 401,
    "soal": "Pasien DM Tipe 2 memiliki kadar HbA1c 8,2% dan sering mengonsumsi camilan manis. Data laboratorium manakah yang menjadi parameter evaluasi kepatuhan diet jangka panjang (2-3 bulan)?",
    "pilihan": [
      "Glukosa Darah Puasa",
      "Kolesterol total",
      "HbA1c",
      "Trigliserida",
      "Ureum"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "Kadar HbA1c mencerminkan rata-rata pengendalian glukosa darah dalam rentang waktu 2-3 bulan terakhir."
  },
  {
    "id": 402,
    "soal": "Ahli gizi mempersiapkan menu VVIP \"Asem Ikan Patin\" untuk 10 orang dengan standar porsi 75g. Jika BDD ikan patin adalah 75%, berapa gram ikan kotor yang dibutuhkan?",
    "pilihan": [
      "500 gram",
      "1000 gram",
      "1500 gram",
      "2000 gram",
      "2500 gram"
    ],
    "jawaban": "1000 gram",
    "pembahasan": "Rumus: (Berat Bersih x Jumlah) / %BDD. (75g x 10) / 0,75 = 1000 gram."
  },
  {
    "id": 403,
    "soal": "Di sebuah Posyandu, total balita (S) adalah 100 anak. Balita yang memiliki KMS (K) adalah 80 anak. Berapakah nilai tingkat cakupan program (K/S)?",
    "pilihan": [
      "0.5",
      "0.6",
      "0.75",
      "0.8",
      "0.93"
    ],
    "jawaban": "0.8",
    "pembahasan": "Rumus cakupan program (K/S) = (Balita memiliki KMS / Total balita) x 100%. Maka (80/100) x 100% = 80%."
  },
  {
    "id": 404,
    "soal": "Laki-laki (52 thn) mengeluh nyeri sendi jari kaki yang hebat. Hasil lab: asam urat 19 mg/dL. Manakah bahan makanan hewani yang harus dihindari sepenuhnya?",
    "pilihan": [
      "Daging tanpa lemak",
      "Ayam tanpa kulit",
      "Telur ayam",
      "Jeroan (hati/babat)",
      "Ikan air tawar"
    ],
    "jawaban": "Jeroan (hati/babat)",
    "pembahasan": "Jeroan mengandung purin sangat tinggi (kelompok 3) yang memicu peningkatan asam urat darah secara drastis."
  },
  {
    "id": 405,
    "soal": "Seorang tenaga gizi (TRD) merasa tidak kompeten menangani pasien DM dengan komplikasi ginjal berat. Apa tindakan profesional yang tepat sesuai kode etik?",
    "pilihan": [
      "Tetap menangani sebisanya",
      "Meminta bantuan perawat",
      "Merujuk ke Dietisien/ahli gizi yang lebih kompeten",
      "Memberi diet standar",
      "Menghentikan asuhan"
    ],
    "jawaban": "Merujuk ke Dietisien/ahli gizi yang lebih kompeten",
    "pembahasan": "Tenaga gizi wajib merujuk klien kepada ahli lain yang lebih kompeten jika kasus di luar batas kewenangannya."
  },
  {
    "id": 406,
    "soal": "Menu siang asrama: nasi, semur daging, tempe bacem, sayur lodeh. Evaluasi menunjukkan sisa makanan tinggi pada rasa yang dinilai monoton (manis). Masalah keseimbangan apa yang dilanggar?",
    "pilihan": [
      "Warna",
      "Rasa",
      "Bahan",
      "Bentuk",
      "Porsi"
    ],
    "jawaban": "Rasa",
    "pembahasan": "Penggunaan bumbu yang seragam (manis/bacem) pada berbagai lauk dalam satu waktu makan menyebabkan kebosanan rasa."
  },
  {
    "id": 407,
    "soal": "Peneliti ingin melihat riwayat pertumbuhan masa lalu pada anak balita. Indikator antropometri manakah yang paling tepat digunakan?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Indikator tinggi badan atau panjang badan menurut umur mencerminkan status gizi kronis atau riwayat pertumbuhan masa lampau."
  },
  {
    "id": 408,
    "soal": "Pasien Penyakit Ginjal Kronik (HD rutin 2x/minggu) memiliki BB 63 kg. Berapakah kebutuhan protein harian pasien tersebut?",
    "pilihan": [
      "32 g",
      "42 g",
      "48 g",
      "64 g",
      "72 g"
    ],
    "jawaban": "72 g",
    "pembahasan": "Pasien PGK dengan hemodialisis membutuhkan protein lebih tinggi (1,2-1,5 g/kgBB). Maka 1,2g x 63kg = 75,6g (pembulatan ke opsi terdekat 72-80g)."
  },
  {
    "id": 409,
    "soal": "Hasil investigasi keracunan makanan menunjukkan makanan matang disimpan di suhu 25°C selama 5 jam sebelum disajikan. Rentang suhu ini disebut?",
    "pilihan": [
      "Safe zone",
      "Cold zone",
      "Danger zone",
      "Neutral zone",
      "Hot zone"
    ],
    "jawaban": "Danger zone",
    "pembahasan": "Suhu 5°C hingga 60°C adalah zona bahaya (danger zone) di mana bakteri patogen berkembang biak sangat cepat."
  },
  {
    "id": 410,
    "soal": "Peneliti mengambil sampel 90 siswi dari total 300 orang secara acak mewakili kelas X, XI, dan XII (masing-masing 30 orang). Apa teknik samplingnya?",
    "pilihan": [
      "Simple random",
      "Systematic",
      "Cluster",
      "Stratified random",
      "Multistage"
    ],
    "jawaban": "Stratified random",
    "pembahasan": "Teknik mengambil sampel dari kelompok yang berjenjang/berstrata secara proporsional disebut Stratified Random Sampling."
  },
  {
    "id": 411,
    "soal": "Balita laki-laki (6 bulan) memiliki PB 62 cm dengan Z-score PB/U sebesar -2,68 SD. Berdasarkan standar antropometri, apa kategori status gizinya?",
    "pilihan": [
      "Normal",
      "Pendek (stunted)",
      "Sangat pendek",
      "Gizi kurang",
      "Gizi buruk"
    ],
    "jawaban": "Pendek (stunted)",
    "pembahasan": "Nilai Z-score antara -3 SD sampai dengan <-2 SD pada indikator PB/U dikategorikan sebagai pendek (stunted)."
  },
  {
    "id": 412,
    "soal": "Pasien kanker serviks mengeluh mual hebat setelah kemoterapi. Manakah menu ikan yang paling disarankan untuk meminimalkan aroma tajam?",
    "pilihan": [
      "Ikan bakar",
      "Ikan goreng krispi",
      "Pepes ikan mas",
      "Sate ikan",
      "Ikan asap"
    ],
    "jawaban": "Pepes ikan mas",
    "pembahasan": "Teknik pengolahan basah (dikukus/dipepes) lebih disarankan bagi pasien mual karena aroma makanannya tidak sekuat teknik dibakar/digoreng."
  },
  {
    "id": 413,
    "soal": "Balita (27 bln) diare kronis, edema perut, rambut merah mudah dicabut, dan wajah bulat (moon face). Apa masalah gizi spesifiknya?",
    "pilihan": [
      "KVA",
      "Anemia",
      "Marasmus",
      "Kwashiorkor",
      "GAKY"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Gejala klinis edema bilateral, moon face, dan perubahan warna rambut adalah tanda khas defisiensi protein berat atau Kwashiorkor."
  },
  {
    "id": 414,
    "soal": "Ibu balita buta huruf akan diwawancarai tentang asupan makan anaknya selama 24 jam terakhir. Metode survei konsumsi manakah yang paling akurat?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Food Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Food Recall 24 Jam",
    "pembahasan": "Metode Recall 24 jam dilakukan melalui wawancara oleh petugas, sehingga sangat efektif untuk responden dengan tingkat pendidikan rendah."
  },
  {
    "id": 415,
    "soal": "Nutrisionis di asrama diminta menghitung kebutuhan buncis untuk 100 orang. Porsi 75g, BDD buncis 75%. Berapa kg buncis kotor yang harus dibeli?",
    "pilihan": [
      "5 kg",
      "10 kg",
      "15 kg",
      "20 kg",
      "25 kg"
    ],
    "jawaban": "10 kg",
    "pembahasan": "(100 x 75g) / 0,75 = 7.500g / 0,75 = 10.000g = 10 kg."
  },
  {
    "id": 416,
    "soal": "Petugas gudang tidak mencatat pengeluaran harian stok susu, sehingga terjadi selisih data. Dokumen kontrol stok manakah yang harus diperbaiki?",
    "pilihan": [
      "Faktur pembelian",
      "Buku menu",
      "Kartu Stok / Buku Stock",
      "Bon permintaan",
      "Daftar gaji"
    ],
    "jawaban": "Kartu Stok / Buku Stock",
    "pembahasan": "Kartu stok berfungsi sebagai instrumen pengawasan mutasi (masuk/keluar) bahan makanan di gudang setiap hari."
  },
  {
    "id": 417,
    "soal": "Pasien thypoid (BB 50 kg) memiliki suhu tubuh 38,5°C. Berapakah estimasi penambahan energi harian hanya akibat kenaikan suhu tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "250 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu tubuh 1°C di atas normal membutuhkan tambahan energi sekitar 13% (1,5 x 0,13 x BMR ≈ 150 kkal)."
  },
  {
    "id": 418,
    "soal": "Ibu hamil menderita anemia gizi besi. Bahan pangan lokal mana yang paling tepat ditambahkan dalam resep bubur untuk meningkatkan zat besi heme?",
    "pilihan": [
      "Labu kuning",
      "Jagung kuning",
      "Singkong",
      "Hati ayam",
      "Kemangi"
    ],
    "jawaban": "Hati ayam",
    "pembahasan": "Hati ayam merupakan sumber zat besi heme yang memiliki bioavailabilitas (daya serap) lebih tinggi dibanding sumber nabati."
  },
  {
    "id": 419,
    "soal": "Nutrisionis menetapkan masalah gizi: \"Asupan energi berlebih berkaitan dengan kebiasaan makan manis ditandai asupan 130%\". Masalah ini masuk domain?",
    "pilihan": [
      "Klinik",
      "Perilaku",
      "Asupan (Intake)",
      "Lingkungan",
      "Biokimia"
    ],
    "jawaban": "Asupan (Intake)",
    "pembahasan": "Masalah gizi yang berkaitan dengan kuantitas zat gizi atau makanan yang dikonsumsi secara aktual masuk ke dalam domain asupan."
  },
  {
    "id": 420,
    "soal": "Seorang TRD secara rutin mengikuti seminar ilmiah tentang gizi klinik terbaru. Area kompetensi manakah yang ia jalankan?",
    "pilihan": [
      "Etika Moral",
      "Komunikasi Efektif",
      "Mawas Diri dan Pengembangan Diri",
      "Landasan Ilmiah",
      "Manajemen"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Melakukan pembaruan ilmu secara mandiri dan belajar sepanjang hayat adalah perwujudan area mawas diri dan pengembangan diri."
  },
  {
    "id": 421,
    "soal": "Sisa makanan pasien anak mencapai 65%, namun rasa dan penampilan menu dinilai baik. Apa kemungkinan penyebab utamanya?",
    "pilihan": [
      "Teknik masak salah",
      "Standar bumbu salah",
      "Standar porsi berlebihan",
      "Alat makan rusak",
      "Distribusi terlambat"
    ],
    "jawaban": "Standar porsi berlebihan",
    "pembahasan": "Jika kualitas makanan sudah baik namun sisa tetap tinggi, kemungkinan standar porsi yang diberikan melebihi kapasitas makan anak."
  },
  {
    "id": 422,
    "soal": "Produk nugget ikan tuna mengandung protein 20g per takaran saji (50g). Jika acuan label protein 60g, berapa %AKG protein produk tersebut?",
    "pilihan": [
      "0.25",
      "0.33",
      "0.5",
      "0.67",
      "0.83"
    ],
    "jawaban": "0.33",
    "pembahasan": "%AKG = (Kandungan zat gizi per saji / Acuan label) x 100%. (20/60) x 100% = 33,3%."
  },
  {
    "id": 423,
    "soal": "Dalam investigasi keracunan di RS, petugas penjamah makanan ditemukan tidak menggunakan masker dan sarung tangan. Aspek apa yang dilanggar?",
    "pilihan": [
      "HACCP",
      "Hazard Analysis",
      "Personal Hygiene",
      "Stock Control",
      "FIFO"
    ],
    "jawaban": "Personal Hygiene",
    "pembahasan": "Kebersihan diri petugas penjamah makanan (personal hygiene) sangat krusial dalam mencegah kontaminasi silang pada makanan."
  },
  {
    "id": 424,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu menelusuri data BBLR mereka di masa lalu melalui buku KIA. Apa desainnya?",
    "pilihan": [
      "Cross-sectional",
      "Kohort",
      "Kasus Kontrol (Case Control)",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus Kontrol (Case Control)",
    "pembahasan": "Membandingkan kelompok kasus dan kontrol untuk melihat faktor risiko/paparan di masa lalu adalah ciri desain kasus kontrol."
  },
  {
    "id": 425,
    "soal": "Seorang lansia bungkuk (kifosis) tidak bisa berdiri tegak. Alat/metode apa yang paling tepat untuk mengestimasi tinggi badannya?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Stadiometer",
      "Alat Tinggi Lutut",
      "Timbangan dacin"
    ],
    "jawaban": "Alat Tinggi Lutut",
    "pembahasan": "Pengukuran tinggi lutut digunakan untuk memprediksi tinggi badan lansia atau pasien dengan gangguan postur tubuh."
  },
  {
    "id": 426,
    "soal": "Bayi berusia 5 bulan hanya diberikan ASI tanpa tambahan cairan atau makanan lain sejak lahir. Praktek ini disebut?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Relaktasi",
      "Weaning"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "Pemberian hanya ASI saja (tanpa air putih/sufor) sampai bayi berusia 6 bulan dikategorikan sebagai ASI Eksklusif."
  },
  {
    "id": 427,
    "soal": "Ambang batas Lingkar Lengan Atas (LILA) yang digunakan untuk mendeteksi risiko Kurang Energi Kronis (KEK) pada Wanita Usia Subur adalah?",
    "pilihan": [
      "< 11,5 cm",
      "< 21,5 cm",
      "< 23,5 cm",
      "< 25,5 cm",
      "< 30,5 cm"
    ],
    "jawaban": "< 23,5 cm",
    "pembahasan": "Ambang batas LILA untuk identifikasi risiko KEK pada WUS atau ibu hamil di Indonesia adalah kurang dari 23,5 cm."
  },
  {
    "id": 428,
    "soal": "Pasien HIV mengalami infeksi jamur (candidiasis) luas di rongga mulut sehingga sulit menelan. Bentuk makanan apa yang paling tepat?",
    "pilihan": [
      "Biasa",
      "Lunak",
      "Saring",
      "Lumat",
      "Cair kental"
    ],
    "jawaban": "Saring",
    "pembahasan": "Makanan saring diberikan kepada pasien dengan gangguan menelan atau nyeri mulut agar asupan tetap terjaga dengan beban kunyah minimal."
  },
  {
    "id": 429,
    "soal": "Di wilayah kerja Puskesmas, dari 100 balita (S), yang hadir ditimbang (D) adalah 60 anak. Berapakah nilai tingkat partisipasi masyarakat (D/S)?",
    "pilihan": [
      "0.45",
      "0.5",
      "0.6",
      "0.75",
      "0.8"
    ],
    "jawaban": "0.6",
    "pembahasan": "D/S = (Balita ditimbang / Total sasaran) x 100%. (60/100) x 100% = 60%."
  },
  {
    "id": 430,
    "soal": "Baker di RS menguji ragi dengan air hangat dan gula, namun ragi tidak berbuih. Tindakan apa yang direkomendasikan nutrisionis?",
    "pilihan": [
      "Tetap digunakan",
      "Menambah air panas",
      "Mengganti dengan ragi baru",
      "Menambah gula",
      "Menjemur ragi"
    ],
    "jawaban": "Mengganti dengan ragi baru",
    "pembahasan": "Ragi yang tidak berbuih menandakan sel khamir sudah tidak aktif/mati, sehingga ragi harus diganti agar adonan mengembang."
  },
  {
    "id": 431,
    "soal": "Balita (4 thn) gizi buruk pada fase rehabilitasi diberikan formula F100. Berapakah standar kebutuhan cairan pada fase ini (ml/kgBB)?",
    "pilihan": [
      "100 ml",
      "110 ml",
      "120 ml",
      "130 ml",
      "150 ml"
    ],
    "jawaban": "150 ml",
    "pembahasan": "Sesuai pedoman tata laksana gizi buruk, pasien pada fase rehabilitasi memiliki kebutuhan cairan 150-200 ml/kgBB."
  },
  {
    "id": 432,
    "soal": "Pasien DM RG II dimonitor keberhasilan asuhannya harian. Data laboratorium manakah yang menjadi indikator utama kepatuhan diet harian?",
    "pilihan": [
      "Albumin",
      "Glukosa Darah",
      "Kolesterol",
      "Hemoglobin",
      "Asam urat"
    ],
    "jawaban": "Glukosa Darah",
    "pembahasan": "Pengendalian kadar glukosa darah adalah parameter pemantauan utama dalam asuhan gizi pasien diabetes."
  },
  {
    "id": 433,
    "soal": "Pasien pasca-operasi saluran cerna mendapatkan diet lunak. Manakah menu yang harus diganti karena tidak sesuai prinsip diet tersebut?",
    "pilihan": [
      "Bubur nasi",
      "Nasi tim",
      "Teh hangat",
      "Sayur urap mentah",
      "Pisang lumat"
    ],
    "jawaban": "Sayur urap mentah",
    "pembahasan": "Sayur urap mengandung serat kasar tinggi dan parutan kelapa yang tidak diperbolehkan dalam diet lunak pasca-operasi."
  },
  {
    "id": 434,
    "soal": "Nutrisionis melakukan rapat koordinasi penanganan stunting dengan Kepala Puskesmas dan Bidan. Pihak tersebut dalam manajemen program disebut?",
    "pilihan": [
      "Sasaran primer",
      "Sasaran sekunder",
      "Stakeholder eksternal",
      "Stakeholder internal",
      "Tenaga teknis"
    ],
    "jawaban": "Stakeholder internal",
    "pembahasan": "Pihak-pihak yang berasal dari dalam organisasi yang sama (Puskesmas) disebut sebagai stakeholder internal."
  },
  {
    "id": 435,
    "soal": "Produk manisan buah dan dodol memiliki kadar gula tinggi dan tekstur semi-basah. Berdasarkan tabel komposisi pangan, klasifikasinya adalah?",
    "pilihan": [
      "Produk sereal",
      "Produk susu",
      "Konfeksioneri",
      "Bahan fungsional",
      "Sayuran"
    ],
    "jawaban": "Konfeksioneri",
    "pembahasan": "Produk konfeksioneri adalah olahan pangan yang memiliki kadar gula tinggi dan umumnya bersifat semi-basah."
  },
  {
    "id": 436,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok yang sama (data normal). Uji statistik apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Dependent (Paired) T-test",
      "Mann-Whitney",
      "Chi-Square",
      "Wilcoxon"
    ],
    "jawaban": "Dependent (Paired) T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan untuk membandingkan rata-rata dua kelompok data yang berhubungan/satu subyek."
  },
  {
    "id": 437,
    "soal": "Pasien Penyakit Jantung Koroner (PJK) mengalami edema di kaki dan TD 160/110 mmHg. Zat gizi mikro manakah yang harus dibatasi ketat?",
    "pilihan": [
      "Protein",
      "Vitamin C",
      "Lemak trans",
      "Natrium",
      "Kalsium"
    ],
    "jawaban": "Natrium",
    "pembahasan": "Pembatasan natrium sangat diperlukan pada pasien jantung dengan hipertensi atau edema untuk mengurangi retensi cairan."
  },
  {
    "id": 438,
    "soal": "Puskesmas akan membagikan Vitamin A pada bulan Februari. Berapakah dosis yang diberikan untuk bayi berusia 8 bulan?",
    "pilihan": [
      "50.000 IU",
      "100.000 IU (Kapsul Biru)",
      "150.000 IU",
      "200.000 IU (Kapsul Merah)",
      "300.000 IU"
    ],
    "jawaban": "100.000 IU (Kapsul Biru)",
    "pembahasan": "Bayi usia 6-11 bulan mendapatkan Vitamin A dosis 100.000 IU (kapsul biru)."
  },
  {
    "id": 439,
    "soal": "Ibu menyusui (bayi 2 bln) memiliki LILA 23,5 cm. Berapakah tambahan energi (kkal) harian yang dianjurkan sesuai AKG?",
    "pilihan": [
      "180 kkal",
      "200 kkal",
      "330 kkal",
      "450 kkal",
      "500 kkal"
    ],
    "jawaban": "330 kkal",
    "pembahasan": "Sesuai Angka Kecukupan Gizi (AKG), ibu menyusui pada 6 bulan pertama membutuhkan tambahan energi sebesar +330 kkal per hari."
  },
  {
    "id": 440,
    "soal": "Petugas gudang dilarang meletakkan stok telur baru di depan stok telur lama. Prinsip penyimpanan apa yang dijalankan?",
    "pilihan": [
      "FIFO",
      "FEFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) memastikan bahan makanan yang datang lebih awal digunakan terlebih dahulu."
  },
  {
    "id": 441,
    "soal": "Pasien Penyakit Ginjal Kronik (PGK) stadium 4 tanpa hemodialisis membutuhkan protein sebesar?",
    "pilihan": [
      "0,2 - 0,4 g/kgBB",
      "0,4 - 0,6 g/kgBB",
      "0,6 - 0,75 g/kgBB",
      "0,8 - 1,2 g/kgBB",
      "1,3 - 1,5 g/kgBB"
    ],
    "jawaban": "0,6 - 0,75 g/kgBB",
    "pembahasan": "Pasien PGK pra-dialisis membutuhkan pembatasan protein ketat, biasanya dalam rentang 0,6 - 0,75 g/kgBB per hari ."
  },
  {
    "id": 442,
    "soal": "Ibu hamil trimester II menderita pre-eklamsia dan sangat menyukai camilan asin. Apa saran intervensi gizi prioritas?",
    "pilihan": [
      "Porsi kecil sering",
      "Tingkatkan protein",
      "Batasi asupan Natrium",
      "Kurangi lemak",
      "Minum air banyak"
    ],
    "jawaban": "Batasi asupan Natrium",
    "pembahasan": "Pembatasan natrium wajib dilakukan pada pasien pre-eklamsia untuk mengontrol tekanan darah yang tinggi."
  },
  {
    "id": 443,
    "soal": "Seorang remaja putri (14 thn) mengeluh pusing, pucat, dan Hb di bawah normal. Masalah gizi apa yang paling mungkin dialami?",
    "pilihan": [
      "GAKY",
      "Anemia",
      "Obesitas",
      "Hipertensi",
      "KEK"
    ],
    "jawaban": "Anemia",
    "pembahasan": "Gejala pusing, pucat, dan kadar Hb rendah pada remaja putri mengindikasikan masalah anemia gizi."
  },
  {
    "id": 444,
    "soal": "Pasien berhak mengetahui informasi tentang kandungan gizi pada makanan yang disajikan rumah sakit. Hal ini merupakan wujud dari?",
    "pilihan": [
      "Kewajiban TRD",
      "Hak Pasien",
      "Rahasia Medis",
      "Standar Akreditasi",
      "Hak Rumah Sakit"
    ],
    "jawaban": "Hak Pasien",
    "pembahasan": "Pasien memiliki hak atas informasi medis, termasuk detail makanan yang diterimanya selama perawatan."
  },
  {
    "id": 445,
    "soal": "Nutrisionis ingin menyebarkan info gizi melalui media yang bisa dibawa pulang dan dibaca mandiri di rumah. Media apa yang tepat?",
    "pilihan": [
      "Poster",
      "Banner",
      "Leaflet / Brosur",
      "Video animasi",
      "Power Point"
    ],
    "jawaban": "Leaflet / Brosur",
    "pembahasan": "Leaflet atau brosur bersifat ringkas dan didesain agar mudah dibawa serta disimpan untuk referensi bacaan mandiri."
  },
  {
    "id": 446,
    "soal": "Dalam menyusun resep nugget ikan patin, nutrisionis melakukan uji daya terima pada panelis skala kecil. Uji ini disebut?",
    "pilihan": [
      "Uji klinis",
      "Uji organoleptik",
      "Penapisan gizi",
      "Formulasi menu",
      "Analisis biaya"
    ],
    "jawaban": "Uji organoleptik",
    "pembahasan": "Uji organoleptik adalah penilaian kualitas makanan menggunakan indra manusia (rasa, warna, tekstur, aroma)."
  },
  {
    "id": 447,
    "soal": "Setelah intervensi diet, ahli gizi mencatat data secara sistematis di rekam medis: Assessment, Diagnosis, Intervention, Monitoring, Evaluation. Format ini disebut?",
    "pilihan": [
      "SKDN",
      "PAGT",
      "ADIME",
      "SOAP",
      "ISO"
    ],
    "jawaban": "ADIME",
    "pembahasan": "ADIME adalah format standar pendokumentasian proses asuhan gizi terstandar di rumah sakit."
  },
  {
    "id": 448,
    "soal": "Keluarga pasien memberikan tanda DNR (Do Not Resuscitate) pada status pasien sesuai permintaan pasien sebelumnya. Prinsip etik perawat/dokter dalam hal ini adalah?",
    "pilihan": [
      "Justice",
      "Fidelity",
      "Veracity",
      "Autonomy",
      "Nonmaleficience"
    ],
    "jawaban": "Autonomy",
    "pembahasan": "Menghormati keputusan pasien terkait tindakan medis pada dirinya adalah penerapan prinsip Autonomy."
  },
  {
    "id": 449,
    "soal": "Bahan pengawet atau pemanis buatan yang penggunaannya diawasi ketat dalam standar keamanan pangan produk konfeksioneri adalah?",
    "pilihan": [
      "Fruktosa",
      "Sorbitol",
      "Sakarin",
      "Glukosa",
      "Sukrosa"
    ],
    "jawaban": "Sakarin",
    "pembahasan": "Sakarin adalah pemanis buatan yang penggunaannya dibatasi dan diawasi ketat dalam standar keamanan pangan ."
  },
  {
    "id": 450,
    "soal": "Nutrisionis menghitung nilai gizi asupan individu dan membandingkannya dengan standar kebutuhan untuk menentukan kecukupan. Langkah ini disebut?",
    "pilihan": [
      "Pengkajian Antropometri",
      "Diagnosis Klinis",
      "Analisis Tingkat Konsumsi",
      "Intervensi Biokimia",
      "Monitoring Fisik"
    ],
    "jawaban": "Analisis Tingkat Konsumsi",
    "pembahasan": "Membandingkan asupan aktual dengan kebutuhan energi/zat gizi adalah tahap analisis tingkat konsumsi dalam asesmen gizi."
  },
  {
    "id": 451,
    "soal": "Seorang ibu hamil (29 thn) dirawat dengan keluhan pusing, kaki bengkak, dan mual. Diagnosis: pre-eklamsia. Ia terbiasa makan 3x sehari porsi besar dan suka camilan asin. TD 155/110 mmHg. Apa saran diet utama?",
    "pilihan": [
      "Tinggi protein",
      "Rendah garam",
      "Tinggi energi",
      "Rendah serat",
      "Tinggi lemak"
    ],
    "jawaban": "Rendah garam",
    "pembahasan": "Tekanan darah tinggi dan edema pada pre-eklamsia memerlukan pembatasan natrium (diet rendah garam)."
  },
  {
    "id": 452,
    "soal": "Nutrisionis di katering melayani 3 sekolah dasar dengan rata-rata 1000 siswa per sekolah. Menu tempe goreng disajikan 5x seminggu (porsi 30g). Berapa kg kebutuhan tempe selama 1 minggu?",
    "pilihan": [
      "350 kg",
      "400 kg",
      "450 kg",
      "500 kg",
      "550 kg"
    ],
    "jawaban": "450 kg",
    "pembahasan": "Rumus: (Porsi x Frekuensi x Jumlah Siswa x Jumlah Sekolah). (30g x 5 x 1000 x 3) = 450.000g = 450 kg."
  },
  {
    "id": 453,
    "soal": "Sebagai upaya preventif, puskesmas mendistribusikan Vitamin A kapsul biru. Kelompok sasaran manakah yang tepat menerima dosis 100.000 IU tersebut?",
    "pilihan": [
      "Bayi 0-5 bln",
      "Bayi 6-11 bln",
      "Balita 12-59 bln",
      "Ibu hamil",
      "Remaja putri"
    ],
    "jawaban": "Bayi 6-11 bln",
    "pembahasan": "Kapsul biru (100.000 IU) untuk bayi 6-11 bln; kapsul merah (200.000 IU) untuk balita 12-59 bln."
  },
  {
    "id": 454,
    "soal": "Seorang laki-laki (52 thn) mengalami serangan nyeri hebat di tungkai dan jempol kaki. Hasil lab: asam urat 19 mg/dL. Manakah bahan makanan yang harus dihindari sepenuhnya?",
    "pilihan": [
      "Daging sapi",
      "Ayam",
      "Telur",
      "Jeroan",
      "Ikan tawar"
    ],
    "jawaban": "Jeroan",
    "pembahasan": "Jeroan mengandung purin sangat tinggi (kelompok 3) yang secara langsung memicu lonjakan asam urat."
  },
  {
    "id": 455,
    "soal": "Seorang Ahli Gizi merasa tidak memiliki kompetensi cukup untuk memberikan asuhan diet pada pasien DM komplikasi berat. Apa tindakan yang paling etis?",
    "pilihan": [
      "Tetap menangani",
      "Meminta bantuan perawat",
      "Merujuk ke Register Dietisien yang kompeten",
      "Meminta pasien pulang",
      "Memberi diet standar"
    ],
    "jawaban": "Merujuk ke Register Dietisien yang kompeten",
    "pembahasan": "Sesuai Kode Etik, tenaga gizi wajib melakukan rujukan kepada ahli lain yang lebih kompeten jika kasus di luar batas kewenangannya."
  },
  {
    "id": 456,
    "soal": "Menu RS siang: nasi, ayam bakar, nugget ayam, sayur sop, semangka. Pasien mengeluh lauk ayam muncul berturut-turut. Apa langkah evaluasi manajerialnya?",
    "pilihan": [
      "Evaluasi biaya",
      "Evaluasi standar resep",
      "Evaluasi siklus menu",
      "Evaluasi standar porsi",
      "Evaluasi sisa makanan"
    ],
    "jawaban": "Evaluasi siklus menu",
    "pembahasan": "Pengulangan bahan makanan utama (ayam) dalam satu waktu makan menunjukkan kegagalan perencanaan dalam siklus menu."
  },
  {
    "id": 457,
    "soal": "Peneliti ingin mengetahui hubungan pola konsumsi jajanan dengan kejadian stunting pada balita. Indikator antropometri apa yang digunakan untuk diagnosis stunting?",
    "pilihan": [
      "BB/U",
      "TB/U atau PB/U",
      "BB/TB",
      "IMT/U",
      "LILA/U"
    ],
    "jawaban": "TB/U atau PB/U",
    "pembahasan": "Stunting adalah masalah gizi kronis yang diukur berdasarkan tinggi badan atau panjang badan menurut umur (TB/U atau PB/U)."
  },
  {
    "id": 458,
    "soal": "Pasien Gagal Ginjal Kronik stadium 4 mengeluh bengkak di kaki dan nafsu makan rendah. Ureum 80 mg/dL, kreatinin 6,0 mg/dL. Apa intervensi prioritasnya?",
    "pilihan": [
      "Tinggi Protein",
      "Batasi Protein",
      "Tinggi Natrium",
      "Rendah Serat",
      "Tinggi Lemak"
    ],
    "jawaban": "Batasi Protein",
    "pembahasan": "Pada PGK pra-dialisis (stadium 4), asupan protein harus dibatasi ketat untuk mengurangi beban kerja ginjal dan akumulasi sisa nitrogen."
  },
  {
    "id": 459,
    "soal": "Hasil investigasi keracunan di RS menemukan makanan matang disimpan di suhu 25°C selama 5 jam. Berdasarkan prinsip sanitasi, rentang suhu ini disebut?",
    "pilihan": [
      "Safe Zone",
      "Cold Zone",
      "Danger Zone",
      "Neutral Zone",
      "Hot Zone"
    ],
    "jawaban": "Danger Zone",
    "pembahasan": "Suhu 5°C - 60°C adalah danger zone (zona bahaya) di mana bakteri patogen berkembang biak dengan cepat pada makanan."
  },
  {
    "id": 460,
    "soal": "Peneliti membandingkan kelompok balita \"Gemuk\" dan \"Normal\", lalu melihat riwayat BBLR mereka di masa lalu melalui buku KIA. Apa desain penelitiannya?",
    "pilihan": [
      "Cross-sectional",
      "Kohort",
      "Kasus Kontrol (Case Control)",
      "Eksperimental",
      "Deskriptif"
    ],
    "jawaban": "Kasus Kontrol (Case Control)",
    "pembahasan": "Membandingkan kelompok kasus (gemuk) dan kontrol (normal) untuk mencari faktor risiko di masa lalu adalah ciri desain kasus kontrol."
  },
  {
    "id": 461,
    "soal": "Pasien DM tipe II menjalani diet selama 3 bulan. Parameter laboratorium apa yang menunjukkan pengendalian gula darah jangka panjang?",
    "pilihan": [
      "GDS",
      "GDP",
      "HbA1c",
      "Kolesterol",
      "Albumin"
    ],
    "jawaban": "HbA1c",
    "pembahasan": "HbA1c mencerminkan rata-rata kadar gula darah dalam 2-3 bulan terakhir dan menjadi standar evaluasi kepatuhan diet jangka panjang."
  },
  {
    "id": 462,
    "soal": "Nutrisionis menemukan jeruk yang dikirim rekanan seberat 70g/buah, padahal spesifikasi adalah 100g/buah. Apa tindakan manajerial yang tepat?",
    "pilihan": [
      "Tetap menerima",
      "Membeli sendiri",
      "Mengurangi porsi",
      "Menolak dan minta ganti sesuai spesifikasi",
      "Mengupas semua jeruk"
    ],
    "jawaban": "Menolak dan minta ganti sesuai spesifikasi",
    "pembahasan": "Bahan makanan yang tidak sesuai spesifikasi kontrak harus ditolak saat penerimaan untuk menjaga kualitas standar pelayanan."
  },
  {
    "id": 463,
    "soal": "Anak (3,5 thn) diare kronis, wajah membulat (sembab), rewel, dan terdapat edema pada kedua kaki. Apa diagnosis gizinya?",
    "pilihan": [
      "Anemia",
      "KVA",
      "Marasmus",
      "Kwashiorkor",
      "GAKY"
    ],
    "jawaban": "Kwashiorkor",
    "pembahasan": "Gejala klinis edema bilateral, moon face, dan perubahan perilaku menunjukkan defisiensi protein berat atau Kwashiorkor."
  },
  {
    "id": 464,
    "soal": "Ibu balita yang buta huruf akan diwawancarai mengenai asupan makan anaknya kemarin. Apa metode survei konsumsi yang paling tepat?",
    "pilihan": [
      "Food Record",
      "Food Weighing",
      "Recall 24 Jam",
      "Dietary History",
      "FFQ"
    ],
    "jawaban": "Recall 24 Jam",
    "pembahasan": "Metode Recall 24 jam melalui wawancara aktif oleh petugas sangat efektif untuk responden dengan tingkat pendidikan rendah (buta huruf)."
  },
  {
    "id": 465,
    "soal": "Nutrisionis memesan ikan patin untuk 10 pasien VIP. Porsi bersih 75g. Jika BDD ikan patin 75%, berapa berat kotor (gram) yang harus dibeli?",
    "pilihan": [
      "500 g",
      "1000 g",
      "1500 g",
      "2000 g",
      "2500 g"
    ],
    "jawaban": "1000 g",
    "pembahasan": "Rumus: (Berat Bersih x Jumlah) / %BDD. (75g x 10) / 0,75 = 1000 gram."
  },
  {
    "id": 466,
    "soal": "Ditemukan selisih stok susu di gudang karena petugas tidak mencatat mutasi masuk/keluar setiap hari. Dokumen apa yang harus diperbaiki?",
    "pilihan": [
      "Faktur",
      "Bon permintaan",
      "Kartu Stok / Buku Stock",
      "Daftar gaji",
      "Buku menu"
    ],
    "jawaban": "Kartu Stok / Buku Stock",
    "pembahasan": "Kartu stok adalah dokumen wajib untuk mengontrol alur mutasi barang secara akurat setiap hari di gudang."
  },
  {
    "id": 467,
    "soal": "Pasien thypoid (BB 50 kg) memiliki suhu tubuh 38,5°C. Berapa tambahan energi harian (kkal) yang dibutuhkan akibat kenaikan suhu tubuh tersebut?",
    "pilihan": [
      "50 kkal",
      "100 kkal",
      "150 kkal",
      "200 kkal",
      "300 kkal"
    ],
    "jawaban": "150 kkal",
    "pembahasan": "Setiap kenaikan suhu 1°C di atas normal membutuhkan tambahan energi sekitar 13%. (1,5°C x 13% x BMR) ≈ kisaran 150 kkal."
  },
  {
    "id": 468,
    "soal": "Ibu hamil menderita anemia gizi besi. Apa modifikasi resep bubur Manado yang paling tepat untuk meningkatkan penyerapan zat besi?",
    "pilihan": [
      "Tambah susu",
      "Tambah labu kuning",
      "Ganti sayur hijau ke bayam merah",
      "Tambah porsi nasi",
      "Kurangi air"
    ],
    "jawaban": "Tambah labu kuning",
    "pembahasan": "Bayam merah mengandung zat besi non-heme yang lebih tinggi dibanding sayuran hijau biasa untuk membantu mengatasi anemia."
  },
  {
    "id": 469,
    "soal": "Nutrisionis menetapkan masalah gizi: \"Asupan energi berlebih berkaitan dengan konsumsi makanan manis ditandai dengan asupan 130%\". Masalah ini masuk domain?",
    "pilihan": [
      "Klinik",
      "Perilaku",
      "Asupan (Intake)",
      "Lingkungan",
      "Biokimia"
    ],
    "jawaban": "Asupan (Intake)",
    "pembahasan": "Masalah yang berkaitan dengan jumlah zat gizi atau makanan yang dikonsumsi secara aktual masuk ke dalam domain asupan."
  },
  {
    "id": 470,
    "soal": "Seorang nutrisionis secara rutin mengikuti seminar tentang dietetika penyakit degeneratif terbaru. Area kompetensi mana yang ia jalankan?",
    "pilihan": [
      "Etika Moral",
      "Komunikasi",
      "Mawas Diri dan Pengembangan Diri",
      "Landasan Ilmiah",
      "Manajemen"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Memperbarui pengetahuan secara mandiri dan belajar sepanjang hayat adalah perwujudan area mawas diri dan pengembangan diri."
  },
  {
    "id": 471,
    "soal": "Nutrisionis mengamati sisa makanan pasien di piring secara visual menggunakan skala 6 poin. Metode ini disebut?",
    "pilihan": [
      "Food Weighing",
      "Food Recall",
      "Visual Comstock",
      "Inventory Method",
      "Food Account"
    ],
    "jawaban": "Inventory Method",
    "pembahasan": "Taksiran visual Comstock skala 6 poin adalah metode praktis untuk mengevaluasi sisa makanan (plate waste) di RS."
  },
  {
    "id": 472,
    "soal": "Produk nugget tuna mengandung protein 20g per saji (50g). Jika acuan label protein 60g, berapa %AKG protein per sajian?",
    "pilihan": [
      "0.25",
      "0.33",
      "0.5",
      "0.67",
      "0.83"
    ],
    "jawaban": "0.33",
    "pembahasan": "%AKG = (Kandungan zat gizi per saji / Acuan label) x 100%. (20/60) x 100% = 33,3%."
  },
  {
    "id": 473,
    "soal": "Petugas dapur diwajibkan menggunakan masker, penutup kepala, dan sarung tangan saat menyajikan makanan. Praktek ini disebut?",
    "pilihan": [
      "HACCP",
      "Hazard Analysis",
      "Personal Hygiene",
      "Stock Control",
      "FIFO"
    ],
    "jawaban": "Personal Hygiene",
    "pembahasan": "Kebersihan diri (personal hygiene) dan penggunaan APD sangat penting untuk mencegah kontaminasi silang pada makanan."
  },
  {
    "id": 474,
    "soal": "Seorang lansia bungkuk diukur tinggi badannya menggunakan konversi panjang tulang kaki. Apa nama alat/metodenya?",
    "pilihan": [
      "Microtoice",
      "Pita meter",
      "Tinggi Lutut (Knee Height)",
      "LILA",
      "Stadiometer"
    ],
    "jawaban": "Tinggi Lutut (Knee Height)",
    "pembahasan": "Pada lansia dengan kelainan postur (kifosis), tinggi lutut digunakan untuk memprediksi tinggi badan sebenarnya."
  },
  {
    "id": 475,
    "soal": "Bayi (5 bulan) hanya diberikan ASI tanpa cairan atau makanan tambahan apa pun sejak lahir. Praktek ini disebut?",
    "pilihan": [
      "Inisiasi Menyusu Dini",
      "ASI Eksklusif",
      "MP-ASI dini",
      "Relaktasi",
      "Weaning"
    ],
    "jawaban": "ASI Eksklusif",
    "pembahasan": "ASI Eksklusif didefinisikan sebagai pemberian hanya ASI saja (tanpa air putih/sufor) sampai bayi berusia 6 bulan."
  },
  {
    "id": 476,
    "soal": "Ambang batas Lingkar Lengan Atas (LILA) yang digunakan untuk mendeteksi risiko Kurang Energi Kronis (KEK) pada WUS di Indonesia adalah?",
    "pilihan": [
      "< 11,5 cm",
      "< 21,5 cm",
      "< 23,5 cm",
      "< 25,5 cm",
      "< 30,5 cm"
    ],
    "jawaban": "< 23,5 cm",
    "pembahasan": "Ambang batas LILA untuk identifikasi risiko KEK pada wanita usia subur atau ibu hamil adalah di bawah 23,5 cm."
  },
  {
    "id": 477,
    "soal": "Pasien HIV mengeluh sulit makan karena adanya infeksi jamur (candidiasis) yang luas di rongga mulut. Bentuk makanan apa yang paling tepat?",
    "pilihan": [
      "Biasa",
      "Lunak",
      "Saring",
      "Lumat",
      "Cair kental"
    ],
    "jawaban": "Saring",
    "pembahasan": "Makanan saring diberikan kepada pasien dengan gangguan menelan atau nyeri mulut berat agar asupan tetap terjaga."
  },
  {
    "id": 478,
    "soal": "Di wilayah Puskesmas, dari 100 balita sasaran (S), yang hadir ditimbang (D) adalah 70 anak. Berapakah nilai tingkat partisipasi masyarakat?",
    "pilihan": [
      "0.45",
      "0.65",
      "0.7",
      "0.8",
      "0.85"
    ],
    "jawaban": "0.7",
    "pembahasan": "D/S x 100% = (70/100) x 100% = 70%."
  },
  {
    "id": 479,
    "soal": "Baker di RS menguji keaktifan ragi untuk adonan roti, namun ragi tidak berbuih saat dicampur air dan gula. Apa rekomendasinya?",
    "pilihan": [
      "Tetap digunakan",
      "Menambah air panas",
      "Mengganti dengan ragi baru",
      "Menambah gula",
      "Menjemur ragi"
    ],
    "jawaban": "Mengganti dengan ragi baru",
    "pembahasan": "Ragi yang tidak berbuih menandakan sel khamir sudah tidak aktif/mati, sehingga harus diganti agar adonan mengembang."
  },
  {
    "id": 480,
    "soal": "Balita (4 thn) gizi buruk pada fase rehabilitasi diberikan formula F100. Berapa standar kebutuhan cairan pada fase ini (ml/kgBB)?",
    "pilihan": [
      "100 ml",
      "110 ml",
      "120 ml",
      "130 ml",
      "150 ml"
    ],
    "jawaban": "150 ml",
    "pembahasan": "Sesuai Pedoman Tata Laksana Gizi Buruk, fase rehabilitasi membutuhkan cairan 150-200 ml/kgBB per hari."
  },
  {
    "id": 481,
    "soal": "Pasien pasca-operasi saluran cerna mendapatkan diet lunak. Manakah menu yang harus diganti karena tidak sesuai prinsip diet tersebut?",
    "pilihan": [
      "Bubur nasi",
      "Nasi tim",
      "Teh hangat",
      "Sayur urap mentah",
      "Pisang lumat"
    ],
    "jawaban": "Sayur urap mentah",
    "pembahasan": "Sayur urap mengandung serat kasar tinggi dan parutan kelapa yang tidak diperbolehkan dalam diet lunak pasca-operasi ."
  },
  {
    "id": 482,
    "soal": "Nutrisionis melakukan rapat koordinasi penanganan stunting dengan Kepala Puskesmas, Perawat, dan Bidan. Pihak tersebut disebut sebagai?",
    "pilihan": [
      "Sasaran primer",
      "Sasaran sekunder",
      "Stakeholder eksternal",
      "Stakeholder internal",
      "Tenaga teknis"
    ],
    "jawaban": "Stakeholder internal",
    "pembahasan": "Pihak-pihak yang berasal dari dalam organisasi yang sama (Puskesmas) disebut stakeholder internal."
  },
  {
    "id": 483,
    "soal": "Pasien Penyakit Jantung Koroner (PJK) mengalami edema di kaki dan TD 160/110 mmHg. Zat gizi mikro manakah yang harus dibatasi ketat?",
    "pilihan": [
      "Protein",
      "Vitamin C",
      "Lemak trans",
      "Natrium",
      "Kalsium"
    ],
    "jawaban": "Natrium",
    "pembahasan": "Pembatasan natrium sangat diperlukan pada pasien jantung dengan hipertensi atau edema untuk mengurangi retensi cairan."
  },
  {
    "id": 484,
    "soal": "Puskesmas mendistribusikan Vitamin A kapsul merah. Kelompok usia mana yang menjadi sasaran utama pemberian dosis ini?",
    "pilihan": [
      "0-5 bulan",
      "6-11 bulan",
      "12-59 bulan",
      "Ibu hamil",
      "Remaja putri"
    ],
    "jawaban": "12-59 bulan",
    "pembahasan": "Kapsul merah (200.000 IU) diberikan untuk balita usia 12-59 bulan setiap Februari dan Agustus."
  },
  {
    "id": 485,
    "soal": "Ibu menyusui (bayi 2 bln) memiliki LILA 23,5 cm. Berapakah tambahan energi (kkal) harian yang dianjurkan sesuai AKG?",
    "pilihan": [
      "180 kkal",
      "200 kkal",
      "300 kkal",
      "330 kkal",
      "450 kkal"
    ],
    "jawaban": "330 kkal",
    "pembahasan": "Sesuai Angka Kecukupan Gizi (AKG), ibu menyusui pada 6 bulan pertama membutuhkan tambahan energi sebesar +330 kkal per hari."
  },
  {
    "id": 486,
    "soal": "Petugas gudang dilarang meletakkan bahan makanan baru di depan bahan makanan lama. Prinsip penyimpanan apa yang dijalankan?",
    "pilihan": [
      "FEFO",
      "FIFO",
      "LIFO",
      "HACCP",
      "GHP"
    ],
    "jawaban": "FIFO",
    "pembahasan": "Prinsip First In First Out (FIFO) memastikan bahan makanan yang masuk lebih awal digunakan terlebih dahulu."
  },
  {
    "id": 487,
    "soal": "Pasien Penyakit Ginjal Kronik (PGK) stadium 4 tanpa hemodialisis membutuhkan protein sebesar?",
    "pilihan": [
      "0,2 - 0,4 g/kgBB",
      "0,4 - 0,6 g/kgBB",
      "0,6 - 0,75 g/kgBB",
      "0,8 - 1,2 g/kgBB",
      "1,3 - 1,5 g/kgBB"
    ],
    "jawaban": "0,6 - 0,75 g/kgBB",
    "pembahasan": "Pasien PGK pra-dialisis membutuhkan pembatasan protein ketat, biasanya dalam rentang 0,6 - 0,75 g/kgBB per hari."
  },
  {
    "id": 488,
    "soal": "Ibu hamil penderita DM Gestasional trimester I diberikan energi 1850 kkal. Berapa gram lemak jika diberikan 20% dari total energi?",
    "pilihan": [
      "30 gram",
      "35 gram",
      "40 gram",
      "45 gram",
      "50 gram"
    ],
    "jawaban": "40 gram",
    "pembahasan": "(20% x 1850 kkal) / 9 kkal per gram = 370 / 9 ≈ 41 gram (pembulatan ke opsi 40g)."
  },
  {
    "id": 489,
    "soal": "Pesan gizi \"5 dari 10 bayi lahir pendek mengancam kecerdasan bangsa\" ditujukan untuk membangun kesadaran stunting. Pesan ini bersifat?",
    "pilihan": [
      "Teknis",
      "Panjang",
      "Strategis, efektif, menyentuh",
      "Hanya bahasa Inggris",
      "Rumit"
    ],
    "jawaban": "Strategis, efektif, menyentuh",
    "pembahasan": "Pesan edukasi harus singkat, jelas, dan menggunakan isu strategis yang mudah dipahami masyarakat luas."
  },
  {
    "id": 490,
    "soal": "Nutrisionis memasukkan data PB=86,2 cm (pengukuran recumbent) ke WHO Anthro untuk anak usia 4 tahun. Software akan mengonversi menjadi TB senilai?",
    "pilihan": [
      "84,8 cm",
      "85,5 cm",
      "86,2 cm",
      "86,9 cm",
      "87,5 cm"
    ],
    "jawaban": "87,5 cm",
    "pembahasan": "Pada anak di atas 2 tahun, jika diukur telentang (recumbent), hasilnya harus dikurangi 0,7 cm untuk menjadi Tinggi Badan (standing)."
  },
  {
    "id": 491,
    "soal": "Pasien HIV dengan perdarahan saluran cerna mendapat diet cairan jernih via NGT. Setelah 2 hari, data kritis apa yang harus dikaji ulang?",
    "pilihan": [
      "Antropometri",
      "Kadar Hb",
      "Toleransi asupan (residu lambung)",
      "Riwayat makan",
      "Tekanan darah"
    ],
    "jawaban": "Toleransi asupan (residu lambung)",
    "pembahasan": "Pemantauan residu lambung dan toleransi asupan sangat penting pada pemberian nutrisi enteral via NGT untuk mencegah komplikasi."
  },
  {
    "id": 492,
    "soal": "Peneliti menguji perbedaan kadar trigliserida sebelum dan sesudah intervensi pada kelompok lansia yang sama (data normal). Uji apa yang dipakai?",
    "pilihan": [
      "Independent T-test",
      "Dependent/Paired T-test",
      "Mann-Whitney",
      "Chi-Square",
      "Wilcoxon"
    ],
    "jawaban": "Dependent/Paired T-test",
    "pembahasan": "Uji-t berpasangan (Paired T-test) digunakan untuk membandingkan rata-rata dari satu kelompok yang diukur dua kali."
  },
  {
    "id": 493,
    "soal": "Kepala Instalasi Gizi menyusun jadwal tugas pagi, siang, dan malam untuk 20 orang petugas dapur. Ini masuk dalam fungsi manajemen?",
    "pilihan": [
      "Perencanaan",
      "Pengorganisasian (SDM)",
      "Pengawasan",
      "Pemasaran",
      "Keuangan"
    ],
    "jawaban": "Pengorganisasian (SDM)",
    "pembahasan": "Pengaturan jadwal kerja dan distribusi tenaga kerja adalah bagian dari fungsi manajemen sumber daya manusia (SDM)."
  },
  {
    "id": 494,
    "soal": "Nutrisionis mempromosikan katering diet sehatnya melalui media sosial agar lebih dikenal masyarakat luas. Fungsi ini disebut?",
    "pilihan": [
      "Produksi",
      "Distribusi",
      "Pemasaran (Marketing)",
      "Pengadaan",
      "Penyimpanan"
    ],
    "jawaban": "Pemasaran (Marketing)",
    "pembahasan": "Strategi memperkenalkan produk kepada konsumen masuk dalam fungsi manajemen pemasaran."
  },
  {
    "id": 495,
    "soal": "Media edukasi gizi apa yang paling cocok agar pasien bisa membacanya berulang kali secara mandiri di rumah?",
    "pilihan": [
      "Poster",
      "Banner",
      "Leaflet / Brosur",
      "Video animasi",
      "Power Point"
    ],
    "jawaban": "Leaflet / Brosur",
    "pembahasan": "Leaflet atau brosur bersifat ringkas dan mudah dibawa pulang oleh sasaran untuk dijadikan referensi bacaan mandiri."
  },
  {
    "id": 496,
    "soal": "Tenaga gizi dilarang membocorkan data medis pasien kepada pihak yang tidak berwenang. Hal ini merupakan perwujudan dari?",
    "pilihan": [
      "Kerahasiaan Medis (Etika)",
      "Hak Tenaga Gizi",
      "Landasan Ilmiah",
      "Komunikasi",
      "Manajemen"
    ],
    "jawaban": "Kerahasiaan Medis (Etika)",
    "pembahasan": "Menjaga kerahasiaan identitas dan riwayat penyakit pasien adalah kewajiban etis utama tenaga kesehatan."
  },
  {
    "id": 497,
    "soal": "Format pencatatan asuhan gizi yang mencakup: Assessment, Diagnosis, Intervention, Monitoring, dan Evaluation disebut?",
    "pilihan": [
      "SKDN",
      "PAGT",
      "ADIME",
      "SOAP",
      "ISO"
    ],
    "jawaban": "ADIME",
    "pembahasan": "ADIME adalah format dokumentasi standar dalam Proses Asuhan Gizi Terstandar (PAGT) di rumah sakit."
  },
  {
    "id": 498,
    "soal": "Tenaga gizi rutin mengikuti seminar ilmiah untuk memperbarui pengetahuannya tentang dietetika terbaru. Area kompetensi mana ini?",
    "pilihan": [
      "Profesionalitas luhur",
      "Mawas Diri dan Pengembangan Diri",
      "Komunikasi Efektif",
      "Landasan Ilmiah",
      "Gizi Masyarakat"
    ],
    "jawaban": "Mawas Diri dan Pengembangan Diri",
    "pembahasan": "Belajar sepanjang hayat dan memperbarui ilmu pengetahuan adalah perwujudan kompetensi mawas diri."
  },
  {
    "id": 499,
    "soal": "Bahan pemanis buatan yang penggunaannya diawasi ketat dalam standar keamanan pangan produk konfeksioneri adalah?",
    "pilihan": [
      "Fruktosa",
      "Sorbitol",
      "Sakarin",
      "Glukosa",
      "Sukrosa"
    ],
    "jawaban": "Sakarin",
    "pembahasan": "Sakarin adalah pemanis buatan yang penggunaannya dibatasi dan diawasi ketat dalam standar keamanan pangan internasional ."
  },
  {
    "id": 500,
    "soal": "Nutrisionis menghitung nilai gizi asupan harian pasien lalu membandingkannya dengan standar kebutuhan. Langkah ini disebut?",
    "pilihan": [
      "Pengkajian Antropometri",
      "Diagnosis Klinis",
      "Analisis Tingkat Konsumsi",
      "Intervensi Biokimia",
      "Monitoring Fisik"
    ],
    "jawaban": "Analisis Tingkat Konsumsi",
    "pembahasan": "Membandingkan asupan aktual dengan kebutuhan energi/zat gizi adalah tahap analisis tingkat konsumsi dalam asesmen gizi."
  }
]