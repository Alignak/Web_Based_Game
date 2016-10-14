function initialiseSession() {                                              // This function is run when the page is first loaded
    sessionStorage.loggedIn = false;                                        // It declares all the session storage variables 
    sessionStorage.username = "";                                           // It declares all the session storage variables 
    sessionStorage.sHighscore = 0;                                           // It declares all the session storage variables
}

function isLoggedIn() {                 // A function that returns true if the user is logged in
    if (sessionStorage.loggedIn) {      // If the session stored variable 'loggedIn' exists
        return sessionStorage.loggedIn; // Return the state of the variable 
    } else {                            // If the variable doesn't exist, this is a new session and it needs to be declared
        sessionStorage.loggedIn = false;// Declare the variable and set it to false
        sessionStorage.username = "";   // Declare the variable 
        return false;                   // Return that the user isnt logged in
        
    }
}

function returnUsername() {                 // A function that returns the current username, returns an empty string if not logged in
    if (isLoggedIn) {                       // If a user is logged in:
        return sessionStorage.username();   // Return the name of the user logged in
    } else {                                // If no one is logged in:
        return "";                          // Return an empty string
    }
}