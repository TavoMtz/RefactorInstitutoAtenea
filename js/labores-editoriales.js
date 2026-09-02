"use strict"

$(document).ready(function () {
	let offset = { offset: "90%" };

    $(".fatenas-revistaB-title").waypoint(function (){
		$(".fatenas-revistaB-title").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-revistaB-title-2").waypoint(function (){
		$(".fatenas-revistaB-title-2").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-revistaB-title-3").waypoint(function (){
		$(".fatenas-revistaB-title-3").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-revistaB-title-4").waypoint(function (){
		$(".fatenas-revistaB-title-4").addClass("animate__animated animate__backInRight");
	}, offset);

    $(".fatenas-revistaD-title").waypoint(function (){
		$(".fatenas-revistaD-title").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-revistaD-title-2").waypoint(function (){
		$(".fatenas-revistaD-title-2").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-revistaD-title-3").waypoint(function (){
		$(".fatenas-revistaD-title-3").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-revistaD-title-4").waypoint(function (){
		$(".fatenas-revistaD-title-4").addClass("animate__animated animate__backInRight");
	}, offset);

    $(".fatenas-historieta-title").waypoint(function (){
		$(".fatenas-historieta-title").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-historieta-title-2").waypoint(function (){
		$(".fatenas-historieta-title-2").addClass("animate__animated animate__backInLeft");
	}, offset);

    $(".fatenas-historieta-title-3").waypoint(function (){
		$(".fatenas-historieta-title-3").addClass("animate__animated animate__backInRight");
	}, offset);

});