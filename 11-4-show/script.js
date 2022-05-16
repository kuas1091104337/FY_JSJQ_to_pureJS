// $(function(){
// 	$("#AAA").click(function(){
// 		$("#PP").show();
// 	});	
// 	$("#BBB").click(function(){
// 		$("#PP").hide();
// 	});	
// 	$("#CCC").click(function(){
// 		$("#PP").toggle();
// 	});		
// });

window.onload=function(){
	var PP = document.getElementById("PP"),
		liAmount = document.querySelectorAll("#BOX li");
	PP.style.display = "block";
	for (i=0; i<liAmount.length; i++){
		liAmount[i].onclick = PPdisplay;
	}
	function PPdisplay(){
		if(this.id == "AAA"){
			PP.style.display = "block";
		}else if(this.id == "BBB"){
			PP.style.display = "none";
		}else if(this.id == "CCC"){
			if(PP.style.display == "block"){
				PP.style.display = "none";
			}else if(PP.style.display == "none"){
				PP.style.display = "block";
			};
		};			
	};
}