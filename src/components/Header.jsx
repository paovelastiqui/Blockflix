import { useState } from 'react'
import './Header.css'
function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      
    <header class="header">
        <nav>
      <logo>
        <p className="logo">🎬Blockflix</p>
      </logo>
          <input type="checkbox" id="menu-toggle"/>
            <label for="menu-toggle" class="menu-icon">&#9776;</label>
            <div class="buttons">
              <button class="cart-button">Cart 🛒</button>
              <button class="login-button">Login 🚪</button>
            </div>
        </nav>
      </header>

    </>
  )
}

export default Header
