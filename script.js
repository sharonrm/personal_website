$(() => {
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
			
		// const $navigation = $('.navigation');
		// const $navCheckbox = $('.navigation__checkbox');
		// const $navItems = $('.navigation__item');
		// $navItems.each((i, item) => 
		
		// 	item.click($navCheckbox.checked = false));
		
			});
			

}) // ends document.ready
