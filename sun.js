class Sun{
    
    constructor(){
        this.pos = createVector(width/2 , height/2);
        this.rays = [];
        this.rayDelta = 1; //More the value, less number of rays
        this.rayStroke = 255;
        this.rayStrokeAlpha = 100;


        for(let i=0 ; i <360 ; i+=this.rayDelta){
            this.rays.push( new Ray(this.pos, radians(i)));
        }
    }

    throwLightOnObject(boundarys){
        for(let ray of this.rays){
            let closestPOI = null;
            let record = Infinity;
            for(let boundary of boundarys){
                let pointOfIntersection = ray.cast(boundary);
                if(pointOfIntersection){
                    //line(this.pos.x , this.pos.y , pointOfIntersection.x, pointOfIntersection.y);
                    let d = p5.Vector.dist(this.pos , pointOfIntersection);
                    if(d < record){
                        record = d;
                        closestPOI = pointOfIntersection;
                    }
                }
            }//inner for ends

            if(closestPOI){
                stroke(this.rayStroke,this.rayStrokeAlpha);
                line(this.pos.x, this.pos.y , closestPOI.x , closestPOI.y);
            }
        }//outter for ends
    }

    updatePostion(x, y){
        this.pos.x =x ;
        this.pos.y = y;
    }


    show(){
        fill(255);
        ellipse(this.pos.x , this.pos.y , 4);
        for(let ray of this.rays){
            ray.show();
        }
    }


}