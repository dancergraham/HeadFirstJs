class Dog{
    constructor(name, breed, weight){
        this.name= name;
        this.breed= breed;
        this.weight= weight;
    }
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function() { 
    if (this.weight > 25) {
        console.log(this.name + " says Woof!"); 
    } else {
        console.log(this.name + " says Yip!"); 
    }
};
Dog.prototype.run = function() {
    console.log("Run!"); 
};

Dog.prototype.wag = function() {
    console.log("Wag!"); 
};

class Showdog extends Dog {
    constructor(name, breed, weight, handler){
        super(name, breed, weight);
        this.handler = handler;
    }
}

Showdog.prototype.league = "Webville";
Showdog.prototype.stack = function() {
    console.log("Stack"); 
};
Showdog.prototype.bait = function() {
    console.log("Bait"); 
};
Showdog.prototype.gait = function(kind) {
    console.log(kind + "ing"); 
};
Showdog.prototype.groom = function() {
    console.log("Groom"); 
};

function init(){
    var fido = new Dog("Fido", "Mixed", 38);
    var fluffy = new Dog("Fluffy", "Poodle", 30); 
    var spot = new Dog("Spot", "Chihuahua", 10);
    fido.bark(); fido.run(); fido.wag();
    fluffy.bark(); fluffy.run(); fluffy.wag();
    spot.bark(); spot.run(); spot.wag();;
    var scotty = new Showdog("Scotty", "Scottish Terrier", 15, "Cookie");
    scotty.stack(); scotty.bark(); console.log(scotty.league); console.log(scotty.species);
    console.log("Fido constructor is " + fido.constructor); 
    console.log("Scotty constructor is " + scotty.constructor);
}

window.onload = init();