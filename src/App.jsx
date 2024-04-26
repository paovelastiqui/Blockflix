import {BrowserRouter,Routes,Route,Link } from "react-router-dom"
import LandingPage from './pages/LandingPage.jsx'
import { DetallePelicula } from "./pages/DetallePeliculas.jsx"


const App = () => {

  return(
  <>
    <BrowserRouter> 
      <Link to = "/">
        <h2>Landing Page</h2>
      </Link>
      <Link to = "/pelicula/:peliculaID">
        <h2>Detalle pelicula</h2>
      </Link>

      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path = "/pelicula/:peliculaID" element = {<DetallePelicula/>}/>

      </Routes>
    </BrowserRouter>
    {/* <LandingPage/> */}
  </>
  )
}

export default App