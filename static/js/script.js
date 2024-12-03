let slideIndex = 0; // Hanya satu deklarasi

// Pastikan JavaScript dijalankan setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    showSlides(); // Mulai slideshow otomatis setelah DOM dimuat
});

function showSlides() {
    const slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) {
        console.error("No slides found!"); // Cek jika tidak ada elemen dengan class mySlides
        return;
    }

    // Menyembunyikan semua slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++; // Increment slideIndex untuk menampilkan slide berikutnya

    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset ke slide pertama jika melebihi jumlah slide
    }

    slides[slideIndex - 1].style.display = "block"; // Menampilkan slide yang sesuai

    setTimeout(showSlides, 10000); // Memanggil showSlides lagi setelah 5 detik
}

// Fungsi untuk navigasi slide secara manual
function plusSlides(n) {
    const slides = document.getElementsByClassName("mySlides");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Menyembunyikan semua slide
    }

    slideIndex += n;

    if (slideIndex > slides.length) {
        slideIndex = 1; // Reset ke slide pertama
    }

    if (slideIndex < 1) {
        slideIndex = slides.length; // Reset ke slide terakhir
    }

    slides[slideIndex - 1].style.display = "block"; // Menampilkan slide yang sesuai
}
