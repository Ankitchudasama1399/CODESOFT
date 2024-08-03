$(document).ready(function() {
    
    var slider = $('.slider1').slick({
        infinite: false,
        nextArrow: '.next_btn',
        prevArrow: '.prev_btn',
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

   
    $('.prev_btn').click(function() {
        slider.slick('slickPrev');
    });

    
    $('.next_btn').click(function() {
        slider.slick('slickNext');
    });
});



$(document).ready(function() {
    
    var slider = $('.slider2').slick({
        infinite: false,
        nextArrow: '.Next_btn',
        prevArrow: '.Prev_btn',
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

   
    $('.Prev_btn').click(function() {
        slider.slick('slickPrev');
    });

    
    $('.Next_btn').click(function() {
        slider.slick('slickNext');
    });
});



$(document).ready(function() {
    
    var slider = $('.slider3').slick({
        infinite: false,
        nextArrow: '.NExt_btn',
        prevArrow: '.PRev_btn',
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

   
    $('.PRev_btn').click(function() {
        slider.slick('slickPrev');
    });

    
    $('.NExt_btn').click(function() {
        slider.slick('slickNext');
    });
});


$(document).ready(function() {
    
    var slider = $('.slider4').slick({
        infinite: false,
        nextArrow: '.NEXt_btn',
        prevArrow: '.PREv_btn',
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 475,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

   
    $('.PREv_btn').click(function() {
        slider.slick('slickPrev');
    });

    
    $('.NEXt_btn').click(function() {
        slider.slick('slickNext');
    });
});

