"use strict"

$(document).ready(function () {
	let offset = { offset: "90%" };

	$(".fatenas-centro-investigaciones-primario").waypoint(function (){
		$(".fatenas-centro-investigaciones-primario").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-centro-investigaciones-secundario").waypoint(function (){
		$(".fatenas-centro-investigaciones-secundario").addClass("animate__animated animate__backInRight");
	}, offset);

    $(".fatenas-centro-investigaciones-actividades-title").waypoint(function (){
		$(".fatenas-centro-investigaciones-actividades-title").addClass("animate__animated animate__fadeInLeft");
	}, offset);

});