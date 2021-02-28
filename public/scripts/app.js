'use strict';

var visible = false;
var onClick = function onClick() {
    visible = !visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClick },
            visible ? 'Hide options' : 'Show Options'
        ),
        visible && React.createElement(
            'ul',
            null,
            React.createElement(
                'li',
                null,
                'One'
            ),
            React.createElement(
                'li',
                null,
                'One'
            ),
            React.createElement(
                'li',
                null,
                'One'
            )
        )
    );
    var divId = document.getElementById('app');

    ReactDOM.render(template, divId);
};

render();
