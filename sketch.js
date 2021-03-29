const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var penguin1, penguin2, penguin3, penguin4, penguin5, penguin6, penguin7;
var snowball;
var ground, platform1;
var slingshot;


function preload(){
  backgroundImg=loadImage("images/Background.jpg");
  
}
function setup() {
  createCanvas(2000,900);
 
  engine = Engine.create();
  world = engine.world;
  
  ground= new Ground(1000,height,12000,200);
  
  penguin1= new Penguins(850,750);
  penguin2= new Penguins(1000,750);
  penguin3= new Penguins(1150,750);
  penguin4= new Penguins(1300,750);
  penguin5= new Penguins(900,300);
  penguin6= new Penguins(1060,300);
  penguin7= new Penguins(1230,300);
  penguin8= new Penguins(1500,300);
  penguin9= new Penguins(1500,300);

  platform1= new Ground(1080,700,600,20)


  snowball= new Snowball(400,500,50);
  
  slingshot= new Slingshot(snowball.body,{x:400, y:500});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  ground.display();
  

  penguin1.display();
  penguin2.display();
  penguin3.display();
  penguin4.display();
  penguin5.display();
  penguin6.display();
  penguin7.display();
  //penguin8.display();
  //penguin9.display();

  platform1.display();
  
  snowball.display();

  slingshot.display();
  
  //drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(snowball.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
      slingshot.attach(snowball.body);
      Matter.Body.setPosition(snowball.body,{x:400,y:500});
  }
}
