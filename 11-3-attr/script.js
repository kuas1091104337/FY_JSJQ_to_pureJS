// $(function(){
// 	var N = 0;
// 	$("#SMALL > img").click(function(){
// 		N = $(this).index();
// 		$("#BANNER img").slideUp().eq(N).slideDown();
// 	});		
// });

// $(function(){
// 	$("#SMALL img").click(function() {
// 		var Number = this.id.substr(-1);
// 		var Number = $(this).index()+1;
// 		$("#BIG").attr("src","images/dog"+Number+".jpg");
// 	});
// });

window.onload=function(){
	var smallImgAmount = document.querySelectorAll("#SMALL img");
	for (i=0; i<smallImgAmount.length; i++){
		smallImgAmount[i].onclick = bannerChange;
	}

	function bannerChange(){
		var bannerNumber = this.id.substr(-1);
		console.log(this.index);
		document.getElementById("BIG").src="images/dog"+bannerNumber+".jpg";
	}
}

// $(function(){
// 	$("#SMALL img").click(function(){
// 		var bannerNumber = $(this).attr('id').substr(-1);
// 		// var bannerNumber = this.id.substr(-1);
// 		$("#BIG").attr("src","images/dog"+bannerNumber+".jpg");	
// 	});	
// 	$("#BIG").mouseover(function() {
// 		$(this).attr("style","opacity: 0.5;")
// 	});
// 	$("#BIG").mouseout(function() {
// 		$(this).attr("style","opacity: 1;")
// 	});
// });