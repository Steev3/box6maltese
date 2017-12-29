// JavaScript Document
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
		$(".navbar-mobile").css("height","362px");
		$("#ul-mobile").css("height","300px");
		$("#ul-contact").css("height","0");
		$("#btn-menu-close").css("display","block");
		$("#btn-menu").css("display","none");
		$("#btn-contact").css("display","block");
		$("#btn-contact-close").css("display","none");
		$(".obscurator").fadeIn();
	});
	$("#btn-menu-close").click(function() {
		$(".navbar-mobile").css("height","62px");
		$("#ul-mobile").css("height","0");
		$("#btn-menu-close").css("display","none");
		$("#btn-menu").css("display","block");
		$(".obscurator").fadeOut();
	});
});
//Mobile menu activator

//Mobile flyout activator

//Mobile flyout activator

//Mobile contacts activator
$(document).ready(function() {
	$("#btn-contact").click(function() {
		$(".navbar-mobile").css("height","362px");
		$("#ul-mobile").css("height","0");
		$("#ul-contact").css("height","300px");
		$("#btn-contact-close").css("display","block");
		$("#btn-contact").css("display","none");
		$("#btn-menu").css("display","block");
		$("#btn-menu-close").css("display","none");
		$(".obscurator").fadeIn();
	});
	$("#btn-contact-close").click(function() {
		$(".navbar-mobile").css("height","62px");
		$("#ul-contact").css("height","0");
		$("#btn-contact-close").css("display","none");
		$("#btn-contact").css("display","block");
		$(".obscurator").fadeOut();
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
	});
});
//Brandlogo e obscurator close menu

//Close every menu open on "mobile menu" click
$(document).ready(function() {
	$("a").click(function() {
		$(".link-mobile").css("left","-100%");
		$(".servizi").css("height","0");
		$(".obscurator").fadeOut();
		$("body").css("overflow","auto");
	});
});
//Close every menu open on "mobile menu" click

