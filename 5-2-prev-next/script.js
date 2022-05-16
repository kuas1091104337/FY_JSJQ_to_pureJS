// window.onload=function(){
// 	var IMG = document.getElementById("myImg");
// 	var Number = 0;

// 	document.getElementById("next").onclick=function(){
// 		if(Number<11){
// 			Number+=1;
// 		}else{
// 			Number=0;
// 		};
// 		IMG.src="images/"+Number+".jpg";
// 		console.log(Number);
// 	};	
// 	document.getElementById("prev").onclick=function(){
// 		if(Number>0){
// 			Number-=1;
// 		}else{
// 			Number=11;
// 		};
// 		IMG.src="images/"+Number+".jpg";
// 		console.log(Number);	
// 	};	
// }
window.onload=function(){
	var IMG = document.getElementById("myImg"),
		Number = 1;
	IMG.src="images/"+Number+".jpg";
	document.getElementById("next").onclick=function(){
		if(Number<11){
			Number++;
		}else{
			Number=1;
		};
		IMG.src="images/"+Number+".jpg";
	}
	document.getElementById("prev").onclick=function(){
		if(Number>1){
			Number--;
		}else{
			Number=11;
		};
		IMG.src="images/"+Number+".jpg";
	}
}