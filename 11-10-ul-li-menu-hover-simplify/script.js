$(function(){

	$("#MENU > ul > li").hover(
		function(){
			var N = this.id.substr(4);
			$("#SUB"+N).slideDown();	
		},
		function(){
			var N = this.id.substr(4);
			$("#SUB"+N).slideUp();
		});
		
});