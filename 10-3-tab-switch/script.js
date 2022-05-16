window.onload = function(){
	
	var NOW = 1;
	
	for(var i=1;i<=4;i++){
		document.getElementById("TAB"+i).onmouseover=SHOW;
	}
	
	function SHOW(){
		
		document.getElementById("BOX"+NOW).style.display="none";
		document.getElementById("TAB"+NOW).className="";
		
		var N = this.id.substr(3);
		document.getElementById("BOX"+N).style.display="block";
		document.getElementById("TAB"+N).className="NOWTAB";
		
		NOW = N;

	}
}