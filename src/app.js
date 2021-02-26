console.log('app.js is running watched');

//JSX - Javascript XML
var template = (
<div>
    <h1>This is JSX from app.js</h1>
    <p>THis some info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
    </ol>
</div>
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
