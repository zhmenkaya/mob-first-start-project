const slideSrettings = {
    slidesToShow: 1,
    arrow:true,
    dots:true,
    responsive:[
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
}

$(window).on("load resize", function() {
    const width = $(document).width();
    
    if (width >= 1280) {
        $('.slider').slick('unslick');
    } else {
        $('.slider').not('.slick-initialized').slick(slideSrettings);
    }
});


