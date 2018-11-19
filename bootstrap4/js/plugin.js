/*global $*/

$(function () {

	"use strict";

	new WOW().init();

	$("html").niceScroll({

		cursorcolor: "#ee1c25",
		cursorwidth: "10px",
		cursorborder: "none",
		horizrailenabled: false,
		zindex: 10,
	});

	var winh = $(window).height(),

		winw = $(window).width(),

		navh = $(".navbar").innerHeight(),

		upperh = $(".upper-bar").innerHeight();


	$("#carouselid, #carouselid img,.testimonials").height(winh - navh - upperh);

	$(".testimonials").height(winh - 100);

	$("#carouselid, #carouselid img").width("100%");

	$(window).resize(function () {

		var winh = $(window).height(),

			winw = $(window).width(),

			navh = $(".navbar").innerHeight(),

			upperh = $(".upper-bar").innerHeight();


		$("#carouselid, #carouselid img,.testimonials").height(winh - navh - upperh);

		$(".testimonials").height(winh - 100);

		$("#carouselid, #carouselid img").width("100%");
	});
	$(".featured li").click(function () {

		$(this).addClass("active").siblings().removeClass("active");

		$(".imgs .row div").css("opacity", ".1");

		$(".imgs .row div" + $(this).data("class")).css("opacity", "1");
	});

	$(".navbar li a").click(function () {

		$(".navbar li a").removeClass("active");

		$(this).addClass("active");
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > $(this).height()) {
			$('.goup').fadeIn();
		} else {
			$('.goup').fadeOut();
		}
	});

	$(".goup").click(function () {

		$("html,body").animate({
			scrollTop: 0
		}, 1500);
	});

	$(window).scroll(function () {

		if ($(this).scrollTop() >= ($(".stat").offset().top - 500)) {

			$(".stat span:first-of-type").countTo();

		}

	});



});
