// $(function(){
// 	$("#B00").click(function(){
// 		$("html,body").stop().animate({scrollTop:0},800);
// 		return false;	
// 	});
// 	$("#B01").click(function(){
// 		$("html,body").stop().animate({scrollTop:1000},800);
// 		return false;	
// 	});
// 	$("#B02").click(function(){
// 		$("html,body").stop().animate({scrollTop:2000},800);
// 		return false;	
// 	});
// 	$("#B03").click(function(){
// 		$("html,body").stop().animate({scrollTop:3000},800);
// 		return false;	
// 	});
// });

$(function(){
	// for (var i = 0; i <= 3; i++) {
	// 	document.getElementById("B0"+i).onclick = GO;
	// 	console.log(i);
	// }
	$("#MENU a").click(function(){
		var Number = this.id.substr(-1);
		$("html,body").stop().animate({scrollTop:Number*1000},600);		
	});
});
