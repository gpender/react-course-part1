'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// stateless functional component

var IndecisionAPP = function (_React$Component) {
    _inherits(IndecisionAPP, _React$Component);

    function IndecisionAPP(props) {
        _classCallCheck(this, IndecisionAPP);

        var _this = _possibleConstructorReturn(this, (IndecisionAPP.__proto__ || Object.getPrototypeOf(IndecisionAPP)).call(this, props));

        _this.onDeleteAll = _this.onDeleteAll.bind(_this);
        _this.onPick = _this.onPick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: _this.props.options
            //options:["Thing 1","Thing 2","Thing 3"]
        };
        return _this;
    }
    //handle delete all


    _createClass(IndecisionAPP, [{
        key: 'onDeleteAll',
        value: function onDeleteAll() {
            // this.setState(()=>{
            //     return {
            //         options:[]
            //     }
            // })
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(option) {
            console.log(option);
        }
    }, {
        key: 'onPick',
        value: function onPick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[randomNum]);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter valid value to add item';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Option Aready exists';
            }
            this.setState(function (prev) {
                return { options: prev.options.concat([option]) };
            });
            // this.setState((prev)=>{
            //     return {
            //         options:prev.options.concat([option])
            //     };
            // });
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
                React.createElement(Header, { subTitle: subTitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    onPick: this.onPick }),
                React.createElement(Option, {
                    optionText: new Date().toLocaleTimeString(),
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(Options, {
                    optionArray: this.state.options,
                    onDeleteAll: this.onDeleteAll,
                    handleDeleteOption: this.handleDeleteOption }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionAPP;
}(React.Component);

IndecisionAPP.defaultProps = {
    options: ["Thing 1", "Thing 2", "Thing 3"]
};
var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};
Header.defaultProps = {
    title: 'Some default'
    // class Header extends React.Component {
    //     render(){
    //         return (
    //             <div>
    //                 <h1>{this.props.title}</h1>
    //                 <h2>{this.props.subTitle}</h2>
    //             </div>
    //         )
    //     }
    // }
};var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: !props.hasOptions,
                onClick: props.onPick },
            'pick'
        )
    );
};
// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//             <button 
//                 disabled={!this.props.hasOptions} 
//                 onClick={this.props.onPick}>pick</button>
//             </div>
//         )
//     }
// }
var Options = function Options(props) {
    console.log('Options ' + props.optionArray);
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.onDeleteAll },
            'Remove All'
        ),
        React.createElement(
            'ul',
            null,
            props.optionArray.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    optionText: option,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        )
    );
};
// class Options extends React.Component {
//     constructor(props){
//         super(props);
//     }   
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.onDeleteAll}>Remove All</button>
//             <ul>
//                 {this.props.optionArray.map((option)=>{
//                     return <Option key={option} optionText={option}/>;
//                 })}
//             </ul>
//             </div>
//         )
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.onFormSubmit = _this2.onFormSubmit.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'li',
            { style: { color: 'red' } },
            props.optionText
        ),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOption },
            'Remove'
        )
    );
};
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 <li style={{color:'red'}}>{this.props.optionText}</li>
//             </div>
//             );
//     }
// }
// const User = (props)=>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

//ReactDOM.render(jsx, document.getElementById('app'));
function render() {
    ReactDOM.render(React.createElement(IndecisionAPP, { options: ['one', 'two'] }), document.getElementById('app'));
}
render();
//setInterval(render,1000);
