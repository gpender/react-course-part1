class Person{
    constructor(name = 'Anonymous', age=0){
        this.name = name;
        this.age = age;
        console.log(name+'!');
    }
    getGreeting(){
        return `Hello ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }

}
class Student extends Person {

    constructor(name,age,major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor){
            description += `. Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveller extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;

    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += `. I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Person('Guy Pender', 54);
const other = new Student('Student Trev',99,'Bsc');

console.log(me.getGreeting());
console.log(me.getDescription());
console.log(other.hasMajor());
console.log(other.getDescription());

const traveller = new Traveller('Trevor',66,'Scilly');
console.log(traveller.getGreeting());