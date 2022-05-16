// window.onload = function (){
// 	document.getElementById("BOX_1").style.display = "block";
// 	for(var i = 1;i<=12;i++){
// 		document.getElementById("COURSE_"+i).onclick = SHOW;
// 	}	
// 	function SHOW(){		
// 		for(var i = 1;i<=12;i++){
// 			document.getElementById("BOX_"+i).style.display = "none";
// 		}
// 		var N = this.id.substr(7);		
// 		document.getElementById("BOX_"+N).style.display = "block";		
// 		return false;		
// 	}
// }

window.onload=function(){
	var boxNumber=1;
	document.getElementById("BOX_"+boxNumber).style.display="block";
	var courseNumber=document.querySelectorAll(".COURSE").length;
	for (var i = 1; i <= courseNumber; i++) {
		document.getElementById("COURSE_"+i).onclick=courseBoxShow;
	}
	function courseBoxShow(){
		//方法一：每個BOX_都關
		// for (var i = 1; i <= courseNumber; i++) {
		// 	document.getElementById("BOX_"+i).style.display="none";
		// }
		//方法二：只關剛才打開的那個BOX_
		document.getElementById("BOX_"+boxNumber).style.display="none";

		boxNumber = this.id.substr(this.id.indexOf("_")+1);
		document.getElementById("BOX_"+boxNumber).style.display="block";
	}
}
