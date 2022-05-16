// $(function(){
// 	var N=0;
// 	var MOVE=0;
// 	function NEXT(){	
// 		if(N<$("#BANNER li").length-1){
// 			N += 1;
// 		}else{
// 			N=0;
// 		}	
// 		CHANGE();	
// 		START();	
// 	}
// 	$("#BANNER, #NUMBER").on("mouseover", function(){ 
// 		$("#NUMBER li div").eq(N).stop().css({width:"100%"});	
// 	}).on("mouseout", function(){	
// 		START();	
// 	});
// 	$("#NUMBER li").on("click", function(){	
// 		if($(this).index() == N) return;	
// 		N = $(this).index();
// 		MOVE = N*300*-1;	
// 		CHANGE();
// 	});
// 	function START(){	
// 		$("#NUMBER li div").eq(N).stop().css({width:"100%"}).animate({width:"0%"},3000,NEXT);		
// 	}
// 	function CHANGE(){	
// 		$("#BANNER li.NOW").stop().animate({top:-300},500);
// 		$("#BANNER li").eq(N).stop().css({top:300}).animate({top:0},500,OK);
// 		$("#NUMBER li").removeClass().eq(N).addClass("NOW").find("div").css({width:"100%"});	
// 	}
// 	function OK(){	
// 		$("#BANNER li").removeClass().eq(N).addClass("NOW");	
// 	}
// 	START()
// });

$(function(){
	var $BANNER_li = $("#BANNER li");
	var $NUMBER_li = $("#NUMBER li");
	var $NUMBER_li_div = $("#NUMBER li div");
	var bannerNumber = 0; //class "NOW"在ul li的第一個

	function next(){
		if (bannerNumber < $("#BANNER li").length - 1) {//因為bannerNumber從0開始、.eq(bannerNumber)，.length從1開始，所以減1。
			bannerNumber++;
		} else {
			bannerNumber=0;
		}
		change();
		start();
	}
	
	function change() {
		$("#BANNER li.NOW").stop().animate({top:-300}, 600);
		$BANNER_li.eq(bannerNumber).stop(true).css({top:300}).animate({top:0}, 600, okay);
		$NUMBER_li.removeClass().eq(bannerNumber).addClass("NOW").find("div").stop().css({width:"100%"});
	};

	//用animate的after function做計時器，3秒後做 next();
	function start(){
		$NUMBER_li_div.eq(bannerNumber).stop().css({width:"100%"}).animate({width:"0%"}, 3000, next);//
	};
	function okay(){
		$BANNER_li.removeClass().eq(bannerNumber).addClass("NOW");
	}

	// 手動操作
	$("#BANNER, #NUMBER").on("mouseover", function(){
		$NUMBER_li_div.eq(bannerNumber).stop(true).css({width:"100%"});//
	}).on("mouseout", function(){
		start();	
	});
	$NUMBER_li.on("click", function() {
		if ($(this).index() == bannerNumber) return;
		console.log(bannerNumber);
		bannerNumber = $(this).index();
		change();
	});

	// 起動
	start();
});