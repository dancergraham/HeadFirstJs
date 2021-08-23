var location1;
var location2;
var location3;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
location1 = Math.floor(Math.random()*5);
location2 = location1 +1;
location3 = location2 +1;

while (!isSunk) {
    guess = prompt("Ready, aim, fire : Enter a number (from 0 to 6)");
    if (guess < 0 || guess > 6){
        alert("Please enter a valid number");
        continue;
    }
    if (guess == location1 | guess == location2 | guess == location3){
        alert("POW : Hit!");
        guesses += 1;
        hits += 1
    }
    else {
        alert("MISS");
        guesses += 1
    }
    if (hits == 3){
        isSunk = true;
        alert("You sank my battleship")
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + 
            "which means your shooting accuracy was " + (3/guesses);
alert(stats);