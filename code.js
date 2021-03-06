class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOpernand = ''
    this.operation = undefined
  }

  delete() {
// Delete function to do //
  }

  appendNumber(number) {
    this.currentOperand = number
  }

  chooseOperation(operation) {

  }

  compute() {

  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelectorAll('[data-equals]')
const deleteButton = document.querySelectorAll('[data-delete]')
const allClearButtons = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
