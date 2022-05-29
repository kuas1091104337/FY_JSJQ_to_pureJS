window.onload=function(){
	var imgNumber = Math.ceil(Math.random()*11);
	console.log(imgNumber);
	console.log(Math.random());
	document.getElementById("myImg").src="../images/"+imgNumber+".jpg"
}