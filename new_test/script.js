var boxStyleArray = [];
var $boxWrap = document.getElementById('boxWrap');
(function init() {
  var div;
  var i;
  for (i = 0; i < 50; i++) {
    div = document.createElement('div');
    div.classList.add('cssAnimate','box');
		// div.textContent = i;
    $boxWrap.appendChild(div);
    boxStyleArray[i] = div.style;
  }
})();
var toggleStatus = true;
var $type = document.getElementById('type');
var rafId;
// window.toggle = 
function toggle() {
  var i;
  if (toggleStatus) {
    $type.textContent = 'requestAnimationFrame';
		document.querySelectorAll('.box').forEach((el) => {
			el.classList.remove('cssAnimate');
		});
    rafId = window.requestAnimationFrame(animate);
  } else {
    $type.textContent = 'CSS Animation';
    window.cancelAnimationFrame(rafId);
		document.querySelectorAll('.box').forEach((el) => {
			el.style = '';
			el.classList.add('cssAnimate');
		});
  }
  toggleStatus = !toggleStatus;
}
var duration = 6000;
var translate = 500; var rotate = 360;
var scale = 1.35 - 0.6;
var oldTimestamp = null;
function animate(newTimestamp) {
  if (!oldTimestamp) {
    oldTimestamp = newTimestamp;
    rafId = window.requestAnimationFrame(animate);
    return;
  }
  var progress = (newTimestamp-oldTimestamp)/duration;
  var transform = 'translate3d('+progress*500+'px,0,0)' +
                  'rotate3d(0,0,1,'+progress*360+'deg)' +
                  'scale3d('+(0.6+progress*scale)+','+(0.6+progress*scale)+',1)';
  if (progress >= 1) {
    transform = 'translate3d('+(2-progress)*500+'px,0,0)' +
                'rotate3d(0,0,1,'+(2-progress)*360+'deg)' +
                'scale3d('+(0.6+(2-progress)*scale)+','+(0.6+(2-progress)*scale)+',1)';
  }
  var i;
  if (progress < 2) {
    for(i = 0; i < boxStyleArray.length; i++){
      console.log(2);
      boxStyleArray[i].transform = transform;
      // boxStyleArray[i].transform = '';
    }
  } else {
    oldTimestamp = null;
  }
	console.log('rafId'+rafId);
  rafId = window.requestAnimationFrame(animate);
}