  var subway,jake,ground;
  var path;
  var invisible1,invisble2;
  var coinG,bomb3 ;
  var score=0;
  var coin, bomb;
  var END=0;
  var gameState=1;
  var over;

  function preload(){
  //pre-load images
  jake=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake5.png");
  path=loadImage("path.png");
  coin1=loadImage("coin.png");
  bombImg=loadImage("bomb.png")
  gameO=loadImage("r.jpg")
  }

  function setup(){
  createCanvas(400,400);
  //create sprites here

  coinG= new Group();
  bomb3= new Group();
    
   invisible1=createSprite(15,200,80,400);
   invisible1.visible=false;
    
    invisible2=createSprite(400,200,100,400);
   invisible2.visible=false;
    
   score=0;
    
  ground=createSprite(200,200);
  ground.addImage("move",path);
  ground.velocityY=(4+2*score/20);

    
  subway=createSprite(300,330,40,50);
  subway.addAnimation("running",jake);
  }
 
  
  function draw() {
  background(0);
    
    
   subway.x = World.mouseX;  
  

    if(ground.y>400){
    ground.y = ground.width/2;
  }

   
 
  
  if(coinG.isTouching(subway)){
    coinG.destroyEach();
    score=score+10;
  }
else{
 
  if(bomb3.isTouching(subway)){
 gameState=END;
 bomb3.destroyEach();
 bomb3.setVelocityEach(0);
  coinG.destroyEach();
coinG.setVelocityEach(0);
  subway.destroy();
  subway.velocityY=0;
  ground.velocityY=0;
  over=createSprite(200,200);
  over.addImage(gameO);
  over.scale=0.5;

    
    
    score=score+0;
  }
}
    
    subway.collide(invisible1) ;
    subway.collide(invisible2) ;

   
    createCoin(); 
    Bomb1();
    
    
  drawSprites();
  textSize(20);
  fill("red");
  text("Score="+score,300,50);
  }

  function createCoin(){
    if(World.frameCount%200===0){
       coin=createSprite(Math.round(random(60,250),40,10,10));
      coin.addImage(coin1);
      coin.scale=0.5;
      coin.velocityY=3;
      //coin.destroy=150;
      coinG.add(coin);
      
    }
  }
  function Bomb1(){
    if (World.frameCount%200===0){
      bomb=createSprite(Math.round(random(70,420),50,15,15));
      bomb.addImage(bombImg);
      bomb.scale=0.1;
      bomb.velocityY=3;
    // bomb.destroy=150;
     bomb3.add(bomb);
    }
  }

