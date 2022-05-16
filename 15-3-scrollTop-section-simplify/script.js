$(function(){

	$("#MENU a").click(function(){
		// var N = this.id.substr(1)
		var N = this.id.substr(-1);
		// var N = $(this).index();
		console.log(N);
		$("html,body").stop().animate({scrollTop:1000*N},800);
		return false;	
	});
	
});