$(function(){
	
	var WHO;
	
	$("#HEADER li a").mouseover(function(){
		
			WHO = $(this);
			
			var NOWPOS =  $(this).position().left;
			
			$("#BB").stop().animate({left:NOWPOS},800,AFTER);
			
			$("#HEADER li a").css({color:"#333"});
			
	});
	
	function AFTER(){
		
		WHO.css({color:"#EEE"});
	}

});