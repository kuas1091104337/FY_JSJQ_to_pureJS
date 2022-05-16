// window.onload = function (){
// 	document.getElementById("COURSE_1").onclick = SHOW;
// 	document.getElementById("COURSE_2").onclick = SHOW;
// 	document.getElementById("COURSE_3").onclick = SHOW;
// 	document.getElementById("COURSE_4").onclick = SHOW;
// 	function SHOW(){
// 		if(this.id=="COURSE_1"){
// 			document.getElementById("BOX_1").style.display = "block";
// 		}else if(this.id=="COURSE_2"){
// 			document.getElementById("BOX_2").style.display = "block";
// 		}else if(this.id=="COURSE_3"){
// 			document.getElementById("BOX_3").style.display = "block";
// 		}else if(this.id=="COURSE_4"){
// 			document.getElementById("BOX_4").style.display = "block";
// 		}	
// 		return false;	
// 	}
// }

// window.onload=function(){
// 	var courseNumber=document.querySelectorAll(".COURSE").length;
// 	for (var i = 1; i <= courseNumber; i++) {
// 		document.getElementById("COURSE_"+i).onclick=courseBoxShow;
// 	}
// 	function courseBoxShow(){
// 		for (var i = 1; i <= courseNumber; i++) {
// 			document.getElementById("BOX_"+i).style.display="none";
// 		}
// 		boxNumber = this.id.substr(this.id.indexOf("_")+1);
// 		document.getElementById("BOX_"+boxNumber).style.display="block";
// 	}
// }

window.onload=function(){
	var boxNumber,
		BoxShow,
		courseNumber=document.querySelectorAll(".COURSE").length;
	for (var i = 1; i <= courseNumber; i++) {
		document.getElementById("COURSE_"+i).onmouseover = waitForCourseBoxSetTimeout;
		document.getElementById("COURSE_"+i).onmouseout = clearCourseBoxTimeout;
	}
	function waitForCourseBoxSetTimeout(){
		boxNumber = this.id.substr(this.id.indexOf("_")+1);
		BoxShow = setTimeout(courseBoxShow,200);
	}
	function clearCourseBoxTimeout(){
		clearTimeout(BoxShow);
		BoxShow = 0;
	}
	function courseBoxShow(){
		for (var i = 1; i <= courseNumber; i++) {
			document.getElementById("BOX_"+i).style.display="none";
		}
		document.getElementById("BOX_"+boxNumber).style.display="block";
	}
}
