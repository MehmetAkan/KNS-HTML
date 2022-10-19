$('.toggle-menu').click(function() {
    $(this).toggleClass('active');
    $('#wrapper').toggleClass('wrapper-open');
    $('#body').toggleClass('body-open');
});

var swiper = new Swiper('.concept-swiper', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.concept-owl-button-right',
        prevEl: '.concept-owl-button-left',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    }
});
var swiper = new Swiper('.project-swiper', {
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.project-owl-button-right',
        prevEl: '.project-owl-button-left',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
        clickable: true,
    }
});
var swiper = new Swiper('.gallery-swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    navigation: {
        nextEl: '.gallery-owl-button-right',
        prevEl: '.gallery-owl-button-left',
    },
});