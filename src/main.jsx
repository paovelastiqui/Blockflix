import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import './index.css'

import Carta from './components/Carta'
import Login from './components/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <>
    <Header/>
    <div className="grilla">
      {/* <Carta link="https://media.themoviedb.org/t/p/w440_and_h660_face/9rk0NJXs1izgJPZwbkSrkiVFWMQ.jpg"
           nombre="Dune: Parte dos"
           fecha="29 feb 2024"
           rating="83%"/>
           
      <Carta link="https://media.themoviedb.org/t/p/w440_and_h660_face/2YqZ6IyFk7menirwziJvfoVvSOh.jpg"
           nombre="Godzilla y Kong: El nuevo imperio"
           fecha="28 mar 2024"
           rating="54%"/>
           
      <Carta link="https://media.themoviedb.org/t/p/w440_and_h660_face/zS8BSQdbOesql0EWbs17kPvLoAT.jpg"
           nombre="Kung Fu Panda 4"
           fecha="7 mar 2024"
           rating="73%"/> */}
    </div>
    <Login />
  </>
  </React.StrictMode>,
)
