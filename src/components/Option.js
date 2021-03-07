import React from 'react';

const Option = (props)=>{
    return(
        <div>
            <li style={{color:'red'}}>{props.optionText}</li>
            <button onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>
                Remove-
            </button>
        </div>
        );
};

export default Option;
