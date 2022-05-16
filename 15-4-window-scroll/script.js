// $(function(){
// 	$(window).scroll(function(){	
// 		var HEIGHT = $(window).scrollTop() + $(window).innerHeight() - $("#TOP").outerHeight(true);
// 		if( $(window).scrollTop() > 200 ){		
// 			$("#TOP").stop().animate({top:HEIGHT});		
// 		}else{		
// 			$("#TOP").stop().animate({top:-100});		
// 		}	
// 	});
// 	$("#TOP").click(function goTop(){	
// 		$("html,body").animate({scrollTop:0},1000);
// 	});	 
// 	console.log($(window).scrollTop() + $(window).innerHeight()-100);
// 	console.log($(window).scrollTop() + $(window).innerHeight() - $("#TOP").height());
// 	console.log($(document).height());	
// });

$(function(){
	$(window).scroll(function(){
		var topHeight = $(window).scrollTop() + $(window).innerHeight() - $("#TOP").outerHeight(true);
		if($(window).scrollTop() > 200){
			$("#TOP").stop().animate({top:"topHeight"});
		}else{
			$("#TOP").stop().animate({top:-100});
		};
	});
	$("#TOP").click(function(){
		$("html, body").animate({scrollTop(0)})	
	});
});