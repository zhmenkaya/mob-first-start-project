$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        arrow:true,
        dots:true,
        responsive:[
            {
                breakpoint:1280,
                settings:"unlick"
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:true,
                    dots:true,
                }
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:true,
                    dots:true,
                }
            },
            {
                breakpoint:320,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow:true,
                    dots:true,
                }
            }
        ]
    });
});
