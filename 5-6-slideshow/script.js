window.onload=function(){
	var bannerNumber=1,
		bannerImg=document.getElementById("myImg"),
		bannerSwitch=document.getElementById("switch"),
		bannerPic=document.getElementById("myPic"),
		bannerGo=setInterval(bannerNext,2500);
	bannerImg.src="images/"+bannerNumber+".jpg";
	document.getElementById("next").onclick=bannerNext;
	function bannerNext(){
		if(bannerNumber<11){
			bannerNumber++
		}else{
			bannerNumber=1
		};
		bannerImg.src="images/"+bannerNumber+".jpg";
	}
	document.getElementById("prev").onclick=function(){
		if(bannerNumber>1){
			bannerNumber--
		}else{
			bannerNumber=11
		};
		bannerImg.src="images/"+bannerNumber+".jpg";	
	}
	bannerSwitch.onclick=function(){
		if(bannerGo!=0){
			alert("stop");
			clearInterval(bannerGo);
			bannerSwitch.src="images/play.jpg";
			bannerGo=0;
		}else{
			alert("go");
			bannerSwitch.src="images/pause.jpg";
			bannerGo=setInterval(bannerNext,2500);
		};
	}
	bannerPic.onmouseover=function(){
		clearInterval(bannerGo);
	}
	bannerPic.onmouseout=function(){
		if(bannerGo!=0){
			clearInterval(bannerGo);
			bannerGo=setInterval(bannerNext,2500);
		};
	}
}