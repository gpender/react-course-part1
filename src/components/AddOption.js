import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error:undefined
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        console.log('testguy');
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