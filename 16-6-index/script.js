// $(function(){
// 	$("#SMALL img").click( function(){
// 		var Number = $(this).index();
// 		$("#BANNER img").eq(Number).fadeIn().siblings().fadeOut();
// 	});
// });

$(function(){
	$("#SMALL img").click(function(){
		var bannerNumber = $(this).index();
		$("#BANNER img").eq(bannerNumber).fadeIn().siblings().fadeOut();	
	});		
});