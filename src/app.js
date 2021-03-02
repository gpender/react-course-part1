const obj={
    name:'guggy',
    getName(){
        return this.name;
    }
}
//console.log(obj.getName());
const getName = obj.getName.bind({name:'guythh'});
console.log(getName());

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
    handlePick(){
        alert('bjhgh');
    }
    render(){
        return(
            <div>
            <button onClick={this.handlePick}>Help</button>
            </div>
        )
    }
}
class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }   
    handleRemoveAll(){
        console.log('remove all');
    }
    render(){
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
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
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if(option){
alert(option);
            // app.options.push(option);
            // e.target.elements.option.value = '';
            // console.log(option);
            // console.log(e.target);
            // render();
        }
        
    };
    
    render(){
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
                <input name="option" type="text"/>
                <button>Add Option</button>
            </form>
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

//ReactDOM.render(jsx, document.getElementById('app'));
function render(){
    ReactDOM.render(<IndecisionAPP/>, document.getElementById('app'));
}
render();
setInterval(render,1000);