// $(function(){
// 	$("#MYTB tr").filter(":odd").addClass("EEE");
// 	//$("#MYTB tr").not(":even").addClass("EEE");
// 	$("#MYTB tr").hover( 
// 		function(){
// 			$(this).toggleClass("AAA");	
// 		}
// 	);
// });
$(function(){
	$("#MYTB tr").hover(
		function(){
			$(this).toggleClass("AAA");		
		}
	).not(":last-child").addClass("EEE");
});
