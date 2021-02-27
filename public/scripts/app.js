'use strict';

console.log('app.js is running watched');

//JSX - Javascript XML
var app = {
    title: 'React App',
    subtitle: 'A React course',
    options: ['one', 'two']
};
var template = React.createElement(
    'div',
    null,
    app.title && React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h2',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        'THis some info'
    ),
    app.options.length > 0 && React.createElement(
        'p',
        null,
        'Here are your options ',
        app.options
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
    age: 114,
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
var userAge = 4.5;
var userLocation = 'Scilly';
var mytemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'anon' + '!'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);
