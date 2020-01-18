import React from 'react'

export default (props) => (
    <button 
        id={props.id}
        onClick={() => props.updateDisplay(props.value)}
    >
        {props.value}
    </button>
)