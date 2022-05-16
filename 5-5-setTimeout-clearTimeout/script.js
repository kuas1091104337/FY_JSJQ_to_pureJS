// JavaScript Document
window.onload=function(){
	
	var N = 1;
	document.getElementById("myImg").src = "images/"+N+".jpg"
	function NEXT(){
		if(N<11){
			N = N+1;
		}else{
			N = 1;	
		}
		document.getElementById("myImg").src = "images/"+N+".jpg";
		
		TT = setTimeout(NEXT,3000);
	}
	
	var TT = setTimeout(NEXT,3000);
	
	document.getElementById("switch").onclick = function(){
		if(TT){
			clearTimeout(TT);
			TT = 0;
			this.src = "images/play.jpg";
		}else{
			this.src = "images/pause.jpg"
			TT = setTimeout(NEXT,3000);			
		}		
	}
}