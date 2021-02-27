const square = function(x){
    return x * x;
};

const squareArrow = (x) => {
    return x * x;
}
const squareArrow2 = (x) =>  x * x;

const getFirstName = (fullName)=>{
    if(fullName.includes(' ')) return fullName.split(' ')[0];
    return 'Format error';
}
const getFirstName2 = (fullName)=> fullName.split(' ')[0];

console.log(square(8));
console.log(squareArrow2(8));
console.log(getFirstName('Guy Pender'));
console.log(getFirstName2('Guy Pender'));
