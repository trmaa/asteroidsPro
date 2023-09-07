let estrellas = [];

for(let i = 0;i < print.cvs.height/35;i++){
	estrellas[i] = {
		"x":Math.random()*((print.cvs.width+print.cvs.width/4)+print.cvs.width/4)-print.cvs.width/4,
		"y":Math.random()*((print.cvs.height+print.cvs.height/4)+print.cvs.height/4)-print.cvs.height/4,
		"d":Math.random()*5
	};
}

setInterval(function(){
	for(let i = 0;i < estrellas.length;i++){
		estrellas[i].x += 0.05;
		estrellas[i].y += 0.05;

		if(estrellas[i].x > print.cvs.width+print.cvs.width/4){
			estrellas[i].x = -print.cvs.width/4;
		}
		if(estrellas[i].x < -print.cvs.width/4){
			estrellas[i].x = print.cvs.width+print.cvs.width/4;
		}
		if(estrellas[i].y > print.cvs.height+print.cvs.height/4){
			estrellas[i].y = -print.cvs.height/4;
		}
		if(estrellas[i].y < -print.cvs.height/4){
			estrellas[i].y = print.cvs.height+print.cvs.height/4;
		}
	}
},10);