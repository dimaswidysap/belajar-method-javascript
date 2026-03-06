const inventory = [
  {
    id: "p1",
    nama: " Laptop gaming ",
    kategori: "Elektronik",
    harga: 15000000,
    stok: 5,
  },
  {
    id: "p2",
    nama: " Kursi Kantor ",
    kategori: "Furnitur",
    harga: 1200000,
    stok: 0,
  },
  {
    id: "p3",
    nama: " Mouse Wireless ",
    kategori: "Elektronik",
    harga: 350000,
    stok: 12,
  },
  {
    id: "p4",
    nama: " Meja Lipat ",
    kategori: "Furnitur",
    harga: 500000,
    stok: 8,
  },
  {
    id: "p5",
    nama: " Headset Bluetooth ",
    kategori: "Elektronik",
    harga: 800000,
    stok: 15,
  },
];

/*
Tugas Coding
1. Pembersihan Data & Transformasi (Map & Trim)
Buatlah array baru bernama inventoryBersih. Di dalamnya, setiap properti nama harus sudah dibersihkan dari spasi di awal/akhir (menggunakan trim) dan diubah menjadi huruf kapital semua.

2. Filter & Pencarian (Filter & Includes)
Cari semua produk yang masuk dalam kategori "Elektronik" DAN memiliki harga di atas 500.000. Simpan dalam variabel elektronikMahal.

3. Cek Ketersediaan Stok (Every & Some)
Gunakan every untuk mengecek apakah semua produk memiliki stok lebih dari 0. Cetak hasilnya (true/false).

Gunakan some untuk mengecek apakah ada produk yang harganya di bawah 400.000. Cetak hasilnya.

4. Total Nilai Aset (Reduce)
Hitunglah total nilai seluruh aset di gudang.

Rumus: Total = Sum (harga * stok) untuk setiap barang.
Contoh: Jika ada 2 barang seharga 10rb, maka totalnya 20rb. Hitung untuk semua item di inventory.

5. Manipulasi String & Array (Split, Join, Slice)
Ambil produk pertama dari array inventory (Laptop Gaming). Ubah namanya menjadi format URL friendly.

Contoh: " Laptop gaming " menjadi "laptop-gaming".

Hint: Gunakan trim, toLowerCase, split, dan join. */

// soal pertama
const inventoryBersih = inventory.map((item) => {
  return {
    ...item,
    nama: item.nama.trim().toUpperCase(),
  };
});

console.log(inventoryBersih);

// soal kedua

const elektronikMahal = inventoryBersih.filter((items) => {
  return items.kategori === "Elektronik" && items.harga > 500000;
});

console.log(elektronikMahal);

// soal ketiga

const semuaReady = inventoryBersih.every((item) => item.stok > 0);
const adaDiskon = inventoryBersih.some((item) => item.harga < 400000);
console.log(semuaReady, adaDiskon);

// soal keempat

const totalAset = inventory.reduce((total, item) => {
  // Hitung nilai per barang (harga dikali stok)
  const nilaiPerBarang = item.harga * item.stok;

  // Tambahkan nilai tersebut ke akumulator (total)
  return total + nilaiPerBarang;
}, 0); // Angka 0 di sini adalah nilai awal (initial value)

console.log(`Total nilai aset di gudang: Rp ${totalAset}`);

// soal kelima
let laptopGaming = inventoryBersih.find((items) => items.id === "p1");
console.log(laptopGaming);

const laptop = {
  ...laptopGaming,
  slug: laptopGaming.nama.toLowerCase().trim().split(" ").join("-"),
};
console.log(laptop.slug);

const users = [
  { id: 1, nama: "Budi Santoso", role: "admin", poin: 150, aktif: true },
  { id: 2, nama: "Yoga Pratama", role: "user", poin: 80, aktif: false },
  { id: 3, nama: "Bambang Wijaya", role: "user", poin: 200, aktif: true },
  { id: 4, nama: "Dimas Ramadhan", role: "admin", poin: 50, aktif: true },
  { id: 5, nama: "Vano Aris", role: "user", poin: 120, aktif: true },
  { id: 6, nama: "Vano Gadi Wijaya", role: "user", poin: 120, aktif: true },
];

