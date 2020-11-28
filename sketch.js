const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world
var particles=[]
var plinkos=[]
var divisions=[]
var div,plin,part
var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
   }

}
 


function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  
   if(frameCount%60===0){
     particles.push(new Particle(random(100,600), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}