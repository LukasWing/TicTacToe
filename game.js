// kryds : 1
// bolle : 2
var board = [[1, 0, 0],
             [2, 1, 1],
             [0, 2, 2]];
var tur = 1;

setup = function(){
  var canvas = createCanvas(500, 500);
  canvas.parent("game");
  background(100, 50, 255);
}

draw = function(){
  drawBoard();
  drawBrikker();
}
/**
 * Tegne boardet. Bliver kaldt af draw.
 */
var drawBoard = function(){

}
/**
 * Tegner brikker på boarded afhængig af var
 */
var tegnBrikker = function(){

}
/**
 * tegner bolle med centrum i c,r
 */
var tegnBolle = function(c,r){

}
/**
 * tegner kryds med centrum i c(søjle),r(række)
 */
 var tegnKryds = function(c,r){

}

