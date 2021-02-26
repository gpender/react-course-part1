'use strict';

console.log('app.js is running watched');

//JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is JSX from app.js'
    ),
    React.createElement(
        'p',
        null,
        'THis some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);
var user = {
    name: 'Guy Pender',
    age: 54,
    location: 'West Sussex'
};
var userName = 'Guy';
var userAge = 54.5;
var userLocation = 'Scilly';
var mytemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name + '!'
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);
