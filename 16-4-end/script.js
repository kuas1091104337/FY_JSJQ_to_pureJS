$(function(){
	
	$("#MENU li").hover(function(){ 
		
		$(this).stop().animate({top:0}).next().stop().animate({top:50}).end().prev().stop().animate({top:50});
		
	},function(){ 
	
		$("#MENU li").stop().animate({top:100});
				
	});

});