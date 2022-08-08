var bow, arrow, redB, pinkB, greenB, blueB, arrowGroup, blackB, explosaoImg, fimImg, explosao, fim;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage, black_balloonImage;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var score = 0;
function preload() {
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  black_balloonImage = loadImage("black_balloon0.png");
  explosaoImg = loadImage("explosao.png");
  fimImg = loadImage("voce_perdeu.png");
}

function setup() {
  createCanvas(400, 400);

  
  
  // criar o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para atirar a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  explosao = createSprite(200, 200);
  explosao.addImage(explosaoImg);
  explosao.scale = 0.1;

  fim = createSprite(200, 200)
  fim.addImage(fimImg);
  fim.scale = 0.5;


  score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup = new Group();
  blackB = new Group();  
}

function draw() {
  background(0);
  if(gameState === PLAY) { 
    //movendo o fundo
    scene.velocityX = -3 

    explosao.visible = false;
    fim.visible = false;

     if (scene.x < 0){
       scene.x = scene.width/2;
    }
      
    //movendo o arco
    bow.y = World.mouseY
      
    // soltar a flecha quando a tecla de espaço for pressionada
    if (keyDown("space")) {
          createArrow();  
    }
    
    //criando inimigos contínuos
    var select_balloon = Math.round(random(1,5));
    if (World.frameCount % 100 == 0) { 
      switch(select_balloon ){ 
      case 1: redBalloon(); 
      break;
      case 2:blueBalloon(); 
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon(); 
      break;
      case 5:blackBalloon();
      break;
      default:break; } } 
  // if (World.frameCount % 100 == 0) {
  //   if (select_balloon == 5) {
  //     redBalloon();
  //   } 
  //   else if (select_balloon == 2) {
  //     greenBalloon();
  //   } 
  //   else if (select_balloon == 3) {
  //     blueBalloon();
  //   } 
  //   else if (select_balloon == 1){
  //     pinkBalloon();
  //   } 
  //   else  if (select_balloon == 4){
  //     blackBalloon();
  //   }
  // }
  }

  if (arrowGroup.isTouching(redB)) {
    redB.destroyEach();
    //arrowGroup.destroyEach();
    score=score+1;
    //explosao.addImage(explosaoImg);
    gameState = END
  }
  if (gameState === END){
    bow.destroy();
    scene.velocityX = 0;
    explosao.visible = false;
    fim.visible = true;
    //fim.addImage(fimImg);
    // pinkB.destroyEach();
    // blueB.destroyEach();
    // greenB.destroyEach();
    // arrowGroup.destroyEach();
    // redB.destroyEach();
    // console.log("voce perdeu");
}
  
  if (arrowGroup.isTouching(greenB)) {
    greenB.destroyEach();
    arrowGroup.destroyEach();
    score=score+3;
    explosao.visible = true;
  }

  if (arrowGroup.isTouching(blueB)) {
    blueB.destroyEach();
    arrowGroup.destroyEach();
    score=score+2;
    explosao.visible = true;
  }

  if (arrowGroup.isTouching(pinkB)) {
    pinkB.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
    //explosao.addImage(explosaoImg);
  }

if (arrowGroup.isTouching(blackB)) {
    blackB.destroyEach();
    arrowGroup.destroyEach();
    //score=score+1;
    //gameState = END;
    //explosao.addImage(explosaoImg);
  }

  
  


  drawSprites();
    text("Pontuação: "+ score, 300,50);
  
}

// Criando flechas para o arco
function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow)}

function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkB.add(pink);
}

function blackBalloon() {
  var black = createSprite(0,Math.round(random(20, 370)), 10, 10);
  black.addImage(black_balloonImage);
  black.velocityX = 2;
  black.lifetime = 230;
  black.scale = 0.1
  blackB.add(black);         
}


