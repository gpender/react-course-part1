import React from 'react';
import Option from './Option';

const Options = (props)=> 
(
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>    
            <button
                className='button button--link' 
                onClick={props.onDeleteAll}
                title='Remove All Options'>
                Remove All</button>
        </div>
        {props.optionArray && props.optionArray.length===0 && <p className='widget__message'>Please add an option to get started!!</p>}
        <ul>
            {props.optionArray.map((option, index)=>{
                return (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption}
                />)
            })}
        </ul>
    </div>
);

export default Options;