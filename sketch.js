var canvas;
var database, gameState, allPlayers;
var form, player, playerCount;
var bg, bgImg
var mangus, frango;
var frangoImg, mangusImg;
var gamers = [];

function preload() {

  frangoImg= loadImage("frango.png");
  mangusImg= loadImage("mangus.png");
  bgImg= loadImage ("neon city.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(bgImg);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {

  }
}



