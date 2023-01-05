window.onload=function(){
	var bannerGo = setInterval(bannerNext,2500),
		IMG = document.getElementById("bannerImg"),
		BOX = document.getElementById("bannerBox"),
		bannerNumber = 1; 
	function forBi(){
		for (var i = 1; i <= 11; i++) {
			document.getElementById("b"+i).className="";
		}		
	}
	function forBnow(){
		document.getElementById("b"+bannerNumber).className="now";		
	}
	function bannerIMG(){
		IMG.src="../images/"+bannerNumber+".jpg";		
	}
	bannerIMG();	
	for (var i = 1; i <= 11; i++) {
		document.getElementById("b"+i).onclick=bannerShow;
	}
	function bannerShow(){
		bannerNumber = this.id.substr(1);
		bannerIMG();
		forBi();
		this.className="now"
		console.log(this);
	}
	document.getElementById("bannerNext").onclick=bannerNext;
	function bannerNext(){
		if(bannerNumber<11){
			bannerNumber++;
		}else{
			bannerNumber=1;
		};
		bannerIMG();
		forBi();
		forBnow();
	}

	document.getElementById("bannerPrev").onclick=function(){
		if(bannerNumber>1){
			bannerNumber--;
		}else{
			bannerNumber=11;
		};
		bannerIMG();
		forBi();
		forBnow();
	}
	BOX.onmouseover=function(){
		clearInterval(bannerGo);
	}
	BOX.onmouseout=function(){
		clearInterval(bannerGo);
		bannerGo=setInterval(bannerNext,2500);
	}
}

// window.onload=function(){
// 	var Number = 1;
// 	document.getElementById("myImg").src="images/"+Number+".jpg";
// 	document.getElementById("prev").onclick = function(){
// 		if(Number>1){
// 			Number--;
// 		}else{
// 			Number=11;
// 		};
// 		document.getElementById("myImg").src="images/"+Number+".jpg";
// 	}
// 	document.getElementById("next").onclick = NEXT;
// 	function NEXT(){
// 		if(Number<11){
// 			Number++;
// 		}else{
// 			Number=1;
// 		};
// 		document.getElementById("myImg").src="images/"+Number+".jpg";
// 	}
// 	var bannerGo = setInterval(NEXT,2000);
// 	document.getElementById("myPic").onmouseover = function(){
// 		clearInterval(bannerGo);
// 	}
// 	document.getElementById("myPic").onmouseout = function(){
// 		if(bannerGo!=0){
// 			clearInterval(bannerGo);
// 			bannerGo = setInterval(NEXT,2000);
// 		};
// 	}
// }