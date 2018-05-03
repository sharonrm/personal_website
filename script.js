$(document).ready(() => {
        console.log('script loaded');


	var $aboutHover = $(".projects-sub--about-me")
	var $about = $(".container--text");
	var $paragraph = $(".paragraph");

	$aboutHover.hover(function(){
		$paragraph.addClass("type");

	$(".type").typed({
		strings:[
		"Web developer with an emphasis on fashion and jewelry brands. I use a variety of technologies including Javascript, Jquery, React, Node/Express and Sass."
		],
		typeSpeed: 80
	})
		
	})






 }) // ends document.ready
