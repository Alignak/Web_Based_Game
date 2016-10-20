<!DOCTYPE html>


<html lang="en">
    <head>
        <script src="js/jquery-3_1_1.js"></script>
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
            
//            var personStr = '{"name": "John", "age":50, "alive":true}';  // Example of JSON array
//            var person = JSON.parse(personStr);
//            
//            var accounts = {
//                players: [
//                    {email:"nick.fitton96@gmail.com", username:"NickAlignak", password:"1Qazwsx"}
//                    ]
//            }
//            var accountsJSON = JSON.stringify(accounts);
//            localStorage.setItem("accounts", accountsJSON);
            
            var accountsIn = JSON.parse(localStorage.getItem("accounts"));
            document.write(accountsIn.players.length);
            document.write(accountsIn.players[0]["email"]);
        </script>
    </body>
</html>