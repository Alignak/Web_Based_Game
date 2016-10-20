<!-- Bring in the navbar -->
<nav class="navbar navbar-inverse navbar-static-top">

    <!-- Set the navbar to spread across the entire width of the page -->
    <div class="container-fluid">

        <!-- This unordered list contains the guts of the navbar in the left -->
        <ul class="nav navbar-nav">
            <!-- The first link is to the homepage -->
            <!-- JS if statement to declare what will go in the 'header' of the navbar -->
            <script>
                var seshInfo = JSON.parse(sessionStorage.getItem("current"));
                if (seshInfo.seshUsername == "Admin") {                                                                   // If the user is the admin:
                    document.write("<li><a href=\"admin.php\">Admin</a></li>");                                             //  the header links to the admin page and the text says admin
                } else if (seshInfo.seshUsername != "") {                                                                 // If the user is logged in and not admin:
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
                var seshInfo = JSON.parse(sessionStorage.getItem("current"));
                if (seshInfo.seshUsername.length == 0) {  // If no user is logged in
                    if (seshInfo.currentPage == "signUp") {  // If on sign up page
                    document.write("<li><a href=\"logIn.php\"><span class=\"glyphicon glyphicon-user\"></span> Log In</a></li>");
                    } else if (seshInfo.currentPage == "logIn") {  // Else on log in page
                    document.write("<li><a href=\"signUp.php\"><span class=\"glyphicon glyphicon-list-alt\"></span> Sign Up</a></li>");   
                    } else {
                    document.write("<li><a href=\"home.php\"> You shouldn't be here...</a></li>");
                    }
                } else if (seshInfo.seshUsername == "Admin") {  // Otherwise if the admin is logged in
                    document.write("<li><a href=\"logIn.php\"><span class=\"glyphicon glyphicon-off\"></span> Log Off</a></li>");
                } else {  // Else the person is a logged in user
                    document.write("<li><a href=\"account.php\">Welcome " + seshInfo.seshUsername + "</a></li>");
                    document.write("<li><a href=\"logIn.php\"><span class=\"glyphicon glyphicon-off\"></span> Log Off</a></li>");
                }
            </script>

        </ul>
    </div>
</nav>
<!--            document.write("<h1>Hello World!</h1>");-->