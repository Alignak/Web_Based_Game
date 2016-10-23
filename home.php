<!DOCTYPE html>

<html lang="en">
    <head>
        <!-- Creating the link to the Bootstrap stylesheet -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <link rel="stylesheet" type = "text/css" href="css/bootstrap.css">
        <!-- Creating the link to the Bootstrap theme -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <link rel="stylesheet" href="css/bootstrap-theme.css">
        <!-- This link refers to the borders on the page -->
        <link rel="stylesheet" href="css/credentials.css">

        <!-- Creating the link to jQuery -->
        <script src="js/jquery-3_1_1.js"></script>
        <!-- Creating the link to Bootstraps JS -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <script src="js/bootstrap.js"></script>
        <!-- Creating the link to my JS for session based storage ie what user is logged in -->
        <script src="js/sessionDb.js"></script>
        <script src="js/localDb.js"></script>
        <!-- Adds a little title to the tab -->
        <title>Home</title>
        <script>
            testLocal();
            testSession();
            setPage("home");
        </script>
    </head>

    <body>
        <?php require('add/header.php');?>

        <div class="leftBorder" style="padding:0px">
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

        <div class="main">

        </div>

        <div class="rightBorder">

        </div>
    </body>
</html>