const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var Score = 0;
var bg = 0

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
    background(bg);
    Engine.update(engine);
    fill(255)
    
    //console.log(Box1.visibility)
    //console.log(Score)
    //console.log(Polygon);
    
    text("score :" + Score, 750, 40);
    

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

    Box1.score();
    Box2.score();
    Box3.score();
    Box4.score();
    Box5.score();
    Box6.score();
    Box7.score();
    Box8.score();
    Box9.score();

    ellipseMode(RADIUS);
    ellipse(Polygon.position.x, Polygon.position.y, 10, 10)

    Ground1.display();

    
}

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

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles")
    var responsejson = await response.json()
    var datetime = responsejson.datetime;
    var hour = datetime.slice(11, 13);
    if (hour >= 06 && hour <= 18){
        bg = 225
    }
    else {
        bg = 0
    }
}

