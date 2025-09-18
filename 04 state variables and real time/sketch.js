//state variables and real time
// Brayden Cochrane
// september 18th, 2025

//global variables
let shapeState = 0; //0-circle 1-square 2-triangle 3-transiston
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis();
}

function manageTimer(){
  elapsedTime = millis() - startTime;
  text((elapsedTime/1000).toFixed(2), width*0.3    )
}

function draw() {
  //targeting 60 fps
  //using this 
  background(220);
  drawShape()
  print("frame "+ frameCount)
}


function keyPressed (){
  //gets automatically called on any keyboard press
  //state var: 0 -> 1   1 -> 2
  //           2 -> 3   (for 2 seconds) -> 0
  if(shapeState < 3 ){
    shapeState++
  }
}

function drawShape(){
  //inspect our state variable, and draw 1 of 4 possible
  //options, depending on the current value
  switch(shapeState){
    case 0:
      circle(width/2, height/2, 150)
      break

    case 1:
      square(width/2, height/2, 150)
      break
    case 2:
      let x = width/2;   let y = height/2
      triangle(x-50,y+50,x+50,y+50,x,y-25)
      break
    case 3:
       for(let i = 0; i < 20; i++){
        let x = random
        let y = random
       }

       
      break      

  }
}
