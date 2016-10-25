/*
    Game Ideas:
        Roof running game
        Signal matching game
        Driving game
        Towers game

*/

function rect(xIn, yIn, width, height, fillColor) {
    var canvas = document.getElementById("game-canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(xIn, yIn, width, height);
    ctx.fillStyle = fillColor;
    ctx.fill();
    ctx.closePath();
}