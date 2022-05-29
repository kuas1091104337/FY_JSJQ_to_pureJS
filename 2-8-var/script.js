// JavaScript Document
window.onload = function(){
	var DOG = document.getElementById("myDog")
	DOG.onmouseover = dogOver;
	DOG.onmouseout = dogOut;
	function dogOver(){
		this.src="../images/dogover.jpg";
	}
	function dogOut(){
		this.src="../images/dog.jpg";
	}
}