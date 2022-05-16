$(function(){
	
	$("#MENU li").hover(function(){ 
	
		$(this).stop().animate({top:0});
		
		$(this).next().stop().animate({top:50});
		$(this).prev().stop().animate({top:50});
		
	},function(){ 
	
		$("#MENU li").stop().animate({top:100});
				
	});

});