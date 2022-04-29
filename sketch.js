let ray;
let boundary;
function setup() {
  createCanvas(400, 400);
  ray = new Ray(150, 100);
  boundary = new Boundary(300, 100 , 300, 300);
  let pt = ray.cast(boundary);
  console.log(pt);
}

function draw() {
  background(0);
  ray.updateRayDirectionVector(mouseX , mouseY);
  ray.show();
  boundary.show();

  let pt = ray.cast(boundary);
  if(pt){
    fill(255);
    ellipse(pt.x ,pt.y , 8 , 8);
  }
  
}
