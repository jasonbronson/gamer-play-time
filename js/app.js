/* Theme Name: Zairo - Responsive bootsrap 4 Landing Page Template
   Author: GamerPlaytime
   Version: 1.1.0
   Created: Nov 2018
   File Description: Main Js file of the template
*/



(function ($) {

    "use strict";

    // Sticky Navbar
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }

        // Back to top
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        } 
    });

    // Smooth Link
    $('.nav-item a, .mouse-down a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //Scrollspy
    $("#navbarCollapse").scrollspy({
        offset: 70
    });

    // Loader
    $(window).on('load', function () {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
    });

    //signup
    $('.signup').click(function(){
        //show modal
        $('#SignupModal').modal();
    });

    // Magnific Popup
    $('.video-play-icon').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Back to top
    $('.back-to-top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    // Working Contact Form
    $('#contact-form').submit(function() {
        var action = $(this).attr('action');

        $("#message").slideUp(750, function() {
            $('#message').hide();

            $('#submit')
                .before('')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    comments: $('#comments').val(),
                },
                function(data) {
                    document.getElementById('message').innerHTML = data;
                    $('#message').slideDown('slow');
                    $('#cform img.contact-loader').fadeOut('slow', function() {
                        $(this).remove()
                    });
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#cform').slideUp('slow');
                }
            );

        });

        return false;

    });

    $('#contact-form').submit(function() {
        var action = $(this).attr('action');

        $("#message").slideUp(750, function() {
            $('#message').hide();

            $('#contact-form')
                .before('')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#contact-name').val(),
                    email: $('#contact-email').val(),
                    comments: $('#contact-game').val(),
                },
                function(data) {
                    document.getElementById('contact-form').innerHTML = JSON.parse(data);
                    if (data.match('success') != null) console.log("Successfully sent");
                }
            );

        });

        return false;

    });

    $('#signup-form').submit(function() {
        var action = $(this).attr('action');

        $("#message").slideUp(750, function() {
            $('#message').hide();

            $('#signup-form')
                .before('')
                .attr('disabled', 'disabled');

            $.post(action, {
                    name: $('#signup-name').val(),
                    email: $('#signup-email').val(),
                    comments: $('#signup-game').val(),
                },
                function(data) {
                    document.getElementById('signup-form').innerHTML = JSON.parse(data);
                    if (data.match('success') != null) console.log("Successfully sent");
                }
            );

        });

        return false;

    });
    



})(jQuery);