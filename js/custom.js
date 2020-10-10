$(document).ready(function () {

    AOS.init();


    //navtoggle body class

    $(".navbar-toggler").click(function () {
        $("body").toggleClass("navOpened");
    });

    $(document).click(function () {
        $("body").removeClass("navOpened");
    });

    $(".navbar-toggler,.mobile-navbar").click(function (event) {
        event.stopPropagation();
    });

    function dynamicFunctions() {

        //getting dimensions
        var headerHeight = $(".main-header").height();
        var containerMargin = parseInt($(".main-header .container").css("margin-right"));

        //defining css variables
        $("body").get(0).style.setProperty("--navbar-height", headerHeight + 'px');
        $("body").get(0).style.setProperty("--containerMargin", containerMargin + 'px');


        //page loading effect
        setTimeout(function () {
            $(".init-loader").addClass("loaded");
        }, 800);

        //home-banner
        if ($("window").width() > 1450) {
            $(".banner .parallax-bg").css({
                "margin-right": "-" + (containerMargin + 15) + 'px',
                "margin-left": "-" + ((containerMargin + 15) * .85) + 'px'
            })

        } else if ($(window).width() > 1200) {
            $(".banner .parallax-bg").css({
                "margin-right": "-" + (containerMargin + 15) + 'px',
                "margin-left": "-" + (280) + 'px'
            })
        }

        //slider custom container

        $(".slider-container-left").css("margin-left", containerMargin);
        $(".slider-container-right").css("margin-right", containerMargin);
        $("section.contact").css("margin-left", containerMargin);

    }

    developmentCycleSlider();

    dynamicFunctions();
    $(window).resize(function () {
        dynamicFunctions();
        developmentCycleSlider();
    });

    //parallax
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        // $(".banner .parallax-image.x1 img").css("transform", "translateY("+scrollTop*.1+"px)");
        $(".banner .parallax-scroll.x1").css("transform", "translateY(" + scrollTop * .1 + "px)");
        $(".banner .parallax-scroll.x2").css("transform", "translateY(" + scrollTop * .125 + "px)");
        $(".banner .parallax-scroll.x3").css("transform", "translateY(" + scrollTop * .15 + "px)");
        if (scrollTop > 5) {
            $("body").addClass("scrolled");
        } else {
            $("body").removeClass("scrolled");
        }
    })

    $(".parallax-sec").mouseenter(function () {
        $(this).addClass("hovered");
    });

    $(".parallax-sec").mouseleave(function () {
        $(this).removeClass("hovered");
    });

    $('.banner').mousemove(function (e) {
        var valueX = (e.pageX * -1 / 60);
        var valueY = (e.pageY * -1 / 60);

        $('.banner .parallax-bg .bg').css({
            'transform': 'translate3d(' + valueX + 'px,' + valueY + 'px,0)'
        });

        $('.banner .collegues .main-img-wrap, .banner .collegues .papers-wrap').css({
            'transform': 'translate3d(' + (-valueX / 2) + 'px,' + (-valueY / 2) + 'px,0)'
        });
    });

    $(".portfolio .slider").slick({
        autoplay: false,
        infinite: true,
        autoplaySpeed: 3500,
        speed: 500,
        arrows: false,
        pauseOnHover: false
    });
    
    $(".testimonials .slider-wrapper").slick({  
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: $('.testimonials .arrows-wrap .left'),
        nextArrow: $('.arrows-wrap .right'),
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".services .slider-wrapper, .blog-section .blogs-list").slick({
        infinite: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 1500,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.services .arrows-wrap .left'),
        nextArrow: $('.services .arrows-wrap .right'),
        responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })


    $(".process-card-wrappers .card").mouseover(function () {
        var thisIndex = $(this).index();
        $(".process-card-wrappers .card").removeClass("active");
        for (var i = 0; i < thisIndex; i++) {
            $(".process-card-wrappers .card").eq(i).addClass("active");
        }
    });

});

function developmentCycleSlider() {
    if ($(window).width() < 992) {
        $(".process-card-wrappers").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        })
    }

}