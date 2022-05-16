$(function(){
	
	$("#RIGHT").click(function(){
		$("#alex").animate({ left: "800" },1000, "easeInBack");
	});
	
	$("#LEFT").click(function(){
		$("#alex").animate({ left: "0" },1000, "easeOutBounce");
	});

});