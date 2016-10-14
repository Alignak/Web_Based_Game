<!DOCTYPE html>


<html lang="en">
    <head>
        <!-- Creating the link to the Bootstrap stylesheet -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <link rel="stylesheet" type = "text/css" href="css/bootstrap.css">
        <!-- Creating the link to the Bootstrap theme -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <link rel="stylesheet" href="css/bootstrap-theme.css">
        <!-- Creating the link to Bootstraps JS -->
        <!-- THE CODE IN THIS STYLESHEET IS NOT MY CODE -->
        <script src="js/bootstrap.js"></script>
        <script src="js/sessionChecks.js"></script>
        <title>Log In</title>
        <script>
            if (sessionStorage.loggedIn != true) { // If this is a new session
                initialiseSession();
            }
            if (sessionStorage.username != "") { // If the user is already logged in
                window.location.assign("home.php");
                console.log("Redirection");
            } else {
                console.log(sessionStorage.username);
            }
        </script>
    </head>

    <body>
        <?php require('assets/header.php');?>

    </body>
</html>