let ray;
let boundarys= [];
let sun;
function setup() {
  createCanvas(400, 400);

  for(let i=0 ; i<5 ; i++ ){
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    boundarys[i] = new Boundary(x1, y1 , x2, y2);
  }
  sun = new Sun();
}

function draw() {
  background(0);
  for(wall of boundarys){
    wall.show();
  }
  sun.updatePostion(mouseX, mouseY);
  sun.show();
  sun.throwLightOnObject(boundarys);
  
}
