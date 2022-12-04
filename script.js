let cameraX, cameraY, myX, myY,speed,negaX,negaY,canMove = true,gas = 0;

var updater = 0

function init() {
    myX = 520
    myY = 120
    negaX = 1900;
    negaY = 120;
    speed = 8;
    
}

function fiziks() {
    if(myX-cameraX <= 201 - cameraX){
    myX = 202    
    }
    if(myX-cameraX >= 650 - cameraX){
    myX = 649    
    }
}


function update() {
    updater++;
    gas++;
    fiziks();
    cameraX = myX - 400;
    cameraY = myY - 300;

    negaX = negaX + (myX - negaX) / 25;
    negaY = negaY + (myY - negaY) / 25;
    
    speed = 8 - (updater / 100);

    if(canMove) {
    if(isKeyPressed[37]){
    myX = myX - speed
    //console.log("HOG")
    }
    
    if(isKeyPressed[39]){
    myX = myX + speed    
    }

    if(isKeyPressed[40]){
    myY = myY +  speed   
    }

    if(isKeyPressed[38]){
        myY = myY - speed   
    }

    }
    

}

function draw() {
    context.fillStyle = 'black';
    context.fillRect(-999999999,-99999999,999999999999999999999999999,99999999999999999999999999999)
    //drawImage(building[0], 0-cameraX, 0-cameraY, 1200, 1500);
    //drawImage(building[0], 0-cameraX, 0-cameraY, 1200, 1500);
    context.fillStyle = 'red';
    context.fillRect(200-cameraX,-50000-cameraY,600, 1000000000000500)


    drawImage(femaleAction, myX-cameraX, myY-cameraY, 60, 80);
    drawImage(boxAlienYellowSquare, negaX-cameraX, negaY-cameraY, 60, 80);

    

    if(areColliding(myX-cameraX,myY-cameraY,60,80,negaX-cameraX, negaY-cameraY, 60, 80)){
    drawImage(building[0], 0, 0,800,600); 
    canMove = false;   
    }

    drawImage(back3D, 0, 0,800,600); 

}

function keyup(key) {
    console.log(key)
    if(key == 38 || key == 40){
    updater = 0;
    }
    //key == 37 || key == 39 || 

}