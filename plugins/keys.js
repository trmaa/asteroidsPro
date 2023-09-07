let wDown = false;
let sDown = false;
let aDown = false;
let dDown = false;
let qDown = false;
let eDown = false;

let uArrow = false;
let dArrow = false;
let lArrow = false;
let rArrow = false;

window.addEventListener('keydown', function(e){
    if(e.keyCode == "87"){ 
        wDown = true;
    }
    if(e.keyCode == "83"){ 
        sDown = true;
    } 
    if(e.keyCode == "65"){ 
        aDown = true;
    } 
    if(e.keyCode == "68"){ 
        dDown = true;
    } 
    if(e.keyCode == "81"){ 
        qDown = true;
    } 
    if(e.keyCode == "69"){ 
        eDown = true;
    }
    if(e.keyCode == "38"){
        uArrow = true;
    }
    if(e.keyCode == "40"){
        dArrow = true;
    }
    if(e.keyCode == "39"){
        rArrow = true;
    }
    if(e.keyCode == "37"){
        lArrow = true;
    }
});
window.addEventListener('keyup', function(e){
    if(e.keyCode == "87"){ 
        wDown = false;
    }
    if(e.keyCode == "83"){ 
        sDown = false;
    } 
    if(e.keyCode == "65"){ 
        aDown = false;
    } 
    if(e.keyCode == "68"){ 
        dDown = false;
    } 
    if(e.keyCode == "81"){ 
        qDown = false;
    } 
    if(e.keyCode == "69"){ 
        eDown = false;
    }
    if(e.keyCode == "38"){
        uArrow = false;
    }
    if(e.keyCode == "40"){
        dArrow = false;
    }
    if(e.keyCode == "39"){
        rArrow = false;
    }
    if(e.keyCode == "37"){
        lArrow = false;
    }
});

// let cln = [0,0,0,0,0,0];
// setInterval(function(){
//     if(wDown){
//         cln[0]++;
//         if(cln[0] >= 100){
//             wDown = false;
//             cln[0] = 0;
//         }
//     }
//     if(sDown){
//         cln[1]++;
//         if(cln[1] >= 100){
//             sDown = false;
//             cln[1] = 0;
//         }        
//     }
//     if(dDown){
//         cln[2]++;
//         if(cln[2] >= 100){
//             dDown = false;
//             cln[2] = 0;
//         }
//     }
//     if(aDown){
//         cln[3]++;
//         if(cln[3] >= 100){
//             aDown = false;
//             cln[3] = 0;
//         }
//     }
//     if(rArrow){
//         cln[4]++;
//         if(cln[4] >= 100){
//             rArrow = false;
//             cln[4] = 0;
//         }
//     }
// },1);