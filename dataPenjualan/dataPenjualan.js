async function ambilDataPenjualan() {
  try {
    // Memanggil file lokal di folder yang sama
    const response = await fetch("./dataPenjualan/data.json");

    if (!response.ok) {
      throw new Error("Gagal memuat file data.json");
    }

    const dataPenjualan = await response.json();

    // Tampilkan data ke console atau tabel
    tampilkanTabel(dataPenjualan);
  } catch (error) {
    console.error("Waduh, ada error:", error);
  }
}

function tampilkanTabel(data) {
  const tabelBody = document.getElementById("tabel-isi");
  tabelBody.innerHTML = ""; // Kosongkan dulu

  data.forEach((item) => {
    tabelBody.innerHTML += `
            <tr>
                <td>${item.produk}</td>
                <td>${item.terjual}</td>
                <td>Rp ${item.total_pendapatan.toLocaleString("id-ID")}</td>
            </tr>
        `;
  });
}

ambilDataPenjualan();
