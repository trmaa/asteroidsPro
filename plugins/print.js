//creación del canvas
document.write(`<canvas id="canvas"></canvas>`);

class Print{
	constructor(w,h){
		this.cvs = document.querySelector("#canvas");
		this.cvs.width = w;
		this.cvs.height = h;
		this.ctx = this.cvs.getContext("2d");
		this.ctx.imageSmoothingEnabled = false;
		this.ctx.scale(1, 1);
	}
	print(x,y,w,h,c){
		this.ctx.fillStyle = c;
		this.ctx.fillRect(x,y,w,h);
	}
	printext(x,y,msg,font,fs,c){
		this.ctx.fillStyle = c;
		this.ctx.font = `${fs} ${font}`;
		this.ctx.fillText(msg,x,y);
	}
	printimg(src,x,y,w,h,a){
		let sprite = new Image();
		sprite.src = src;
  		this.ctx.save();
  		this.ctx.translate(x, y);
  		this.ctx.rotate((Math.PI / 180) * a);
  		this.ctx.drawImage(sprite, -w / 2, -h / 2, w, h);
  		this.ctx.restore();
	}
	gradientel(x1,y1,x2,y2,c){
		let gradiente = this.ctx.createLinearGradient(x1,y1,x2,y2);

		for(let step = 0;step < c.length;step++){
			gradiente.addColorStop(step*1/c.length,c[step]);
		}

		this.ctx.fillStyle = gradiente;
		this.ctx.fillRect(0,0,this.cvs.width,this.cvs.height);
	}
	gradienter(x1,y1,x2,y2,c){
		let gradiente = this.ctx.createRadialGradient(x1,y1,0,x2,y2,1000);

		for(let step = 0;step < c.length;step++){
			gradiente.addColorStop(step*1/c.length,c[step]);
		}

		this.ctx.fillStyle = gradiente;
		this.ctx.fillRect(0,0,this.cvs.width,this.cvs.height);
	}
	cls(c){
		this.ctx.fillStyle = c;
		this.ctx.fillRect(0,0,this.cvs.width,this.cvs.height);
	}
	cartesian(x,m){
		if(m == "w"){
			return x-(this.cvs.width/2);
		}
		if(m == "h"){
			return (this.cvs.height/2)-x;
		} 
	}
	descartesian(x,m){
		if(m == "w"){
			return x+(this.cvs.width/2);
		}
		if(m == "h"){
			return (this.cvs.height/2)-x;
		} 
	}
	center(x,m,obj,p){
		if(m == "w"){
			return print.descartesian(print.cartesian(x,m)-print.cartesian(obj.x*p,m),m);
		}
		if(m == "h"){
			return print.descartesian(print.cartesian(x,m)-print.cartesian(obj.y*p,m),m);
		} 
	}
}

let print = new Print(1280,720);
