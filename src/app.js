console.log('app.js is running watched');

//JSX - Javascript XML
var app={
    title:'React App',
    subtitle:'A React course',
    options:['one','two']
}
var template = (
<div>
    {app.title && <h1>{app.title}</h1>}
    {app.subtitle && <h2>{app.subtitle}</h2>}
    <p>THis some info</p>
    {app.options.length > 0 && <p>Here are your options {app.options}</p>}
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Two</li>
    </ol>
</div>
);
var user={
    name:'Guy Pender',
    age:114,
    location:'West Sussex'
};
function getLocation(location){
    if(location){
        return <p>Location: {location}</p>;
    }else{
        return undefined;
    }
};
var userName = 'Guy';
var userAge = 4.5;
var userLocation = 'Scilly';
var mytemplate=(
<div>
    <h1>{user.name?user.name:'anon' +'!'}</h1>
    {(user.age && user.age >= 18) &&  <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);