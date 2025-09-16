// Interactive Scene
// Brayden Cochrane
// September 16th 2025
// one line description



let canvaswidth = 950
let canvaslength = 930

function setup() {
  createCanvas(canvaswidth, canvaslength);
}

function draw() {
  background(135, 206, 235);
  Scene()
}


function Scene() {



  //creating the sun
  fill(255,255,0);
  circle(canvaswidth/2, 200, 100);


  //grass
  fill(0,230,0)
  circle(canvaswidth/2,2100, 3000)

  //trees
  fill(150, 75, 0)
  rect(canvaslength/2,canvaslength/2,20,100)
  triangle()

}