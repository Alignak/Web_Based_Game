function testLocal() {
    if (localStorage.length == 0) { // If local storage is empty
        var newUser = {};
        newUser.username = "Admin";
        newUser.password = "admin";
        newUser.email = "nf287@mdx.ac.uk";
        var newLStorage = JSON.stringify(newUser);
        localStorage.setItem("players", newLStorage);
    }
}

function isUsername(usernameIn) {
    var accountsIn = JSON.parse(localStorage.getItem("accounts"));
    var numAcc = accountsIn.players.length;
    for (i=0; i<numAcc; i++) {
        if (usernameIn == accountsIn.players[i]["username"]) {
            return true;
        }
    }
    return false;
}

function isEmail(emailIn) {
    var accountsIn = JSON.parse(localStorage.getItem("accounts"));  // Recieve all the accounts from local storage
    var numAcc = accountsIn.players.length;  // This is the number of accounts stored
    for (i=0; i<numAcc; i++) {
        if (emailIn == accountsIn.players[i]["email"]) {
            return true;
        }
    }
    return false;
}

function addToUsers(emailIn, userIn, passIn) {
    var currentAccounts = JSON.parse(localStorage.getItem("accounts"));
    var newUser = {};
    newUser.email = emailIn;
    newUser.username = userIn;
    newUser.password = passIn;
    currentAccounts.players.push(newUser);
    var newAccounts = JSON.stringify(currentAccounts);
    localStorage.setItem("accounts", currentAccounts);
}


/*{"players":[{"email":"nick.fitton96@gmail.com","username":"NickAlignak","password":"1Qazwsx"}]}

                */