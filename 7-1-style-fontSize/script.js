window.onload=function(){
	document.getElementById("BIG").onclick = doBIG;
	document.getElementById("MID").onclick = doMID;
	document.getElementById("SMALL").onclick = doSMALL;
	function doBIG(){
		document.getElementById("CONTENT").style.fontSize = "25px";
	}
	function doMID(){
		document.getElementById("CONTENT").style.fontSize = "16px";
	}
	function doSMALL(){
		document.getElementById("CONTENT").style.fontSize = "12px";
	}
}