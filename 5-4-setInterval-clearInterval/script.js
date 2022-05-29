// setTimeout
window.onload=function(){
	var BNnum = 0,//宣告一個變數給照片用
			time = 0,//宣告一個變數給計時器用
			sec = 1000,
			BNgo = setInterval(BNnext,sec),
			$switch = document.getElementById("switch");
	function BNnext(){
		// BNnum<11 ? BNnum++ : BNnum = 0;
		BNnum++;
		BNnum = (BNnum+12)%12;
		document.getElementById("myImg").src="../images/"+BNnum+".jpg";
	}	
	$switch.onclick=function(){
		if(BNgo!==0){
			clearInterval(BNgo);
			$switch.src='../images/play.jpg';
			BNgo = 0;
			// console.log(BNgo);
		}else{
			$switch.src='../images/pause.jpg';
			BNgo = setInterval(BNnext,sec);
		};
	}
}

// setInterval
// window.onload=function(){
// 	var bannerNumber=1,
// 			bannerGo=setInterval(bannerNext,1500),
// 			bannerSwitch=document.getElementById("switch");
// 	function bannerNext(){
// 		if(bannerNumber<11){ bannerNumber++; }else{ bannerNumber=1; };
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