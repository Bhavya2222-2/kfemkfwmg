const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;
var backgroundImg
var mario1
var marioImg
var block1
var Mariox=55,Marioy=510


function preload() {
    backgroundImg = loadImage("Background.jpg");
 //   mario1 =  loadAnimation("Marion_run.png","Mario_walk.png");  //correction in the names of the pic files
  
}


function setup(){
    var canvas = createCanvas(displayWidth - 30, displayHeight-150); //created the size according to screen size
    engine=Engine.create();
    world=engine.world;
 //  marioImg= createSprite(Mariox, Marioy); //sprite was not created
 //  marioImg.addAnimation("run", mario1);
  // marioImg.scale=0.1;
  
   block1= new Block3(55,570,100,70);
   block2=new Block3(155,570,100,70);
   block3=new Block3(255,570,100,70)
   block4=new Block3(355,570,100,70)
   block5=new Block3(455,570,100,70)
   
   block7=new Block3(655,570,100,70)
   block8=new Block3(755,570,100,70);
   block9=new Block3(855,570,100,70)
   block10=new Block3(955,570,100,70)
   block11=new Block3(1055,570,100,70)
   block12=new Block3(1155,570,100,70)
   block13=new Block(355,405,75,50)
   block14=new Block(490,310,120,50)
   block15=new Block(650,180,90,50)
   block16=new Block3(1255,570,100,70)
   block17=new Block3(1355,570,100,70)
   block18=new Block3(855,350,100,70)
   block19=new Block3(955,350,100,70)
   
  // mushroom.scale=0.3;
  // block2= new Block2(400,300,500,50)
  coin1=new Coin(800,50,25,30)
  coin2=new Coin(760,50,25,30)
  coin3=new Coin(1200,480,25,30)
  coin4=new Coin(955,280,25,30)
  coin5=new Coin(500,100,25,30)
  coin6=new Coin(855,200,25,30)
  coin7=new Coin(300,200,25,30)
  coin8=new Coin(300,200,25,30)
  mountain1= new Mountain(200,438,350,200);
  Mountain2f=new Mountain2(830,490,200,90);
  mountain1f=new Mountain(1050,476,200,120);
  mushroom=new Mushroom(1300,520,30,30)
  mario= new Mario(Mariox,Marioy,40,60)
  

}

function draw(){
   background("blue");

block1.display();
block2.display();
coin1.display();
coin2.display();

coin4.display();
coin5.display();
coin6.display();
coin7.display();
coin8.display();
block3.display();
block4.display();
block5.display();
//block6.display();
block7.display()
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();

mountain1f.display();
Mountain2f.display();
mountain1.display();
mushroom.display();
coin3.display();
mario.display();
//block2.display();
//window.addEventListener("keydown",keyadd);
drawSprites();
}
function keyPressed(){
if(keyCode===Right_Arrow){
Mariox=Mariox+10
}
}
