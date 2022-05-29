// $(function(){
// 	alert("要開始了");
// 	document.querySelector("h1").onclick = function(){
// 		alert("這是文字");
// 	};
// 	document.querySelector("img").onclick = function(){
// 		alert("這是圖片");		
// 	};
// });
window.onload = function(){
	alert('要開始了')
	document.getElementsByTagName('h1')[0].addEventListener('click',() => alert('這是文字'));
	document.getElementById('IMG').addEventListener('click',() => alert('這是圖片'));
}