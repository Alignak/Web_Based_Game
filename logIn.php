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
        <script src="js/jquery-3_1_1.js"></script>
        <script src="js/bootstrap.js"></script>
        <script src="js/sessionDb.js"></script>
        <script src="js/localDb.js"></script>
        <title>Log In</title>
        <script>
            testLocal();  // Test if the local storage is set up
            testSession();  // Test if the session storage is set up
            setPage("logIn");
        </script>
    </head>

    <body style="background-image:img/bgimage.png">
        <!-- Bring in the header, this is done in all pages -->
        <?php require('add/header.php');?>

        <script>
            yPadding = window.innerHeight / 2;
            //            document.write("<div style=\"padding:50px\" align=\"center\">)
        </script>

        <!-- Credentials textboxe container -->
        <div style="padding:300px 600px 0px 600px" align="center">
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                <input id="usernameTxtBx" type="text" class="form-control" placeholder="Username / E-Mail" name="usernameTxtBx">
            </div>
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                <input id ="passwordTxtBx" type="password" class="form-control" placeholder="Password" name="passwordTxtBx">
            </div>

            <br>
            <div class="btn-group btn-group-lg" role="group">
                <!--                <button id="signUpBtn" type="button" class="btn btn-danger" onclick="signUp()">Sign Up</button>-->
                <button id="logInBtn"  type="button" class="btn btn-success" onclick="logIn()">Log In</button>
            </div>
        </div>


        <script>
            function signUp() {
                window.location.assign("signUp.php"); // Redirect them to the homepage
            }
        </script>
    </body>
</html>