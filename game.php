<!DOCTYPE html>
<?php
$username = 'Jogn Doe';
?>

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
            setPage("game");
        </script>
    </head>

    <body>
        <?php require('add/header.php');?>

        <div class="game-main">



            <canvas class="game-canvas" id="gameCanvas" width="1440" height="720"></canvas>
            
            
            
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