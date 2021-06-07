
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeImage;
var boyImage;
var stone;
var slingshot;


function preload()
{
    this.treeImage = loadImage("images/tree.png")
    this.boyImage = loadImage("images/boy.png")
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(680,height,displayWidth,20);
	mango1 = new Mango (900, 400,35);
	mango2 = new Mango (950, 480,35);
	mango3 = new Mango (1000, 350,35);
	mango4 = new Mango (1050, 450,35);
	mango5 = new Mango (1135, 390,35);
	mango6 = new Mango (1235, 450,35);
	stone = new Stone (250, 600,50);
	slingshot = new Slingshot (stone.body,{x:250, y:600});
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ground.display();
  image (treeImage, 800, 270, 500, 500);
  image (boyImage, 200, 530, 300, 300);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  slingshot.display();

  detectcollision (stone, mango1);
  detectcollision (stone, mango2);
  detectcollision (stone, mango3);
  detectcollision (stone, mango4);
  detectcollision (stone, mango5);
  detectcollision (stone, mango6);

  drawSprites();

  
}

function mouseDragged(){
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  }

function mouseReleased(){
  slingshot.fly();
}

function detectcollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  console.log(lmango.body);
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }