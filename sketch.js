var canvas , backgroundImage ; 

var gameState = 0;
var playerCount;

var database ;

var form,player,game



function setup() {
  canvas = createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
database = firebase.database();
game = new Game();
game.getState();
game.start();

}

function draw() {
  background(255,255,255);  
  drawSprites();
}