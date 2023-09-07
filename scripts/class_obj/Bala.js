class Bala{
	constructor(id){
		this.x = player.x;
		this.y = player.y;
		this.a = player.a;
		this.n = 99-id;
		this.id = id;
		this.delay = 10;
	}
	update(){
		this.delay++;
		this.kill();
		this.move();
	}
	move(){
		this.x -= Math.cos(this.a*(2*Math.PI/360))*player.v/7;
		this.y -= Math.sin(this.a*(2*Math.PI/360))*player.v/7;

		this.die();
	}
	kill(){
		for(let i = 0;i < asteroides.length;i++){
			if(
				this.x > print.center(asteroides[i].x,"w",player,1) && this.x < print.center(asteroides[i].x,"w",player,1)+asteroides[i].d
				&&
				this.y > print.center(asteroides[i].y,"h",player,1) && this.y < print.center(asteroides[i].y,"h",player,1)+asteroides[i].d
			){
				explosion.play();
				player.score++;
				player.hp += 5;
				player.balas += 5;
				if(asteroides[i].d >= 16){
					asteroides[asteroides.length] = {
						"x":asteroides[i].x,
						"y":asteroides[i].y,
						"a":Math.random()*360,
						"af":Math.random()*360,
						"v":asteroides[i]*2,
						"d":asteroides[i].d*0.5-Math.random()*16,
						"m":Math.floor(Math.random()*2)
					};
					asteroides[i].d *= 0.5;
				} else {
					if(Math.floor(Math.random()*6) == 1){
						asteroides[i] = {
							"x":Math.random()*((print.cvs.width+print.cvs.width/4)+print.cvs.width/4)-print.cvs.width/4,
							"y":Math.random()*((print.cvs.height+print.cvs.height/4)+print.cvs.height/4)-print.cvs.height/4,
							"a":Math.random()*360,
							"af":Math.random()*360,
							"v":Math.random()*(0.2+0.1)-0.1,
							"d":Math.random()*(200-32)+32,
							"m":Math.floor(Math.random()*2)
						};
					} else {
						for(let j = i;j < asteroides.length;j++){
							if(j != asteroides.length-1){
								asteroides[j] = asteroides[j+1];
								asteroides.pop();
							}
						}
					}
				}
				this.die();
			}
		}
	}
	die(){
		if(this.x > (print.cvs.width*2))
			this.x = -999999999999999;
		if(this.x < -(print.cvs.width))
			this.x = -999999999999999;
		if(this.y > (print.cvs.height*2))
			this.y = -999999999999999;
		if(this.y < -(print.cvs.height))
			this.y = -999999999999999;
	}
}