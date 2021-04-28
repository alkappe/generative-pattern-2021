var num = 120;


function setup() {
  createCanvas(600, 600);
  stroke(255, 50);
  strokeWeight(2);
  fill(255, 50);
}

function draw() {
  background(0);
  translate(width/2, height/2);
  
  for (var i = 0; i < num; i++) {
    push();
    var offSet = PI / num * i;
    rotate(offSet * 2);
    rect(60, 90, 80, 90);
    pop();
  }

}