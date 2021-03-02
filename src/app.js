class IndecisionAPP extends React.Component{
    render(){
        return(
        <div>
        <Header />
        <Action/>
        <Options/>
        <AddOption/>
        </div>
        );
    }
}

class Header extends React.Component {
    render(){

        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div>
            <button>Help</button>
            </div>
        )
    }
}
class Options extends React.Component {
    render(){
        return (
            <div>
            <ul>
            <Option/>
            <Option/>
            <Option/>
            </ul>
            </div>
        )
    }
}
class AddOption extends React.Component{
    render(){
        return(
            <div>
                <button>Add Option</button>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        return(
        <li>Option</li>
        );
    }
}

// const jsx = (
//     <div>
//         <Header />
//         <Action />
//         <Options />
//         <AddOption />
//     </div>
// );

//ReactDOM.render(jsx, document.getElementById('app'));
ReactDOM.render(<IndecisionAPP/>, document.getElementById('app'));