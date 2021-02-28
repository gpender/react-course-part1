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

var count = 0;
var addOne = function addOne() {
    count++;
    console.log('add one');
    console.log(count);
    rendercounterApp();
};
var minusOne = function minusOne() {
    count--;
    console.log('minus one');
    console.log(count);
    rendercounterApp();
};
var reset = function reset() {
    count = 0;
    console.log('reset');
    console.log(count);
    rendercounterApp();
};

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);

var rendercounterApp = function rendercounterApp() {
    var mytemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(mytemplate, guyRoot);
};

rendercounterApp();
