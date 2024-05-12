import "./Carta.css"
import { Link } from "react-router-dom"
import React, { useState } from 'react'



export const Carta = ({ peliculaMap }) => {
    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
    var [count, setCount] = useState(1);
    const total = 500 * count
    
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const rentMovie = (peliculaMap, count) => {
        alert(`${peliculaMap.title} se agregó al carrito por ${count} días.`);
        setCount(count = 1);
    };

    return (
        <li className="carta">
            <Link to={`/pelicula/${peliculaMap.id}`}>
                <img src={imgURL} alt={peliculaMap.title} />
            </Link>
            <div className="info">
                <h3>{peliculaMap.title}</h3>
                <small>{peliculaMap.release_date}</small>
            </div>
            
            <div className="contador">
                <button onClick={decrement}>-</button>
                <span>{count} Día/as</span>
                <button onClick={increment}>+</button>
            </div>
            <p>${total}</p>
            <button onClick={() => rentMovie(peliculaMap, count)}>Agregar al carrito</button>
        </li>

    )
}

