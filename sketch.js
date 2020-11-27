var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var redZ1,redZ2,redZ3;
var backImg;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")

	backImg=loadImage("war.jpg");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	redZ1=createSprite(400,650,200,20);
	redZ1.shapeColor="red";
	World.add(world, redZ1);

	redZ2=createSprite(300,610,20,100);
	redZ2.shapeColor="red";
	World.add(world, redZ2);

	redZ3=createSprite(500,610,20,100);
	redZ3.shapeColor="red";
	World.add(world, redZ3);
    

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  keyPressed() 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody, false);    
  }
}



