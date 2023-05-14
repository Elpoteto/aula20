
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
block1=Bodies.circle(220,10,10,block1_opitions);
World.add(wolrd,block1)
block2=Bodies.rectangle(110,50,10,10,block2_opitions);
World.add(wolrd,block2)
block3=Bodies.rectangle(350,50,10,10,block3_opitions);
World.add(wolrd,block3)


}

	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  
  }




