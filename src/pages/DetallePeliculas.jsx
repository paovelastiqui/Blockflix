import { useState, useEffect } from "react"
import {get} from "../utils/conexionAPI.js"
import { useParams } from "react-router-dom"

export const DetallePeliculas = () => {
   
    const [pelicula,setPelicula]= useState (null)
    const {peliculaId} = useParams();

    useEffect(()=>{
        get(`/movie/${peliculaId}`).then((data)=>{
            // console.log(data);
            setPelicula(data)
        })
    },[peliculaId]);

   
   //si no existe id ingresado
   if (!pelicula){
    return null
   }

   const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

   return(
    <div className="detallePelicula">
        <img src={imgURL} alt={pelicula.title} className="col"/>
    
    
    </div>

   )

}