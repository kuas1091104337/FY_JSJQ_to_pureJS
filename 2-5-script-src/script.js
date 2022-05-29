window.onload=function(){
	var myDog = document.getElementById("myDog");
	myDog.onmouseenter=over;	
	myDog.onmouseout=out;
	function over(){
		this.src="../images/dogOver.jpg";
		console.log(this);
		console.log(this.src);
	}	
	function out(){
		this.src="../images/dog.jpg";	
		console.log(this);
		console.log(this.src);
	}
}