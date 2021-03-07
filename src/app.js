import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionAPP from './components/IndecisionApp';

// stateless functional component


IndecisionAPP.defaultProps={
        options:["Thing 1","Thing 2","Thing 3"]
}

function render(){
    ReactDOM.render(<IndecisionAPP options={['one','two']}/>, document.getElementById('app'));
}
render();

class OldSyntax{
    constructor(){
        this.name='Mike';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return `Hi Guy${this.name}`
    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(oldSyntax.getGreeting());
console.log(getGreeting());

// -------------

class NewSyntax{
    name = 'Jan';
    getGreeting=()=>{
        return `Hi Guy${this.name}`;
    }
}
const newSyntax = new NewSyntax();
const getGreeting2 = newSyntax.getGreeting;
console.log(newSyntax.getGreeting());
console.log(getGreeting2());
