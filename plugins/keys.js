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
    wDown = e.keyCode == "87"?true:wDown;
    sDown = e.keyCode == "83"?true:sDown;
    aDown = e.keyCode == "65"?true:aDown;
    dDown = e.keyCode == "68"?true:dDown;
    qDown = e.keyCode == "81"?true:qDown;
    eDown = e.keyCode == "69"?true:eDown;
    uArrow = e.keyCode == "38"?true:uArrow;
    dArrow = e.keyCode == "40"?true:dArrow;
    rArrow = e.keyCode == "39"?true:rArrow;
    lArrow = e.keyCode == "37"?true:lArrow;
});
window.addEventListener('keyup', function(e){
    wDown = e.keyCode == "87"?false:wDown;
    sDown = e.keyCode == "83"?false:sDown;
    aDown = e.keyCode == "65"?false:aDown;
    dDown = e.keyCode == "68"?false:dDown;
    qDown = e.keyCode == "81"?false:qDown;
    eDown = e.keyCode == "69"?false:eDown;
    uArrow = e.keyCode == "38"?false:uArrow;
    dArrow = e.keyCode == "40"?false:dArrow;
    rArrow = e.keyCode == "39"?false:rArrow;
    lArrow = e.keyCode == "37"?false:lArrow;
});