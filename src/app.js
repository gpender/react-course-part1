import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionAPP from './components/IndecisionApp';

// stateless functional component


IndecisionAPP.defaultProps={
        options:["Thing 1","Thing 2","Thing 3"]
}

function render(){
    ReactDOM.render(<IndecisionAPP options={['one','two']}/>, document.getElementById('app'));
}
render();

