// window.onload = function (){
// 	for(var i = 1;i<=12;i++){
// 		document.getElementById("COURSE_"+i).onmouseover = SHOW;
// 		document.getElementById("COURSE_"+i).onmouseout = HIDE;
// 	}
// 	function SHOW(){
// 		var N = this.id.substr(7);
// 		document.getElementById("BOX_"+N).style.display = "block";
// 	}	
// 	function HIDE(){
// 		var N = this.id.substr(7);
// 		document.getElementById("BOX_"+N).style.display = "none";
// 	}
// }

window.onload=function(){
	var boxNumber,
		courseNumber=document.querySelectorAll(".COURSE").length;
	for (var i=1; i<=courseNumber; i++){
		document.getElementById("COURSE_"+i).onmouseover=showCourse;
		document.getElementById("COURSE_"+i).onmouseout=hideCourse;
	}	
	function showCourse(){
		boxNumber=this.id.substr(this.id.indexOf("_")+1);
		document.getElementById("BOX_"+boxNumber).style.display="block";
	}
	function hideCourse(){
		// var boxNumber=this.id.substr(this.id.indexOf("_")+1);
		document.getElementById("BOX_"+boxNumber).style.display="none";
	}
}

