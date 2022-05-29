// $(function(){
// 	$("#B00").click(function(){
// 		$("html,body").stop().animate({scrollTop:0},800);
// 		return false;	
// 	});
// 	$("#B01").click(function(){
// 		$("html,body").stop().animate({scrollTop:1000},800);
// 		return false;	
// 	});
// 	$("#B02").click(function(){
// 		$("html,body").stop().animate({scrollTop:2000},800);
// 		return false;	
// 	});
// 	$("#B03").click(function(){
// 		$("html,body").stop().animate({scrollTop:3000},800);
// 		return false;	
// 	});
// });
// $(function(){
// 	// for (var i = 0; i <= 3; i++) {
// 	// 	document.getElementById("B0"+i).onclick = GO;
// 	// 	console.log(i);
// 	// }
// 	$("#MENU a").click(function(){
// 		var Number = this.id.substr(-1);
// 		$("html,body").stop().animate({scrollTop:Number*1000},600);		
// 	});
// });
window.onload = function(){
	const scrollTime = 600, menuH = document.getElementById('MENU').offsetHeight;
	let targetPos;
	document.querySelectorAll('#MENU > li').forEach((el) => {
		el.addEventListener('click',menuGo);
	});
	function menuGo(e){
		// console.log(e.target.className); console.log(e.target.id);
		// document.querySelector('main>div:nth-of-type(4)').offsetTop
		switch(e.target.id) {
			case 'B00' :
				targetPos = document.getElementById('AAA').offsetTop - menuH;
				// document.scrollingElement.scrollTop
				break;
			case 'B01' :
				targetPos = document.getElementById('BBB').offsetTop - menuH;
				break;
			case 'B02' :
				targetPos = document.getElementById('CCC').offsetTop - menuH;
				break;
			case 'B03' :
				targetPos = document.getElementById('DDD').offsetTop - menuH;
				break;
		}
		console.log(targetPos);
		scrollTopAnimateLinear(targetPos,scrollTime)
	}
	function scrollTopAnimateLinear(target,duration){
		// 如果已經在頂部，則取消
		if (document.scrollingElement.scrollTop === target) return;
		const totalScrollDistance = target - document.scrollingElement.scrollTop;//,
					// moveDirection = totalScrollDistance < 0 ? 'UP' : 'DOWN';
		// scrollY現在的位子
		let scrollY = document.scrollingElement.scrollTop, oldTimestamp = null;
		console.log('tar:'+target); console.log('dis:'+totalScrollDistance); //console.log(moveDirection);
		// 滾動Y軸=總滾動距離, 舊時間戳 directStatus
		function step(newTimestamp){ //步驟
			if (oldTimestamp !== null){
				// console.log('newTime : '+newTimestamp); console.log('oldTime : '+oldTimestamp);
				//if duration is 0 scrollY will be -Infinity
				let progress = (newTimestamp-oldTimestamp)/duration
				scrollY = scrollY + totalScrollDistance * progress;
				console.log('dis'+totalScrollDistance); console.log('sY'+scrollY);
				// if(moveDirection === 'UP' && scrollY < target) return document.scrollingElement.scrollTop = target;
				// if(moveDirection === 'DOWN' && scrollY > target) return document.scrollingElement.scrollTop = target;
				// if(totalScrollDistance < 0 && scrollY < target) return document.scrollingElement.scrollTop = target;
				// if(totalScrollDistance > 0 && scrollY > target) return document.scrollingElement.scrollTop = target;
				if(totalScrollDistance<0 && scrollY<target || totalScrollDistance>0 && scrollY>target) return document.scrollingElement.scrollTop = target;
				document.scrollingElement.scrollTop = scrollY;
			}
			oldTimestamp = newTimestamp;
			window.requestAnimationFrame(step);
		}
		window.requestAnimationFrame(step);
	}
}

//test-1
// window.onload = function(){
// 	const scrollTime = 600, menuH = document.getElementById('MENU').offsetHeight;
// 	let targetPos;
// 	document.querySelectorAll('#MENU > li').forEach((el) => {
// 		el.addEventListener('click',menuGo);
// 	});
// 	function menuGo(e){
// 		// console.log(e.target.className); console.log(e.target.id);
// 		// document.querySelector('main>div:nth-of-type(4)').offsetTop
// 		switch(e.target.id) {
// 			case 'B00' :
// 				targetPos = document.getElementById('AAA').offsetTop - menuH;
// 				// document.scrollingElement.scrollTop
// 				break;
// 			case 'B01' :
// 				targetPos = document.getElementById('BBB').offsetTop - menuH;
// 				break;
// 			case 'B02' :
// 				targetPos = document.getElementById('CCC').offsetTop - menuH;
// 				break;
// 			case 'B03' :
// 				targetPos = document.getElementById('DDD').offsetTop - menuH;
// 				break;
// 		}
// 		console.log(targetPos);
// 		scrollTopAnimateLinear(targetPos,scrollTime)
// 	}
// 	function scrollTopAnimateLinear(target,duration){
// 		// 如果已經在頂部，則取消
// 		if (document.scrollingElement.scrollTop === target) return;
// 		const totalScrollDistance = document.scrollingElement.scrollTop,
// 					moveDirection = totalScrollDistance > target ? 'UP' : 'DOWN';
// 		let scrollY = totalScrollDistance, oldTimestamp = null;
// 		console.log('tar:'+target);
// 		console.log('dis:'+totalScrollDistance);
// 		console.log(moveDirection);
// 		// 滾動Y軸=總滾動距離, 舊時間戳 directStatus
// 		function step (newTimestamp) {	// 步驟
// 				if (oldTimestamp !== null) {
// 					// console.log('newTime : '+newTimestamp); console.log('oldTime : '+oldTimestamp);
// 					//if duration is 0 scrollY will be -Infinity
// 					let progress = (newTimestamp-oldTimestamp)/duration
// 					if(moveDirection === 'UP'){
// 						// scrollY -= totalScrollDistance * (newTimestamp-oldTimestamp)/duration;
// 						scrollY = scrollY - totalScrollDistance * progress;
// 						console.log('UP'); console.log(scrollY);
// 						if (scrollY <= target) return document.scrollingElement.scrollTop = target;
// 					}else{
// 						// scrollY += totalScrollDistance * (newTimestamp-oldTimestamp)/duration;
// 						scrollY = scrollY + target * progress;
// 						console.log('dis'+totalScrollDistance); console.log('sY'+scrollY);
// 						if (scrollY >= target) return document.scrollingElement.scrollTop = target;
// 					}
// 					// if (scrollY <= target) return document.scrollingElement.scrollTop = target;
// 					document.scrollingElement.scrollTop = scrollY;
// 				}
// 				oldTimestamp = newTimestamp;
// 				window.requestAnimationFrame(step);
// 		}
// 		window.requestAnimationFrame(step);

// 		// const totalScrollDistance = target;
// 		// let scrollY = target, oldTimestamp = null;
// 		// function step (newTimestamp) {	// 步驟
// 		// 		if (oldTimestamp !== null) {
// 		// 			let progress = (newTimestamp-oldTimestamp)/duration
// 		// 			scrollY = scrollY - target * progress;
// 		// 			if (scrollY <= target) return document.scrollingElement.scrollTop = target;
// 		// 			document.scrollingElement.scrollTop = scrollY;
// 		// 		}
// 		// 		oldTimestamp = newTimestamp;
// 		// 		window.requestAnimationFrame(step);
// 		// }
// 	}
// }
