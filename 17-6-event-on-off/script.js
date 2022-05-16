$(function(){
	
	// $("img").on("click", function(){
	// 	$(this).off("click");
	// 	alert("只能按一次喔");
	// });
	$("img").one("click", function(){
		alert("只能按一次喔");
	});
	

});