// JavaScript Document
window.onload = function(){
	document.getElementById("myDog").onmouseover = dogOver;
	document.getElementById("myDog").onmouseout = dogOut;
	function dogOver(){
		this.src="../images/dogover.jpg";
	}
	function dogOut(){
		this.src="../images/dog.jpg";
	}
}