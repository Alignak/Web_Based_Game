/*
    Game Ideas:
        Roof running game  <--- 
        Signal matching game
        Driving game
        Towers game

*/




var up, down, left, right = false;
var rectMode = "CENTER";



//movePlayer();
//moveObjects();
//testCollisions();
//drawBackground();
//drawObjects();
//drawPlayer();
//drawObectsForeground();


function movePlayer() {
    var xVelKeys = getXKeyPress();  // Returns the velocity in xDirection depending on keys down
    var yVelKeys = getYKeyPress();
    xVel = xVel + xVelKeys;
    yVel = yVel + yVelKeys;
    xPos+=xVel;
    yPos+=yVel;
    xVel = xVel * 0.95;
    yVel = yVel * 0.95;
}

function moveObjects() {
    
}

function testCollisions() {
    if (player)
}

function drawBackground() {
    
}

function drawObjects() {
    
}

function drawPlayer() {
    
}

function drawObjectsForeground() {
    
}

function rect(xIn, yIn, width, height, fillColor) {
    var canvas = document.getElementById("game-canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    if (rectMode=="CORNER") {
        ctx.rect(xIn, yIn, width, height);
    } else if (rectMode=="CENTER") {
        ctx.rect(xIn - width/2, yIn - height/2, width, height);
    }
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}

function printBuilding(xPosIn, yPosIn, bWidth, type) {                                                                   // Function that prints buildings based on its position from the bottom of the canvas
    switch (type) {                                                                                                     // Each building has a different type of print
        case 1:                                                                                                         // Case 1 is the first building, very simple with no transparency
            rectMode = "CORNER";
            rect(xPosIn, yPosIn, bWidth, 20, "#BDB6B4"); // Grey top of the building
            rect(xPosIn+5, yPosIn+20, bWidth-10, canvas.height-yPosIn, "#a7331b");  // Main foundation of the building
            for (j=0; j< canvas.height-yPosIn; j+=95){
                for (i=0; i<bWidth; i+=75) {  // Iterative windows
                    if ((100+i)< bWidth) {  // If the window would fit on the buildings
                        rect(xPosIn+20+i, yPosIn+j+40, 60, 80, "#DDDDDD");  // Frame of the window (light)
                        rect(xPosIn+20+i, yPosIn+j+40, 58, 78, "#BDBDBD");  // Frame of the window (dark)

                        for(x=0; x<2; x++){  // Dark rim of the windows, for loops are for iteration
                            for(y=0; y<2; y++){  // Loops also set the position
                                rect(xPosIn+25+i+(x*30), yPosIn+j+45+(y*40), 20, 30, "#0095DD");
                            }
                        }

                        for (x=0; x<2; x++) {  // Light blue inner of the windows
                            for (y=0; y<2; y++) {  // Iteration same as above
                                rect(xPosIn+i+(x*30)+26, yPosIn+j+(y*40)+46, 19, 29, "#87CEFA");
                            }
                        }
                    }
                    console.log(i);
                    console.log(bWidth);
                }
            }
            break;
    }
}



function checkCollisions() {
    if (yPos <= 25) {
        yVel = yVel * -0.8;
        yPos = 26;
    } else if ((yPos+25)>=canvas.height) {
        yVel = yVel * -0.8;
        yPos = canvas.height-26;
    }
    if (xPos <=25) {
        xVel = xVel * -0.8;
        xPos = 26;
    } else if ((xPos+25) >= canvas.width) {
        xVel = xVel * -0.8;
        xPos = canvas.width-26;

    }
    //    if (yPos >= 0) {
    //        yVel = -yVel;
    //        yPos = 1;
    //    }
}

function drawPlayer() {
    rectMode= "CORNER";
    rect(xPos, yPos+Math.abs(xVel), 50-Math.abs(yVel), 50-Math.abs(xVel), "#0095DD");
}

function getXKeyPress() {
    var x = 0;
    if (left) x--;
    if (right) x++;
    return x;
}
function getYKeyPress() {
    var y=0;
    if (up) {y--;}
    if (down) {y++;}
    return y;
}

document.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 87:
        case 38:
            up = true;
            break;
        case 65:
        case 37:
            left = true;
            break;
        case 83:
        case 40:
            down = true;
            break;
        case 68:
        case 39:
            right = true;
            break;
    }
})
document.addEventListener('keyup', function(event){
    switch(event.keyCode){
        case 87:
        case 38:
            up = false;
            break;
        case 65:
        case 37:
            left = false;
            break;
        case 83:
        case 40:
            down = false;
            break;
        case 68:
        case 39:
            right = false;
            break;
    }
})//87 65 83 68  <-- WASD
//38 37 40 39  <-- Arrow keys
//32 <-- Spacebar

