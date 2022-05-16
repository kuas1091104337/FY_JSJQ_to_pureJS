// window.onload=function(){
// 	for(var i=1;i<=5;i++){
// 		var MENU = document.getElementById("MENU"+i);		
// 		MENU.onmouseover = SHOW;
// 		MENU.onmouseout = HIDE;
// 	}
// 	function SHOW(){
// 		var N = this.id.substr(4);
// 		document.getElementById("SUB"+N).style.display = "block";			
// 	}
// 	function HIDE(){
// 		var N = this.id.substr(4);
// 		document.getElementById("SUB"+N).style.display = "none";
// 	}
// }

window.onload=function(){
	var menuNumber,
		menu_length = document.querySelectorAll("#MENU>ul>li").length;
	for(var i=1; i<=menu_length; i++){
		var MENU = document.getElementById("MENU"+i);
		MENU.onmouseover = SHOW;
		MENU.onmouseout = HIDE;
	}
	function SHOW(){
		menuNumber = this.id.substr(4);
		document.getElementById("SUB" + menuNumber).style.display = "block";
	}
	function HIDE(){
		document.getElementById("SUB" + menuNumber).style.display = "none";
	}
}