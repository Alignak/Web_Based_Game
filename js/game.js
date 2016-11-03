/*
    Game Ideas:
        Roof running game  <--- 
        Signal matching game
        Driving game
        Towers game

*/



function initialiseObjects() {

}

function drawMainMenu() {
    // Draw background objects
    drawBackground();
    // Draw menu
    drawMenu();
    rectMode="CENTER";
    //    rect(mousePos[0], mousePos[1], 100, 100, "#000000")
    // TODO: Use clicks for menu stuff
}
function stepMainMenu() {
    for (c=0; c<clouds.length; c++) clouds[c].moveCloud();
}

function drawPlaying() {
    // TODO: Set time info
    // TODO: Step all motion
    // Draw background objects
    drawBackground();
    // TODO: draw building backgrounds
    // TODO: draw player
    // TODO: draw building foreground
    // TODO: draw stats
}
function drawGameOver() {
    // TODO: Draw background
    // TODO: Draw stats
    // TODO: Use clicks for menu stuff
}

function drawBackground() {
    rectMode = "CORNER";
    rect(0,0,canvas.width, canvas.height, "#87AFC7");
    for (c=0; c<9; c++) clouds[c].drawCloud();
    for (h=0; h<8; h++) hills[h].drawHill();
    for (c=9; c<clouds.length; c++) clouds[c].drawCloud();
    for (h=8; h<hills.length; h++) hills[h].drawHill();
    rect(0,canvas.height/2+100, canvas.width, canvas.height/2-100, "#348017");
}
function drawMenu() {
    if (mouseIn((canvas.width/2)-(canvas.width/10*3), (canvas.height/2)- (canvas.height/10), canvas.width/5*3, canvas.height/5)) {
        ctx.globalAlpha = 1;
    } else {
        ctx.globalAlpha = 0.5;
    }
    rectMode = "CENTER";
    rect(canvas.width/2, canvas.height/2, canvas.width/5*3, canvas.height/5, "#0095DD");
    ctx.globalAlpha = 1;
    text("Play", canvas.width/2-68, canvas.height/2+20, 76, "#FFFFFF");
}

function clicked() {
    switch(state) {
        case 0:
        case 2:
            if (mouseIn((canvas.width/2)-(canvas.width/10*3), (canvas.height/2)- (canvas.height/10), canvas.width/5*3, canvas.height/5)) {
                state = 1;
            }
            break;

    }
}

function text(textIn, xPos, yPos, sizeIn, colorIn) {
    ctx.fillStyle=colorIn;
    var sizeStr = sizeIn + "px Arial";
    ctx.font=sizeStr;
    ctx.fillText(textIn, xPos, yPos);
}

function rect(xIn, yIn, width, height, fillColor) {                                                                     // Function that tries tho replicate the already existant ctx.rect function
    var canvas = document.getElementById("game-canvas");                                                                //  Gets the canvas and the context
    var ctx = canvas.getContext("2d");
    ctx.beginPath();                                                                                                    //  Begin the drawing
    if (rectMode=="CORNER") {                                                                                           //  If I was to draw from the top righ corner of the rectangle
        ctx.rect(xIn, yIn, width, height);                                                                              //   Do an normal rect
    } else if (rectMode=="CENTER") {                                                                                    //  Else if I want it centered
        ctx.rect(xIn - width/2, yIn - height/2, width, height);                                                         //   Print position depending on size
    }
    ctx.fillStyle = fillColor;                                                                                          //  Set the fill color
    ctx.fill();                                                                                                         //  Apply the fill color
    ctx.closePath();                                                                                                    //  Generate the rectangle
}

function getXKeyPress() {                                                                                               // Function to get the the keys that manipulate the players x-axis
    var x = 0;                                                                                                          //  Set default
    if (left) x--;                                                                                                      //  If "A" OR left key are pressed, step down x
    if (right) x++;                                                                                                     //  ALSO If "D" or right key are pressed, step up x
    return x;                                                                                                           //  Return X
}
function getYKeyPress() {                                                                                               // Function that does the same as getXKeyPress for the y-axis
    var y=0;
    if (up) {y--;}
    if (down) {y++;}
    return y;
}

function mouseIn(xIn, yIn, widthIn, heightIn) {
    if (mousePos[0] >xIn && mousePos[0]<xIn+widthIn) {
        if (mousePos[1]>yIn && mousePos[1]<yIn+heightIn){
            return true;
        }
    }
    return false;
}



document.addEventListener('keydown', function(event){                                                                   // JS event listener for when a key is pressed down
    console.log(event.keyCode);
    switch(event.keyCode){                
        case 65:                                                                                                        //  For "A" and LEFT key, go left
        case 37:
            left = true;
            break;
        case 68:                                                                                                        //  D, Right key, go right
        case 39:
            right = true;
            break;
        case 32:
            if (jump == false) {
                user.jump();
                jump = true;
            }
            break;
        case 13:
            if (state!=1){
                state=1;
            }
            break;  

    }
})
document.addEventListener('keyup', function(event){                                                                     // Function same as keydown event listener but for when the key is released 
    switch(event.keyCode){
        case 65:
        case 37:
            left = false;
            break;
        case 68:
        case 39:
            right = false;
            break;
    }
})//87 65 83 68  <-- WASD
//38 37 40 39  <-- Arrow keys
//32 <-- Spacebar