/*
Tugas Coding (Batch 2)
1. Grouping Data (Filter & Map)
Buatlah sebuah array baru bernama daftarAdmin. Array ini hanya berisi nama-nama user (string saja) yang memiliki role "admin".

Hasil yang diharapkan: ["Budi Santoso", "Dimas Ramadhan"]

2. Pencarian Detail (Find & Includes)
Cari objek user yang namanya mengandung kata "Wijaya". Gunakan metode find dan includes. Simpan dalam variabel userSpesifik.

3. Update Poin Masal (Map & Conditional)
Bayangkan ada event bonus! Buat array userUpdated. Gunakan map untuk memberikan tambahan 50 poin hanya kepada user yang statusnya aktif. User yang tidak aktif poinnya tetap.

Hint: Gunakan if-else atau ternary operator condition ? true : false di dalam map.

4. Pengurutan & Ranking (Sort & Slice)
Tampilkan 3 besar user dengan poin tertinggi.

Langkah: Urutkan (sort) poin dari besar ke kecil, lalu ambil 3 data teratas menggunakan slice.

5. Statistik User (Reduce & Math)
Hitung rata-rata poin dari seluruh user yang ada.

Langkah: Gunakan reduce untuk mendapatkan total semua poin, lalu bagi dengan jumlah total user (users.length).

Bonus: Gunakan Math.round() untuk membulatkan hasilnya. */

// soal pertama
const daftarAdmin = users
  .filter((user) => user.role === "admin") // Menyaring hanya yang role-nya "admin"
  .map((user) => user.nama); // Mengambil properti "nama" saja

console.log(daftarAdmin);

// soal kedua

const userSpesifik = users.filter((items) => items.nama.includes("Wijaya"));
console.log(userSpesifik);

// soal ketiga

const userUpdated = users
  .filter((userActive) => userActive.aktif === true)
  .map((bonus) => {
    return {
      ...bonus,
      poin: bonus.poin + 50,
    };
  });

console.log(userUpdated);

// soal keempat
const topThree = users.sort((a, b) => b.poin - a.poin).slice(0, 3);

console.log(topThree);

// soal kelima
const jumlahVariable = users.length;
console.log(jumlahVariable);

const jumlahPoint = users
  .map((items) => items.poin)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(jumlahPoint);

const avgPoin = jumlahPoint / jumlahVariable;

console.log(avgPoin);

const pesanan = [
  {
    id: "TX01",
    customer: "Andi",
    items: ["Buku", "Pena"],
    total: 50000,
    status: "selesai",
  },
  {
    id: "TX02",
    customer: "Budi",
    items: ["Laptop"],
    total: 15000000,
    status: "proses",
  },
  {
    id: "TX03",
    customer: "Citra",
    items: ["Meja", "Kursi"],
    total: 1200000,
    status: "selesai",
  },
  {
    id: "TX04",
    customer: "Dewi",
    items: ["Mouse"],
    total: 300000,
    status: "batal",
  },
  {
    id: "TX05",
    customer: "Eka",
    items: ["Keyboard", "Mousepad"],
    total: 800000,
    status: "selesai",
  },
];

/*1. Ringkasan Nama & Total (Map)
Buat array baru bernama ringkasanPesanan. Setiap elemennya harus berupa string dengan format:
"Pesanan TX01 oleh Andi totalnya Rp 50000".

Hint: Gunakan Template Literals (backtick `).

2. Filter Status & Nominal (Filter)
Cari semua pesanan yang statusnya "selesai" DAN total harganya di atas 1.000.000. Simpan dalam variabel pesananBesarSelesai.

3. Cek Keamanan Transaksi (Every)
Gunakan every untuk mengecek apakah semua pesanan memiliki properti id yang diawali dengan huruf "TX".

Hint: Gunakan method string .startsWith("TX").

4. Transformasi Array Dalam Array (Includes)
Cari semua objek pesanan yang di dalam array items-nya mengandung barang "Mouse".

Hint: Gunakan filter yang di dalamnya mengecek item.items.includes("Mouse").

5. Total Pendapatan Real (Reduce & Filter)
Hitunglah total uang yang didapat hanya dari pesanan yang statusnya "selesai".

Langkah: Filter dulu yang "selesai", baru jalankan reduce untuk menjumlahkan total. */

// soal pertama

const ringkasanPesanan = pesanan.map((items) => {
  // "Pesanan TX01 oleh Andi totalnya Rp 50000".

  const detail = `Pesanan ${items.id} oelh ${items.customer} totalnya Rp ${items.total}`;

  return detail;
});

console.log(ringkasanPesanan);

// soal kedua

const pesananBesarSelesai = pesanan.filter(
  (items) => items.status === "selesai" && items.total > 1000000,
);

console.log(pesananBesarSelesai);

// soal ketiga

const security = pesanan.every((items) => items.id.startsWith("TX"));

console.log(security);

// soal keempat

const includeMouse = pesanan.filter((items) => items.items.includes("Mouse"));

console.log(includeMouse);

// soal kelima

const suksesTransaksi = pesanan.filter((status) => status.status === "selesai");

console.log(suksesTransaksi);

const totalPendapatan = suksesTransaksi
  .map((price) => price.total)
  .reduce((acc, curr) => {
    return acc + curr;
  }, 0);

console.log(totalPendapatan);
//
