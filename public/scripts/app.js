'use strict';

console.log('app.js is running watched');

//JSX - Javascript XML
var app = {
    title: 'React App',
    subtitle: 'A React course'
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'h2',
        null,
        app.subtitle
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
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    } else {
        return undefined;
    }
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
        user.name ? user.name : 'anon' + '!'
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
        getLocation(user.location)
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);
