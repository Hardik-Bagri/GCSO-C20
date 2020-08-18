var car,wall;
var speed, weight;
function setup() {
  createCanvas(400,400);
  car=createSprite(50, 200, 50, 50);
  speed=random(27.5,135);
  weight=random(200,2250);
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor(80, 80, 80);
  car.velocityX = speed;
}
function draw() {
  background(255,255,255); 
  if (wall.x-car.x < (car.width+wall.width)/2)
  {
   car.velocityX=0;
   var deformation=0.5 * weight * speed* speed/22509;
   if(deformation>180)
   {
     car.shapeColor=color(255, 0, 0);
   }
   if(deformation<180 && deformation>100)
   {
     car.shapeColor=color(230, 230, 0);
   }
   if(deformation<100)
   {
    car.shapeColor=color(0, 255, 0);
   }
  }
  drawSprites();
}