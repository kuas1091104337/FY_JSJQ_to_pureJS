// JavaScript Document
window.onload = function(){

	document.getElementById("myDog").onmouseover = dogOver;
	document.getElementById("myDog").onmouseout = dogOut;

	function dogOver(){
		this.src="dogover.jpg";
	}
	
	function dogOut(){
		this.src="dog.jpg";
	}
	
}