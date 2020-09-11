const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;



function preload() {

}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    
    Ground1 = new Ground(350, 350, 180, 10)

    //Ground1 first layer
    Box1 = new Box(286, 325, 32, 40);
    Box2 = new Box(318, 325, 32, 40);
    Box3 = new Box(350, 325, 32, 40);
    Box4 = new Box(382, 325, 32, 40);
    Box5 = new Box(414, 325, 32, 40);

    //Ground1 second level
    Box6 = new Box(318, 295, 32, 40);
    Box7 = new Box(350, 295, 32, 40);
    Box8 = new Box(382, 295, 32, 40);
    
    //Ground1 third level
    Box9 = new Box(350, 255, 32, 40)

   
    Polygon = Bodies.circle(150, 270, 10);
    World.add(world, Polygon);
    

    Slingshot1 = new Slingshot(this.Polygon, {x: 150, y:270})
    

}

function draw(){
    background(200);
    Engine.update(engine);


    //console.log(Polygon);
    
    push();
    fill(color(152, 221, 252));
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    pop();

    push();
    fill(color(233, 251, 209));
    Box6.display();
    Box7.display();
    Box8.display();
    pop();

    push();
    fill(color(250, 213, 184));
    Box9.display();
    pop();

    ellipseMode(RADIUS);
    ellipse(Polygon.position.x, Polygon.position.y, 10, 10)

    Ground1.display();
}
//this is where the problem seems to happen for project 19
function mouseDragged(){
    Matter.Body.setPosition(this.Polygon, { x: mouseX, y:  mouseY })
}
function mouseReleased(){
    Slingshot1.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(this.Polygon, {x:150, y:270});
		Slingshot1.attach(Polygon)
	}
}
