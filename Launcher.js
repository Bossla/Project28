class Launcher{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.01,
            length: 40
        }
        this.bodyA = body;
        this.pointB = pointB;
        this.launchr = Constraint.create(options);
        World.add(world, this.launchr);
    }
    fly(){
        this.launchr.bodyA = null;
    }
    attach(body){
        this.launchr.bodyA = body;
    }
    display(){
        if(this.launchr.bodyA != null){
        var pointA = this.launchr.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
}