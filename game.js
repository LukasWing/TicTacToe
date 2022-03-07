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
  var input = readInput(tur);
  var r = input[0];
  var c = input[1]
  drawBoard();
  drawBrikker();
  var vinder = findVinder(board);
}
/**
 * Tegn boardet uden brikker. Bliver kaldt af draw.
 */
var drawBoard = function(){
}
/**
 * Tegner alle brikker på boarded skal kalde tegnBolle() og/eller tegnKryds()
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
/**
 * @param {int[][]} board brættet, som skal tjekkes.
 * @returns {int} tal som indikerer resultat af brættet. Kryds vinder: 1. Bolle vinder: 2. Uafgjort: 3. Ikke færdigt: 4.
 */
var findVinder = function(board) {

  return -1;
}
/**
 * @return {JSON} hvor c er kolonnenumer og r indikerer række nummer.
 * @param {int} tur tal, som indikerer, hvem der skal spille næste gang. 
 */
var readInput = function(tur){

  return {c: -1, r: -1}
}



