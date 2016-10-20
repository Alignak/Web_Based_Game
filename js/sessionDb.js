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