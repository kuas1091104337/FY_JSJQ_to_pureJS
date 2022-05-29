// JavaScript Document
window.onload = function(){
	// document.getElementById("b1").onclick=SHOW1;
	// document.getElementById("b2").onclick=SHOW2;
	// document.getElementById("b3").onclick=SHOW3;
	// document.getElementById("b4").onclick=SHOW4;
	// document.getElementById("b5").onclick=SHOW5;
	// document.getElementById("b6").onclick=SHOW6;
	// function SHOW1(){
	// 	IMG.src = "images/1.jpg";
	// }
	// function SHOW2(){
	// 	IMG.src = "images/2.jpg";
	// }
	// function SHOW3(){
	// 	IMG.src = "images/3.jpg";
	// }
	// function SHOW4(){
	// 	IMG.src = "images/4.jpg";
	// }
	// function SHOW5(){
	// 	IMG.src = "images/5.jpg";
	// }
	// function SHOW6(){
	// 	IMG.src = "images/6.jpg";
	// }
	var IMG = document.getElementById("myImg");
	for( var i=1;i<=6;i++){
		document.getElementById("b"+i).onclick=SHOW;
	}
	function SHOW(){
		var N = this.id.substr(1);
		IMG.src="../images/"+N+".jpg";
	}
}

