$(document).ready(function(){
    
    function changeSlide (){        
        if($(".slide-item-1").hasClass('slick-current')){
            $("header").css({background: "url(images/Rectangle.png) no-repeat top left, url(images/bg-1.png) no-repeat center top"})
        }
        if($(".slide-item-2").hasClass('slick-current')){
            $("header").css({background: "url(images/Rectangle.png) no-repeat top left, url(images/bg-2.png) no-repeat center top"})
        }
        if($(".slide-item-3").hasClass('slick-current')){
            $("header").css({background: "url(images/Rectangle.png) no-repeat top left, url(images/bg-3.png) no-repeat center top"})
        }
        if($(".slide-item-4").hasClass('slick-current')){
            $("header").css({background: "url(images/Rectangle.png) no-repeat top left, url(images/bg-4.png) no-repeat center top"})
        }
    }

    
    $("#slick-slide-control00").click(function(){
        setTimeout(changeSlide, 20);
    });
    $("#slick-slide-control01").click(function(){
        setTimeout(changeSlide, 20);
    });
    $("#slick-slide-control02").click(function(){
        setTimeout(changeSlide, 20);
    });
    $("#slick-slide-control03").click(function(){
        setTimeout(changeSlide, 20);
    });
    $(".slick-arrow").click(function(){
        setTimeout(changeSlide, 20);
    });


 
});