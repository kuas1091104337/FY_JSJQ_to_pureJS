// JavaScript Document
window.onload = function(){

	var DOG = document.getElementById("myDog")
	DOG.onmouseover = dogOver;
	DOG.onmouseout = dogOut;

	function dogOver(){
		this.src="dogover.jpg";
	}
	
	function dogOut(){
		this.src="dog.jpg";
	}
	
}