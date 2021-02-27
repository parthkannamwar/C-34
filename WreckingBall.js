class WreckingbBall
{
    constructor(x,y,radius)
    {
        var boptions=
        {
            isStatic:false,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(x,y,radius,boptions)
        this.radius=radius;

    World.add(myengine.world,this.body);
    }

    display()
    {
        fill("red");
        ellipse(this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
    }
}