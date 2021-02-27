'use strict';

var square = function square(x) {
    return x * x;
};

var squareArrow = function squareArrow(x) {
    return x * x;
};
var squareArrow2 = function squareArrow2(x) {
    return x * x;
};

var getFirstName = function getFirstName(fullName) {
    if (fullName.includes(' ')) return fullName.split(' ')[0];
    return 'Format error';
};
var getFirstName2 = function getFirstName2(fullName) {
    return fullName.split(' ')[0];
};

console.log(square(8));
console.log(squareArrow2(8));
console.log(getFirstName('Guy Pender'));
console.log(getFirstName2('Guy Pender'));
