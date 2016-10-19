<!DOCTYPE html>


<html lang="en">
    <head>
        <script src="js/jquery-3.1.1.js"></script>
        <title>Examples</title>
    </head>

    <body>


        <script>
            sessionStorage.setItem("test", 6);
            document.write(sessionStorage.getItem("test"));
            sessionStorage.setItem("test", parseInt(sessionStorage.getItem("test")) + 1);
            document.write(sessionStorage.getItem("test"));
        </script>
        <script>
            function signUp() {
                window.location.assign("signUp.php"); // Redirect them to the homepage
            }
        </script>
    </body>
</html>