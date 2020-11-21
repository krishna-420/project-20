var car,wall;
var bullet, speed , weight;


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
speed=ranodm(223,321)
weight=random(30,52)
thickness=random(22,83)
car = createSprite(50,200,50,50);
wall = createSprite(1500,200,60,height/2);
wall2 = createSprite(1200,200,thickness,height/2);
car.velocityX=speed;

}

function draw() {
  background(255,255,255); 
  if(wall.x-car<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180)
{
car.shapecolour=color(225,0,0);
}
if(deformation<180 && deformation>100){
  car.shapecolour=(230,230,0);
}
if(deformation<100){
  car.shapecolour=(0,225,0);
}
 }
  
  drawSprites();
}