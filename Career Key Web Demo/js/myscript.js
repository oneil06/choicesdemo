$(function ani() {


	//First Animation
		//Hide All
		var fadey = $('.fadey').css('opacity', '0');
		var fadey2 = $('.fadey2').css('opacity', '0');
		var text = $('.text').css('opacity', '0');


	//First Animation
	$(fadey).animate({
		'left': '+=250',
		'opacity': '1'}, 1000, function() {
			$(fadey2).animate({
				'left': '-=250',
				'opacity': '1'}, 500, function() {
					$(text).animate({
						'top': '+=10',
						'opacity': '1'}, 500);
				});
	});
	// $('.box').animate({
	// 	'top': '+=100',
	// 	'left': '+=100'
	// }, 500);




});


//Jquery Fully Loaded


