<!DOCTYPE html>

<html lang="en">
    <head>
        <!-- Creating the link to the Bootstrap stylesheet -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <link rel="stylesheet" type = "text/css" href="css/bootstrap.css">
        <!-- Creating the link to the Bootstrap theme -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <link rel="stylesheet" href="css/bootstrap-theme.css">
        <!-- This stylesheet refers to the borders on the page which center the textbox -->
        <link rel="stylesheet" href="css/credentials.css">

        <!-- Creating the link to jQuery -->
        <script src="js/jquery-3_1_1.js"></script>
        <!-- Creating the link to Bootstraps JS -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <script src="js/bootstrap.js"></script>
        <!-- creating the link to my js files -->
        <script src="js/sessionDb.js"></script>
        <script src="js/localDb.js"></script>
        <script src="js/game.js"></script>
        <title>Playing</title>
        <script>
            testLocal();  // Test if the local storage is set up
            testSession();  // Test if the session storage is set up
            setPage("game");
        </script>
    </head>

    <body>
        <?php require('add/header.php');?>

        <div class="game-main">



            <canvas class="game-canvas" id="game-canvas" width="1440" height="720"></canvas>

            <script>
                var canvas = document.getElementById("game-canvas");
                var ctx = canvas.getContext("2d");
                var xPos = 20;
                var yPos = 20;
                var xVel = 0;
                var yVel = 0;
                setInterval(function() {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
//                    movePlayer();
//                    moveObjects();
//                    testCollisions();
//                    drawBackground();
//                    drawObjects();
//                    drawPlayer();
//                    drawObectsForeground();
//                    drawStats();
                    printBuilding(canvas.width/2, canvas.height/3, canvas.width/3, 1);//xPosIn, yPosIn, width, type
                }, 10);
            </script>

        </div>
        <div class="rightBorder">
            <div class="page-header"><h1>Highscores</h1>
            </div>
            <table class="table">
                <tr>
                    <th>User</th>
                    <th>Score</th>
                </tr>
                <script>
                    var highscores = JSON.parse(localStorage.getItem("highscores"));
                    if (highscores.length == 0) {  // If there are no highscores yet
                        document.write("<tr><th>NO HIGH</th><th>SCORES YET</th></tr>");
                    } else {
                        for (i=0; i<highscores.length; i++) {
                            document.write("<tr><th>" + highscores[i]["user"] + "</th><th>" + highscores[i]["score"] + "</th></tr>");
                        }
                    }
                </script>
            </table>
        </div>
    </body>
</html>