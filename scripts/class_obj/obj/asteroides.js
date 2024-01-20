let asteroides = [];

for(let i = 0;i < print.cvs.height/100;i++){
	asteroides[i] = {
		"x":Math.random()*((print.cvs.width+print.cvs.width/4)+print.cvs.width/4)-print.cvs.width/4,
		"y":Math.random()*((print.cvs.height+print.cvs.height/4)+print.cvs.height/4)-print.cvs.height/4,
		"a":Math.random()*360,
		"af":Math.random()*360,
		"v":Math.random()*(0.2+0.1)-0.1,
		"d":Math.random()*(200-32)+32,
		"m":Math.floor(Math.random()*2)
	};
}

setInterval(function(){
	for(let i = 0;i < asteroides.length;i++){
		asteroides[i].x -= Math.cos(asteroides[i].a*(2*Math.PI/360))*0.5*window.deltaTime*100;
		asteroides[i].y -= Math.sin(asteroides[i].a*(2*Math.PI/360))*0.5*window.deltaTime*100;

		if(asteroides[i].x > print.cvs.width+print.cvs.width/4)
			asteroides[i].x = -print.cvs.width/4;
		if(asteroides[i].x < -print.cvs.width/4)
			asteroides[i].x = print.cvs.width+print.cvs.width/4;
		if(asteroides[i].y > print.cvs.height+print.cvs.height/4)
			asteroides[i].y = -print.cvs.height/4;
		if(asteroides[i].y < -print.cvs.height/4)
			asteroides[i].y = print.cvs.height+print.cvs.height/4;

		asteroides[i].af += asteroides[i].v;
	}
	if(asteroides.length < print.cvs.height/100){
		asteroides[asteroides.length] = {
			"x":Math.random()*((print.cvs.width+print.cvs.width/4)+print.cvs.width/4)-print.cvs.width/4,
			"y":Math.random()*((print.cvs.height+print.cvs.height/4)+print.cvs.height/4)-print.cvs.height/4,
			"a":Math.random()*360,
			"af":Math.random()*360,
			"v":Math.random()*(0.2+0.1)-0.1,
			"d":Math.random()*(200-32)+32,
			"m":Math.floor(Math.random()*2)
		};
	}
},10);