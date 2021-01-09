
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var linee;
var line;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   linee= createSprite(600,600,10000,5)
   linee= createSprite(600,560,5,50)
   linee= createSprite(630,585,60,5)
   linee= createSprite(660,560,5,50)
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  strokeWeight(6)
  linee.display();
  
  drawSprites();
 
}



