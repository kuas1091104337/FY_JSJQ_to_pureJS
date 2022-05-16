// $(window).load(function(){
// 	alert("load比較慢Qold");
// });
function ready(fn) {
  if (document.readyState != 'loading'){
    fn(alert("ready比較快"));    
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// window.onload=function(){
// 	alert("load比較慢");
// }

// $(window).on("load",function(){
// 	alert("load比較慢Q");
// })

// $(function(){
// 	alert("$function ready比較快Q1");		
// });

// $(document).ready(function(){
// 	alert("ready比較快Q2");
// });




