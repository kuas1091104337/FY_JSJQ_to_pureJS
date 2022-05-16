// $(function(){
// 	$("#MENU li").hover(function(){ 
// 		$(this).stop().animate({top:0});	
// 		$(this).nextAll().each(function(index, element) {
//             $(element).stop().animate({top:20+index*20});
//         });	
// 		$(this).prevAll().each(function(index, element) {
//             $(element).stop().animate({top:20+index*20});
//         });	
// 	},function(){ 
// 		$("#MENU li").stop().animate({top:100});			
// 	});
// });

// $(function(){
// 	var $MENU_li = $("#MENU li");
// 	$MENU_li.hover(
// 		function(){
// 			var $this = $(this);
// 			$this.stop().animate({top:0});
// 			$this.nextAll().each(function(index,element){
// 				$(element).stop().animate({top:20 + index * 20})
// 			}).end().prevAll().each(function(index,element){
// 				$(element).stop().animate({top:20 + index * 20})
// 			})
// 		},function(){
// 			$MENU_li.stop().animate({top:100});
// 		}
// 	);		
// });

$(function(){
	$("#MENU li").hover(
		function(){
			$(this).stop().animate({top:0}).nextAll().each(function(index, element) {
				$(element).stop().animate({top:20+index*20});
			}).end().prevAll().each(function(index, element) {
				$(element).stop().animate({top:20+index*20});
			});
		},function(){
			$("#MENU li").stop().animate({top:100});
		}
	);
});