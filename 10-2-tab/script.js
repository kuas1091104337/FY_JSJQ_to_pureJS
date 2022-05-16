// window.onload = function(){
// 	for(var i=1;i<=4;i++){
// 		document.getElementById("TAB"+i).onmouseover=SHOW;
// 	}	
// 	function SHOW(){		
// 		for(var i=1;i<=4;i++){
// 			document.getElementById("BOX"+i).style.display="none";
// 			document.getElementById("TAB"+i).className="";
// 		}		
// 		var N = this.id.substr(3);
// 		document.getElementById("BOX"+N).style.display="block";
// 		document.getElementById("TAB"+N).className="NOWTAB";
// 	}
// }

// window.onload=function(){
// 	var tabNumber = 1,
// 		tabAmount = document.querySelectorAll("#tabMenu>li>a").length;
// 	for (var i=1; i<=tabAmount; i++){
// 		document.getElementById("TAB_"+i).onmouseover = SHOW;
// 	}
// 	function SHOW(){
// 		var nowTabNumber = this.id.substr(this.id.indexOf("_")+1);
// 		if(tabNumber!=nowTabNumber){
// 			document.getElementById("BOX"+tabNumber).style.display = "none";
// 			document.getElementById("TAB_"+tabNumber).className = "";
// 			document.getElementById("BOX"+nowTabNumber).style.display = "block";
// 			document.getElementById("TAB_"+nowTabNumber).className = "NOWTAB";
// 			tabNumber = nowTabNumber;
// 		};
// 		// tabNumber = this.id.substr(this.id.indexOf("_")+1);
// 		// document.getElementById("BOX"+tabNumber).style.display = "block";
// 		// document.getElementById("TAB_"+tabNumber).className = "NOWTAB";
// 	}
// }

window.onload=function(){
	var boxGo,
		nowTabNumber,
		tabNumber = 1,
		tabAmount = document.querySelectorAll("#tabMenu>li>a").length;
	for (var i=1; i<=tabAmount; i++){
		var TAB = document.getElementById("TAB_"+i);
		TAB.onmouseover = waitForMainSetTimeout;
		TAB.onmouseout = clearMainTimeout;
	}
	function waitForMainSetTimeout(){
		nowTabNumber = this.id.substr(this.id.indexOf("_")+1);		
		boxGo = setTimeout(SHOW,200);
	}
	function clearMainTimeout(){
		clearTimeout(boxGo);
	}
	function SHOW(){
		if(tabNumber!=nowTabNumber){
			document.getElementById("BOX"+tabNumber).style.display = "none";
			document.getElementById("TAB_"+tabNumber).className = "";
			document.getElementById("BOX"+nowTabNumber).style.display = "block";
			document.getElementById("TAB_"+nowTabNumber).className = "NOWTAB";
			tabNumber = nowTabNumber;
		};
	}
}