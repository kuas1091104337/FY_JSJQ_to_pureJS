// $(function(){
// 	$("#MENU li").hover(function(){ 
// 		$(this).stop().animate({top:0},300);	
// 		$(this).siblings().stop().animate({top:50},300);	
// 	},function(){ 
// 		$("#MENU li").stop().animate({top:100},300);			
// 	});
// });

$(function(){
	$("#MENU li").hover(
		function(){
			// $("#MENU li").stop().animate({top:50}, 300)
			// $(this).stop().animate({top:0}, 300).next().stop().animate({top:50}).end().prev().stop().animate({top:50});
			// $(this).stop().animate({top:0}, 300).prev().stop().animate({top:50}).nextAll().eq(1).stop().animate({top:50});
			$(this).stop().animate({top:0}, 300).next().stop().animate({top:50}).prevAll().eq(1).stop().animate({top:50});
		},function(){
			$("#MENU li").stop().animate({top:100}, 300);
		}
	);
});