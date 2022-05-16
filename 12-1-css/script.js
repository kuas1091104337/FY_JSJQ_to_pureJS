$(function(){
	$("#BIG, #MID, #SMALL").click(function(){
		if(this.id=="BIG"){
			// $("#CONTENT").attr("style","font-weight:bold; font-size:24px; color:red;")
			$("#CONTENT").css({fontSize:24, color:"red"});
		}else if(this.id=="MID"){
			// $("#CONTENT").attr("style","font-weight:normal; font-size:21px; color:blue; letter-spacing:8px;")
			$("#CONTENT").css({fontSize:21, color:"blue"});
		}else if(this.id=="SMALL"){
			// $("#CONTENT").attr("style","font-weight:bold; font-size:18px; color:green;")
			$("#CONTENT").css({fontSize:18, color:"green", fontWeight:"bold"});
		};
	});	
});

// window.onload=function(){
// 	var content = document.getElementById("CONTENT");
// 	document.getElementById("BIG").onclick=function(){
// 		content.style.cssText="font-weight:bold; font-size:24px; color:blue; letter-spacing:5px;"
// 	}
// 	document.getElementById("MID").onclick=function(){
// 		content.style.cssText="font-weight:normal; font-size:21px; color:green;"
// 	}
// 	document.getElementById("SMALL").onclick=function(){
// 		content.style.cssText="font-weight:bold; font-size:18px; color:red;"
// 	}	
// }