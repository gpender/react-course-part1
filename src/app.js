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

var mytemplate=(
<div>
    <h1>Guy Pender</h1>
    <p>Age: 53</p>
    <p>Location: Angmering</p>
</div>
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);