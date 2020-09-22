const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;
  
  //bobDiameter=40;

	//Create the Bodies Here.

  roofObject =new Roof(370,40,250,20)
  
  bobObject1=new BobObject(280,350,20);
	bobObject2=new BobObject(330,350,20);
	bobObject3=new BobObject(380,350,20);
	bobObject4=new BobObject(430,350,20);
	bobObject5=new BobObject(480,350,20);

  rope1=new Rope(bobObject1.body,{x:280,y:40});
  rope2=new Rope(bobObject2.body,{x:330,y:40});
  rope3=new Rope(bobObject3.body,{x:380,y:40});
	rope4=new Rope(bobObject4.body,{x:430,y:40});
	rope5=new Rope(bobObject5.body,{x:480,y:40});

	Engine.run(engine);
  
}


function draw() {
  background(225);

  

 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  text (mouseX+","+mouseY,mouseX,mouseY);
  
}

/*function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});
}*/

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(bobObject1.body,bobObject1.position,{x:-85,y:-85});

  }
}
