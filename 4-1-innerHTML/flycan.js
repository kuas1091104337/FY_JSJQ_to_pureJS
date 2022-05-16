window.onload=function(){
	
	document.getElementById("b1").onclick=SHOW1;
	document.getElementById("b2").onclick=SHOW2;
	document.getElementById("b3").onclick=SHOW3;
	document.getElementById("b4").onclick=SHOW4;
	document.getElementById("b5").onclick=SHOW5;
	
	function SHOW1(){
		document.getElementById("myImg").src = "images/01.jpg";
	}
	function SHOW2(){
		document.getElementById("myImg").src = "images/02.jpg";
	}
	function SHOW3(){
		document.getElementById("myImg").src = "images/03.jpg";
	}
	function SHOW4(){
		document.getElementById("myImg").src = "images/04.jpg";
	}
	function SHOW5(){
		document.getElementById("myImg").src = "images/05.jpg";
	}
}

