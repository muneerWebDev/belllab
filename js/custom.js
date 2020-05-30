$(document).ready(function () {
    AOS.init();
    //page loading effect
    setTimeout(function () {
        $(".init-loader").addClass("loaded");
    }, 800);

    setTimeout(function () {
        $("body").css({
            "overflow": 'auto',
            "height": "auto"
        });
    }, 3000);


    //getting dimensions
    var headerHeight = $(".main-header").height();
    var containerMargin = parseInt($(".main-header .container").css("margin-right")) + 15;

    //defining css variables
    $("body").get(0).style.setProperty("--navbar-height", headerHeight + 'px');

    //home-banner
    $(".banner .parallax-bg").css({
        "margin-right": "-" + containerMargin + 'px',
        "margin-left": "-" + (containerMargin * 1.5) + 'px'
    })

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
    // $('.banner').mousemove(function (e) {
    //     var x = e.pageX - this.offsetLeft;
    //     if ($('.banner .parallax-bg .bg').css('right') <= '400') {
    //         $('.banner .parallax-bg .bg').css({
    //             'right': x
    //         });
    //         console.log(x);
    //     }
    // });

    $('.banner').mousemove(function(e){
        var valueX=(e.pageX * -1 / 100); 
        var valueY=(e.pageY * -1 / 100); 
         
        $('.banner .parallax-bg .bg').css({
            'transform':'translate3d('+valueX+'px,'+valueY+'px,0)'
        });
        // $('.banner .parallax-bg .main-g').css({
        //      'transform':'translate3d('+(valueX/2)+'px,'+(valueX/2)+'px,0)'
        //  });
     });
});