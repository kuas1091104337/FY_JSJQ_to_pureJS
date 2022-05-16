// $(function(){
// 	$(".small img").click(function(){
// 		// var Number = this.id.substr(-1);
// 		var Number = $(this).index()+1;
// 		console.log(Number);
// 		$(".banner img").not("#PP"+Number).fadeOut();
// 		$("#PP"+Number).fadeIn();
// 	});	
// });

$(function(){
	$("#PP_"+1).fadeIn();
	$(".small img").click(function(){
		var nowBannerNumber = $(this).index()+1;
		var BannerNumber = $(this).index();
		console.log(nowBannerNumber);
		console.log(BannerNumber);
		// $(".banner img").filter("#PP_"+nowBannerNumber).fadeIn().not("#PP_"+nowBannerNumber).fadeOut();
		$(".banner img").not("#PP_"+nowBannerNumber).fadeOut().eq(BannerNumber).fadeIn()//.eq($(this).index()).fadeIn();
	});		
});

// window.onload=function(){
// 	document.querySelector(".banner img").style.display = "block";
// 	// document.querySelectorAll(".banner img")[0].style.display = "block";
// 	var bannerNumber = 1,
// 		smallImgAmount = document.querySelectorAll(".small img");		
// 	for (i=0; i<smallImgAmount.length; i++){
// 		smallImgAmount[i].onclick = showBanner;
// 	}
// 	function showBanner(){
// 		var nowBannerNumber = this.id.substr(this.id.indexOf("_")+1);
// 		document.getElementById("PP_"+bannerNumber).style.display = "none";
// 		document.getElementById("PP_"+nowBannerNumber).style.display = "block";
// 		bannerNumber = nowBannerNumber;
// 	}
// }
