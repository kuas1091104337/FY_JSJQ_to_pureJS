window.onload=function(){
	document.getElementById("b1").onclick=showImg;
	document.getElementById("b2").onclick=showImg;
	document.getElementById("b3").onclick=showImg;
	document.getElementById("b4").onclick=showImg;
	document.getElementById("b5").onclick=showImg;
	document.getElementById("b6").onclick=showImg;

	var IMG = document.getElementById("myImg");

	function showImg(){
		if(this.id=="b1"){
			IMG.src="images/1.jpg";	
		}else if(this.id=="b2"){
			IMG.src="images/2.jpg";
		}else if(this.id=="b3"){
			IMG.src="images/3.jpg";
		}else if(this.id=="b4"){
			IMG.src="images/4.jpg";
		}else if(this.id=="b5"){
			IMG.src="images/5.jpg";
		}else if(this.id=="b6"){
			IMG.src="images/6.jpg";
		};
	}

}