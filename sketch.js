
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var paperObj,block1,block2,block3;
var ground



function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	paperObj=new Paper(100,100,20);
	ground=new Ground(400,485,800,20);
	block1=new Dustbin(600,470,180,100);
	block2=new Dustbin(500,430,20,100);
	block3=new Dustbin(700,430,20,100);



  
}


function draw() {
  rectMode(CENTER);
  background("blue");

  Engine.update(engine);
  
  ground.display();
  block1.display();
  //block2.display();
  //block3.display();
  paperObj.display();
  fill("white");
  text("X"+mouseX+","+"Y"+mouseY,mouseX,mouseY);  
 
}
function keyPressed(){

	

	if(keyCode === UP_ARROW ){ 
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:15,y:-15}); }
   
	}
   
   


