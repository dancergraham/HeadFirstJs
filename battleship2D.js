var view = {
    // this method takes a string message and displays it // in the message display area
    displayMessage: function(msg) {
        messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    }
}