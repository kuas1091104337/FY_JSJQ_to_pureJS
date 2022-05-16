 // $(function(){
	// $(window).scroll(function(){
	// 	if( $(window).scrollTop() < 400 ){
	// 		var POS = $(window).scrollTop()/400*100
	// 		$("#TOP").css({top:POS-100},500);
	// 	}else{
	// 		$("#TOP").css({top:0},900);
	// 	}
	// });
	// $("#TOP").click(function goTop(){
	// 	$("html,body").animate({scrollTop:0},900);
	// });
 // });

// $(function(){
// 	$(window).scroll(function(){
// 		if($(window).scrollTop()<500){
// 			var HEIGHT = $(window).scrollTop() / 500 * $("#TOP").outerHeight(true);
// 			$("#TOP").css({top:HEIGHT - $("#TOP").outerHeight(true)},1000);
// 		}else{
// 			$("#TOP").css({top:0},1000);
// 		};
// 	})
// });

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()<500){
			var TOP_CSS = $(window).scrollTop() / 500 * $("#TOP").outerHeight(true);
			console.log($(window).scrollTop());
			console.log(TOP_CSS);
			$("#TOP").css({top:TOP_CSS - $("#TOP").outerHeight(true)}, 800);
		}else{
			$("#TOP").css({top:0}, 500);
		};
	});
	
// var a="3";
// var b="c";
// var c=8;

// var N1=a+c;
// var N2=a-c;
// var N3=a*c;
// var N4=a/c;

// var M1=b+c;
// var M2=b-c;
// var M3=b*c;
// var M4=b/c;

// console.log(N1); //38
// console.log(N2); //-5
// console.log(N3); //24
// console.log(N4); //0.375

// console.log(M1); //c8
// console.log(M2); //NaN
// console.log(M3); //NaN
// console.log(M4); //NaN

});