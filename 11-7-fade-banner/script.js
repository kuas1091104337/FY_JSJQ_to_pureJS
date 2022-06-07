// $(function(){
// 	var num = 1;
// 	$('#PP_'+num).fadeIn();
// 	$(".small img").click(function(){
// 		let bnNum = $(this).index() - 1;
// 		$(".banner img").not("#PP_"+bnNum).fadeOut().eq(bnNum).fadeIn();
// 	});
// });

window.onload = function () {
  function findIndex(e) {
    let el = e.target, i = 1;
    // if (!el) return -1;
    // let i = 1;
    while ((el = el.previousElementSibling)) i++;
    return i;
  }
  document.getElementById('PP_1').classList.add('show');
  document.querySelectorAll('.small > img').forEach((el) => {
    el.addEventListener("click", bnShow);
  });
  function bnShow(e) {
    // console.log(e.target);
    // console.log(findIndex(e));
    console.log(findIndex(e));
    document.querySelectorAll(".banner > img").forEach((el) => {
      if (el.classList.contains("show")) el.classList.remove("show");
    });
    // document.getElementById("PP_" + findIndex(e.target)).classList.add("show");
    document.getElementById("PP_" + findIndex(e)).classList.add("show");
  }
};
