var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,400,100,50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
}

function draw() {
  background(0,0,0);  
// to move moving rect along with mouse
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && 
     movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
     fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 && 
     movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    ) {
      fixedRect.shapeColor = "red";
      movingRect.shapeColor = "red";
    }else {
      fixedRect.shapeColor = "green";
      movingRect.shapeColor = "green";
    }

  drawSprites();
}