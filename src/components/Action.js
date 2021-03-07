import React from 'react';

const Action =(props)=>
(
    <div>
        <button 
            disabled={!props.hasOptions} 
            onClick={props.onPick}>
            pick
        </button>
    </div>
);        
export default Action;