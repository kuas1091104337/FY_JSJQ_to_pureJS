$(function(){
	
	$(".COURSE div").eq(0).slideDown();
	
	$(".COURSE h3").click( function(){
		
		$(this).siblings().slideDown().parent().siblings().find("div").slideUp();
		
		return false;
		
	});
		
});