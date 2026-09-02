"use strict"

//muestra header dependiendo el jsp
function showHeader(key){
	
	var id = "idHeader" + key;
	$("header > div").each(function(i){
		$(this).removeClass("d-block");
		$(this).removeClass("d-none");	
		if($(this).attr("id") == id){
			$(this).addClass("d-block");
		}else{
			$(this).addClass("d-none");
		}
	});
	
}

$(function () {
	$(document).scroll(function () {
	  var $nav = $("#navbar-general");
	  var $btnHome = $("#btnHome");
	  var $btnConocenos = $("#btnConocenos");
	  var $btnProgramasAcademicos = $("#btnProgramasAcademicos");
	  var $btnCentros = $("#btnCentros");
	  var $btnLaboresEditoriales = $("#btnLaboresEditoriales");
	  var $btnContacto = $("#btnContacto");
	  var $btnBiblioteca = $("#btnBiblioteca");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnHome.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnConocenos.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnProgramasAcademicos.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnCentros.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnLaboresEditoriales.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnContacto.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  $btnBiblioteca.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	  
	  if($(this).scrollTop() > $nav.height()){
		$("#logoConocenos").attr("src","img/logo.png");
		$("#toggleId").removeClass('navbar-toggler custom-toggler');
		$("#toggleId").addClass('navbar-toggler custom-toggler-negro');
	  } else {
		$("#logoConocenos").attr("src","img/logo-blanco.png");
		$("#toggleId").removeClass('navbar-toggler custom-toggler-negro');
		$("#toggleId").addClass('navbar-toggler custom-toggler');
	  }

	});
});

