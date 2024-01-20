class Player{
	constructor(x,y,w,h,m,v,hp){
		this.x = x;
		this.y = y;
		
		this.w = w;
		this.h = h;
		
		this.m = m;
		
		this.v = v;
		this.speed = [0,0];
		this.maxspeed = 2;
		
		this.a = 90;
		this.va = 1.3;
		this.aspeed = 0;
		this.maxaspeed = 2;
		
		this.balas = 99;
		this.ar = 90;
		
		this.hp = hp;
		
		this.delay = 30;
		
		this.score = 0;
		
		this.sprite = "sprites/player/player0.png";
	}
	update(){
		this.sprite = "sprites/player/player0.png";
		this.delay++;
		if(this.delay > 5){
			this.shot();
			this.delay = 0;
		}
		this.move();
		this.die();
		balas.forEach(b=>{b.update()});
		if(this.balas > 99)
			this.balas = 99;
		if(this.balas < 0)
			this.balas = 0;
		if(this.hp > 100)
			this.hp = 100;
	}
	move(){
		(this.speed[0]<0.05&&this.speed[0]>(-0.05))? this.speed[0] = 0 : this.speed[0] *= 0.999;
		(this.speed[1]<0.05&&this.speed[1]>(-0.05))? this.speed[1] = 0 : this.speed[1] *= 0.999;

		(this.aspeed<0.2&&this.aspeed>(-0.2))? this.aspeed = 0 : this.aspeed *= 0.5;

		if(uArrow){
			this.sprite = "sprites/player/player1.png";
			this.speed[0] -= this.v*Math.cos(this.a*Math.PI/180);
			this.speed[1] -= this.v*Math.sin(this.a*Math.PI/180);
		}

		if(lArrow)
			this.aspeed -= this.va;
		if(rArrow)
			this.aspeed += this.va;

		if(this.x > print.cvs.width)
			this.x = 0;
		if(this.x < 0)
			this.x = print.cvs.width;
		if(this.y > print.cvs.height)
			this.y = 0;
		if(this.y < 0)
			this.y = print.cvs.height;


		this.x += this.speed[0]*window.deltaTime*100;
		this.y += this.speed[1]*window.deltaTime*100;

		this.a += this.aspeed*window.deltaTime*100;
	}
	shot(){
		if(eDown && this.balas > 0){
			laser.currentTime = 0;
			laser.play();
			balas[balas.length] = new Bala(balas.length);
			player.balas--;
		}
	}
	die(){
		for(let i = 0;i < asteroides.length;i++){
			if(
				this.x > print.center(asteroides[i].x,"w",player,1) && this.x < print.center(asteroides[i].x,"w",player,1)+asteroides[i].d
				&&
				this.y > print.center(asteroides[i].y,"h",player,1) && this.y < print.center(asteroides[i].y,"h",player,1)+asteroides[i].d
			){
				explosion.play();
				this.score++;
				this.hp -= 10;
				this.balas += 5;
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
					asteroides[asteroides.length] = {
						"x":Math.random()*((print.cvs.width+print.cvs.width/4)+print.cvs.width/4)-print.cvs.width/4,
						"y":Math.random()*((print.cvs.height+print.cvs.height/4)+print.cvs.height/4)-print.cvs.height/4,
						"a":Math.random()*360,
						"af":Math.random()*360,
						"v":Math.random()*(0.2+0.1)-0.1,
						"d":Math.random()*(200-100)+100,
						"m":Math.floor(Math.random()*2)
					};
				} else {
					if(Math.floor(Math.random()*1) == 1){
						asteroides[i] = {
							"x":Math.random()*((print.cvs.width+print.cvs.width/4)+print.cvs.width/4)-print.cvs.width/4,
							"y":Math.random()*((print.cvs.height+print.cvs.height/4)+print.cvs.height/4)-print.cvs.height/4,
							"a":Math.random()*360,
							"af":Math.random()*360,
							"v":Math.random()*(0.2+0.1)-0.1,
							"d":Math.random()*(200-100)+100,
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
			}
		}
		if(this.hp <= 0){
			location.reload();
		}
	}
}
