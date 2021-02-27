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

let count=0;
const addOne = ()=>{
    count++;
    console.log('add one');
    console.log(count);
};
const minusOne = ()=>{
    count--;
    console.log('minus one');
    console.log(count);
};
const reset = ()=>{
    count=0;
    console.log('reset');
    console.log(count);
};
const mytemplate=(
<div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
</div>
);
console.log(mytemplate);


const appRoot = document.getElementById('app');
const guyRoot = document.getElementById('guy');
ReactDOM.render(template, appRoot);
ReactDOM.render(mytemplate, guyRoot);