import React from 'react'
import NumPad from './NumPad'
import Screen from './Screen'

export default class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            previousTotal: '',
            currentTotal: '0',
            currentOperand: '',
            previousOperand: '',
            runningTotal: 0,
            modified: false
        }

        this.calculateTotal = (value, x, y) => {
            switch (value) {
                case '+': return x + y
                case '-': return x - y
                case '*': return x * y
                case '/': return x / y
                default: return
            }
        }
    }

    clearDisplay = () => {
        this.setState(() => ({
            previousTotal: '',
            currentTotal: '0',
            currentOperand: '',
            previousOperand: '',
            runningTotal: 0,
            modified: false
        }))
    }

    selectOperand = (value) => {
        const runningTotal = this.state.runningTotal
        const previousTotal = this.state.previousTotal
        const currentTotal = this.state.currentTotal
        const currentOperand = this.state.currentOperand
        const previousOperand = this.state.previousOperand

        const total = this.calculateTotal(previousOperand, runningTotal, parseFloat(currentTotal))

        if (previousTotal.includes('=')) {
            return this.setState(() => ({
                previousTotal: currentTotal + value,
                currentTotal: '0',
                previousOperand: value
            }))
        }

        if (currentOperand) {
            return this.setState(() => ({
                previousTotal: previousTotal.split('').slice(0, previousTotal.length - 1).join('') + value,
                currentOperand: value,
                previousOperand: value
            }))
        }

        if (!previousTotal) {
            return this.setState(() => ({
                previousTotal: currentTotal + value,
                currentOperand: value,
                previousOperand: value,
                runningTotal: parseFloat(currentTotal)
            }))
        }

        this.setState(() => ({
            runningTotal: total,
            previousTotal: previousTotal + currentTotal + value,
            currentOperand: value,
            previousOperand: value
        }))
    }

    appendNumbers = (value) => {
        const currentTotal = this.state.currentTotal
        const currentOperand = this.state.currentOperand
        const previousTotal = this.state.previousTotal

        if (previousTotal.includes('=')) {
            return this.setState(() => ({
                previousTotal: '',
                currentTotal: value,
                runningTotal: 0
            }))
        }

        if (currentTotal === '0') {
            return this.setState(() => ({ 
                currentTotal: value
            }))
        }

        if (currentTotal === '0' && !previousTotal) {
            return this.setState(() => ({ 
                currentTotal: parseFloat(value)
            }))
        }

        if (currentOperand) {
            return this.setState(() => ({
                currentTotal: value,
                currentOperand: ''
            }))
        }

        return this.setState(() => ({
            currentTotal: currentTotal + value,
            currentOperand: ''
        }))
    }

    handleDecimal = () => {
        const currentTotal = this.state.currentTotal

        if (!currentTotal.includes('.')) {
            this.setState(() => ({
                currentTotal: currentTotal + '.'
            }))
        }
    }

    toggleModifier = () => {
        const modified = this.state.modified
        const previousTotal = this.state.previousTotal

        if (previousTotal.includes('=')) return

        if (!modified) {
            this.setState(() => ({
                modified: !modified,
                currentTotal: '-' + this.state.currentTotal
            }))
        } else {
            this.setState(() => ({
                modified: !modified,
                currentTotal: this.state.currentTotal.replace('-', '')
            }))
        }
        
    }

    calculate = () => {
        const runningTotal = this.state.runningTotal
        const previousTotal = this.state.previousTotal
        const currentTotal = this.state.currentTotal
        const previousOperand = this.state.previousOperand

        const total = this.calculateTotal(previousOperand, runningTotal, parseFloat(currentTotal))

        if (!this.state.previousTotal || previousTotal.includes('=')) return

        return this.setState(() => ({ 
            previousTotal: previousTotal + currentTotal + "=" + total.toString(),
            currentTotal: total,
            runningTotal: total
        }))
    }

    render() {
        return (
            <div id="calculator">
                <Screen 
                    previousTotal={this.state.previousTotal}
                    currentTotal={this.state.currentTotal}
                />
                <NumPad 
                    clearDisplay={this.clearDisplay}
                    selectOperand={this.selectOperand}
                    appendNumbers={this.appendNumbers}
                    handleDecimal={this.handleDecimal}
                    toggleModifier={this.toggleModifier}
                    calculate={this.calculate}
                />
            </div>
        )
    }
}