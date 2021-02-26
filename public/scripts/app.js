console.log('app.js is running');

//JSX - Javascript XML
var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
