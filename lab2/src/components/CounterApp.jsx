import React from 'react'
import { useState } from 'react'

export const CounterApp = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100vh', // Hace que ocupe toda la pantalla verticalmente
        textAlign: 'center'
    }}>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    </div>
)
}
