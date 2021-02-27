console.log('app.js is running watched');

//JSX - Javascript XML
const app={
    title:'React App',
    subtitle:'A React course',
    options:['one','two']
}
const template = (
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
const user={
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
const userName = 'Guy';
const userAge = 4.5;
const userLocation = 'Scilly';
const mytemplate=(
<div>
    <h1>{user.name?user.name:'anon' +'!'}</h1>
    {(user.age && user.age >= 18) &&  <p>Age: {user.age}</p>}
    {getLocation(user.location)}
</div>
);

const appRoot = document.getElementById('app');
const guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);