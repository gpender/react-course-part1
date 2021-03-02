class IndecisionAPP extends React.Component{
     render(){
        const title="Indecision";
        const subTitle="Put your life in the hands of a computer";
        const options=["Thing 1","Thing2","Thing3"];
        return(
        <div>
        <Header title={title} subTitle={subTitle}/>
        <Action/>
        <Option optionText={(new Date()).toLocaleTimeString()} />
        <Options optionArray={options}/>
        <AddOption/>
        </div>
        );
    }
}

class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
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
                {this.props.optionArray.map((option)=>{
                    return <Option key={option} optionText={option}/>;
                })}
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
            <div>
                <li style={{color:'red'}}>{this.props.optionText}</li>
            </div>
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
function render(){
    ReactDOM.render(<IndecisionAPP/>, document.getElementById('app'));
}
render();
setInterval(render,1000);