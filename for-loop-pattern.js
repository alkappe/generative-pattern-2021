function setup() {
	createCanvas(800, 800);
	background(255, 255, 255);
}


function draw() {
	for (var x = 0; x < width; x = x + 20) {
		for (var y = 0; y < height; y = y + 20) {
			//bezier(x, y + 1, x + 3, y, y, x + 12, y + 2, x);
            rect(x, y, 5, 5);
		}
	}
}
