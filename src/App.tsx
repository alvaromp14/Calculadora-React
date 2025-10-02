import { useState } from 'react'
import './App.css'

// Componente principal de la aplicación calculadora
function App() {
  // Estados para manejar la pantalla y las operaciones
  const [display, setDisplay] = useState('0') // Valor mostrado en pantalla
  const [previousValue, setPreviousValue] = useState<number | null>(null) // Valor anterior para operaciones
  const [operation, setOperation] = useState<string | null>(null) // Operación actual (+, -, *, /)
  const [waitingForOperand, setWaitingForOperand] = useState(false) // ¿Esperando nuevo número?

  // Función para manejar cuando se presiona un número
  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      // Si estamos esperando un nuevo número, reemplazamos la pantalla
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      // Si no, agregamos el dígito al número actual
      setDisplay(display === '0' ? num : display + num)
    }
  }

  // Función para manejar el punto decimal
  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      // Solo agregar punto si no hay uno ya
      setDisplay(display + '.')
    }
  }

  // Función para limpiar toda la calculadora
  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  // Función para realizar cálculos
  const calculate = (firstOperand: number, secondOperand: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstOperand + secondOperand
      case '-':
        return firstOperand - secondOperand
      case '*':
        return firstOperand * secondOperand
      case '/':
        return firstOperand / secondOperand
      case '=':
        return secondOperand
      default:
        return secondOperand
    }
  }

  // Función para manejar operaciones (+, -, *, /, =)
  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      // Primera operación
      setPreviousValue(inputValue)
    } else if (operation) {
      // Realizar cálculo con operación anterior
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      // Formatear resultado para evitar decimales largos
      const formattedValue = String(newValue).length > 10 
        ? parseFloat(newValue.toFixed(8)).toString() 
        : newValue.toString()

      setDisplay(formattedValue)
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  return (
    <div className="calculator">
      {/* Título de la aplicación */}
      <h1 className="calculator-title">Calculadora React</h1>
      
      <div className="calculator-body">
        {/* Pantalla donde se muestran los números y resultados */}
        <div className="calculator-display">
          {display}
        </div>

        {/* Botones de la calculadora organizados en filas */}
        <div className="calculator-buttons">
          {/* Primera fila: Clear y operaciones */}
          <div className="button-row">
            <button className="btn btn-function" onClick={clear}>C</button>
            <button className="btn btn-function" onClick={() => setDisplay(display.slice(0, -1) || '0')}>⌫</button>
            <button className="btn btn-operation" onClick={() => performOperation('/')}>/</button>
            <button className="btn btn-operation" onClick={() => performOperation('*')}>×</button>
          </div>

          {/* Segunda fila: números 7, 8, 9 y resta */}
          <div className="button-row">
            <button className="btn btn-number" onClick={() => inputNumber('7')}>7</button>
            <button className="btn btn-number" onClick={() => inputNumber('8')}>8</button>
            <button className="btn btn-number" onClick={() => inputNumber('9')}>9</button>
            <button className="btn btn-operation" onClick={() => performOperation('-')}>-</button>
          </div>

          {/* Tercera fila: números 4, 5, 6 y suma */}
          <div className="button-row">
            <button className="btn btn-number" onClick={() => inputNumber('4')}>4</button>
            <button className="btn btn-number" onClick={() => inputNumber('5')}>5</button>
            <button className="btn btn-number" onClick={() => inputNumber('6')}>6</button>
            <button className="btn btn-operation" onClick={() => performOperation('+')}>+</button>
          </div>

          {/* Cuarta fila: números 1, 2, 3 y igual */}
          <div className="button-row">
            <button className="btn btn-number" onClick={() => inputNumber('1')}>1</button>
            <button className="btn btn-number" onClick={() => inputNumber('2')}>2</button>
            <button className="btn btn-number" onClick={() => inputNumber('3')}>3</button>
            <button className="btn btn-equals" onClick={() => performOperation('=')}>=</button>
          </div>

          {/* Quinta fila: 0, punto decimal */}
          <div className="button-row">
            <button className="btn btn-number btn-zero" onClick={() => inputNumber('0')}>0</button>
            <button className="btn btn-number" onClick={inputDecimal}>.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
