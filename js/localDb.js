function testLocal() {
    if (localStorage.length == 0) {                                                 // If local storage is empty
        localStorage.setItem("players", "[]");                                      //  Set the local storage item 'players' to an empty string 
        addToUsers("nf287@mdx.ac.uk", "Admin", "admin");                            //  Add the admin account to users
    }
}

function isUsername(usernameIn) {
    var accountsIn = JSON.parse(localStorage.getItem("players"));                   // Recieve all the accounts from local storage 
    var numAcc = accountsIn.length;                                                 // This is the number of accounts stored
    for (i=0; i<numAcc; i++) {                                                      // For each account
        if (usernameIn.toLowerCase() == accountsIn[i]["username"].toLowerCase()) {  //  If the username (in lower case) is the same as another username (in lower case) already in the db 
            return true;                                                            //   Return is true
        }
    }
    return false;                                                                   // Return false if username was not found
}

function isEmail(emailIn) {
    var accountsIn = JSON.parse(localStorage.getItem("players"));                   // Recieve all the accounts from local storage
    var numAcc = accountsIn.length;                                                 // This is the number of accounts stored
    for (i=0; i<numAcc; i++) {                                                      // For each account
        if (emailIn.toLowerCase() == accountsIn[i]["email"].toLowerCase()) {        //  If the email the user is trying is the same as an already used email
            return true;                                                            //   Return is true
        }
    }                                                                               // Return false if the email was not found
    return false;
}

function addToUsers(emailIn, userIn, passIn) {                                      // Add the user to the localStorage
    var currentAccounts = JSON.parse(localStorage.getItem("players"));              // Retrieve the current JSON array of users
    var newUser = {};                                                               // Create our new user
    newUser.email = emailIn;                                                        // Give them properties
    newUser.username = userIn;
    newUser.password = passIn;
    currentAccounts.push(newUser);                                                  // Push the new user into the array of current users
    var newAccounts = JSON.stringify(currentAccounts);                              // Stringify the array
    localStorage.setItem("players", newAccounts);                                   // Set the array of users to the new array
} 