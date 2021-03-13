import React from 'react';

const Option = (props)=>
(
    <div className='option'>
        <li className='option__text'>{props.count}. {props.optionText}</li>
        <button
            className='button button--link' 
            title='Remove Item'
            onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>
            Remove
        </button>
    </div>
);

export default Option;
