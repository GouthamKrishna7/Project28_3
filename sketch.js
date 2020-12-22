
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyImg , boyImg1
function preload() {
  boyImg = loadImage("boy.png")
}
function setup() {
  createCanvas(1200, 500);
  boyImg1 = createSprite(200,415)
  boyImg1.addImage(boyImg)
  boyImg1.scale=0.13
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(750,480)
	ground = new Ground(600,500,1200,10)
  stone = new Stone(400,300)
  rope = new Rope(stone.body,{x:123,y:350})
  mango1 = new Mango(750,250);
  mango2 = new Mango(720,220);
  mango3 = new Mango(840,280);
  mango4 = new Mango(860,200);
  mango5 = new Mango(630,235);
  mango6 = new Mango(700,180);
  mango7 = new Mango(800,170);
  mango8 = new Mango(800,230)
  Engine.run(engine);
  
}


function draw() {
  Engine.update(engine)
  rectMode(CENTER);
  background(225);
  tree.display();
  ground.display()
  stone.display()
  rope.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  fill("red")
  stroke("red")
  strokeWeight(1.5)
  textSize(18)
  text("Press Space key to get a another chance to play",20,20)
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
  drawSprites()
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
 rope.fly(); 
 distance=int(dist(stone.body.x,stone.body.y,mango1.body.x,mango1.body.y)); 
} 
function keyPressed() 
{ 
  if (keyCode === 32) { 
  Matter.Body.setPosition(stone.body, {x:123, y:350}) 
  rope.attach(stone.body); 
} 
} 
function detectollision(lstone,lmango)
{ 
  mangoBodyPosition=lmango.body.position 
  stoneBodyPosition=lstone.body.position 
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
  console.log(distance) 
  if(distance<=lmango.r+lstone.r) { 
     Matter.Body.setStatic(lmango.body,false);
     } 
  }



