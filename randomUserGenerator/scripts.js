const userCard = document.getElementById("user-card");
const btn = document.getElementById("refresh-btn");

// Fungsi utama untuk mengambil data
async function fetchUser() {
  try {
    // Tampilkan pesan loading
    userCard.innerHTML = "<p>Sedang mencari...</p>";

    // 1. Kirim permintaan ke API
    const response = await fetch("https://randomuser.me/api/");

    // 2. Cek jika respon sukses (status 200-299)
    if (!response.ok) {
      throw new Error("Gagal mengambil data dari server");
    }

    // 3. Ubah respon menjadi format JSON
    const data = await response.json();

    // 4. Ambil data user pertama dari array results
    const user = data.results[0];

    // Tampilkan ke layar
    renderUser(user);
  } catch (error) {
    // Tangani jika terjadi error (misal internet mati)
    userCard.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
}

// Fungsi untuk menampilkan data ke HTML
function renderUser(user) {
  userCard.innerHTML = `
        <img src="${user.picture.large}" alt="Foto Profil">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>${user.email}</p>
        <p>📍 ${user.location.city}, ${user.location.country}</p>
    `;
}

// Jalankan fungsi saat tombol diklik
btn.addEventListener("click", fetchUser);

// Jalankan sekali saat halaman pertama kali dibuka
fetchUser();
