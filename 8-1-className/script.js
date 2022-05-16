// window.onload=function(){
// 	document.getElementById("A").onclick = setA;
// 	document.getElementById("B").onclick = setB;
// 	document.getElementById("C").onclick = setC;
// 	function setA(){
// 		document.getElementById("CONTENT").className = "AAA";
// 	}
// 	function setB(){
// 		document.getElementById("CONTENT").className = "BBB";
// 	}
// 	function setC(){
// 		document.getElementById("CONTENT").className = "CCC";
// 	}
// }
function set(style) {
	document.getElementById("CONTENT").className = style;
}