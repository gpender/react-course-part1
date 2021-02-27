console.log('app.js is running watched');

//JSX - Javascript XML
var app={
    title:'React App',
    subtitle:'A React course'
}
var template = (
<div>
    <h1>{app.title}</h1>
    <h2>{app.subtitle}</h2>
    <p>THis some info</p>
    <ol>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Two</li>
    </ol>
</div>
);
var user={
    name:'Guy Pender',
    age:54,
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
var userAge = 54.5;
var userLocation = 'Scilly';
var mytemplate=(
<div>
    <h1>{user.name +'!'}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
    {getLocation(user.location)}
</div>
);

var appRoot = document.getElementById('app');
var guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);