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
	const $alex = document.getElementById('alex');
	let moveNum = 0;
		// alex.style.left = moveNumber+"px";
	document.getElementById("RIGHT").addEventListener('click',() => {
		console.log('r');
		moveNum+=100
		alexGo(moveNum)
	});
	document.getElementById("LEFT").addEventListener('click',() => {
		console.log('l');
		moveNum-=100;
		alexGo(moveNum)
	});
	function alexGo(moveNum){
		Velocity($alex,{left:moveNum+'px'},{duration:400});
	}
}
