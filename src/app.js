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
    constructor(props){
        super(props);
        this.onDeleteAll = this.onDeleteAll.bind(this);
        this.onPick = this.onPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state={
            options:["Thing 1","Thing 2","Thing 3"]
        };
    } 
    //handle delete all
    onDeleteAll(){
        this.setState(()=>{
            return {
                options:[]
            }
        })
    }
    onPick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option aready exists';
        }
        this.setState((prev)=>{
            return{
                options:prev.options.concat([option])
            };
        });
    }
    render(){
        const title="Indecision";
        const subTitle="Put your life in the hands of a computer";
        //const options=["Thing 1","Thing2","Thing3"];
        return(
            <div>
            <Header title={title} subTitle={subTitle}/>
            <Action 
                hasOptions={this.state.options.length > 0}
                onPick={this.onPick}>
            </Action>
            <Option optionText={(new Date()).toLocaleTimeString()} />
            <Options 
                optionArray={this.state.options}
                onDeleteAll={this.onDeleteAll}>
            </Options>
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
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
            <button 
                disabled={!this.props.hasOptions} 
                onClick={this.props.onPick}>pick</button>
            </div>
        )
    }
}
class Options extends React.Component {
    constructor(props){
        super(props);
    }   
    render(){
        return (
            <div>
            <button onClick={this.props.onDeleteAll}>Remove All</button>
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
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error:undefined
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(()=>{
            return {error}
        });
    };
    
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
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