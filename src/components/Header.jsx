import { useState } from 'react'
import './Header.css'
function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <header className="header">
        <nav>
      <logo>
        <p className="logo">🎬Blockflix</p>
      </logo>
          <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <div className="buttons">
              <button className="cart-button">Cart 🛒</button>
              <button className="login-button">Login 🚪</button>
            </div>
        </nav>
      </header>

    </>
  )
}

export default Header
