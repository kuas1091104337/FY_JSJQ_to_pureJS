// window.onload=function(){
// 	for (var i = 1; i <= 12; i++) {
// 		document.getElementById("COURSE_"+i).onclick = show;
// 	}
// 	function show(){
// 		var openNumber = this.className.indexOf(" OPEN");
// 		console.log(openNumber);
// 		if(openNumber!=-1){
// 			this.className = this.className.substr(0,openNumber);
// 		}else{
// 			// this.className = this.className + " OPEN";
// 			this.className+=" OPEN";
// 		};
// 	}
// }

window.onload=function(){
	var courseMax = document.querySelectorAll(".COURSE").length;
	for (var i=1; i<=courseMax; i++) {
		document.getElementById("COURSE_"+i).onclick=courseShow;
	}
	function courseShow(){
		var openNumber = this.className.indexOf(" OPEN");
		if(openNumber!=-1){
			this.className = this.className.substr(0, openNumber);	//	class="COURSE OPEN"一個或兩個class切換
		}else{
			this.className+=" OPEN";
		};
	}
}