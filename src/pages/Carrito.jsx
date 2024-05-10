import "./Carrito.css"
import {Header} from "../components/Header.jsx"
import React, { useState } from 'react';

export const Carrito = () => {
  // Supongamos que tienes un array de items en el carrito
  const [items, setItems] = useState([
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    // ...otros productos
  ]);

  // Función para limpiar el carrito
  const limpiarCarrito = () => {
    setItems([]);
  };

  return (
    <>
    <Header/>
    <div className="carrito">
      <h2>Carrito de Compras</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item nombre={item.nombre} precio={item.precio} />
          </li>
        ))}
      </ul>
      <button onClick={limpiarCarrito}>Limpiar Carrito</button>
    </div>
</>
  );
};

// Componente para representar un item
const Item = ({ nombre, precio }) => {
  return (
    <div className="item">
      <span>{nombre}</span>
      <span>${precio}</span>
    </div>
  );
};

