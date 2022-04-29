const NO_BOUNDARIES = 5;

let ray;
let boundaries= [];
let sun;
let xOff = 0;
let yOff = 1000;


function setup() {
  createCanvas(400, 400);

  for(let i=0 ; i<NO_BOUNDARIES ; i++ ){
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    boundaries[i] = new Boundary(x1, y1 , x2, y2);
  }

  //inclosing the canvas with boundaries
  boundaries.push(new Boundary(0,0,0,width));
  boundaries.push(new Boundary(0,width,width, height));
  boundaries.push(new Boundary(width,height,height,0));
  boundaries.push(new Boundary(height,0,0,0));

  sun = new Sun();
}

function draw() {
  background(0);
  for(wall of boundaries){
    wall.show();
  }
  sun.updatePostion(noise(xOff) * width , noise(yOff)*height);
  sun.show();
  sun.throwLightOnObject(boundaries);
  
  
  xOff += 0.01;
  yOff += 0.01;
}
