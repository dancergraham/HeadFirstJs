/**
 * 
 * Not currently working properly
 */



function checkNoFlyList(passenger) {
    var NOfLYLIST = ["Dr. Evel"];
    if (NOfLYLIST.indexOf(passenger) >= 0){
        return false;
    }
    return true;
}
function checkNotPaid(passenger) {
    if (passenger.paid){
        return false;
    }
    return true
}

function checkPassengers(passengers, functions){
    var result = [];
    for (var i = 0; i<passengers.length; i++){
        var passenger = passengers[i];
        for (var j = 0; j<functions.length; j++){
            var f = functions[j]
            if (!f(passenger)){
                result.push(false)
                break;
            } 
        }
        result.push(true)
    };
    return result
}

var passengers = [ { name: "Jane Doloop", paid: true }, { name: "Dr. Evel", paid: true },
{ name: "Sue Property", paid: false }, { name: "John Funcall", paid: true } ];
var functions = [checkNoFlyList,
                 checkNotPaid,
                ];
console.log(checkPassengers(passengers, functions));