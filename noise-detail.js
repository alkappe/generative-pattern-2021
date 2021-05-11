
function setup() {
    createCanvas( 400, 400 );
    stroke(255,127);
    noiseDetail(6, 0.5);
}

function draw() {
    background(0,24);

    for(var n=0; n<10; n= n + 1) {
        var x = noise( n/5, n/11, frameCount/300 );
        var y = noise( n/13, n/7, frameCount/300 );
        strokeWeight(2)
        point( x*width, y*height );
    }
}