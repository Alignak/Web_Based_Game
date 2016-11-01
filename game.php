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
        <script src="js/gameClasses.js"></script>
        <!-- Set the title of the page -->
        <title>Playing</title>
        <script>
            testLocal();  // Test if the local storage is set up
            testSession();  // Test if the session storage is set up
            setPage("game");  // Set the page the user is currently on
        </script>
    </head>

    <body>
        <?php require('add/header.php');?>

        <div class="game-main">

            <!-- Create the game canvas -->
            <canvas class="game-canvas" id="game-canvas" width="1440" height="720"></canvas>  

            <script>
                // create a link between the canvas and the javascript
                var canvas = document.getElementById("game-canvas");
                var ctx = canvas.getContext("2d");
                var user = new Player("#0095DD");                                                                       // Create the users character
                var initMillis = (new Date).getTime();                                                                  // initMillis is the EPOCH time when the game first loaded, will be used for scroll speed
                var currentMillis;                                                                                      // Current millis is the current time as epoch
                var scrollSpeed;                                                                                        // Scroll speed is how past the screen should scroll
                
                var buildings = [];                                                                                     // The buildings array will store the building objects
                var furthestX = -5;                                                                                     // furthestX will store the furthest right point on any building
                var pHeight = canvas.height/2;                                                                          // pheight is the hight of the last building
                buildings.length = 7;                                                                                   // 7 buildings will scroll across
                for (i=0; i<buildings.length; i++) {                                                                    // For each initial building
                    var bStatHeight = pHeight + Math.floor(Math.random()*100)-25;                                       // It needs a height relevant to the previous buildings height, default is half up the screen
                    var bStatBWidth = Math.floor(Math.random()*50)*-1;                                                  // This is the width between the previous building and this one
                    var bStatWidth = Math.floor(Math.random() * 500) + 200;                                             // This is the width of the new building
                    var bStatType = Math.floor(Math.random() * 5);                                                      // This is the type of building there is, currently I'm hardcoding it to 0

                    buildings[i] = new Building(furthestX+bStatBWidth, bStatHeight, bStatWidth, bStatType);             // Now we actually create the new object

                    pHeight = bStatHeight;                                                                              // Now we have a new height, set the pHeight for the next building
                    furthestX = furthestX + bStatWidth + bStatBWidth;                                                   // Need to set a new furthestX for the next building
                }
                
                var hills = [];                                                                                         // hills array will hold the hill objects for the background
                hills.length = 16;                                                                                      // There will be 16 hills, 8 in the back & 8 further back
                for (i=0; i<8; i++) {                                                                                   // Construct the hills, each set of 8 having different settings
                    hills[i]   = new HillsideBeings(canvas.width/5*i, Math.floor(Math.random()*100)+200, 0);
                    hills[i+8] = new HillsideBeings(canvas.width/5*i+100, Math.floor(Math.random()*100)+200, 1);
                }
                
                var clouds = [];                                                                                        // Clouds array will hold the cloud objects for the background
                clouds.length = 16;                                                                                     // There will be 16 clouds created
                for (a=0; a<9; a++) {
                    clouds[a] = new Cloud(Math.floor(Math.random()*canvas.width), canvas.height/4-50, Math.floor(Math.random()*5)+4, 0);  // First 9 clouds are in the background
                }
                for (a=9; a<16; a++) {
                    clouds[a] = new Cloud(Math.floor(Math.random()*canvas.width), canvas.height*2/4-150, Math.floor(Math.random()*5)+4, 1);  // The other clouds are further ahead
                }


                /////////////////////
                //                 //
                //  MAIN GAME LOOP //
                //                 //
                /////////////////////
                
                setInterval(function() {
                    currentMillis =(new Date).getTime()- initMillis;                                                    // currentMillis becomes the amount of milliseconds since game started
                    scrollSpeed = currentMillis/10000;                                                                  // The scroll speed is set to 10'000th of time so far
                    if (scrollSpeed>6) scrollSpeed = 6;                                                                 // Limits the scrollSpeed to 6
                    furthestX = furthestX- scrollSpeed;                           
                    stepMotion();
                    drawBackground();
                    drawHillside();
                    drawObjects();
                    drawPlayer();

                    ctx.beginPath();
                    ctx.rect(furthestX, 0, 5, canvas.height);
                    ctx.fillStyle = 'red';
                    ctx.fill();
                    ctx.closePath();

                    ctx.font = "30px Arial";
                    ctx.fillText(scrollSpeed,10,50);
                    //                    testCollisions();
                    //                    drawObectsForeground();
                    //                    drawStats();
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