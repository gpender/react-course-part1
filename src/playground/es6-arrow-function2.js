// arguments object - no longer bound with arrow functions
// this keyword - no longer bound

const add = function(a,b){
    console.log(arguments);
    return a+b;
};
const addArrow = (a,b) =>{
    //console.log(arguments);
    return a+b;
}
console.log(add(7,8));
console.log(addArrow(7,8));

const user = {
    name:'guy',
    cities:['scilly','pz','la'],
    printPlacesLived(){
        //const that =this;
        //console.log(this.name);
        //console.log(this.cities);
        const cityMessages = this.cities.map((city)=>{
            return this.name + ' has lived in ' + city;
        });
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // })
    }
}
console.log(user.printPlacesLived());


const multiplier = {
    numbers:[1,6],
    multiplyBy:12,
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());