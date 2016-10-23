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
        <title>Log In</title>
        <script>
            testLocal();  // Test if the local storage is set up
            testSession();  // Test if the session storage is set up
            setPage("logIn");
            logOff();
        </script>
    </head>

    <body style="background-image:img/bgimage.png">
        <!-- Bring in the header, this is done in all pages -->
        <?php require('add/header.php');?>

        <!-- Create a left buffer for the sign up credentials -->
        <div class="leftBorder"></div>

        <!-- Main is where most of the work for the headers go -->
        <div class="main" align="center">
            <div class="input-group"> <!-- An input box for the email address with a glyphicon of an envelope -->
                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                <input id="identTxtBx" type="text" class="form-control" placeholder="Username or email address">
            </div>
            <div class="input-group"> <!-- An input box for the username with a glyphicon of a silhouette -->
                <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                <input id="passwordTxtBx" type="password" class="form-control" placeholder="Password">
            </div>
            <br>
            <button type="button" class="btn btn-success" onclick="logInFunc()">Log In</button>  <!-- A button to activate thesign up function -->
        </div>

        <!-- Create a right buffer for the sign up credentials -->
        <div class="rightBorder"></div>
    </body>
    
    <script>
        function logInFunc() {
            var identification = document.getElementById("identTxtBx").value;
            var password = document.getElementById("passwordTxtBx").value;
            
            if (isUsername(identification) || isEmail(identification)) {  // If what the user entered as identification exists
                if (testPassword(identification, password)) {  // If the users password matches what is in the database
                    signIn(identification);
                window.location.assign("home.php"); // Redirect them to the homepage
                } else {
                    alert("username/password do not match.");
                }
            } else {
                alert("username/e-mail is not currently in use.");
            }
        }
    </script>
</html>