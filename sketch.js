var ball;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var ball_options={
isStatic:false,
restituation:0.3,
friction:0,
density:1.2 
	} 
	
	
	
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball= Bodies.circle (200,100,20,ball_option)

	Engine.run(engine);
  
}

function keypressed(){

	if (keyCode===UP_ARROW)
	function HFORCE (){
		Matter.Body.applyForce (ball,{x:0,y:0},{x:0.05,y:0})
	  
	  }
	  
	  function VFORCE (){
		Matter.Body.applyForce (ball,{x:0,y:0},{x:0,y:0.05})
	  
	  }




}
function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



