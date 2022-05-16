$(function(){
		
	$(".QQ").click(function(){ 
		// $(this).siblings().css({backgroundColor:"#C00"});
		// $(this).siblings().eq(1).css({backgroundColor:"#C00"});
		// $(this).siblings().filter(":odd").css({backgroundColor:"#C00"});
		// $(this).parents().css({backgroundColor:"#C00"});
		// $(this).parent().css({backgroundColor:"#0C0"});
		// $(this).parent().siblings().css({backgroundColor:"#C00"});
		// $(this).parent().siblings().eq(0).css({backgroundColor:"#C00"});
        // $(this).parent().siblings().eq(0).find("li").css({backgroundColor:"#C00"});	
		// $(this).parent().siblings().eq(0).find("li").eq(2).css({backgroundColor:"#C00"});
		$(this).parent().siblings().eq(0).filter("b").eq(2).css({backgroundColor:"#C00"});

		// $(this).children().prev().prevAll().next().nextAll().end().find("selector")


		// $(this).siblings().hasClass("AAA").css({backgroundColor:"#C00"});
		// $("li").hasClass("AAA").css({backgroundColor:"#C00"});
	});
	$("#BOX ul li").click(function(){
		if ($(this).hasClass("AAA")) {
			$(this).css({backgroundColor:"#C00"}).removeClass("AAA");
		}
	})
    
});