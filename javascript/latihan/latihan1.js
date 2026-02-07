const celsius = [0, 25, 30];

const fahrenheit = celsius.map((items) => {
  return (items * 9) / 5 + 32;
});

console.log(fahrenheit);

const daftarEmail = [
  "admin@gmail.com",
  "user.baru@yahoo.com",
  "spam@bot.com",
  "kontak@gmail.com",
];
const hasil = daftarEmail.filter((email) => email.includes("gmail.com"));

console.log(hasil);

const users = [
  { id: 1, name: "Andi" },
  { id: 2, name: "Budi" },
  { id: 3, name: "Caca" },
];

const userDicari = users.findLast((items) => items.id === 2);

console.log(userDicari);

const stokBarang = [10, 15, 0, 8];
const semuaTersedia = stokBarang.every((stok) => stok > 0);
console.log(semuaTersedia);

proyek = { id: 101, judul: "Web Portofolio", status: "Selesai" };
console.log(proyek);
const proyekArray = Object.values(proyek);
console.log(proyekArray);

const prices = [100, 200, 300, 400];
// TUGAS: Buatlah variabel 'discountedPrices' yang berisi harga di atas
// yang sudah dipotong diskon 10% (dikali 0.9).

const discountedPrices = prices.map((items) => {
  return items * 0.9;
});

console.log(discountedPrices);

const inventory = [
  { name: "Laptop", stock: 5 },
  { name: "Mouse", stock: 0 },
  { name: "Keyboard", stock: 12 },
  { name: "Monitor", stock: 0 },
];

// TUGAS: Buat variabel 'availableItems' yang hanya berisi produk
// yang stoknya lebih besar dari 0.

const availableItems = inventory.filter((items) => items.stock > 0);
console.log(availableItems);

const ages = [18, 21, 15, 30, 12];

const cekUmur = ages.some((items) => items < 17);
console.log(cekUmur);

const usersFb = ["ahmad", "budi", "chandra"];

console.log(usersFb.map((items) => "Hallo " + items));
