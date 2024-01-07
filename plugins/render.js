function render(){
	//postprocesado
	print.gradienter(player.x-player.w/2,player.y-player.h/2,player.x-player.w/2,player.y-player.h/2,["#077","#002","#000"]);
	//estrellas
	for(let i = 0;i < estrellas.length;i++){
		print.print(
			print.center(estrellas[i].x*10/estrellas[i].d,"w",player,0.2),print.center(estrellas[i].y*10/estrellas[i].d,"h",player,0.2),
			estrellas[i].d/4,estrellas[i].d/4,
			"#fffe"
		);
	}
	//asteroides
	for(let i = 0;i < asteroides.length;i++){
		print.printimg(
			`sprites/asteroides/asteroide${asteroides[i].m}.png`,
			print.center(asteroides[i].x,"w",player,1)+asteroides[i].d/2,print.center(asteroides[i].y,"h",player,1)+asteroides[i].d/2,
			asteroides[i].d,asteroides[i].d,asteroides[i].af
		);
	}

	//player
	print.printimg(
		"sprites/player/player0.png",
		player.x,player.y,player.w,player.h,player.a-90
	);
	//balas
	for(let i = 0;i < balas.length;i++){
		print.print(
			balas[i].x-2.5,balas[i].y-2.5,
			5,5,
			"#fff"
		);
	}

	//HDU
		//hp
	print.printext(50,print.cvs.height-60,`HP: ${player.hp}`,"Consolas","20px","#fff");
	print.print(50,print.cvs.height-50,100,25,"#0ff2");
	print.print(50,print.cvs.height-50,player.hp,25,"#fff");
		//balas
	print.printext(160,print.cvs.height-60,`BALAS: ${player.balas}`,"Consolas","20px","#fff");
	print.print(160,print.cvs.height-50,100,25,"#0ff2");
	print.print(160,print.cvs.height-50,player.balas,25,"#fff");
		//score
	print.printext(270,print.cvs.height-60,`SCORE: ${player.score}`,"Consolas","20px","#fff");
}