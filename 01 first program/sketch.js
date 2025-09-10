// coordinate systems and user events
// Brayden Cochrane
// september 10th, 2025
//a first look at interactive programs with p5.js



function setup() {        //runs once at the start
  createCanvas(windowWidth, windowHeight);
  print(windowWidth,windowHeight,width,height);
  //windowwidth:current browser width
  //width:  canvas width
}

function draw() { //runs over and over
                  //targeting 60fps
  //strive to keep draw() clean and tidy                
  background(220); //draws a big solid rectangle
                   // 0 - black       255 - white
  drawtwocircles()
}

function drawtwocircles(){//[ALT][SHIFT[F]
  //draws 2 circles, one at a fixed location
  //and one at the mouse location

  //draw order:
  //the later a thing is drawn
  //the higher it is in the draw stack


  fill(0,255,0);
     //R, G, B
  circle(mouseX, mouseY, 30);

  fill(255,0,255)
  circle(width/2, height/2, 100)
}
