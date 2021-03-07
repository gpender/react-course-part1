import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionAPP from './components/IndecisionApp';

ReactDOM.render(<IndecisionAPP/>,document.getElementById('app'));

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>THis is my page</p>
//     </div>
// );

// THIS IS HOW TO PASS JSX TO A COMPONENT

// const Layout = (props)=>{
//     return (
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     )
// }
// ReactDOM.render(
//     (
//         <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>THis is my page</p>
//         </div>
//         </Layout>
//     ), document.getElementById('app'));
