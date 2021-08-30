// TODO : refuse repeated hits at the same spot
// TODO : add tests

function Ship(){
    this.locations = [0,0,0];
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
    ships : [new Ship(),new Ship(),new Ship()],
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

    generateShipLocations: function() { 
        var locations;
        for (var i = 0; i < this.numShips; i++) {
            do {locations = this.generateShip(); 
            } while (this.collision(locations)); 
            this.ships[i].locations = locations;
        }
    },

    generateShip: function() {
        var direction = Math.floor(Math.random() * 2); 
        var row;
        var col;
        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1)));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - (this.shipLength + 1))); 
            col = Math.floor(Math.random() * this.boardSize);
 
        }
        var newShipLocations = [];
        for (var i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        return newShipLocations;
    },

    collision: function(locations) {
        for (var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            for (var j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) { 
                    return true;
                } 
            }
        }
        return false; 
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
    model.generateShipLocations();
}

init()
