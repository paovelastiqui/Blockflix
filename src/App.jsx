import {BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {LandingPage} from './pages/LandingPage.jsx'
import { DetallePeliculas } from "./pages/DetallePeliculas.jsx"
import "./App.css"

const App = () => {

  return(
  <>
    <BrowserRouter> 
     <ul className="listaVinculos">
      <li><Link to = "/"><p>Ir al Landing Page</p></Link></li>
      <li><Link to = "/pelicula/:peliculaId"><p>Ir a detalle pelicula</p></Link></li>
     </ul>

      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/pelicula/:peliculaId" element = {<DetallePeliculas/>}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App