import React from 'react';
import Option from './Option';

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

    export default Options;