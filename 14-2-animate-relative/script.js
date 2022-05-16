$(function(){
	
	$("#RIGHT").click(function(){
		$("#alex").stop().animate({ left: "+=200" },500);
	});
	
	$("#LEFT").click(function(){
		$("#alex").stop().animate({ left: "-=200" },500);
	});

});