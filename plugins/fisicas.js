class Fisicas{
	constructor(g,t,u){
		this.g = g;
		this.t = t;
		this.u = u;
	}
	fell(obj){
		obj.y += this.g*(this.t/300);
	}
	setForce(obj,a,v){
		obj.x -= Math.cos(a*(2*Math.PI/360))*v*(this.t/1000);
		obj.y -= Math.sin(a*(2*Math.PI/360))*v*(this.t/1000);
	}
	time(){
		this.t++;
		if(this.t < 0){
			this.t = 0;
		}
		if(this.t > 200){
			this.t = 200;
		}
	}
	resetime(){
		this.t = 1;
	}
}

let fisicas = new Fisicas(9.81,0,-5);