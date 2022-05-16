// window.onload=function(){
// 	// document.getElementById("COLOR1").onclick = CHANGE;
// 	// document.getElementById("COLOR2").onclick = CHANGE;
// 	// document.getElementById("COLOR3").onclick = CHANGE;
// 	// document.getElementById("COLOR4").onclick = CHANGE;
// 	// document.getElementById("COLOR5").onclick = CHANGE;
// 	for (var i = 1; i <= 5; i++) {
// 		document.getElementById("COLOR"+i).onclick = CHANGE;
// 	}
// 	function CHANGE(){
// 		var cup = document.getElementById("CUP")
// 		// if(this.id=="COLOR1"){
// 		// 	cup.src = "images/cup1.jpg";
// 		// }else if(this.id=="COLOR2"){
// 		// 	cup.src = "images/cup2.jpg";
// 		// }else if(this.id=="COLOR3"){
// 		// 	cup.src = "images/cup3.jpg";
// 		// }else if(this.id=="COLOR4"){
// 		// 	cup.src = "images/cup4.jpg";
// 		// }else if(this.id=="COLOR5"){
// 		// 	cup.src = "images/cup5.jpg";
// 		// }
// 		Number = this.id.substr(-1);
// 		cup.src="images/cup"+Number+".jpg"
// 		return false;
// 	}
// }

// window.onload=function(){
// 	for (var i = 1; i <= 5; i++) {
// 		document.getElementById("COLOR"+i).onclick = change;
// 	}
// 	function change(){
// 		var cup = document.getElementById("CUP");
// 		Number = this.id.substr(-1);
// 		cup.src = "images/cup"+Number+".jpg"
// 	}
// }

window.onload=function(){
	for (var i = 1; i <= 5; i++) {
		document.getElementById("COLOR"+i).onclick=colorChange;
	}
	function colorChange(){
		var colorNumber = this.id.substr(-1);
		document.getElementById("CUP").src="images/cup"+colorNumber+".jpg";
	}
}