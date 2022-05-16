// window.onload=function(){
// 	var SIZE = 16
// 	document.getElementById("BIG").onclick = doBIG;
// 	document.getElementById("SMALL").onclick = doSMALL;
// 	function doBIG(){
//         if(SIZE<32) SIZE++;
// 		document.getElementById("CONTENT").style.fontSize = SIZE + "px";
// 	}
// 	function doSMALL(){
// 		if(SIZE>12) SIZE--;
// 		document.getElementById("CONTENT").style.fontSize = SIZE + "px";
// 	}
// }

window.onload=function(){
	var fontSizeNumber = 16;
	document.getElementById("BIG").onclick = doBigFontSize;
	document.getElementById("SMALL").onclick = doSmallFontSize;
	function doFontSize(){
		document.getElementById("CONTENT").style.fontSize=fontSizeNumber+"px";
	}
	function doBigFontSize(){
		if(fontSizeNumber<24) fontSizeNumber++;
		doFontSize();
	}
	function doSmallFontSize(){
		if(fontSizeNumber>14) fontSizeNumber--;
		doFontSize();
	}
}