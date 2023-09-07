// Canción
let compas1 = 0;
let compas2 = 0;
let compas3 = 0; 
let compas4 = 0; 

let melodia = [];
let bass = [];
let bass2 = []; 
let bass3 = []; 

setInterval(function(){
    if(melodia.length > compas1){
        musica.tocar(musica.notas[melodia[compas1][0]][melodia[compas1][1]], melodia[compas1][2]);
        compas1++;
    } else {
        compas1 = 0;
    }
    if(bass.length > compas2){
        musica.tocar(musica.notas[bass[compas2][0]][bass[compas2][1]], bass[compas2][2]);
        compas2++;
    } else {
        compas2 = 0;
    }
    if(bass2.length > compas3){ 
        musica.tocar(musica.notas[bass2[compas3][0]][bass2[compas3][1]], bass2[compas3][2]);
        compas3++;
    } else {
        compas3 = 0;
    }
    if(bass3.length > compas4){ 
        musica.tocar(musica.notas[bass3[compas4][0]][bass3[compas4][1]], bass3[compas4][2]);
        compas4++;
    } else {
        compas4 = 0;
    }
}, 1000);

//hecha
let audio = new Audio('musica/1/1.mp3');
audio.volume = 0.8;

//efectos
    //disparo
let laser = new Audio('musica/laser.mp3');
laser.playbackRate = 3;
laser.volume = 0.1;
    //explosion
let explosion = new Audio('musica/explosion.wav'); 
explosion.volume = 0.1;