var bg

function setup() {

  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
  rectMode(CENTER)

}

function draw() {
  background(5)


  var radius = 100+mouseX/5;
  translate(width/2, height/2)
  rotate (frameCount)
  for (var i = -90; i < 90; i++) {
    colorMode(HSB)
    stroke(frameCount/10, 100, 100);
    line(radius, 0,
      radius-(radius*2*cos(i)*cos(i)),
      -(radius*2*cos(i)*sin(i)));
    }

  noStroke()
  colorMode(RGB)
  fill(50, 50, 50, 60);
  rotate (-2*frameCount)
  translate(200, 200)
  ellipse(0, 0, 500)

  }
