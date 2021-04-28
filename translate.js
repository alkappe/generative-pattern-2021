var angle = 0
var x = 0;
var y = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(255, 255, 255);
}

function draw() {
  //saveFrames('myCanvas', 'jpg');
  translate(x, y); //muove il punto d'origine, è utile perchè mantiene l'oggento con     coordinate fisse
  x = x + 1
  y = y + 1
  rotate(x);
  rect(0, 0, 150, 150);
}