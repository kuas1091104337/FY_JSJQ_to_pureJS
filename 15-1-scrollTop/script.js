// $(function(){	
// 	$("#goTop").click(function(){
// 		$("html,body").animate({scrollTop:0},900);
// 		return false;
// 	});
// });

window.onload=function(){
	document.getElementById("goTop").onclick = function(){
		window.document.body.scrollTop = 500;
		// window.document.documentElement.scrollTop = 0;
		return false;
	};	
}
