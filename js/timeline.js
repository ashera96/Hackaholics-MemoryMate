var ev1 = document.getElementById("ev1");
var ev2 = document.getElementById("ev2");
var ev3 = document.getElementById("ev3");
var ev4 = document.getElementById("ev4");            
var ev5 = document.getElementById("ev5");
var ev6 = document.getElementById("ev6");

var ev = [ ev1, ev2, ev3, ev4, ev5, ev6];

for (let i = 0; i < 4; i++) {
    ev[i].classList.remove('d-none');
}
