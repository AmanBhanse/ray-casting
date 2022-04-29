let ray;
let boundarys= [];
let sun;
let xOff = 0;
let yOff = 1000;


function setup() {
  createCanvas(400, 400);

  for(let i=0 ; i<5 ; i++ ){
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    boundarys[i] = new Boundary(x1, y1 , x2, y2);
  }

  //inclosing the canvas with boundaries
  boundarys.push(new Boundary(0,0,0,width));
  boundarys.push(new Boundary(0,width,width, height));
  boundarys.push(new Boundary(width,height,height,0));
  boundarys.push(new Boundary(height,0,0,0));

  sun = new Sun();
}

function draw() {
  background(0);
  for(wall of boundarys){
    wall.show();
  }
  sun.updatePostion(noise(xOff) * width , noise(yOff)*height);
  sun.show();
  sun.throwLightOnObject(boundarys);
  
  
  xOff += 0.01;
  yOff += 0.01;
}
