import { useState } from 'react'
import './Header.css'

export const Header = ()=>  {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <header className="header">
        <nav>
      <div>
        <p className="logo">🎬Blockflix</p>
      </div>
          <input type="checkbox" id="menu-toggle"/>
            <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
            <div className="buttons">
              
              <button className="cart-button">Cart 🛒</button>
              <button className="login-button">Login 🚪</button>
            </div>
        </nav>
      </header>

    </>
  )
}
