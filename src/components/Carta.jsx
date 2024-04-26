import "./Carta.css"
//const Carta = ({link, nombre, fecha, rating}) => {
export const Carta = ({link, nombre, fecha, rating}) => {   
    const imgAlt = `Portada de la pelicula ${nombre}`
    return(
        <h2>Pelicula</h2>
            // <div class="card">
            //     <h2>Pelicula</h2>
            //     <img src={link} alt={imgAlt}/>
            //     <div class="info">
            //         <h3>{nombre}</h3>
            //         <p>{fecha}</p>
            //     </div>
            //     <div class="rating">{rating}</div>
            // </div> 
    )
}