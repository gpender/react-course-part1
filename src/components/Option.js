import React from 'react';

const Option = (props)=>
(
    <div>
        <li style={{color:'red'}}>{props.optionText}</li>
        <button onClick={(e) => {
                props.handleDeleteOption(props.optionText);
            }}>
            Remove
        </button>
    </div>
);

export default Option;
