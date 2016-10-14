<!-- Bring in the navbar -->
<nav class="navbar navbar-inverse navbar-static-top">

    <!-- Set the navbar to spread across the entire width of the page -->
    <div class="container-fluid">

        <!-- This unordered list contains the guts of the navbar in the left -->
        <ul class="nav navbar-nav">
            <!-- The first link is to the homepage -->
            <!-- JS if statement to declare what will go in the 'header' of the navbar -->
            <script>
                if (sessionStorage.username == "Admin") {                                                                   // If the user is the admin:
                    document.write("<li><a href=\"admin.php\">Admin</a></li>");                                             //  the header links to the admin page and the text says admin
                } else if (sessionStorage.username == "") {                                                                 // If the user isn't logged in:
                    document.write("<li><a></a></li>");                                                                //  leave blank with no link
                } else {                                                                                                    // If the user is logged in and not admin:
                    document.write("<li><a href=\"home.php\"<span class=\"glyphicon glyphicon-home\"></span></a></li>");    //  display a home button
                    document.write("<li><a href=\"game.php\">Play</a></li>");                                               //  a link to the game
                    document.write("<li><a href=\"highscores.php\">Highscores</a></li>");                                   //  and a link to the highscores
                }
            </script>
        </ul>


        <!-- This unordered list contains the guts of the navbar in the right -->
        <ul class="nav navbar-nav navbar-right">
            <!-- If someone who wants to play the game is logged in, display a welcome message -->
            <script>
                if (sessionStorage.username != "Admin" && sessionStorage.username != "") {
                    document.write("<li><a href=\"account.php\">Welcome " + sessionStorage.username);
                    document.write("<li><a href=\"index.php\"><span class=\"glyphicon glyphicon-log-out\"></span> Log Out</a></li>");
                }
            </script>


            <?php if ($username == "LoggedOut") {?>
            <li><a href="index.php"><span class="glyphicon glyphicon-log-in"></span> Log In</a></li>
            <?php } ?>
        </ul>
    </div>
</nav>
<!--            document.write("<h1>Hello World!</h1>");-->