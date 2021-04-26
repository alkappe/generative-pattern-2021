//🚶🏼‍♂️random walker 
var x;
var y; 

function setup() {
  createCanvas(400, 400);
  //we start in the middle of the screen
  x= width/2
  y= height/2
  background(0, 0, 0);
}

function draw() {
  
  stroke(255)
  strokeWeight(2)
  point(x,y)
  
  var r = floor(random(4))
  
  //switch statement
  switch (r) {
    case 0:
      //right
      x = x + 1;
      break;
    case 1:
      //left
      x = x - 1;
      break;
    case 2:
      // down 
      y = y + 1
      break;
    case 3:
      // up
      y = y - 1
      break;
  }
}
