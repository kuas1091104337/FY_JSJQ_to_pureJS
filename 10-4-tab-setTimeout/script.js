window.onload = function(){
	var NOW = 1;
	var NEXT;
	var TT;
	
	for(var i=1;i<=4;i++){
		var TAB = document.getElementById("TAB"+i)
		TAB.onmouseover=WAIT;
		TAB.onmouseout=CLEAR;
	}
	
	function WAIT(){
		NEXT = this.id.substr(3);
		TT = setTimeout(SHOW,250)
	}
	
	function CLEAR(){
		clearTimeout(TT)
	}
	
	function SHOW(){
		document.getElementById("BOX"+NOW).style.display="none";
		document.getElementById("TAB"+NOW).className="";
		document.getElementById("BOX"+NEXT).style.display="block";
		document.getElementById("TAB"+NEXT).className="NOWTAB";
		NOW = NEXT;
	}
}