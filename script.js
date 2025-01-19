const swiper = new Swiper('.slider-wrapper', {
    // Optional parameters
    loop: true,
    spaceBetween: 25,
    grabCursor: true,
    speed: 7000,
    // freeMode: true,
    autoplay: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }

});

let hamburger = document.querySelector(".hamburger")
let list_item = document.querySelector(".m-list-item")
let scrollbtn = document.querySelector("#scroll-btn")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 70) {
        scrollbtn.style.display = "block"
    } else {
        scrollbtn.style.display = "none"

    }

    scrollbtn.addEventListener("click", () => {
        document.documentElement.scrollTop = 0
    })
}

hamburger.addEventListener("click", () => {
    list_item.classList.toggle("activemenu")

    if (list_item.classList.contains("activemenu")) {
        list_item.style.display = "flex"
        hamburger.classList.add("activeham")
        hamburger.style.position = "fixed"
    } else {
        hamburger.classList.remove("activeham")
        list_item.style.display = "none"
        hamburger.style.position = "absolute"

    }
})