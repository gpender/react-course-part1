// stateless functional component

class IndecisionAPP extends React.Component{
    constructor(props){
        super(props);
        this.onDeleteAll = this.onDeleteAll.bind(this);
        this.onPick = this.onPick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state={
            options:this.props.options
            //options:["Thing 1","Thing 2","Thing 3"]
        };
    } 
    componentDidMount(){
        try{
            console.log('componentDidMount');
            console.log('fetching data');
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(()=>({options}));
            }
        }
        catch(e){
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('componentDidUpdate');
            console.log('saving data');
        }

    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    //handle delete all
    onDeleteAll(){
        // this.setState(()=>{
        //     return {
        //         options:[]
        //     }
        // })
        this.setState(()=>({
            options:[]
        }));
    }
    handleDeleteOption(option){
        this.setState((prevState)=>({
            options:prevState.options.filter((opt)=>{
                return opt!==option;
            })
        }))
        console.log(option);
    }
    onPick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option Aready exists';
        }
        this.setState((prev)=>({options:prev.options.concat([option])}));
        // this.setState((prev)=>{
        //     return {
        //         options:prev.options.concat([option])
        //     };
        // });
    }
    render(){
        const title="Indecision";
        const subTitle="Put your life in the hands of a computer";
        //const options=["Thing 1","Thing2","Thing3"];
        return(
            <div>
            <Header subTitle={subTitle}/>
            <Action 
                hasOptions={this.state.options.length > 0}
                onPick={this.onPick}>
            </Action>
            <Option 
                optionText={(new Date()).toLocaleTimeString()} 
                handleDeleteOption={this.handleDeleteOption}
            />
            <Options 
                optionArray={this.state.options}
                onDeleteAll={this.onDeleteAll}
                handleDeleteOption={this.handleDeleteOption}>
            </Options>
            <AddOption 
                handleAddOption={this.handleAddOption}
            />
            </div>
        );
    }
}
IndecisionAPP.defaultProps={
        options:["Thing 1","Thing 2","Thing 3"]
}
const Header =(props) => {
        return (
            <div>
                <h1>{props.title}</h1>
                {props.subTitle && <h2>{props.subTitle}</h2>}
            </div>
        )
    };
Header.defaultProps={
    title:'Some default'
}
// class Header extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         )
//     }
// }
const Action =(props)=>{
        return(
            <div>
            <button 
                disabled={!props.hasOptions} 
                onClick={props.onPick}>pick</button>
            </div>
        )
    }
// class Action extends React.Component{
//     render(){
//         return(
//             <div>
//             <button 
//                 disabled={!this.props.hasOptions} 
//                 onClick={this.props.onPick}>pick</button>
//             </div>
//         )
//     }
// }
const Options = (props)=> {
    console.log(`Options ${props.optionArray}`);
        return (
            <div>
            <button onClick={props.onDeleteAll}>Remove All</button>
            {props.optionArray.length===0 && <p>Please add an option</p>}
            <ul>
                {props.optionArray.map((option)=>{
                    return (
                    <Option 
                        key={option} 
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />)
                })}
            </ul>
            </div>
        )
    };
// class Options extends React.Component {
//     constructor(props){
//         super(props);
//     }   
//     render(){
//         return (
//             <div>
//             <button onClick={this.props.onDeleteAll}>Remove All</button>
//             <ul>
//                 {this.props.optionArray.map((option)=>{
//                     return <Option key={option} optionText={option}/>;
//                 })}
//             </ul>
//             </div>
//         )
//     }
// }
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
        this.setState(()=>({error}));
        if(!error){
            e.target.elements.option.value = '';
        }
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
const Option = (props)=>{
        return(
            <div>
                <li style={{color:'red'}}>{props.optionText}</li>
                <button onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}>
                    Remove
                </button>
            </div>
            );
    };
// class Option extends React.Component{
//     render(){
//         return(
//             <div>
//                 <li style={{color:'red'}}>{this.props.optionText}</li>
//             </div>
//             );
//     }
// }
// const User = (props)=>{
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

//ReactDOM.render(jsx, document.getElementById('app'));
function render(){
    ReactDOM.render(<IndecisionAPP options={['one','two']}/>, document.getElementById('app'));
}
render();
//setInterval(render,1000);

