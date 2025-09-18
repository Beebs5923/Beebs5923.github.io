// Interactive Scene
// Brayden Cochrane
// September 16th 2025
// one line description



let canvaswidth = 950;
let canvaslength = 930;

//the location of the tree
let PointX = 475;
let PointY = 465;

let Loop;

function setup() {
  createCanvas(canvaswidth, canvaslength);
  background(135, 206, 235);
  Scene();
}

function draw() {
  
}


function Scene() {



  //creating the sun
  fill(255,255,0);
  circle(canvaswidth/2, 200, 100);


  //grass
  fill(0,230,0);
  circle(canvaswidth/2,2100, 3000);

  // if (keyPressed()){
  //   Loop = 2
  // }
  for(Loop = 0;Loop < 6; Loop ++){
    
  
    //gives me trees in random positions
    PointX = random(0,canvaswidth);
    PointY = random(600,canvaslength);

    //tree trunk
    fill(150, 75, 0);
    rect(PointX-10,PointY,20,50);
  
    //the leaves
    fill(0,150,0);
    triangle(PointX-100,PointY,PointX+100,PointY,PointX,PointY-150);
    triangle(PointX-90,PointY-50,PointX+90,PointY-50,PointX,PointY-200);
    triangle(PointX-80,PointY-100,PointX+80,PointY-100,PointX,PointY-220);
  
  }
  
}

function man(){
  line
}