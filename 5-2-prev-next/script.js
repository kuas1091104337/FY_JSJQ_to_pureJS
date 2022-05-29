window.onload=function(){
	var $img = document.getElementById('myImg'),
			num = 0;
	$img.src='../images/'+num+'.jpg';
	document.getElementById('next').onclick=function(){
		// num < 11 ? num++ : num = 0;
		// $img.src='../images/'+num+'.jpg';
		num++
		imgHandler()
	}
	document.getElementById('prev').onclick=function(){
		// num > 1 ? num-- : num = 11;
		// $img.src='../images/'+num+'.jpg';
		num--
		imgHandler()
	}
	function imgHandler(){
		num = (num+12)%12
		$img.src='../images/'+num+'.jpg';
	}
}
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
