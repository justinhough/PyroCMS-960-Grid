

$(document).ready(function() {
//Orbit Slider on Homepage	
$('#featured').orbit({
	 animation: 'vertical-slide', //fade, horizontal-slide, vertical-slide
     animationSpeed: 800, //how fast animations are
     advanceSpeed: 4000, //if timer advance is enabled, time between transitions 
     startClockOnMouseOut: true, //if timer should restart on MouseOut
     startClockOnMouseOutAfter: 3000, //how long after mouseout timer should start again
     directionalNav: true, //manual advancing directional navs
     timer: true, //if the circular timer is wanted
     bullets: true //true or false to activate the bullet navigation

});

	/* This is basic - uses default settings */
	$("a#fancybox").fancybox({
		'autoDimensions'	: true,
		'transitionIn'	:	'fade',
		'transitionOut'	:	'fade',
		'speedIn'		:	500, 
		'speedOut'		:	200, 
		'overlayShow'	:	true
	});
	
	/* Using custom settings */
	$("a.iframe").fancybox({
		'autoDimensions'	: false,
		'width'		:	'500',
		'height'	:	'500',
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true
	});

	/* Apply fancybox to multiple items */
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
	// Scroll
	jQuery.localScroll();

	//Equal Column Heights
	//set the starting bigestHeight variable
	var biggestHeight = 0;
	//check each of them
	$('.equal').each(function(){
		//if the height of the current element is
		//bigger then the current biggestHeight value
		if($(this).height() > biggestHeight){
			//update the biggestHeight with the
			//height of the current elements
			biggestHeight = $(this).height();
		}
	});
	//when checking for biggestHeight is done set that
	//height to all the elements
	$('.equal').height(biggestHeight);
});
