$('.header-bottom__slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: "<img src='../img/header/right.png' class='slick-next next' alt='2'>",
    prevArrow: "<img src='../img/header/left.png' class='slick-prev prev' alt='2'>",
    pauseOnHover: false
});






$('.posts-bottom').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    nextArrow: $('.posts-arrows__right'),
    prevArrow: $('.posts-arrows__left')
});

// $('.video__media-content-start').click({
//     $('.video__media-item').toggleClass('.video__media-item-active');
// });