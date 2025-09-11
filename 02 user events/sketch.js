// user events + day 1 challenge
// Brayden Cochrane
// september 11,2025

let circlecolor = false;
//declaration     initializaion

function setup() {
  createCanvas(400,400);
}

function draw() {
  background(220);
  challenge();
}

function keypressed(){
  //this is special event function, gets
  //automatically called anytime a keyboard
  // is pressed
  circlecolor = !circlecolor;

}


function challenge(){  //coordinate system challenge
  //draw 5 hollow circles, in 4 corners and
  // center position, 50px in diameter each
  noFill()
  
  if(circlecolor){ // if circlecolor === true
    fill(255,0,0)

  }
  
  //5circles
  circle(0,0,50)
  circle(400,400,50)
  circle(400,0,50)
  circle(0,400,50)
  circle(200,200,50)
}


