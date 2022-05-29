// JavaScript Document
window.onload=function(){
	var N = 1;
	document.getElementById("myImg").src = "../images/"+N+".jpg"
	function NEXT(){
		if(N<11){
			N = N+1;
		}else{
			N = 1;	
		}
		document.getElementById("myImg").src = "../images/"+N+".jpg";
		TT = setTimeout(NEXT,3000);
	}
	var TT = setTimeout(NEXT,3000);
	document.getElementById("switch").onclick = function(){
		if(TT){
			clearTimeout(TT);
			TT = 0;
			this.src = "images/play.jpg";
		}else{
			this.src = "images/pause.jpg"
			TT = setTimeout(NEXT,3000);			
		}		
	}
}

// window.onload=function(){
// 	var bannerNumber=1,
// 			bannerGo=setTimeout(bannerNext,1500),
// 			bannerSwitch=document.getElementById("switch");
// 	function bannerNext(){
// 		if(bannerNumber<11){
// 			bannerNumber++;
// 		}else{
// 			bannerNumber=1;
// 		};
// 		document.getElementById("myImg").src="images/"+bannerNumber+".jpg";
// 		bannerGo=setTimeout(bannerNext,1500);
// 		// console.log(bannerGo);
// 	}	
// 	bannerSwitch.onclick=function(){
// 		if(bannerGo!=0){
// 			clearInterval(bannerGo);
// 			bannerSwitch.src="images/play.jpg";
// 			bannerGo=0;
// 			// console.log(bannerGo);
// 		}else{
// 			bannerSwitch.src="images/pause.jpg";
// 			bannerGo=setTimeout(bannerNext,1500);
// 		};
// 	}
// }