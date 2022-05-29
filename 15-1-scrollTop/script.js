// $(function(){	
// 	$("#goTop").click(function(){
// 		$("html,body").animate({scrollTop:0},900);
// 		return false;
// 	});
// });

// window.onload=function(){
	document.getElementById("goTop").onclick = function(){
		console.log(123);
		// Velocity(document.getElementById('home'),'scroll',{ duration: 750, easing: "ease-in" });
		// Velocity(window, "scroll", { duration: 1000 };
		// Velocity(document.getElementsByTagName('body')[0],'scroll',{offset: 250, duration: 3000})
		// Velocity(document.querySelector('.CONTENT'),'scroll',{container:document.getElementsByTagName('body')[0], duration: 3000})
		// Velocity(document.querySelector('.CONTENT'),'scroll',{duration:3000})

		// scrollTopAnimateLinear(0,500);
		newScrollTopAnimateLinear(0,500);
		return false;
	};

	function newScrollTopAnimateLinear(target,duration){
		// 如果已經在頂部，則取消
		if (document.scrollingElement.scrollTop === target) return;
		const totalScrollDistance = document.scrollingElement.scrollTop - target;
		let scrollY = totalScrollDistance, oldTimestamp = null;
		// 滾動Y軸=總滾動距離, 舊時間戳
		function step (newTimestamp) {	// 步驟
				if (oldTimestamp !== null) {
					console.log('newTime : '+newTimestamp);
					console.log('oldTime : '+oldTimestamp);
					//if duration is 0 scrollY will be -Infinity
					let progress = (newTimestamp - oldTimestamp) / duration;
					scrollY = scrollY - totalScrollDistance * progress;
					// scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
					if (scrollY < target) return document.scrollingElement.scrollTop = target;
					document.scrollingElement.scrollTop = scrollY;
				}
				oldTimestamp = newTimestamp;
				window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	}

	function scrollTopAnimateLinear(target,duration){
		// 如果已經在頂部，則取消
		if (document.scrollingElement.scrollTop === target) return;
		const totalScrollDistance = document.scrollingElement.scrollTop;
		let scrollY = totalScrollDistance, oldTimestamp = null;
		// 滾動Y軸=總滾動距離, 舊時間戳
		function step (newTimestamp) {	// 步驟
				if (oldTimestamp !== null) {
					console.log('newTime : '+newTimestamp);
					console.log('oldTime : '+oldTimestamp);
					//if duration is 0 scrollY will be -Infinity
					scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
					if (scrollY <= target) return document.scrollingElement.scrollTop = target;
					document.scrollingElement.scrollTop = scrollY;
				}
				oldTimestamp = newTimestamp;
				window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	}

	// window.onscroll = function(){
	// 	console.log(document.scrollingElement.scrollTop);
	// }

	function scrollTopAnimateEase(target,duration){
    // cancel if already on top
    if(document.scrollingElement.scrollTop === target) return;
    const cosParameter = document.scrollingElement.scrollTop/2; //cos參數
		console.log('cosParameter : '+cosParameter);
    let scrollCount = 0, oldTimestamp = null; //滾動計數, 舊時間戳
    function step(newTimestamp){
			console.log('newTimestamp : '+newTimestamp);
			if(oldTimestamp !== null){
				// if duration is 0 scrollCount will be Infinity
				scrollCount += Math.PI * (newTimestamp - oldTimestamp) / duration;
				console.log('scrollCount : '+scrollCount);
				if (scrollCount >= Math.PI) return document.scrollingElement.scrollTop = target;
				document.scrollingElement.scrollTop = cosParameter + cosParameter * Math.cos(scrollCount);
			}
			oldTimestamp = newTimestamp;
			console.log('oldTimestamp : '+oldTimestamp);
			window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}
/* 
  Explanation:
  - pi is the length/end point of the cosinus intervall (see below)
  - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
    (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
  - newTimestamp - oldTimestamp equals the delta time

    a * cos (bx + c) + d                        | c translates along the x axis = 0
  = a * cos (bx) + d                            | d translates along the y axis = 1 -> only positive y values
  = a * cos (bx) + 1                            | a stretches along the y axis = cosParameter = window.scrollY / 2
  = cosParameter + cosParameter * (cos bx)  | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
  = cosParameter + cosParameter * (cos scrollCount * x)
*/
	
// }
