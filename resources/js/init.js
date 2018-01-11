// JavaScript Document

//Loader
	$(window).on("load", function() {
		$(".se-pre-con").fadeOut("slow");
	});
//Loader

//Services menu button extended
$(document).ready(function() {
	$("#button-services").click(function() {
		$(".flyout-content").slideToggle();
	});
});
//Services menu button extended

//Mobile menu activator
$(document).ready(function() {
	$("#btn-menu").click(function() {
		$(".navbar-mobile").css("height","412px");
		$("#ul-mobile").css("height","350px");
		$("#ul-contact").css("height","0");
		$("#btn-menu-close").css("display","block");
		$("#btn-menu").css("display","none");
		$("#btn-contact").css("display","block");
		$("#btn-contact-close").css("display","none");
		$(".obscurator").fadeIn();
		$("body").css("overflow-y","hidden");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
	$("#btn-menu-close").click(function() {
		$(".navbar-mobile").css("height","62px");
		$("#ul-mobile").css("height","0");
		$("#btn-menu-close").css("display","none");
		$("#btn-menu").css("display","block");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
	});
});
//Mobile menu activator

//Mobile flyout activator
$(document).ready(function() {
	$(".services-on").click(function() {
		$(".navbar-mobile").css("height","512px");
		$("#ul-mobile").css("height","450px");
		$(".flyout-content-mobile").css("height","100px");
		$(".services-on").css("display","none");
		$(".services-off").css("display","block");
	});
	$(".services-off").click(function() {
		$(".navbar-mobile").css("height","412px");
		$("#ul-mobile").css("height","350px");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
});
//Mobile flyout activator

//Mobile contacts activator
$(document).ready(function() {
	$("#btn-contact").click(function() {
		$(".navbar-mobile").css("height","462px");
		$("#ul-mobile").css("height","0");
		$("#ul-contact").css("height","400px");
		$("#btn-contact-close").css("display","block");
		$("#btn-contact").css("display","none");
		$("#btn-menu").css("display","block");
		$("#btn-menu-close").css("display","none");
		$(".obscurator").fadeIn();
		$("body").css("overflow-y","hidden");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
	$("#btn-contact-close").click(function() {
		$(".navbar-mobile").css("height","62px");
		$("#ul-contact").css("height","0");
		$("#btn-contact-close").css("display","none");
		$("#btn-contact").css("display","block");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
	});
});
//Mobile contacts activator

//Brandlogo e obscurator close menu
$(document).ready(function() {
	$(".brandlogo-mobile").click(function() {
		$(".navbar-mobile").css("height","62px");
		$("#ul-mobile").css("height","0");
		$("#ul-contact").css("height","0");
		$("#btn-menu").css("display","block");
		$("#btn-contact").css("display","block");
		$("#btn-menu-close").css("display","none");
		$("#btn-contact-close").css("display","none");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
	$(".obscurator").click(function() {
		$(".navbar-mobile").css("height","62px");
		$("#ul-mobile").css("height","0");
		$("#ul-contact").css("height","0");
		$("#btn-menu").css("display","block");
		$("#btn-contact").css("display","block");
		$("#btn-menu-close").css("display","none");
		$("#btn-contact-close").css("display","none");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
});
//Brandlogo e obscurator close menu

//User Agent
$(document).ready(function() {

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};

	if (isMobile.Android()) {
      $(".mobile-img-index").css("display","block");
      $("#h4-under-title").css("display","block");
      $(".parallax-index").css("display","none");
	};

	if (isMobile.BlackBerry()) {
      $(".mobile-img-index").css("display","block");
      $("#h4-under-title").css("display","block");
      $(".parallax-index").css("display","none");
	};

	if (isMobile.iOS()) {
      $(".mobile-img-index").css("display","block");
      $("#h4-under-title").css("display","block");
      $(".parallax-index").css("display","none");
	};

	if (isMobile.Opera()) {
      $(".mobile-img-index").css("display","block");
      $("#h4-under-title").css("display","block");
      $(".parallax-index").css("display","none");
	};

	if (isMobile.Windows()) {
      $(".mobile-img-index").css("display","block");
      $("#h4-under-title").css("display","block");
      $(".parallax-index").css("display","none");
	};
});
//User Agent

//ScrollTop arrow
$(document).ready(function() {
	$(function(){
	    var hasBeenTrigged = false;
	    $(window).scroll(function() {
	        if ($(this).scrollTop() >= 400 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
	            $(".elevator").css("right","30px");
	        } else {
	        	$(".elevator").css("right","-80px");
	        }
	    });
	});
});
//ScrollTop arrow

//Smooth scroll anchor links
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//Smooth scroll anchor links

//progress-bar

//progress-bar