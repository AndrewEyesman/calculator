import React from 'react'
import Button from './Button'

export default (props) => (
    <div id="num-pad">
        <Button id="clear" value="AC" updateDisplay={props.clearDisplay} />
        <Button id="divide" value="/" updateDisplay={props.selectOperand} />
        <Button id="multiply" value="*" updateDisplay={props.selectOperand} />
        <Button id="seven" value="7" updateDisplay={props.appendNumbers} />
        <Button id="eight" value="8" updateDisplay={props.appendNumbers} />
        <Button id="nine" value="9" updateDisplay={props.appendNumbers} />
        <Button id="subtract" value="-" updateDisplay={props.selectOperand} />
        <Button id="four" value="4" updateDisplay={props.appendNumbers} />
        <Button id="five" value="5" updateDisplay={props.appendNumbers} />
        <Button id="six" value="6" updateDisplay={props.appendNumbers} />
        <Button id="add" value="+" updateDisplay={props.selectOperand} />
        <Button id="one" value="1" updateDisplay={props.appendNumbers} />
        <Button id="two" value="2" updateDisplay={props.appendNumbers} />
        <Button id="three" value="3" updateDisplay={props.appendNumbers} />
        <Button id="equals" value="=" updateDisplay={props.calculate} />
        <Button id="modifier" value="+-" updateDisplay={props.toggleModifier} />
        <Button id="zero" value="0" updateDisplay={props.appendNumbers} />
        <Button id="decimal" value="." updateDisplay={props.handleDecimal} />
    </div>
)