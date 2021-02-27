class Chain
{
    constructor(body1,pointB)
    {
        var options=
        {
            bodyA: body1,
            pointB: pointB,
            stiffness: 1.2,
            length: 350
        }
        this.pointB=pointB;
        this.chainbody= Constraint.create(options);
        World.add(myworld,this.chainbody);
    }

    display()
    { 
        var A=this.chainbody.bodyA.position
        var B=this.pointB
        push();
        stroke("yellow");
        strokeWeight(3)
        line(A.x,A.y,B.x,B.y)
        pop();
    }
}