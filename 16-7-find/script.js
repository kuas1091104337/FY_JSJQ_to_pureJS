// $(function(){
// 	$(".COURSE div").eq(0).slideDown();
// 	$(".COURSE").click( function(){
// 		$(this).find("div").slideToggle();
// 		return false;
// 	});
// });

// $(function(){
// 	$(".COURSE div").slideUp(800);		
// 	// $(".COURSE").click(function(){
// 	// 	$(this).find(".COURSE_BOX").slideToggle();
// 	// 	return false;		
// 	// });
// 	$(".COURSE h3").click(function(){
// 		$(this).siblings().slideDown().parent().siblings().find(".COURSE_BOX").slideUp();	
// 	});
// });

$(function(){
	$(".COURSE div").slideUp(500);
	$(".COURSE h3").click(function(){
		$(this).siblings().slideDown().parent().siblings().find('.COURSE_BOX').slideUp();
	});		
});