// $(function(){
// 	var $this = 0
// 	var $head_a = $("#HEADER li a");
// 	$head_a.eq(0).css({color: "#eee"});
// 	$head_a.mouseover(function() {
// 		$this = $(this);
// 		var hoverBBposLeft = $this.position().left;
// 		$("#BB").stop().animate({left:hoverBBposLeft}, 600, afterChange)
// 		$head_a.css({color:"#333"});
// 		console.log($("#BB").offset());
// 	});
// 	function afterChange(){
// 		$this.css({color: "#eee"});
// 	}
// });

$(function(){
	var BB_a;
	$("#HEADER ul a").mouseover(function(){
		// var BB_left = $(this).offset().left-168;
		// var BB_left = $(this).offset();
		var BB_a = $(this);
		var BB_left = $(this).position().left;
		// var BB_LEFT = $(this).offset().left;
		var BB = $(this).position();
		console.log(BB_left);
		// console.log(BB_LEFT);
		console.log(BB_a);
		console.log(BB);
		$("#BB").stop().animate({left:BB_left},800,afterBB);
		$("#HEADER ul a").css({color:"#333"});
		function afterBB(){
			BB_a.css({color:"#eee"});
		}
	});	
});