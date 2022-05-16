// $(function(){
// 	$("#tabMenu li").click(function(){
// 		var NOW = $(this).index();
// 		var MOVE = NOW * 840 * -1;
// 		$("#ALL").stop().animate({ left: MOVE });
// 		$("#tabMenu li").find("a").removeClass().eq(NOW).addClass("NOWTAB");
// 	});
// })

// $(function(){
// 	$("#tabMenu li").click(function(){		
// 		var NOW = $(this).index();		
// 		var MOVE = NOW * 100 * -1;		
// 		$("#ALL").stop().animate({ left: MOVE+"%" });		
// 		$("#tabMenu li").find("a").removeClass().eq(NOW).addClass("NOWTAB");		
// 	});	
// })

// $(function(){
// 	var $tab_li = $("#tabMenu li");
// 	$tab_li.click(function(){
// 		var now_tab_li = $(this).index();
// 		var allMove = now_tab_li * -100 ;
// 		console.log(now_tab_li);
// 		$("#ALL").stop().animate({left:allMove + "%"});
// 		$tab_li.find("a").removeClass().eq(now_tab_li).addClass("NOWTAB");
// 	});		
// });

$(function(){
	$("#tabMenu li").click(function(){
		var tabNumber = $(this).index();
		var tabMove = tabNumber * -100;
		$("#ALL").stop().animate({left:tabMove + "%"});
		$(this).find("a").addClass("NOWTAB").end().siblings().find("a").removeClass();
	});
});