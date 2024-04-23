import "./Carta.css"
const Carta = ({link, nombre, fecha, rating}) => {
    
    const imgAlt = `Portada de la pelicula ${nombre}`
    return(
            <div class="card">
                <img src={link} alt={imgAlt}/>
                <div class="info">
                    <h3>{nombre}</h3>
                    <p>{fecha}</p>
                </div>
                <div class="rating">{rating}</div>
            </div> 
    )
}
export default Carta