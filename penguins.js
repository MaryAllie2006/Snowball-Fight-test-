class Penguins{
  constructor(x, y,width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,50,50, options);
      this.width = 100;
      this.height = 100;
      //this.image = loadImage("images/pen.png");
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      //pos.x=mouseX;
      //pos.y=mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1); 
      stroke("grey")
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };