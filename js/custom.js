$(document).ready(function(){

    //page loading effect
    setTimeout(function() {
    $(".init-loader").addClass("loaded");
    }, 800);

    setTimeout(function() {  
        $("body").css({"overflow": 'auto',"height": "auto"});
     }, 3000);


    //getting dimensions
    var headerHeight = $(".main-header").height();
    var containerMargin = parseInt($(".main-header .container").css("margin-right"))+15;

    //defining css variables
    $("body").get(0).style.setProperty("--navbar-height", headerHeight+'px');

    //home-banner
    $(".banner .parallax-sec").css({
        "margin-right": "-"+containerMargin+'px',
        "margin-left": "-"+(containerMargin*1.5)+'px'
    })

    //parallax
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        $(".banner .parallax-sec img").css("transform", "translateY("+scrollTop*.1+"px)");
        $(".banner .parallax-sec").css("background-position", "center"+ -scrollTop*.75 +"px")
    })

});