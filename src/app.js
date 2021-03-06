import subtract, {square, add} from './utils';
// import {square, add} from './utils';
import isSenior, {isAdult, canDrink} from './person';

console.log('app.js is running!!');
console.log(square(4));
console.log(add(4,45));
console.log(subtract(5,6));

console.log(isAdult(18));
console.log(isAdult(17));
console.log(canDrink(18));
console.log(canDrink(21));

console.log(`Is senior : ${isSenior(6)}`);