$(document).ready(function () {

	$("#myModal").modal("show");

	$('#myModal').on('hidden.bs.modal', function () {
		console.log("test");
		$("video").each(function () { this.pause() });
	});

	let offset = { offset: "90%" };

	$(".fatenas-title-programas-primario").waypoint(function (){
		$(".fatenas-title-programas-primario").addClass("animate__animated animate__fadeInLeft");
	}, offset);

	$(".fatenas-title-programas-secundario").waypoint(function (){
		$(".fatenas-title-programas-secundario").addClass("animate__animated animate__fadeInLeft");
	}, offset);

	$(".fatenas-card-programa-filosofia").waypoint(function (){
		$(".fatenas-card-programa-filosofia").addClass("animate__animated animate__fadeInLeft");
	}, offset);

	$(".fatenas-card-programa-bioetica").waypoint(function (){
		$(".fatenas-card-programa-bioetica").addClass("animate__animated animate__fadeInLeft");
	}, offset);

	$(".fatenas-card-programa-ciencias").waypoint(function (){
		$(".fatenas-card-programa-ciencias").addClass("animate__animated animate__fadeInLeft");
	}, offset);

	$(".fatenas-title-integrarte-primario").waypoint(function (){
		$(".fatenas-title-integrarte-primario").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-title-integrarte-secundario").waypoint(function (){
		$(".fatenas-title-integrarte-secundario").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-integrarte-teatro").waypoint(function (){
		$(".fatenas-card-integrarte-teatro").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-integrarte-ballet").waypoint(function (){
		$(".fatenas-card-integrarte-ballet").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-title-trabajo-primario").waypoint(function (){
		$(".fatenas-title-trabajo-primario").addClass("animate__animated animate__zoomIn");
	}, offset);

	$("#video-inicio-trabajo").waypoint(function (){
		$("#video-inicio-trabajo").addClass("animate__animated animate__zoomIn");
	}, offset);

	$(".fatenas-title-editoriales-primario").waypoint(function (){
		$(".fatenas-title-editoriales-primario").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-title-editoriales-secundario").waypoint(function (){
		$(".fatenas-title-editoriales-secundario").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-editoriales-editorial").waypoint(function (){
		$(".fatenas-card-editoriales-editorial").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-editoriales-buho").waypoint(function (){
		$(".fatenas-card-editoriales-buho").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-editoriales-difucion").waypoint(function (){
		$(".fatenas-card-editoriales-difucion").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-editoriales-calmita").waypoint(function (){
		$(".fatenas-card-editoriales-calmita").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-card-editoriales-atenea").waypoint(function (){
		$(".fatenas-card-editoriales-atenea").addClass("animate__animated animate__fadeInRight");
	}, offset);

	$(".fatenas-editorial-contactanos").waypoint(function (){
		$(".fatenas-editorial-contactanos").addClass("animate__animated animate__fadeInLeft");
	}, offset);

	$(".fatenea-editorial-libro-1").waypoint(function (){
		$(".fatenea-editorial-libro-1").addClass("animate__animated animate__backInLeft");
	}, offset);

	$(".fatenea-editorial-libro-2").waypoint(function (){
		$(".fatenea-editorial-libro-2").addClass("animate__animated animate__backInRight");
	}, offset);

	$(".fatenea-editorial-libro-3").waypoint(function (){
		$(".fatenea-editorial-libro-3").addClass("animate__animated animate__backInLeft");
	}, offset);

	$(".fatenea-editorial-libro-4").waypoint(function (){
		$(".fatenea-editorial-libro-4").addClass("animate__animated animate__backInRight");
	}, offset);

	$(".fatenea-img-pulse-animated").hover(function(){
		$(this).addClass("animate__animated animate__pulse");
	}, function(){
		$(this).removeClass("animate__animated animate__pulse");
	});

	$(".fatenea-icon-footer").hover(function(){
		$(this).addClass("animate__animated animate__heartBeat");
	}, function(){
		$(this).removeClass("animate__animated animate__heartBeat");
	});
	
	$('#carouselConvenios').carousel({
		interval: 5000
	});

	$('.carousel-convenio .carousel-item-convenio').each(function() {
		var minPerSlide = 4;
		var next = $(this).next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}
		next.children(':first-child').clone().appendTo($(this));
	
		for (var i = 0; i < minPerSlide; i++) {
			next = next.next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
	
			next.children(':first-child').clone().appendTo($(this));
		}
	});

	$(".navbar-toggler").click(function(){
		$("nav").toggleClass("navbar-white");

		$("#btnHome").removeClass('fatenea-a-blanco');
		$("#btnHome").addClass('fatenea-a-azul');

		$("#btnConocenos").removeClass('fatenea-a-blanco');
		$("#btnConocenos").addClass('fatenea-a-azul');

		$("#btnProgramasAcademicos").removeClass('fatenea-a-blanco');
		$("#btnProgramasAcademicos").addClass('fatenea-a-azul');

		$("#btnCentros").removeClass('fatenea-a-blanco');
		$("#btnCentros").addClass('fatenea-a-azul');

		$("#btnLaboresEditoriales").removeClass('fatenea-a-blanco');
		$("#btnLaboresEditoriales").addClass('fatenea-a-azul');

		$("#btnContacto").removeClass('fatenea-a-blanco');
		$("#btnContacto").addClass('fatenea-a-azul');

		$("#btnBiblioteca").removeClass('fatenea-a-blanco');
		$("#btnBiblioteca").addClass('fatenea-a-azul');

		let src = $("#logoConocenos").attr("src");
		console.log("src: " + src);
		if(src == 'img/logo-blanco.png'){
			$("#logoConocenos").attr("src", 'img/logo.png');
		} else {
			if(!$('#navbar-general').hasClass('scrolled')){
				$("#logoConocenos").attr("src", 'img/logo-blanco.png');
			}			
		}

		if($("#toggleId").hasClass('custom-toggler')){
			$("#toggleId").removeClass('navbar-toggler custom-toggler');
			$("#toggleId").addClass('navbar-toggler custom-toggler-negro');
		} else {
			if(!$('#navbar-general').hasClass('scrolled')){
				$("#toggleId").removeClass('navbar-toggler custom-toggler-negro');
				$("#toggleId").addClass('navbar-toggler custom-toggler');
			}
		}
	})

});