var x = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(122, 89, 40);
  strokeWeight(8);
  fill(255, 0, 0, 55);
  rect(-50, 200, x, 100);
  
  fill(255,255,255);
  textSize(50);
  text("LOADING", 40, 285);
  
  noStroke(0);
  fill(0, 255, 0);
  ellipse(200, 350, 80, 80);
  
  noStroke(0);
  fill(25, 243, 232);
  triangle(300, 10, 275, 50,  325, 50);
  
  var a = color('black');
  fill(a);
  ellipse(350, 350, 100, 100);

x = x + 1;
}