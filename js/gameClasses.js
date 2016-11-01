function HillsideBeings(xPosIn, sizeIn, typeIn) {                                                                               // This is a class for all the green hills in the background
    this.xPos = xPosIn;                                                                                                 //  This is the position of the hill
    this.size = sizeIn;                                                                                                 //  This is the size of the hill
    this.type = typeIn;
}
HillsideBeings.prototype.moveHill = function() {                                                                        // This function moves the hill a step
    if (this.type == 0) {
        this.xPos = this.xPos-(scrollSpeed* 0.7);                                                                                                 //  Step the hill a block to the left
    } else {
        this.xPos = this.xPos - (scrollSpeed * 0.9);
    }
    if (this.xPos+this.size < 0) {                                                                                      //  If the hill is off the screen to the left
        this.xPos = canvas.width + this.size; 
        this.size=Math.floor(Math.random()*100)+200;  //   Reset the hill to the right
    }
}
HillsideBeings.prototype.drawHill = function() {
    ctx.globalAlpha = 1;
    ctx.beginPath();
    if (this.type == 0) {
        ctx.arc(this.xPos, canvas.height/2, this.size, 0, 2*Math.PI);
        ctx.fillStyle = "#4AA02C";
    } else {
        ctx.arc(this.xPos, canvas.height/2+100, this.size-59, 0, 2*Math.PI);
        ctx.fillStyle = "#348017"
    }
    ctx.fill();
    ctx.closePath();
}



function Cloud(xPosIn, yPosIn, sizeIn, typeIn) {
    this.xPos = xPosIn;
    this.yPos = yPosIn;
    this.size = sizeIn;
    this.dPosX = [];
    this.dPosX.length = this.size;
    this.dPosY = [];
    this.dPosY.length = this.size;
    this.dSize = [];
    this.dSize.length = this.size;
    for (i=0; i<sizeIn; i++) {
        this.dPosX[i] = Math.floor(Math.random()*80)-40;
        this.dPosY[i] = Math.floor(Math.random()*45)-15;
        this.dSize[i] = Math.floor(Math.random()*30)+15;
    }
    this.type = typeIn;
}
Cloud.prototype.moveCloud = function() {
    if (this.type == 0) {
        this.xPos = this.xPos - (scrollSpeed * 0.6);
    } else if (this.type == 1) {
        this.xPos = this.xPos - (scrollSpeed * 0.8);
    } else {
        this.xPos = this.xPos - 1-scrollSpeed;
    }
    if (this.xPos+50<0) {
        this.xPos = canvas.width + 10;
        for (i=0; i<this.size; i++) {
            this.dPosX[i] = Math.floor(Math.random()*80)-40;
            this.dPosY[i] = Math.floor(Math.random()*30)-15;
            this.dSize[i] = Math.floor(Math.random()*15)+15;
        }
    }
}
Cloud.prototype.drawCloud = function() {
    ctx.globalAlpha = 0.9;
    for (i=0; i<this.size; i++) {
        ctx.beginPath();
        ctx.arc(this.xPos+this.dPosX[i], this.yPos+this.dPosY[i], this.dSize[i], 0, 2*Math.PI);
        ctx.fillStyle = 'rgba(255,255,255, 125)';
        ctx.fill();
        ctx.closePath();
    }
}



// PseudoClass for type 'player'
function Player(hashColor) {                                                                                      // Imports the users chosen custom color
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
    this.yVel = this.yVel + yVelKeys;
    this.xPos = this.xPos + this.xVel;
    this.yPos = this.yPos + this.yVel;
    this.xVel = this.xVel * 0.9;
    this.yVel = (this.yVel * 0.95)+0.3;
    this.xPos = this.xPos - scrollSpeed;
// TODO: All the commenting
}
Player.prototype.drawPlayer = function() {
    ctx.globalAlpha = 1;
    rectMode = "CORNER";
    rect(this.xPos, this.yPos-50+Math.abs(this.xVel), 50-Math.abs((this.yVel-1)*2), 50-Math.abs(this.xVel), this.playerColor);
}
Player.prototype.getPosition = function() {
    return [this.xPos, this.yPos, 50-Math.abs(this.yVel), 50-Math.abs(this.xVel)];
}
Player.prototype.setPlayerPositionX = function(xPosIn) {
    this.xPos = xPosIn;C
}
Player.prototype.setPlayerPositionY = function(yPosIn) {
    this.yPos = yPosIn;
}
Player.prototype.setPlayerPosition = function(xPosIn, yPosIn) {
    this.xPos = xPosIn;
    this.yPos = yPosIn;
}
Player.prototype.setPlayerVelocity = function(xVelIn, yVelIn) {
    this.xVel = xVelIn;
    this.yVel = yVelIn;
}
Player.prototype.jump = function() {
    this.yVel = -20;
}
Player.prototype.collideCanvas = function() {
    if (this.yPos < 0) {
        this.yVel = this.yVel * -0.8;
        this.yPos = 0;
    } else if ((this.yPos+50)>canvas.height) {
        this.yVel = this.yVel * -0.8;
        this.yPos = canvas.height;
    }
    if (this.xPos <0) {
        this.xVel = this.xVel * -0.8;
        this.xPos = 2;
    } else if ((this.xPos+45) > canvas.width) {
        this.xVel = 0;
        this.xPos = canvas.width-50;

    }
    //    if (yPos >= 0) {
    //        yVel = -yVel;
    //        yPos = 1;
    //    }
}


