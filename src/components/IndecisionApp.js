import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

class IndecisionAPP extends React.Component{
    state = {
        options:this.props.options
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
    onDeleteAll = () => {
        this.setState(()=>({
            options:[]
        }));
    }
    handleDeleteOption = (option) => {
        this.setState((prevState)=>({
            options:prevState.options.filter((opt)=>{
                return opt!==option;
            })
        }))
        console.log(option);
    }
    onPick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[randomNum]);
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Enter valid value to add item';
        }else if(this.state.options.indexOf(option) > -1){
            return 'Option Aready exists';
        }
        this.setState((prev)=>({options:prev.options.concat([option])}));
    }
    render(){
        const title="Indecision";
        const subTitle="Put your life in the hands of a computer";
        return(
            <div>
            <Header subTitle={subTitle}/>
            <Action 
                hasOptions={this.state.options.length > 0}
                onPick={this.onPick}>
            </Action>
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

Header.defaultProps={
    title:'Indecision App'
}

export default IndecisionAPP;