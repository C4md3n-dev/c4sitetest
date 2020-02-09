let capture;

function setup() {
  background(220);
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
}

function draw() {
  image(capture, 0, 0, 320, 240);
}