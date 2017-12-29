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
		$(".navbar-mobile").css("height","462px");
		$("#ul-mobile").css("height","400px");
		$(".flyout-content-mobile").css("height","100px");
		$(".services-on").css("display","none");
		$(".services-off").css("display","block");
	});
	$(".services-off").click(function() {
		$(".navbar-mobile").css("height","362px");
		$("#ul-mobile").css("height","300px");
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
