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

//Mobile menu activator catalog
$(document).ready(function() {
	$("#btn-menu-catalog").click(function() {
		$(".navbar-mobile-catalog").css("height","212px");
		$("#ul-mobile-catalog").css("height","150px");
		$("#ul-contact").css("height","0");
		$("#btn-menu-close-catalog").css("display","block");
		$("#btn-menu-catalog").css("display","none");
		$("#btn-contact").css("display","block");
		$("#btn-contact-close").css("display","none");
		$(".obscurator").fadeIn();
		$("body").css("overflow-y","hidden");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
	$("#btn-menu-close-catalog").click(function() {
		$(".navbar-mobile-catalog").css("height","62px");
		$("#ul-mobile-catalog").css("height","0");
		$("#btn-menu-close-catalog").css("display","none");
		$("#btn-menu-catalog").css("display","block");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
	});
});
//Mobile menu activator atalog

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

//Mobile contacts activator catalog
$(document).ready(function() {
	$("#btn-contact").click(function() {
		$(".navbar-mobile-catalog").css("height","462px");
		$("#ul-mobile-catalog").css("height","0");
		$("#ul-contact").css("height","400px");
		$("#btn-contact-close").css("display","block");
		$("#btn-contact").css("display","none");
		$("#btn-menu-catalog").css("display","block");
		$("#btn-menu-close-catalog").css("display","none");
		$(".obscurator").fadeIn();
		$("body").css("overflow-y","hidden");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
	$("#btn-contact-close").click(function() {
		$(".navbar-mobile-catalog").css("height","62px");
		$("#ul-contact").css("height","0");
		$("#btn-contact-close").css("display","none");
		$("#btn-contact").css("display","block");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
	});
});
//Mobile contacts activator catalog

//Brandlogo e obscurator close menu
$(document).ready(function() {
	$(".brandlogo-mobile").click(function() {
		$(".navbar-mobile").css("height","62px");
		$(".navbar-mobile-catalog").css("height","62px");
		$("#ul-mobile").css("height","0");
		$("#ul-mobile-catalog").css("height","0");
		$("#ul-contact").css("height","0");
		$("#btn-menu").css("display","block");
		$("#btn-menu-catalog").css("display","block");
		$("#btn-contact").css("display","block");
		$("#btn-menu-close").css("display","none");
		$("#btn-menu-close-catalog").css("display","none");
		$("#btn-contact-close").css("display","none");
		$(".obscurator").fadeOut();
		$("body").css("overflow-y","auto");
		$(".flyout-content-mobile").css("height","0");
		$(".services-on").css("display","block");
		$(".services-off").css("display","none");
	});
	$(".obscurator").click(function() {
		$(".navbar-mobile").css("height","62px");
		$(".navbar-mobile-catalog").css("height","62px");
		$("#ul-mobile").css("height","0");
		$("#ul-mobile-catalog").css("height","0");
		$("#ul-contact").css("height","0");
		$("#btn-menu").css("display","block");
		$("#btn-menu-catalog").css("display","block");
		$("#btn-contact").css("display","block");
		$("#btn-menu-close").css("display","none");
		$("#btn-menu-close-catalog").css("display","none");
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
	        if ($(this).scrollTop() >= 700 && !hasBeenTrigged) { // if scroll is greater/equal then 100 and hasBeenTrigged is set to false.
	            $(".elevator").css("bottom","0");
	        } else {
	        	$(".elevator").css("bottom","-60px");
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

//List column catalog menu
$(document).ready(function() {
	$(".right-column-menu-open").click(function() {
		$(".right-column-container").css("z-index","99999");
		$(".right-column-container").css("right","0");
		$(".right-column-menu-open").css("display","none");
		$(".right-column-menu-close").css("display","block");
	});
	$(".right-column-menu-close").click(function() {
		$(".right-column-container").css("z-index","9");
		$(".right-column-container").css("right","-25.5%");
		$(".right-column-menu-open").css("display","block");
		$(".right-column-menu-close").css("display","none");
	});

	$(".right-column-menu-open-tab").click(function() {
		$(".right-column-container-tab").css("z-index","99999");
		$(".right-column-container-tab").css("right","0");
		$(".right-column-menu-open-tab").css("display","none");
		$(".right-column-menu-close-tab").css("display","block");
	});
	$(".right-column-menu-close-tab").click(function() {
		$(".right-column-container-tab").css("z-index","9");
		$(".right-column-container-tab").css("right","-51%");
		$(".right-column-menu-open-tab").css("display","block");
		$(".right-column-menu-close-tab").css("display","none");
	});

	$(".right-column-menu-open-mob").click(function() {
		$(".right-column-container-mob").css("z-index","99999");
		$(".right-column-container-mob").css("right","0");
		$(".right-column-menu-open-mob").css("display","none");
		$(".right-column-menu-close-mob").css("display","block");
		$(".obscurator").css("z-index","99999");
		$(".obscurator").fadeIn();
	});
	$(".right-column-menu-close-mob").click(function() {
		$(".right-column-container-mob").css("z-index","9");
		$(".right-column-container-mob").css("right","-85%");
		$(".right-column-menu-open-mob").css("display","block");
		$(".right-column-menu-close-mob").css("display","none");
		$(".obscurator").css("z-index","1");
		$(".obscurator").fadeOut();
	});
});
//List column catalog menu