class Snowball {
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        //this.image = loadImage("images/snowball.jpg");
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;

        var pos = this.body.position;
        //fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius);
    }
}