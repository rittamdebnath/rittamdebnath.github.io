$(document).ready(function(){
			
	$(window).resize(function(){
		var $valoreScroll = $(window).scrollTop();
		var $valoreDiv = $('#intro').height();
	}).resize();
	
	$(window).scroll(function(){
		var $valoreScroll = $(window).scrollTop();
		var $valoreDiv = $('#intro').height();
		var $controllo = $valoreDiv - $valoreScroll;
		if($controllo <= 3){
			$('#header').stop().animate({top: "0px"}, 500);
			$('#scrollTop').stop().animate({bottom: "20px"}, 500);
		}else if($controllo > 0){
			$('#header').stop().animate({top: "-100px"}, 500);
			$('#scrollTop').stop().animate({bottom: "-60px"}, 500);
		};
	});


	$('img.scrollTop').click(
		function(){
			$.scrollTo('#intro', 1500, {easing:'easeInOutExpo'});
	});
	$('img.scrollAbout, li.aboutLink').click(
		function(){
			$.scrollTo('#about', 1500, {easing:'easeInOutExpo'});
	});
	$('li.experienceLink').click(
		function(){
			$.scrollTo('#experience', 1500, {easing:'easeInOutExpo'});
	});
	$('li.contactLink').click(
		function(){
			$.scrollTo('#contact', 1500, {easing:'easeInOutExpo'});
	});
	
	$.fn.tweetify = function() {
		this.each(function() {
			$(this).html(
				$(this).html()
					.replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
					.replace(/(^|\s)#(\w+)/g,'$1<a href="http://search.twitter.com/search?q=%23$2">#$2</a>')
					.replace(/(^|\s)@(\w+)/g,'$1<a href="http://twitter.com/$2">@$2</a>')
			);
		});
		return $(this);
	};
	
	$("#twitter-feed").tweetify();
	
	
	/*/ --- TIMELINE --- /*/
	$('ul.flaTimeline').flaTimeline({
		color: '#3dd0ac'
	});

	
				
});