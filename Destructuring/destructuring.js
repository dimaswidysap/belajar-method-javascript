const warna = ["merah", "hijau", "biru"];

// Cara lama
const satu = warna[0];
const dua = warna[1];

// Menggunakan Destructuring
const [a, b, c] = warna;

console.log(a); // "merah"
console.log(b); // "hijau"

const user = {
  nama: "Budi",
  umur: 25,
  pekerjaan: "Developer",
};

// Mengekstrak nama dan umur
const { nama, umur } = user;

console.log(nama); // "Budi"
console.log(umur); // "Budi"

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
    items: ["Keyboard", "Mousepad", "Flash disk"],
    total: 800000,
    status: "selesai",
  },
];

const laporan = pesanan
  .filter(({ status }) => status === "selesai")
  .map(({ customer, items: [, , itemKedua], total }) => {
    return {
      pelanggan: customer,
      barangUtama: itemKedua,
      pembayaran: total,
    };
  });

console.log(laporan);

// const laporanV2 = pesanan
//   .filter((status) => status.status === "selesai")
//   .map(({ customer, item: [itemPertama], total }) => {
//     return {
//       pelanggan: customer,
//       barangUtama: itemPertama,
//       pembayaran: total,
//     };
//   });

// console.log(laporanV2);
