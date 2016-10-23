function testSession() {                                              // This function is run when the page is first loaded
    if (sessionStorage.length == 0) {  // If session storage is empty
        console.log("Creating new session storage");
        var newSesh = {loggedIn: false, seshUsername: "", seshHighscore: 0, currentPage: "signUp"};
        var stringySesh = JSON.stringify(newSesh);
        sessionStorage.setItem("current", stringySesh);
    }
}

function setPage(pageIn) {
    var seshData = JSON.parse(sessionStorage.getItem("current"));
    seshData.currentPage = pageIn;
    sessionStorage.setItem("current", JSON.stringify(seshData));
}

function signIn(idIn) {
    var username = getUsername(idIn);                               // Gets the username if the person using the identification entered
    var curSesh = JSON.parse(sessionStorage.getItem("current"));    // Recieve the data on the current session
    curSesh.loggedIn = true;                                        // Set the session as logged in
    curSesh.seshUsername = username;                                // Store the username of the current user
    var newSesh = JSON.stringify(curSesh);                          // Stringify the object
    sessionStorage.setItem("current", newSesh);                     // Push the string into the storage
}

function logOff() {
    var curSesh = JSON.parse(sessionStorage.getItem("current"));
    curSesh.loggedIn = false;
    curSesh.seshUsername = "";
    var newSesh = JSON.stringify(curSesh);
    sessionStorage.setItem("current", newSesh);
}