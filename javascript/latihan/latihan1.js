const angka = [1, 2, 3, 4, 5];
// kuadrat

console.log(angka.map((items) => items * items));

const umur = [12, 18, 25, 14, 30, 16];
// filter umur
console.log(umur.filter((items) => items >= 18));

const harga = [10000, 20000, 15000, 5000];
//menjumlahkan semua angka
console.log(harga.reduce((items, index) => items + index, 0));

const produk = {
  nama: "Laptop",
  harga: 12000000,
  stok: 5,
};

const hasil = Object.entries(produk).map(([key, value]) => `${key}: ${value}`);

console.log(hasil);

const kalimat = "belajar javascript itu menyenangkan";

const capitalizeWords = (text) =>
  text
    .split(" ")
    .map((kata) => kata.charAt(0).toUpperCase() + kata.slice(1))
    .join(" ");

console.log(capitalizeWords(kalimat));
