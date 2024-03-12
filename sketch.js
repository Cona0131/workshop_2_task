function setup() {
  createCanvas(400, 400);
  background(220);
  setInterval(makeBlueCircle, 500);
}

function makeBlueCircle() {
  noStroke();
  fill(59,29,199);
  circle(random(0, 300), random(0, 300), 50);
}
