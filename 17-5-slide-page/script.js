$(function(){
	
	var N = 0;
	var MOVE = 256*4
	var MAXPAGE = Math.ceil($("#PIC li").length / 4 ) - 1;
		
	$("#LEFT").click(function(){ 
		if(N>0){
			N-=1;
			$("#PIC ul").stop().animate({left:N*MOVE*-1});
		}
	});
	
	$("#RIGHT").click(function(){ 
		if(N<MAXPAGE){
			N+=1;
			$("#PIC ul").stop().animate({left:N*MOVE*-1});
		}	
	});
 	
});