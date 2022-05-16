// $(function(){
// 	var N = 0;
// 	var MOVE = 256
// 	var MAX = $("#PIC li").length - 4	
// 	$("#LEFT").click(function(){ 
// 		if(N>0){
// 			N-=1;
// 			$("#PIC ul").stop().animate({left:N*MOVE*-1});
// 		}
// 	});
// 	$("#RIGHT").click(function(){ 
// 		if(N<MAX){
// 			N+=1;
// 			$("#PIC ul").stop().animate({left:N*MOVE*-1});
// 		}	
// 	});
// });

// $(function(){
// 	var goNumber = 0;
// 	var ulMove = 256 * 4;
// 	var goMaxNumber = Math.ceil($("#PIC li").length / 4) - 1;
// 	var $PIC_ul = $("#PIC ul");
// 	$("#LEFT").click(function(){
// 		if (goNumber > 0) {
// 			goNumber-=1;
// 			$PIC_ul.stop().animate({left:goNumber*ulMove*-1});
// 			console.log(goNumber);
// 		}
// 	});
// 	$("#RIGHT").click(function(){
// 		if (goNumber < goMaxNumber) {
// 			goNumber+=1;
// 			$PIC_ul.stop().animate({left:goNumber*ulMove*-1});
// 			console.log(goNumber);
// 		}
// 	});	
// });

// 一次走一個
// $(function(){
// 	var bannerMove = 256,
// 		bannerNumber = 0,
// 		bannerMaxNumber = $("#PIC li").length - 4,
// 		$PIC_ul = $("#PIC ul");		

// 	$("#LEFT").click(function(){
// 		if(bannerNumber > 0){
// 			bannerNumber--;
// 			$PIC_ul.stop().animate({left:bannerNumber*bannerMove*-1});
// 		}else{
// 			bannerNumber=bannerMaxNumber;
// 			$PIC_ul.stop().animate({left:bannerMaxNumber*bannerMove*-1});
// 		};	
// 	});	
// 	$("#RIGHT").click(function(){
// 		if(bannerNumber < bannerMaxNumber){
// 			bannerNumber++;
// 			$PIC_ul.stop().animate({left:bannerNumber*bannerMove*-1});
// 		}else{
// 			bannerNumber=0;
// 			$PIC_ul.stop().animate({left:0});
// 		};
// 	});		
// });

// 一次走四個
$(function(){
	var bannerMove = 256*4,
		bannerNumber = 0,
		bannerMaxNumber = Math.ceil($("#PIC li").length / 4) - 1,
		$PIC_ul = $("#PIC ul");		
	
	$("#LEFT").click(function(){
		if(bannerNumber > 0){
			bannerNumber--;
			$PIC_ul.stop().animate({left:bannerNumber*bannerMove*-1});
		}else{
			bannerNumber=bannerMaxNumber;
			$PIC_ul.stop().animate({left:bannerMaxNumber*bannerMove*-1});
		};	
	});	
	$("#RIGHT").click(function(){
		if(bannerNumber < bannerMaxNumber){
			bannerNumber++;
			$PIC_ul.stop().animate({left:bannerNumber*bannerMove*-1});
		}else{
			bannerNumber=0;
			$PIC_ul.stop().animate({left:0});
		};
	});	

	$("#LEFT").fadeTo(500,.5);	
});