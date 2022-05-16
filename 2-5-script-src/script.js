window.onload=function(){
	var myDog = document.getElementById("myDog");
	myDog.onmouseenter=over;	
	myDog.onmouseout=out;

	function over(){
		this.src="dogOver.jpg";
		console.log(this);
		console.log(this.src);
	}	

	function out(){
		this.src="dog.jpg";	
		console.log(this);
		console.log(this.src);
	}
}