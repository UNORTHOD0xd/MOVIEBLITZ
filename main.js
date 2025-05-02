// Swiper
var swiper = new Swiper(".popular-content", {
    slidesPerView: 1,
    spaceBetween: 10,   
    autoplay: {
        delay:5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 10,  
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 10,  
        },
        510:{
            slidesPerView: 2,
            spaceBetween: 10,  
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 15,  
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20,  
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    const watchBtn = document.getElementById("watchTrailerBtn");
    const videoBox = document.querySelector(".video-box");
    const closeBtn = document.getElementById("closeVideo");
    const trailerIframe = videoBox.querySelector("iframe");

    // Save the original src to restore it later
    const trailerSrc = trailerIframe.src;

    watchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        videoBox.style.display = "block";
        trailerIframe.src = trailerSrc + "&autoplay=1"; // Autoplay on open
    });

    closeBtn.addEventListener("click", () => {
        videoBox.style.display = "none";
        trailerIframe.src = ""; // Stop the video
        trailerIframe.src = trailerSrc; // Reset the source
    });
});

document.getElementById('user-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = 'login.html'; // Redirect to login page
  });
