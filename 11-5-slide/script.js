// $(function(){	
// 	$("#AAA").click(function(){ 
// 		$("#PP").slideDown(500);
// 	});
// 	$("#BBB").click(function(){ 
// 		$("#PP").slideUp(500);
// 	});
// 	$("#CCC").click(function(){ 
// 		$("#PP").slideToggle(500);
// 	});
// });

window.onload=function(){
	var PP = document.getElementById("PP"),
		liAmount = document.querySelectorAll("#BOX li");
	PP.style.height = "308px";
	for (i=0; i<liAmount.length; i++){
		liAmount[i].onclick = PPslide;
	}
	function PPslide(){
		if(this.id == "AAA"){
			PP.style.height = "308px";
		}else if(this.id == "BBB"){
			PP.style.height = "0px";
		}else if(this.id == "CCC"){
			if(PP.style.height == "308px"){
				PP.style.height = "0px";
			}else if(PP.style.height == "0px"){
				PP.style.height = "308px";
			};
		};			
	};
}