function Building(xPosIn, yPosIn, widthIn, typeIn) {
    this.xPos = xPosIn;
    this.yPos = yPosIn;
    this.width = widthIn;
    //    this.type = typeIn;
    this.type = 1;
}
Building.prototype.getPosition = function() {
    return this.xPos;
}
Building.prototype.printBackground = function() {  // furthestX + bStatBWidth, bStatHeight, bStatWidth, bStatType
    switch (this.type) {
        case 1:       
            rect(this.xPos, this.yPos, this.width, 25, "#BFBFBF");
            rect(this.xPos+2, this.yPos, this.width-2, 23, "#CFCFCF");
            rect(this.xPos+5, this.yPos+25, this.width-10, canvas.height-this.yPos, "#6F4207");
            rect(this.xPos+6, this.yPos+25, this.width-9, canvas.height-this.yPos, "#8A4117");
            for (y=0; y<canvas.height-this.yPos; y+=150) {                                                              // For each window row (y axis)
                for (w=0; w<this.width; w+=100) {                                                                        // For each window (on the x axis)
                    if (this.xPos+90+w <= this.width+this.xPos) {                                                       // if the window would fit on the building
                        rect(this.xPos+20+w, this.yPos+45+y, 60, 90, "#CFCFCF");                                        //  Print the window frame
                        rect(this.xPos+20+w, this.yPos+45+y, 58, 88, "#DFDFDF");                                        //  Print the frame highlight
                        for (pY=0; pY<2; pY++) {
                            for (pX=0; pX<2; pX++) {
                                rect(this.xPos+25+w+(pX*27), this.yPos+50+y+(pY*42), 22, 38, "#3B9C9C");//3B9C9C
                                rect(this.xPos+25+w+(pX*27), this.yPos+50+y+(pY*42), 20, 36, "#43BFC7");
                            }
                        }
                    }
                }
            }
            break;
    }
}
Building.prototype.moveBuilding = function() {
    this.xPos = this.xPos - scrollSpeed;
    if (this.xPos+this.width < 0) {// If needs restarting
        var bStatBWidth = Math.floor(Math.random()* currentMillis/100)-10;
        var bStatHeight = pHeight + Math.floor(Math.random()* 100)-25;
        var bStatWidth = Math.floor(Math.random() * 500) + 200;
        this.xPos = furthestX + bStatBWidth;
        this.height = bStatHeight;
        this.width = bStatWidth;
        furthestX=this.xPos+this.width;
        pHeight = bStatHeight;
    }
}
Building.prototype.collidePlayer = function() {
    var pPosX = user.xPos;
    var pPosY = user.yPos;
    if (pPosX>=this.xPos && pPosX<=this.xPos+this.width   &&   pPosY>this.yPos && pPosY<(this.yPos+25)) {
        user.yPos = this.yPos;
        jump = false;
    } else if (pPosX+50>=this.xPos && pPosX+50<=this.xPos+this.width   &&   pPosY>this.yPos && pPosY<(this.yPos+25)) {
        user.yPos = this.yPos;
        jump = false;
    }
}

/*                                                                           // For each initial building
var bStatHeight = pHeight + Math.floor(Math.random()*100)-25;                                       // It needs a height relevant to the previous buildings height, default is half up the screen
var bStatBWidth = Math.floor(Math.random()*50)*-1;                                                  // This is the width between the previous building and this one
var bStatWidth = Math.floor(Math.random() * 500) + 200;                                            // This is the width of the new building
var bStatType = Math.floor(Math.random() * 5);                                                      // This is the type of building there is, currently I'm hardcoding it to 0
buildings[i] = new Building(furthestX+bStatBWidth, bStatHeight, bStatWidth, bStatType);           // Now we actually create the new object
pHeight = bStatHeight;                                                                              // Now we have a new height, set the pHeight for the next building
furthestX = furthestX + bStatWidth + bStatBWidth;                                                   // Need to set a new furthestX for the next building*/