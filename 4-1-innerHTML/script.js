// window.onload=function(){
// 	document.getElementById("ps").onmouseover=SHOW;
// 	document.getElementById("ai").onmouseover=SHOW;
// 	document.getElementById("js").onmouseover=SHOW;
// 	document.getElementById("ps").onmouseout=HIDE;
// 	document.getElementById("ai").onmouseout=HIDE;
// 	document.getElementById("js").onmouseout=HIDE;
// 	var TITLE = document.getElementById("title");
// 	var CONTENT = document.getElementById("content");
// 	function SHOW(){
// 		if(this.id == "ps"){
// 			TITLE.innerHTML = "【Photoshop 初級教學課程】";
// 			CONTENT.innerHTML = "Photoshop 影像設計專修班";
// 		}else if(this.id == "ai"){
// 			TITLE.innerHTML = "【Illustrator 初級教學課程】";
// 			CONTENT.innerHTML = "Illustrator 平面與插畫設計入門班";
// 		}else if(this.id == "js"){
// 			TITLE.innerHTML = "【JavaScript 初級教學課程】";
// 			CONTENT.innerHTML = "JavaScript & jQuery 程式設計入門班";
// 		}
// 	}
// 	function HIDE(){
// 		TITLE.innerHTML = "【Flycan 飛肯設計學苑】";
// 		CONTENT.innerHTML = "";
// 	}
// }

window.onload=function(){
	var titleMSG = ["【Photoshop 初級教學課程】","【Illustrator 初級教學課程】","【JavaScript 初級教學課程】"],
		contentMSG = ["Photoshop 影像設計專修班","Illustrator 平面與插畫設計入門班","JavaScript & jQuery 程式設計入門班"],
		content = document.getElementById("content"),
		title = document.getElementById("title"),
		courseNowNumber = 0;
	var courseAmount = document.querySelectorAll("#ps, #ai, #js");
	for (i=0; i<courseAmount.length; i++){
		courseAmount[i].onmouseover = SHOW;
		courseAmount[i].onmouseout = HIDE;
	}
	function SHOW(){
		if(this.id == "ps"){
			title.innerHTML = titleMSG[0];
			content.innerHTML = contentMSG[0];
		}else if(this.id == "ai"){
			title.innerHTML = titleMSG[1];
			content.innerHTML = contentMSG[1];		
		}else if(this.id == "js"){
			title.innerHTML = titleMSG[2];
			content.innerHTML = contentMSG[2];		
		};
	}
	function HIDE(){
		title.innerHTML = "【Flycan 飛肯設計學苑】";
		content.innerHTML = "";
	}
}