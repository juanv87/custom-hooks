import React from 'react'
import useCounter from './hooks/useCounter';

const CounterApp = () => {
    /* Un hook es una funcion, con la diferencia que esta funcion va a poder interactuar y almacenar estado y funciones que tengan que ver con el estado.
    No usan jsx. Manejan la logica del estado. 
    */
    const [counter, increment, reset] = useCounter(50);
    return (
        <div>
            <h1>Clicks: {counter}</h1>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={reset}>
                Reset
            </button>
        </div>
    )
}

export default CounterApp
