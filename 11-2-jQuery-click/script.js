// $(function(){	
// 	$("h1").click(function(){
// 		alert("這是文字")		
// 	});	
// 	$("#IMG").click(function(){		
// 		alert("這是圖片")		
// 	});	
// })

// window.onload=function(){
$(function(){
	alert("要開始了");
	document.querySelector("h1").onclick = function(){
		alert("這是文字");
	};
	document.querySelector("img").onclick = function(){
		alert("這是圖片");		
	};
});
// }