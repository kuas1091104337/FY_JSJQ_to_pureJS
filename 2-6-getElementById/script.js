// JavaScript Document
window.onload = function(){
	var myDog=document.getElementById("myDog")
	myDog.onmouseover = dogOver;
	myDog.onmouseout = dogOut;

	function dogOver(){
		myDog.src="dogover.jpg";
	}
	
	function dogOut(){
		myDog.src="dog.jpg";
	}
	
}