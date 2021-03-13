import React from 'react';
import Option from './Option';

const Options = (props)=> 
(
    <div>
        <button
            className='button button--link' 
            onClick={props.onDeleteAll}>
            Remove All</button>
        {props.optionArray && props.optionArray.length===0 && <p>Please add an option</p>}
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
);

export default Options;