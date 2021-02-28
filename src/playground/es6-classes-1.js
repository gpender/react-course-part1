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

const me = new Person('Guy Pender', 54);
const other = new Person();

console.log(me.getGreeting());
console.log(me.getDescription());
