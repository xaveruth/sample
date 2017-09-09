var positions = [
  1, 1,
  1, 18,

  //row 2
  2, 1,
  2, 2,
  2, 13,
  2, 14,
  2, 15,
  2, 16,
  2, 17,
  2, 18
]

function setup() {
  	
  	//youTube aspect ratio is 16:9
  	var scale = 70;
  	createCanvas(windowWidth, windowHeight);
 	  pixelDensity(1);


  //TODO: get canvas to scale to fit screen despite low resolution
}

function draw() {
x = 100;
y = 200;  
  k = point(100, 100);

  beginShape();
  vertex(k);
  vertex(x, y);
  vertex(y, y);
  endShape(CLOSE);
}

function windowResized() {
	//TODO: how to get drawing to scale with window actively being resized?
  	resizeCanvas(windowWidth, windowHeight);
}

