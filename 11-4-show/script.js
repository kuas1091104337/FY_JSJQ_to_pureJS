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
	const $PP = document.getElementById("PP");
	document.querySelectorAll("#BOX li").forEach((el) => {
		el.addEventListener('click',imgChange);
	});
	function imgChange(e){
		console.log(e.target.parentNode);
		console.log(this.id);
		switch(e.target.parentNode.id) {
			case 'AAA' :
				$PP.classList.add('show');
				break;
			case 'BBB' :
				$PP.classList.remove('show');
				break;
			case 'CCC' :
				$PP.classList.toggle('show');
				break;
		}
		return false;
	}
	$PP.classList.add('show');
}