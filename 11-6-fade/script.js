// $(function(){
// 	$("#AAA").click(function(){ 
// 		$("#PP").fadeIn(500);
// 	});
// 	$("#BBB").click(function(){ 
// 		$("#PP").fadeOut(500);
// 	});
// 	$("#CCC").click(function(){ 
// 		$("#PP").fadeToggle(500);
// 	});
// 	$("#DDD").click(function(){ 
// 		$("#PP").fadeTo(500,0.5);
// 	});
// 	$("#EEE").click(function(){ 
// 		$("#PP").fadeTo(500,1);
// 	});
// });

window.onload=function(){
	var PP = document.getElementById("PP"),
		liAnount = document.querySelectorAll("#BOX li");
	PP.style.opacity = "1";
	for (i=0; i<liAnount.length; i++){
		liAnount[i].onclick = PPfade;
	}
	function PPfade(){
		if(this.id == "AAA"){
			
			PP.style.opacity = "1";
		}else if(this.id == "BBB"){
			PP.style.opacity = "0";
		}else if(this.id == "CCC"){
			if(PP.style.opacity == "0"){
				PP.style.opacity = "1";
			}else if(PP.style.opacity == "0.5"){
				PP.style.opacity = "0.0001";
			}else if(PP.style.opacity == "1"){
				PP.style.opacity = "0";
			}else if(PP.style.opacity == "0.0001"){
				PP.style.opacity = "0.5";
			};
		}else if(this.id == "DDD"){
			PP.style.opacity = "0.5";
		}else if(this.id == "EEE"){
			PP.style.opacity = "1";
		};	
	}
}