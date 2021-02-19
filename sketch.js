
var monkey, monkey_running

var bananasGroup, bananas, banana, bananaImage;
  
var obstaclesGroup, obstacles, obstacle, obstacleImage;  

var ground;


function preload(){

  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  
bananaImage = loadImage("banana.png")
  
obstacleImage = loadImage("obstacle.png")
  

}

function setup() {
  createCanvas(500,400);
  
  //creating monkey
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  
//create banana and obstacle groups
  bananasGroup = createGroup();
  obstaclesGroup = createGroup();  

//set monkey collider
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  
  score = 0;
}

function draw() {
  background("white");

  spawnBananas(); 
  spawnObstacles(); 

  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
    monkey.collide(ground);

  drawSprites();
    }
  
  function spawnBananas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,40);
    banana.y = Math.round(random(50,270));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -8;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //add each banana to the group
    bananasGroup.add(banana);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the obstacles
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,325,40,40);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -12;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }

}
  






  




