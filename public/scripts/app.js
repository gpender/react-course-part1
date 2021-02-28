'use strict';

console.log('app.js is running watched');

//JSX - Javascript XML
var app = {
    title: 'Indecision App',
    subtitle: 'A React course',
    options: ['one', 'two']
};
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        console.log(option);
        console.log(e.target);
        render();
    }
};
var onReset = function onReset() {
    app.options = [];
    render();
};

var appRoot = document.getElementById('app');
var numbers = [56, 101, 1000];
var render = function render() {
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
            app.options.length > 0 ? 'Here are your options' : 'No Options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        numbers.map(function (number) {
            return React.createElement(
                'p',
                { key: number },
                'Number: ',
                number * 2
            );
        }),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'Option: ',
                    option
                );
            })
        ),
        React.createElement(
            'button',
            { onClick: onReset },
            'Reset'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
