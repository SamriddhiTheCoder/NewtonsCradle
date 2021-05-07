var bgImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	bgImg = loadImage("bg.jpg");
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 70, 600, 40);

	ball1 = new Bob(190, 440, 50);
	ball2 = new Bob(290, 440, 50);
	ball3 = new Bob(390, 440, 50);
	ball4 = new Bob(490, 440, 50);
	ball5 = new Bob(590, 440, 50);

	rope1 = new Chain(ball1.body, roof.body, -200, 0);
	rope2 = new Chain(ball2.body, roof.body, -100, 0);
	rope3 = new Chain(ball3.body, roof.body, 0, 0);
	rope4 = new Chain(ball4.body, roof.body, 100, 0);
	rope5 = new Chain(ball5.body, roof.body, 200, 0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bgImg);

  textSize(20);
  fill("black");
  text("Press up and down arrows to make the pendulum move!", 155, 30);

  Engine.update(engine);

  roof.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();
}

function keyPressed(){
	if(keyDown("up")){
		Matter.Body.applyForce(ball5.body, ball5.body.position, {x:250 , y:-45});
	}
	if(keyDown("down")){
		Matter.Body.applyForce(ball1.body, ball1.body.position, {x:-190 , y:45});
	}
}



