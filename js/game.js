/*
    Game Ideas:
        Roof running game  <--- 
        Signal matching game
        Driving game
        Towers game

*/




var up, down, left, right, jump = false;
var rectMode = "CENTER";

function stepMotion() {                                                                                                 // Step motion for every being in the system
    user.movePlayer();                                                                                                  // Step the movements of the user
    user.collideCanvas();
    for (i=0; i<16; i++) {                                                                                              // For each hill in the background
        hills[i].moveHill();                                                                                            // Move the hill
    }
    for (c=0; c<16; c++) {
        clouds[c].moveCloud();
    }
    for (b=0; b<buildings.length; b++) {
        buildings[b].moveBuilding();
        buildings[b].collidePlayer();
    }

}

function drawPlayer() {                                                                                                 // Function that draws the player
    user.drawPlayer();
}

function drawBackground() {                                                                                             // Function that draws the sky
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);                                                                        // Uses the rect to draw a square across the entire canvas
    ctx.fillStyle = "#87AFC7";                                                                                          // Sets the fill color to a sky blue                                                
    ctx.fill();                                                                                                         // Fills the rectangle
    ctx.closePath();                                                                                                    // Closes the path which finally draws the rectangle
}

function drawHillside() {                                                                                               // Function that draws all the hills on the screen
    for (c=0; c<9; c++) {
        clouds[c].drawCloud();
    }
    for (h=0; h<8; h++) {                                                                                              //  For each hill
        hills[h].drawHill();                                                                                            //   Run the class function that draws the hill
    }
    for (c=9; c<16; c++) {
        clouds[c].drawCloud();
    }
    for (h=8; h<16; h++) {
        hills[h].drawHill();
    }
    ctx.globalAlpha = 1;
    rect(0, canvas.height/2+100, canvas.width, canvas.height/2, "#348017");                                             //  Draw a green rectangle under the hills
}

function drawObjects() {
    for (i=0; i<buildings.length; i++){
        buildings[i].printBackground();
    }
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

document.addEventListener('keydown', function(event){                                                                   // JS event listener for when a key is pressed down
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

