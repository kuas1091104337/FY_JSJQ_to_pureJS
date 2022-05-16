// $(function(){
// 	$("#SlideMenu").animate({top:-150},500);
// 	$("#SlideMenu").hover(
// 		function(){ 
// 			$(this).stop().animate({top:0},900,"easeOutBounce");
// 		},
// 		function(){ 
// 			$(this).stop().animate({top:-150},900,"easeOutBounce");
// 		}
// 	)	
// });

window.onload=function(){
	var menu = document.getElementById("SlideMenu");
	menu.style.top = "0px";
	menu.style.top = "-150px";
	menu.onmouseover = menuGO;
	menu.onmouseout = menuGO;
	function menuGO(){
		if(this.style.top == "0px"){
			this.style.top = "-150px"
		}else if(this.style.top == "-150px"){
			this.style.top = "0px"
		};
	}
}

// var Number = 0;
// function go(){
// 	Number:"+=100"
// 	console.log(Number);
// }
// setInterval(go,1000);