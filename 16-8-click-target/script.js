$(function(){
	
	$(".COURSE div").eq(0).slideDown();
	
	$(".COURSE h3").click( function(){
		
		$(this).siblings().slideToggle();
		//$(this).next().slideToggle();
		
		return false;
		
	});
		
});