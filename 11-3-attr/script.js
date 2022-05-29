
window.onload=function(){
	var smallImgAmount = document.querySelectorAll("#SMALL img");
	document.querySelectorAll('#SMALL img').forEach((el) => {
		el.addEventListener('click',bnChange);
	});
	function bnChange(e){
		let bnNum = e.target.id.substr(-1);
		document.getElementById('BIG').src='../images/dog'+bnNum+'.jpg';
	}
}
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