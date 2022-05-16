// $(function(){
// 	// $("#RIGHT").click(function(){
// 	// 	$("#alex").animate({ left:800,top:500,width:100,marginTop:50},500);
// 	// });
// 	// $("#LEFT").click(function(){
// 	// 	$("#alex").animate({ left:"0",top:"100",width:"200",marginTop:"250"},500);
// 	// });
// // transform: rotate(10deg);
// 	$("#RIGHT").click(function(){
// 		$("#alex").stop().animate({ left:"+=100"},500);
// 	});
// 	$("#LEFT").click(function(){
// 		$("#alex").stop().animate({ left:"-=100"},500);
// 	});
// });

window.onload=function(){
	var moveNumber = 0,
		alex = document.getElementById("alex");
		alex.style.left = moveNumber+"px";
	document.getElementById("RIGHT").onclick = function(){
		moveNumber+=100;
		alex.style.left = moveNumber+"px";
	};
	document.getElementById("LEFT").onclick = function(){
		moveNumber-=100;
		alex.style.left = moveNumber+"px";
	};	
}