/*global $*/
//=require "./vendors/jquery-3.2.1.min.js"
//=require "./vendors/fontawesome-all.min.js"
//=require "./vendors/popper.js"
//=require "./vendors/wow.min.js"
//=require "./vendors/bootstrap.min.js"
//=require "./vendors/jquery.countTo.js"
//=require "./vendors/jquery.nicescroll.min.js"

$(function () {
    "use strict";

    // initiate Wow plugin
    new WOW().init();

    // config and init niceScroll plugin
    if (window.innerWidth > 1024) {
        $("html").niceScroll({
            cursorcolor: "#ee1c25",
            cursorwidth: "10px",
            cursorborder: "none",
            horizrailenabled: false,
            zindex: 10,
        });
    }

    // show the return to top button when we scroll down a little
    $(window).scroll(function () {
        if ($(this).scrollTop() > $(this).height()) {
            $(".goup").fadeIn();
        } else {
            $(".goup").fadeOut();
        }
    });

    // fade out the non-selected work images
    $(".featured li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".imgs .row div").css("opacity", ".1");
        $(".imgs .row div" + $(this).data("class")).css("opacity", "1");
    });

    // toggle active status on links when clicking them
    $(".navbar li a").click(function () {
        $(".navbar li a").removeClass("active");
        $(this).addClass("active");
    });

    // "return to top" button functionality
    $(".goup").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1500);
    });

    // make the stats start counting slightly before scroll reaches it
    $(window).scroll(function () {
        if ($(this).scrollTop() >= $(".stat").offset().top - 500) {
            $(".stat span:first-of-type").countTo();
        }
    });
});
