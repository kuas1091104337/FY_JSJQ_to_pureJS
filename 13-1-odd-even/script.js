$(function(){
	$("#MYTB tr:odd").addClass("EEE");
	$("#MYTB tr").hover( 
		function(){
			$(this).toggleClass("AAA");	
		}
	);
});

// $(function(){
// 	$("#MYTB tr").hover(
// 		function(){
// 			$(this).toggleClass("AAA");		
// 		}
// 	).filter(":odd").addClass("EEE");
// });

// $(function(){
// 	$("table tr").hover(function(){
// 		$(this).toggleClass('AAA');
// 	}).filter(":even").addClass('EEE').filter(":visible").attr("style","font-weight:bold; color:red;");	
// 	$("a").hover(function(){
// 	});
// });

