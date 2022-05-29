window.onload=function(){
	
	document.getElementById("COLOR1").onclick = CHANGE;
	document.getElementById("COLOR2").onclick = CHANGE;
	document.getElementById("COLOR3").onclick = CHANGE;
	document.getElementById("COLOR4").onclick = CHANGE;
	document.getElementById("COLOR5").onclick = CHANGE;
	
	function CHANGE(){
		var N = this.id.substr(5);
		substr截取字串
		document.getElementById("CUP").src = "../images/cup"+N+".jpg";
		return false;
	}
}