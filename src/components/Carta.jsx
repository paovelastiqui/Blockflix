import "./Carta.css"

export const Carta = ({peliculaMap}) => {   
    const imgURL = `https://image.tmdb.org/t/p/w300${peliculaMap.poster_path}`
    return(
        <li className="Carta">
            <img src={imgURL} alt={peliculaMap.title}/>
            <div class="info">
                <h3>{peliculaMap.title}</h3>
                <small>{peliculaMap.title}</small>
                <p>{peliculaMap.release_date}</p>
            </div>
            <div class="rating">{peliculaMap.popularity}</div>
        </li> 

        )
}