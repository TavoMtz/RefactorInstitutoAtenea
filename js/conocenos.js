"use strict"

$(document).ready(function () {
	let offset = { offset: "90%" };

	$(".fatenas-title-qsomos-primario").waypoint(function (){
		$(".fatenas-title-qsomos-primario").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-conocenos-qsomos").waypoint(function (){
		$(".fatenas-conocenos-qsomos").addClass("animate__animated animate__backInRight");
	}, offset);

    $(".fatenas-title-conocenos-primario").waypoint(function (){
		$(".fatenas-title-conocenos-primario").addClass("animate__animated animate__backInRight");
	}, offset);

	$(".fatenas-title-conocenos-primario-2").waypoint(function (){
		$(".fatenas-title-conocenos-primario-2").addClass("animate__animated animate__backInRight");
	}, offset);

    $(".fatenas-conocenos-mision").waypoint(function (){
		$(".fatenas-conocenos-mision").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-title-vision-primario").waypoint(function (){
		$(".fatenas-title-vision-primario").addClass("animate__animated animate__backInLeft");
	}, offset);

	$(".fatenea-conocenos-organigrama-primario").waypoint(function (){
		$(".fatenea-conocenos-organigrama-primario").addClass("animate__animated animate__zoomIn");
	}, offset);

    $(".fatenas-conocenos-vision").waypoint(function (){
		$(".fatenas-conocenos-vision").addClass("animate__animated animate__backInRight");
	}, offset);

	$(".fatenas-title-trabajo-primario-2").waypoint(function (){
		$(".fatenas-title-trabajo-primario-2").addClass("animate__animated animate__zoomIn");
	}, offset);

	$(".fatenas-title-trabajo-primario-3").waypoint(function (){
		$(".fatenas-title-trabajo-primario-3").addClass("animate__animated animate__zoomIn");
	}, offset);

	$(".fatenas-title-trabajo-primario-4").waypoint(function (){
		$(".fatenas-title-trabajo-primario-4").addClass("animate__animated animate__zoomIn");
	}, offset);

	$("#video-inicio-trabajo-2").waypoint(function (){
		$("#video-inicio-trabajo-2").addClass("animate__animated animate__zoomIn");
	}, offset);

	$("#video-inicio-trabajo-3").waypoint(function (){
		$("#video-inicio-trabajo-3").addClass("animate__animated animate__zoomIn");
	}, offset);

	$("#video-inicio-trabajo-4").waypoint(function (){
		$("#video-inicio-trabajo-4").addClass("animate__animated animate__zoomIn");
	}, offset);

	$(".fatenas-conocenos-orgranigrama-img").waypoint(function (){
		$(".fatenas-conocenos-orgranigrama-img").addClass("animate__animated animate__zoomIn");
	}, offset);

});