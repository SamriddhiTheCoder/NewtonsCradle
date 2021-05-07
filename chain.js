class Chain {
    constructor(pointA, pointB, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offsetY = offsetY;
    
        var options = {
        bodyA : pointA,
        bodyB : pointB,
        pointB: {x: this.offsetX, y:this.offsetY},
    }

    this.chain = Constraint.create(options);
    World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        stroke("white");
        strokeWeight(2);

        var anchorX1 = pointA.x;
        var anchorY1 = pointA.y;

        var anchorX2 = pointB.x + this.offsetX;
        var anchorY2 = pointB.y + this.offsetY;

        line(anchorX1, anchorY1, anchorX2, anchorY2);
    }
}
