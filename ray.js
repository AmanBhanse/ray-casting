class Ray {
    constructor(x , y){
        this.unitDirectionVector = createVector(0,1);
        this.source = createVector(x,y);
    }

    updateRaySourcePosition(x, y){
        this.source.x = x;
        this.source.y = y;
    }

    updateRayDirectionVector(x, y){
        this.unitDirectionVector.x = x - this.source.x;
        this.unitDirectionVector.y = y - this.source.y
        this.unitDirectionVector.normalize();
    }


    cast(boundary){

        const logs = [];
        //Extracting the boundary coordinates
        const x1 = boundary.startPoint.x;
        const y1 = boundary.startPoint.y;
        
        const x2 = boundary.endPoint.x;
        const y2 = boundary.endPoint.y;
        logs.push(`Boundary : { ${x1} , ${y1} } , { ${x2} , ${y2} }`);

        //Extracting the unit ray coordinates
        const x3 = this.source.x;
        const y3 = this.source.y;
        const x4 = this.unitDirectionVector.x + this.source.x;
        const y4 = this.unitDirectionVector.y + this.source.y;

        logs.push(`Ray : { ${x3} , ${y3} } , { ${x4} , ${y4} } `);

        const den = (x1 - x2) * (y3 -  y4) - (y1 - y2) * (x3 - x4);

        logs.push(`Denominator: ${den}`);

        if(den == 0){
            //ray and boundary are parallel to each other
            return ;
        }

        const t = ( (x1 - x3)*(y3 - y4) - (y1 - y3)*(x3 - x4) ) / den;
        const u = - ( (x1 - x2)*(y1 - y3) - (y1-y2)*(x1-x3)  ) / den;

        logs.push(`t : ${t} , u : ${u}` )


        if(t>0 && t<1 && u>0){
            return true;
        }
        else{
            return;
        }
    }

    show(){
        stroke(255);
        push();
        translate(this.source.x ,this.source.y);
        line(0,0, this.unitDirectionVector.x * 10 , this.unitDirectionVector.y * 10);
        pop();

    }

    

}