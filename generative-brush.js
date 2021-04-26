function setup() {
    createCanvas(600, 600);
    background(255, 255, 255);
    noStroke();
}


function draw() {
    ellipse(mouseX, mouseY, 80, 80)
    noStroke();
    fill(mouseX - 140, mouseY - 200, mouseY);
    //print('The value of mouseX is ' + mouseX);
}