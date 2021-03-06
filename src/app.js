import React from 'react';
import ReactDOM from 'react-dom';

const template = React.cloneElement('p',{},'testing');

ReactDOM.render(template, document.getElementById('app'));