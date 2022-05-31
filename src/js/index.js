import header from "./componentes/header.js";
import footer from "./componentes/footer.js";

//===== header componente =====
header()
footer()

//===== funcion del swiper =====
function Llamarswiper() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            880: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
            }
        },
    });
}
Llamarswiper()