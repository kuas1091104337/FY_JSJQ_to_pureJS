$(function(){

	$("#MENU > ul > li").hover(
		function(){
			var N = this.id.substr(4);
			$("#SUB"+N).stop(true,true).slideDown();	
		},
		function(){
			var N = this.id.substr(4);
			$("#SUB"+N).stop(true,true).slideUp();
		});
		
});