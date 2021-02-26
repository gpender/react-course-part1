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

var mytemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Guy Pender'
    ),
    React.createElement(
        'p',
        null,
        'Age: 53'
    ),
    React.createElement(
        'p',
        null,
        'Location: Angmering'
    )
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);
