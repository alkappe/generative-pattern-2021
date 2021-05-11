//Why let??
let angle = 0;

function setup() {
  createCanvas(710, 400);
  background(255);
}

function draw() {
  // Draw only when mouse is pressed
  if (mouseIsPressed === true) {
    angle = angle + 5;
    var val = cos(radians(angle)) * 12.0;
    for (var a = 0; a < 360; a = a + 75) {
      var xoff = cos(radians(a)) * TWO_PI * val;
      var yoff = sin(radians(a)) * PI * val;
      colorMode(HSB);
      fill(a - 100, a - 50, a);
      //fill(255, 255, 255)
      //strokeWeight(1);
      noStroke();
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
      //ellipse(mouseX + xoff, mouseY + yoff, val + 20, val + 20);
    }
    ellipse(mouseX, mouseY, 4, 4);
  }
}
