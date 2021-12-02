
var trex ,trex_running;
function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,170,10,10);
  trex.addAnimation("running",trex_running);
  trex.scale = 0.5;

  Ground = createSprite(300,175,600,2);

}

function draw(){
  background("white")
  
  if(keyDown("space")){
    trex.velocityY = -30;
  }
  trex.velocityY += 0.8;
  trex.collide(Ground);
  drawSprites();
}
