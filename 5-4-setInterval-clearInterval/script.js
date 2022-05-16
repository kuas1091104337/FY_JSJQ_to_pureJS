// setTimeout
window.onload=function(){
	var bannerNumber=1,
		bannerGo=setTimeout(bannerNext,1500),
		bannerSwitch=document.getElementById("switch");
	function bannerNext(){
		if(bannerNumber<11){
			bannerNumber++;
		}else{
			bannerNumber=1;
		};
		document.getElementById("myImg").src="images/"+bannerNumber+".jpg";
		bannerGo=setTimeout(bannerNext,1500);
		// console.log(bannerGo);
	}	
	bannerSwitch.onclick=function(){
		if(bannerGo!=0){
			clearInterval(bannerGo);
			bannerSwitch.src="images/play.jpg";
			bannerGo=0;
			// console.log(bannerGo);
		}else{
			bannerSwitch.src="images/pause.jpg";
			bannerGo=setTimeout(bannerNext,1500);
		};
	}
}

// setInterval
// window.onload=function(){
// 	var bannerNumber=1,
// 		bannerGo=setInterval(bannerNext,1500),
// 		bannerSwitch=document.getElementById("switch");
// 	function bannerNext(){
// 		if(bannerNumber<11){
// 			bannerNumber++;
// 		}else{
// 			bannerNumber=1;
// 		};
// 		document.getElementById("myImg").src="images/"+bannerNumber+".jpg";
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
// 			bannerGo=setInterval(bannerNext,1500);
// 		};
// 	}
// }