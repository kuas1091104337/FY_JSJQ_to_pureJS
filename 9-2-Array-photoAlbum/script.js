// window.onload=function(){
// 	var MSG = [];
// 	MSG[0] = "第一篇說明";
// 	MSG[1] = "第二篇說明";
// 	MSG[2] = "第三篇說明";
// 	MSG[3] = "第四篇說明";
// 	MSG[4] = "第五篇說明";
// 	MSG[5] = "第六篇說明";
// 	MSG[6] = "第七篇說明";
// 	MSG[7] = "第八篇說明";
// 	var NOW = 1;
// 	console.log(MSG.length);
// 	document.getElementById("BOX").onmouseover = SHOWSHOW;
// 	document.getElementById("BOX").onmouseout = HIDEHIDE;
// 	document.getElementById("BOX").onclick = NEXT;
// 	var title = document.getElementById("TITLE")
// 	function SHOWSHOW(){
// 		title.style.display = "block";
// 	}
// 	function HIDEHIDE(){
// 		title.style.display = "none";
// 	}
// 	function NEXT(){	
// 		if(NOW<8){
// 			NOW += 1;
// 		}else{
// 			NOW = 1;
// 		}	
// 		title.innerHTML = MSG[NOW-1];
// 		document.getElementById("PIC").src = "images/FLY_" + NOW + ".jpg";
// 	}
// }


window.onload=function(){
	var MSG = ["第一篇說明","第二篇說明","第三篇說明","第四篇說明","第五篇說明","第六篇說明","第七篇說明","第八篇說明"],
		msgAmount = MSG.length,
		BOX = document.getElementById("BOX"),
		PIC = document.getElementById("PIC"),
		title = document.getElementById("TITLE"),
		bannerNowNumber = 1;
	
	BOX.onmouseover=bannerShow;
	BOX.onmouseout=bannerHide;
	BOX.onclick=bannerNext;

	function bannerShow(){
		title.style.display = "block";	
	}
	function bannerHide(){
		title.style.display = "none";	
	}
	function bannerNext(){
		if(bannerNowNumber<msgAmount){
			bannerNowNumber++;
		}else{
			bannerNowNumber=1;
		};
		title.innerHTML = MSG[bannerNowNumber-1];
		PIC.src = "images/FLY_"+bannerNowNumber+".jpg";
	}
}