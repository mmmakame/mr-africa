(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // whatsapp
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.whatsapp').fadeIn('slow');
        } else {
            $('.whatsapp').fadeOut('slow');
        }
    });
    $('.whatsapp').click(function () {
        // $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        window.open("https://api.whatsapp.com/send?phone=255675084460&text=Hello! Mr Africa!, I Would Like to....")
        return false;
    });

     // instagram
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.instagram').fadeIn('slow');
        } else {
            $('.instagram').fadeOut('slow');
        }
    });
    $('.instagram').click(function () {
        // $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        window.open("https://www.instagram.com/mrafricatours/?hl=en")
        return false;
    });

     // whatsapp
     $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.facebook').fadeIn('slow');
        } else {
            $('.facebook').fadeOut('slow');
        }
    });
    $('.facebook').click(function () {
        // $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        window.open("https://www.facebook.com/Mr-Africa-Tours-Safari-126046332126210/")
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


