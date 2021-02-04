
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject = new paper(400,500,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  Engine.update(engine);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

 if(keyCode === UP_ARROW){
	 Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:15,y:-35});
 }
 if(keyDown(DOWN_ARROW)){
	 paperObject.velocityY=20;
 }
 paperObject.scale=0.1;

  }



