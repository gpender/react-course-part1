'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var obj = {
    name: 'guggy',
    getName: function getName() {
        return this.name;
    }
};
//console.log(obj.getName());
var getName = obj.getName.bind({ name: 'guythh' });
console.log(getName());

var IndecisionAPP = function (_React$Component) {
    _inherits(IndecisionAPP, _React$Component);

    function IndecisionAPP(props) {
        _classCallCheck(this, IndecisionAPP);

        var _this = _possibleConstructorReturn(this, (IndecisionAPP.__proto__ || Object.getPrototypeOf(IndecisionAPP)).call(this, props));

        _this.onDeleteAll = _this.onDeleteAll.bind(_this);
        _this.onPick = _this.onPick.bind(_this);
        _this.state = {
            options: ["Thing 1", "Thing 2", "Thing 3"]
        };
        return _this;
    }
    //handle delete all


    _createClass(IndecisionAPP, [{
        key: 'onDeleteAll',
        value: function onDeleteAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'onPick',
        value: function onPick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNum]);
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "Indecision";
            var subTitle = "Put your life in the hands of a computer";
            //const options=["Thing 1","Thing2","Thing3"];
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    onPick: this.onPick }),
                React.createElement(Option, { optionText: new Date().toLocaleTimeString() }),
                React.createElement(Options, {
                    optionArray: this.state.options,
                    onDeleteAll: this.onDeleteAll }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecisionAPP;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'h2',
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    {
                        disabled: !this.props.hasOptions,
                        onClick: this.props.onPick },
                    'pick'
                )
            );
        }
    }]);

    return Action;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'button',
                    { onClick: this.props.onDeleteAll },
                    'Remove All'
                ),
                React.createElement(
                    'ul',
                    null,
                    this.props.optionArray.map(function (option) {
                        return React.createElement(Option, { key: option, optionText: option });
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var AddOption = function (_React$Component5) {
    _inherits(AddOption, _React$Component5);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            if (option) {
                alert(option);
                // app.options.push(option);
                // e.target.elements.option.value = '';
                // console.log(option);
                // console.log(e.target);
                // render();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { name: 'option', type: 'text' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

var Option = function (_React$Component6) {
    _inherits(Option, _React$Component6);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'li',
                    { style: { color: 'red' } },
                    this.props.optionText
                )
            );
        }
    }]);

    return Option;
}(React.Component);

//ReactDOM.render(jsx, document.getElementById('app'));


function render() {
    ReactDOM.render(React.createElement(IndecisionAPP, null), document.getElementById('app'));
}
render();
setInterval(render, 1000);
