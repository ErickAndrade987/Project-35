var balloon
function preload()
{
  backgroundImg = loadImage("Hot Air Ballon-01.png");
  balloonImg = loadImage("Hot Air Ballon-02.png");
}
function setup() {
  database = firebase.database()
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addImage(balloonImg)
  balloon.scale = 0.5
  // balloon.shapeColor = "red";
  var balloonposition = database.ref('balloon/position'); 
    // balloonposition.on("value",readPosition, showError);
}

function draw() {
  background(backgroundImg);  
if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x -10;
}
else if(keyDown(RIGHT_ARROW)){
  balloon.x = balloon.x +10;
}
else if(keyDown(UP_ARROW)){
  balloon.y = balloon.y -10;
}
else if(keyDown(DOWN_ARROW)){
  balloon.y = balloon.y +10;
}
  drawSprites();
}

// var ball;

// function setup(){
//     database = firebase.database()
//     createCanvas(500,500);
//     ball = createSprite(250,250,10,10);
//     ball.shapeColor = "red";
//     var ballposition = database.ref('ball/position'); 
//     ballposition.on("value",readPosition, showError);

// }

// function draw(){
//     background("white");
//     if(keyDown(LEFT_ARROW)){
//         changePosition(-1,0);
//     }
//     else if(keyDown(RIGHT_ARROW)){
//         changePosition(1,0);
//     }
//     else if(keyDown(UP_ARROW)){
//         changePosition(0,-1);
//     }
//     else if(keyDown(DOWN_ARROW)){
//         changePosition(0,+1);
//     }
//     drawSprites();
// }