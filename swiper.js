const swiper = new Swiper('.swiper', {
    speed: 700,
    spaceBetween: 100,
    sliderPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});