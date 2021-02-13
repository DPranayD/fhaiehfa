//namespacing
const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var object;
var object1;

function setup(){
 createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
 
  var options1 = {
    restitution: 1.0
  }
  object=Bodies.rectangle(200,390,400,20,options);
  object1=Bodies.circle(300,100,20,options1);
  World.add(world,object);
  World.add(world,object1);
  console.log(object);
  console.log(object.position.x);
  console.log(object.position.y);
}
function draw()
{
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
    rect(object.position.x,object.position.y,400,20);

  ellipseMode(RADIUS);
    ellipse(object1.position.x,object1.position.y,20,20);
  
}
