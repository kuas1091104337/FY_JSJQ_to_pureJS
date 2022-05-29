window.onload = function (){
	document.getElementById("COURSE_1").onclick = SHOW;
	document.getElementById("COURSE_2").onclick = SHOW;
	document.getElementById("COURSE_3").onclick = SHOW;
	document.getElementById("COURSE_4").onclick = SHOW;
	function SHOW(){
		var N = this.id.substr(7);
		document.getElementById("BOX_"+N).style.display = "block";
		return false;
	}
}