$(function() {
    $(".review-slider").slick({
        vertical:true,
        // centerMode:true,
        autoplay:true,
        prevArrow:'<i class="fa-solid fa-arrow-down prev"></i>',
        nextArrow:'<i class="fa-solid fa-arrow-up next"></i>'
    })


    // bottom to top
    $(window).scroll(function(){
        console.log($(window).scrollTop())
    
        if($(window).scrollTop() >300){
    $(".menu").addClass("nav-scroll")
        }else{
            $(".menu").removeClass("nav-scroll") 
        }


 if($(window).scrollTop() >600){
          $(".top-button") .fadeIn()
              }else{
                $(".top-button") .fadeOut()
              }


    })   


    $(".top-button").click(function(){
        $("html,body").animate({
          scrollTop:0
        },1000)
        })


        new WOW().init();


        $(".screen-main").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            cellpadding: "0px"
        })
    
})