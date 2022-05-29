// $(function(){
// 	$("#RIGHT").click(function(){
// 		$("#alex").stop().animate({ left: "+=200" },500);
// 	});
// 	$("#LEFT").click(function(){
// 		$("#alex").stop().animate({ left: "-=200" },500);
// 	});
// });
window.onload=function(){
	const $alex = document.getElementById('alex');
	let moveNum = 0;
		// alex.style.left = moveNumber+"px";
	document.getElementById("RIGHT").addEventListener('click',() => alexGo(moveNum+=200));
	document.getElementById("LEFT").addEventListener('click',() => alexGo(moveNum-=200));
	function alexGo(moveNum){
		Velocity($alex,{left:moveNum+'px'},{duration:500});
	}
}
