// PseudoClass for type 'player'
var Player = function(hashColor) {                                                                                      // Imports the users chosen custom color
    this.playerColor = hashColor;                                                                                       //  Sets the players color to the custom color
    this.xPos = 100;                                                                                                    //  Set the default position and velocity of the player
    this.yPos = 100;
    this.xVel = 0;
    this.yVel = 0;
    this.lives = 3;                                                                                                     //  Sets the players lives to 3
}
Player.prototype.movePlayer = function() {                                                                              // Function that moves the user a frame
    var xVelKeys = getXKeyPress();                                                                                      // Get user keyPresses to decide on th ebew velocity of the user
    var yVelKeys = getYKeyPress();
    this.xVel = this.xVel + xVelKeys;
    // TODO: movement dependant on keypresses
    // TODO: All the commenting
    // TODO: All the commenting
}
Player.prototype.drawPlayer = function() {
    rect(this.xPos, yPos+Math.abs(this.xVel), 50-Math.abs(this.yVel), 50-Math.abs(this.xVel), this.playerColor);
}
Player.prototype.getPosition = function() {
    return [this.xPos, this.yPos, 50-Math.abs(this.yVel), 50-Math.abs(this.xVel)];
}
Player.prototpye.setPlayerPositionX = function(xPosIn) {
    this.xPos = xPosIn;
}
setPlayerPositionY(yPosIn) {
    this.yPos = yPosIn;
}
setPlayerPosition(xPosIn, yPosIn) {
    this.xPos = xPosIn;
    this.yPos = yPosIn;
}
setPlayerVelocity(xVelIn, yVelIn) {
    this.xVel = xVelIn;
    this.yVel = yVelIn;
}
}

class Building {
    constructor(xPosIn, yPosIn, widthIn, typeIn) {
        this.xPos = xPosIn;
        this.yPos = yPosIn;
        this.width = widthIn;
        this.type = typeIn;
    }
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