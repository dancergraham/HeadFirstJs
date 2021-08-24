function Car( make, model, year, color, passengers, convertible, mileage){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
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

var taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341 )
var worthALook = prequal(taxi);
if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} 
else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model); 
}