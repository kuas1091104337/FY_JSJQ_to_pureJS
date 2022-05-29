// JavaScript Document
window.onload=function(){
	document.getElementById("b1").onclick=SHOW;
	document.getElementById("b2").onclick=SHOW;
	document.getElementById("b3").onclick=SHOW;
	document.getElementById("b4").onclick=SHOW;
	document.getElementById("b5").onclick=SHOW;
	document.getElementById("b6").onclick=SHOW;
	var IMG = document.getElementById("myImg");
	function SHOW(){
    //     if(this.id == "b1"){
		  // IMG.src = "images/1.jpg";
    //     }else if(this.id == "b2"){
		  // IMG.src = "images/2.jpg";
    //     }else if(this.id == "b3"){
		  // IMG.src = "images/3.jpg";
    //     }else if(this.id == "b4"){
		  // IMG.src = "images/4.jpg";
    //     }else if(this.id == "b5"){
		  // IMG.src = "images/5.jpg";
    //     }else if(this.id == "b6"){
		  // IMG.src = "images/6.jpg";
    //     }
  		switch(true) {
  			case this.id === "b1":
  				IMG.src = "../images/1.jpg";
  				break;
  			case this.id === "b2":
  				IMG.src = "../images/2.jpg";
  				break;
  			case this.id === "b3":
  				IMG.src = "../images/3.jpg";
  				break;
  			case this.id === "b4":
  				IMG.src = "../images/4.jpg";
  				break;
  			case this.id === "b5":
  				IMG.src = "../images/5.jpg";
  				break;
  			// default:IMG.src = "../images/6.jpg";
  			case this.id === "b6":
  				IMG.src = "../images/6.jpg";
  				break;
  		}
	}
}

