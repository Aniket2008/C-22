const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var object;

    function setup() {
  createCanvas(400,400);
  engine= Engine.create();
world=engine.world;

object= Bodies.rectangle(200,200,40,40);
World.add(world,object);
console.log(object);
}

function draw() {
  background("red"); 
  rectaMode(CENTER); 
rect(200,200,40,40);
  drawSprites();
}