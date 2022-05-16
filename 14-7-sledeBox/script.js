$(function(){

	$(".CONTENT").hover(function(){
		
		$(this).stop().animate({top:-300},900,"easeOutCubic");
		
	},function(){
		
		$(this).stop().animate({top:0},900,"easeOutCubic");
		
	});	
});