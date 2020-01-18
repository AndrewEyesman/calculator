import React from 'react'

export default (props) => (
    <div id="screen">
        <div id="subtotal">{props.previousTotal}</div>
        <div id="display">{props.currentTotal}</div>
    </div>
)