// user events + day 1 challenge
// Brayden Cochrane
// september 11,2025

let circleColor = false;
//declaration     initializaion

let currentColor = "white"
let x; let y = 300
let tsize = 50 //text font size

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  x = width / 2
}

function draw() {
  background(220);
  challenge();
  movement();
  rect(x, y, 60, 30)
}

function mousereport(){
  //inspect some of the built-ins (system variables)
  //for working with the mouse
  fill(0);
  let src = mouseX + "," + mouseY + "," + mouseIsPressed;
  textSize(tsize);
  text(src,mouseX, mouseY);
  if (mouseispressed){

}
}

function mousPressed() {
  //function automatically called once per mouse click interaction
  tsize = random(10,80);
}

function movement() {
  //check for keyboard presses each frame
  //and move the rectangle accordingly


  if (keyIsDown(UP_ARROW)) y -= 5
  if (keyIsDown(DOWN_ARROW)) y += 5
  if (keyIsDown(LEFT_ARROW)) x -= 5
  if (keyIsDown(RIGHT_ARROW)) x += 5

}










function keyPressed() {
  //this is special event function, gets
  //automatically called anytime a keyboard
  // is pressed



  print("key was pressed")
  if (key === "g") currentColor = "green"
  else if (keyCode === CONTROL) currentColor = "aqua"

  circleColor = !circleColor;

}


function challenge() {  //coordinate system challenge
  //draw 5 hollow circles, in 4 corners and
  // center position, 50px in diameter each
  noFill();

  if (circleColor === true) { // if circlecolor === true
    fill(currentColor)
  }


  //5circles
  circle(0, 0, 50)
  circle(400, 400, 50)
  circle(400, 0, 50)
  circle(0, 400, 50)
  circle(200, 200, 50)
}


