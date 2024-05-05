
import {Link} from "react-router-dom"

export const DetallePelicula = (peliculaID) => {
   
    const [peliculas,setPeliculas]= useState([])

    useEffect(()=>{
        get("/pelicula/:peliculaID").then((data)=>{
            // console.log(data);
            setPeliculas(data.results)
        })
    },[])

    return (
        <ul className="grillaCartas">
            {peliculas.map((pelicula)=>(
                <Carta key={pelicula.id} peliculaMap={pelicula}/>
            ))}
        </ul>
    )
}