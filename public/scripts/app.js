"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visible = function (_React$Component) {
    _inherits(Visible, _React$Component);

    function Visible(props) {
        _classCallCheck(this, Visible);

        var _this = _possibleConstructorReturn(this, (Visible.__proto__ || Object.getPrototypeOf(Visible)).call(this, props));

        _this.onToggleVisible = _this.onToggleVisible.bind(_this);
        _this.state = {
            visible: false
        };
        return _this;
    }

    _createClass(Visible, [{
        key: "onToggleVisible",
        value: function onToggleVisible() {
            console.log(this.state.visible);
            this.setState(function (prevState) {
                return {
                    visible: !prevState.visible

                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Visibility Toggle"
                ),
                React.createElement(
                    "button",
                    { onClick: this.onToggleVisible },
                    this.state.visible ? "Hide" : "Show"
                ),
                this.state.visible && React.createElement(
                    "h1",
                    null,
                    "Visible"
                )
            );
        }
    }]);

    return Visible;
}(React.Component);

var divId = document.getElementById('app');

ReactDOM.render(React.createElement(Visible, null), divId);

// let visible = false;
// const onClick=()=>{
//     visible = !visible;
//     render();
// };

// const render = ()=>{
//     const template=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClick}>{visible?'Hide options':'Show Options'}</button>
//             {visible &&  
//                 <ul>
//                     <li>One</li>
//                     <li>One</li>
//                     <li>One</li>
//                 </ul>
//             }
//         </div>
//     );
//     const divId = document.getElementById('app');

//     ReactDOM.render(template,divId);
// }

// render();
