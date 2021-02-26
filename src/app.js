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
var user={
    name:'Guy Pender',
    age:54,
    location:'West Sussex'
}
var userName = 'Guy';
var userAge = 54.5;
var userLocation = 'Scilly';
var mytemplate=(
<div>
    <h1>{user.name +'!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
</div>
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);