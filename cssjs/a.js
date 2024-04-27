var x = 280;
var y = 880;

// 更新坐标函数
function updateCoordinates() {
	document.getElementById('x').textContent = x;
	document.getElementById('y').textContent = y;
	document.getElementById('a').x.baseVal.value = x;
	document.getElementById('a').y.baseVal.value = y;
}

// 添加键盘按键按下事件监听器
document.addEventListener('keydown', function(event) {
	// 按下的按键
	var keyPressed = event.key.toLowerCase();
	var step = 20;
	// 根据按下的按键更新坐标
	switch (keyPressed) {
		case 'w':
			if(y == 600 && (x < 100 || (x >= 500 && x < 1300) || x >= 1600)){
				break;
			}
			if((x >= 100 && x < 200) && (y===100||y===200||y===300||y===400||y===600)){
				break;
			}
			if(y == 500 && ((x >= 300 && x < 500) || (x >= 1300 && x < 1500))){
				break;
			}
			if((y == 100 || y == 200 || y == 300) && x >= 1600){
				break;
			}
		    if (y > 0) {
		        y -= step;
		    }
		    break;
		case 'a':
			if((x===100 || x===300 || x===500 || x===700 || x===1100 || x===1300 || x===1500) && y >= 800 && y < 900){
				break;
			}
			if(x===100 && ((y < 600) || (y >= 800))){
				break;
			}
			if(x===1400 && (y < 100)){
				break;
			}
			if(x===1500 && (y >= 100 && y < 500)){
				break;
			}
			if(x===1300 && (y >= 500 && y < 600)){
				break;
			}
		    if (x > 0) {
		        x -= step;
		    }
		    break;
		case 's':
			if((x >= 100 && x < 200) && (y===100-step||y===200-step||y===300-step||y===400-step||y===600-step)){
				break;
			}
			if(x < 100 && y === 800-step){
				break;
			}
			if(x >= 1600 && (y===200-step||y===300-step||y===400-step)){
				break;
			}
			if(((x >= 300 && x < 400) || (x >= 1400 && x < 1500)) && y === 100-step){
				break;
			}
		    if (y < 900-step) {
		        y += step;
		    }
		    break;
		case 'd':
			if((x===300-step || x===500-step || x===700-step || x===1100-step || x===1300-step || x===1500-step) && y >= 800 && y < 900){
				break;
			}
			if(x===300-step&&y>=100&&y<500){
				break;
			}
			if(x===1600-step&&y>=400&&y<600){
				break;
			}
			if((x===400-step||x===1600-step)&&y<100){
				break;
			}
			if(x===500-step&&(y>=500&&y<600)){
				break;
			}
		    if (x < 1700-step) {
		        x += step;
		    }
		    break;
		default:
		    // 如果按下的不是 WASD 键，则不做任何操作
		    return;
	}
	
	// 更新坐标显示
	updateCoordinates();
});
