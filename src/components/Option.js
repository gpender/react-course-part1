import React from 'react';

const Option = (props)=>
(
    <div>
        <li style={{color:'red'}}>{props.optionText}
            <button
                className='button button--link' 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                Remove
            </button>
        </li>
    </div>
);

export default Option;
