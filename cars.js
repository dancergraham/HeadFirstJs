function Car( make, model, year, color, passengers, convertible, mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    this.fuel = 0;
    this.start = function(){this.started = true};
    this.drive = function(){if (this.started) {
                                if (this.fuel > 0) { alert(this.make + " " +
                                this.model + " goes zoom zoom!"); this.fuel = this.fuel - 1;
                                } else {
                                alert("Uh oh, out of fuel.");
                                this.stop(); }
                            }
                            else {
                                alert("You need to start the engine first."); }
                            };
    this.stop = function(){this.started = false};
    this.addFuel = function(amount) {
        this.fuel = this.fuel + amount};
}

function prequal(car) {
    if (car.mileage > 10000) {
      return false;
    } 
    else if (car.year > 1960) {
        return false;
    }
    return true;
}

var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341 );
var cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892 );
var fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000 );
var chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021 );

var cars = [taxi, cadi, fiat, chevy];
for (var i =0; i < 4; i++){
    car = cars[i];
    var worthALook = prequal(car);
    if (worthALook) {
        console.log("You gotta check out this " + car.make + " " + car.model);
    } 
    else {
        console.log("You should really pass on the " + car.make + " " + car.model); 
    }
    car.drive();
    car.start();
    car.drive();
    car.addFuel(2);
    car.start();
    car.drive();
    car.drive();
    car.drive();
    car.stop();
}