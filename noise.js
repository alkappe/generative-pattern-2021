function setup() {
    createCanvas(800, 800);
    background(255);
}

var time = 0;

function draw() {
    time = time + 0.02;
    for (var i = 0; i < height; i++) {
        ellipse(i, height * noise(i / 100, time), 2, 5);

    }
}