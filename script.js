$(document).ready(() => {
        console.log('script loaded');


	var $aboutHover = $(".projects-sub--about-me")
	var $about = $(".container--text");
	var $paragraph = $(".paragraph");

	$aboutHover.hover(function(){
		$paragraph.addClass("type");

	$(".type").typed({
		strings:[
		"Web developer with an emphasis on fashion and jewelry brands.",
		 "I use a variety of technologies including Javascript, Jquery, React, Node/Express and Sass.",
		 "Check out a few of my current clients below.",
		 " "
		],
		typeSpeed: 10,
		backdelay: 200,
		loop: true
	})
		
	})






 }) // ends document.ready
