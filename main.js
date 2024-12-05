let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});

document.addEventListener("DOMContentLoaded", function () {
  const videos = [
      "assets/images/vid-1.mp4",
      "assets/images/vid-2.mp4",
      "assets/images/vid-3.mp4",
      "assets/images/vid-4.mp4",
      "assets/images/vid-pari.mp4"
  ];

  let currentIndex = 0;
  const videoElement = document.getElementById("video-slider");

  function slideVideo() {
      // Tambahkan class 'hidden' untuk fade-out
      videoElement.classList.add("hidden");

      // Tunggu transisi selesai, lalu ubah video
      setTimeout(() => {
          currentIndex = (currentIndex + 1) % videos.length; // Loop kembali ke awal jika sudah di akhir

          videoElement.src = videos[currentIndex];
          videoElement.play(); // Memastikan video langsung diputar

          // Hapus class 'hidden' untuk fade-in
          videoElement.classList.remove("hidden");

          // Panggil fungsi lagi setelah durasi video
          setTimeout(slideVideo, 7000); // Semua video diputar selama 8 detik
      }, 1000); // Durasi fade-out
  }

  // Mulai rotasi video
  slideVideo();
});
