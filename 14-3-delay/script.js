// $(function(){
// 	$("#TOP h2").delay(6800).fadeIn(300)
//.animate({top:125},300);
// 	$("#TOP ul").delay(7800).fadeIn(300)
//.animate({top:90},300);
// });

window.onload = function(){
	const $OPEN = document.getElementById('OPEN'),
				$BOX = document.getElementById('BOX'),
				$SMALLCAR = document.getElementById('SMALLCAR'),
				$CAR = document.getElementById('CAR'),
				$TOP_h2 = document.querySelector('#TOP h2'),
				$TOP_ul = document.querySelector('#TOP ul');
	Velocity($OPEN,{opacity:1},{delay:1000,duration:2000,complete:()=>Velocity($OPEN,{opacity:0},{delay:1500,duration:2000})});
	Velocity($BOX,{opacity:1},{delay:9500,delay:6500,duration:2000});
	Velocity($SMALLCAR,{opacity:1},{delay:8500,duration:300,complete:()=>Velocity($SMALLCAR,{left:-200},{duration:900})});
	// Velocity($CAR,{opacity:1},{delay:9500,duration:300,complete:carGo});
	Velocity($CAR,{opacity:1},{delay:9500,duration:300,complete:()=>Velocity($CAR,{left:20},{duration:900})});
	Velocity($TOP_h2,{opacity:1},{delay:6800,duration:300,complete:()=>Velocity($TOP_h2,{top:125},{duration:300})});
	Velocity($TOP_ul,{opacity:1},{delay:7800,duration:300,complete:()=>Velocity($TOP_ul,{top:90},{duration:300})});
	function carGo(){
		console.log(123)
		Velocity($CAR,{left:20},{duration:900})
	}
	// Velocity(element, { left: 500 }, [ 500, 20 ]);
	// Velocity(element, "scroll", { duration: 1000 };
	// Velocity(element, "reverse", { duration: 500 });
	// Velocity(element, { translateX: 500 }, 1000);
	// {
  //   /* Velocity 动画配置项的默认值 */
  //   duration: 400,         // 动画执行时间
  //   easing: "swing",       // 缓动效果
  //   queue: "",             // 队列
  //   begin: undefined,      // 动画开始时的回调函数
  //   progress: undefined,   // 动画执行中的回调函数（该函数会随着动画执行被不断触发）
  //   complete: undefined,   // 动画结束时的回调函数
  //   display: undefined,    // 动画结束时设置元素的 css display 属性
  //   visibility: undefined, // 动画结束时设置元素的 css visibility 属性
  //   loop: false,           // 循环
  //   delay: false,          // 延迟
  //   mobileHA: true         // 移动端硬件加速（默认开启）
	// }
	// $element.velocity({ top: 50 }, 1000, function() { alert("Hi"); });
	// $element.velocity({
  //   top: 50,                // 等同于 "50px"
  //   left: "50%",
  //   width: "+=5rem",        // 每次在当前值上叠加 5rem
  //   height: "*=2"           // 每次在当前值上叠乘 2
  //   color: ["#888", "#000"] // 每次动画执行前，color 的初始值都为"#000"（从"#000"过渡成"#888"）
	// });
}