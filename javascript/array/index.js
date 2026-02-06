const data = [
  {
    nama: "budi",
    age: 70,
  },
  {
    nama: "yoga",
    age: 20,
  },
  {
    nama: "Bambang",
    age: 60,
  },
  {
    nama: "Dimas",
    age: 23,
  },
  {
    nama: "Vano",
    age: 16,
  },
  {
    nama: "Rendi",
    age: 17,
  },
];

const belanja = [
  {
    barang: "semangka",
    price: 20000,
  },
  {
    barang: "Beras",
    price: 135000,
  },
  {
    barang: "gula",
    price: 14000,
  },
];

const angka = [90, 60, 1, 2, 3, 4, 80];

const buah = ["semangka", "nangka", "jeruk"];

//Array Transformation (Mengubah Data)
console.log(buah.map((items) => items + " " + "segar"));
console.log(data.filter((items) => items.age <= 30));
console.log(
  data.filter((items) => items.age <= 30).sort((a, b) => a.age - b.age),
);
console.log(belanja.reduce((total, item) => total + item.price, 0));

//Array Searching & Testing (Mencari Data)
console.log(belanja.find((items) => items.barang === "gula"));
console.log(belanja.findIndex((items) => items.barang === "semangka"));
console.log(buah.includes("nangka"));
const barangMahal = belanja.filter((item) => item.price >= 100000);

if (barangMahal.length > 0) {
  console.log(barangMahal);
} else {
  console.log("tidak ada");
}

const inputBarang = "semangka";

const cekBelanja = belanja.some((items) => items.barang === `${inputBarang}`);

if (cekBelanja === true) {
  console.log(`anda belanja ${inputBarang}`);
} else {
  console.log(`anda tidak belanja ${inputBarang}`);
}

const absen = [
  {
    nama: "budi",
    age: 70,
    absen: true,
  },
  {
    nama: "yoga",
    age: 20,
    absen: true,
  },
  {
    nama: "Bambang",
    age: 60,
    absen: true,
  },
  {
    nama: "Dimas",
    age: 23,
    absen: true,
  },
  {
    nama: "Vano",
    age: 16,
    absen: false,
  },
  {
    nama: "Rendi",
    age: 17,
    absen: false,
  },
];

const cekAbsen = absen.every((items) => items.absen === true);

if (cekAbsen === true) {
  console.log("Semua murid hadir");
} else {
  console.log("ada murid yang tidak hadir");
  console.log(absen.filter((items) => items.absen === false));
}

//
console.log(angka.sort((a, b) => a - b));
console.log(angka.sort((a, b) => b - a));

console.log(buah.some((items) => items === "jeruk"));
console.log(data.some((items) => items.age >= 60));
