$(function(){
	
	$("#SlideMenuLeft").animate({left:-170},500);
	
	$("#SlideMenuLeft").hover(
		function(){ 
			$(this).stop().animate({left:0},900,"easeOutBounce");
		},
		function(){ 
			$(this).stop().animate({left:-170},900,"easeOutBounce");
		}
	)
	
	$("#SlideMenuRight").animate({right:-170},500);
	
	$("#SlideMenuRight").hover(
		function(){ 
			$(this).stop().animate({right:0},900,"easeOutBounce");
		},
		function(){ 
			$(this).stop().animate({right:-170},900,"easeOutBounce");
		}
	)
		
});