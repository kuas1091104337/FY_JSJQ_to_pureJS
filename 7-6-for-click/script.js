window.onload = function (){
	
	for(var i = 1;i<=12;i++){
		document.getElementById("COURSE_"+i).onclick = SHOW;
	}
	
	function SHOW(){
		
		var N = this.id.substr(7);
		
		document.getElementById("BOX_"+N).style.display = "block";
		
		return false;
	}
}