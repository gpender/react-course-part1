'use strict';

// arguments object - no longer bound with arrow functions
// this keyword - no longer bound

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
var addArrow = function addArrow(a, b) {
    //console.log(arguments);
    return a + b;
};
console.log(add(7, 8));
console.log(addArrow(7, 8));

var user = {
    name: 'guy',
    cities: ['scilly', 'pz', 'la'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        //const that =this;
        //console.log(this.name);
        //console.log(this.cities);
        var cityMessages = this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
};
console.log(user.printPlacesLived());

var multiplier = {
    numbers: [1, 6],
    multiplyBy: 12,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
