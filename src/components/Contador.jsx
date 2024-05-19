import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter.jsx'

export const Contador = (peliculaMap) => {

    const { count, increment, decrement } = useCounter(1)

    return (
        <div className="contador">
            <button className="signo" onClick={decrement}>-</button>
                <span>{count} Día/s</span>
            <button className="signo" onClick={increment}>+</button>
        </div>

    )
}


            