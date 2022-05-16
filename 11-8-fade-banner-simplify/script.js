$(function(){
	
	$("#SMALL img").click( function(){
		var N = this.id.substr(2);
		$("#BANNER img").fadeOut();
		$("#PP"+N).fadeIn();
	});
	
});

$(function(){
	$(".small img").click(function(){
		// var Number = this.id.substr(-1);
		var Number = $(this).index()+1;
		$(".baner img").fadeOut();
		// $(".baner img").not("#PP"+Number).fadeOut();
		$("#PP"+Number).fadeIn();
	});	
});