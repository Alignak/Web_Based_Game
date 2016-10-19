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
        <script src="js/sessionChecks.js"></script>

        <title>Sign Up</title>
        <script>
            if (sessionStorage.loggedIn != true) {  // If this is a new session
                initialiseSession();                // Initialise all the session variables
            }
            if (sessionStorage.username != "") {    // If the user is already logged in
                window.location.assign("home.php"); // Redirect them to the homepage
            }
            sessionStorage.setItem("currentPage", "signUp");  // Sets the current page for the header
        </script>
        <style>
            * {
                box-sizing: border-box;
            }
            .leftBorder {
                width: 25%;
                float: left;
                padding: 15px;
            }
            .main {
                width: 50%;
                float: left;
                padding: 300px 0px 0px 0px;
            }
            .rightBorder {
                width: 25%;
                float: left;
                padding: 15px;
            }
        </style>
    </head>
    <body>
        <!-- Bring in the header, this is done in all pages -->
        <?php require('add/header.php');?> 

        <!-- Create a left buffer for the sign up credentials -->
        <div class="leftBorder"></div>

        <!-- Main is where most of the work for the headers go -->
        <div class="main" align="center">
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-envelope"></span></span>
                <input id="emailTxtBx" type="text" class="form-control" placeholder="E-mail address">
            </div>
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span>
                <input id="usernameTxtBx" type="text" class="form-control" placeholder="Username">
            </div>
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                <input id="passwordTxtBx" type="password" class="form-control" placeholder="Password">
            </div>
            <div class="input-group">
                <span class="input-group-addon"><span class="glyphicon glyphicon-asterisk"></span></span>
                <input id="password2TxtBx" type="password" class="form-control" placeholder="Password Again">
            </div>
            <br>
            <button type="button" class="btn btn-success" onclick="signUpFunc()">Sign Up</button>
        </div>

        <!-- Create a right buffer for the sign up credentials -->
        <div class="rightBorder"></div>
    </body>

    <script>
        function signUpFunc() {
            // Retrieve all the user inputs
            var emailText = document.getElementById('emailTxtBx').value;
            var usernameText = document.getElementById('usernameTxtBx').value;
            var pass1 = document.getElementById('passwordTxtBx').value;
            var pass2 = document.getElementById('password2TxtBx').value;
            
            // Verification passing for the variables
            var verEmail = false;
            var verUser = false;
            var pass = false;

            // Test each input for validity
            if (emailText.indexOf("@") !== -1 && emailText.indexOf(" ") == -1) { // If email contains '@' and does not contain any spaces
                var tempArr = emailText.split("@"); // Split the email into 2 segments, before and after the '@'
                if (tempArr[0].indexOf(".") !== 1) { // If the second part of the email contains a dot

                }
            }
        }
        
        function contains() { // A function that recieves a string and an array and returns true if anything in the array is in the string
            var stringIn = arguments[0];  // Brings in argument that is string
            var arrIn = arguments[1];  // Brings in argument that is array
            var doesContain = false;  // Sets does contain to false by default
            
            for (i=0; i<arrIn.length; i++) {  // For each item in array
                if (stringIn.indexOf(arrIn[i]) != -1) { // If string has that item in
                    doesContain = true;  // Say it's true
                }
            }
            return doesContain;  // return if contains or not
            
        }
    </script>
</html>