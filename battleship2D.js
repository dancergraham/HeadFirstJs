function Ship(locations){
    this.locations = locations;
    this.hits = ["", "", ""];
}

var view = {
    // this method takes a string message and displays it // in the message display area
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        var square = document.getElementById(location);
        square.setAttribute("class", "hit")
    },
    displayMiss: function(location) {    
        var square = document.getElementById(location);
        square.setAttribute("class", "miss") ;
    },
    handleFireButton: function() {
        var guess = document.getElementById("guessInput").value;
        console.log(guess);
        controller.processGuess(guess);
        guess = "";
    },
    handleKeyPress: function(e){
        var fireButton = document.getElementById("fireButton"); 
        if (e.keyCode === 13) {
            fireButton.click();
            return false;
        }
    },
}

var model = {
    boardSize : 7,
    numShips : 3,
    ships : [new Ship(["10", "20", "30"]),new Ship(["32", "33", "34"]),new Ship(["63", "64", "65"])],
    shipsSunk : 0,
    shipLength : 3,
    fire : function(guess){
        for (i = 0; i < this.ships.length; i++){
            console.log(i)
            var ship = this.ships[i];
            console.log(ship)
            var index = ship.locations.indexOf(guess);
            if (index >= 0){
                ship.hits[index] = "hit";
                view.displayHit(guess); 
                view.displayMessage("HIT!");
                if (this.isSunk(ship)){
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                    };
                return true;
            }
            view.displayMiss(guess); 
            view.displayMessage("You missed.");
        }
        return false;
            
        }
    ,
    isSunk: function(ship) {
        for (vari = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
        }
        return true; 
    },

}

var controller = {
    guesses : 0,
    processGuess : function(guess){
        console.log(guess)
        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter a letter and a number on the board.");
        }
        else{
            this.guesses++;
            var location = (guess[0].toUpperCase().codePointAt(0) - 65) + guess[1];
            var hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) { 
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    },
};

function init(){
    var fireButton = document.getElementById("fireButton");
    fireButton.onclick = view.handleFireButton;
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = view.handleKeyPress;
}

init()
