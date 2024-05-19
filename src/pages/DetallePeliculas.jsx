import { useState, useEffect } from "react"
import { get } from "../utils/conexionAPI.js"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"
import { Contador } from "../components/Contador.jsx"
import "./DetallePeliculas.css"

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

    //Boton Me gusta
    //const btnMG = document.querySelector('.like')

    //btnMG.onClick = function() {
    //    imgchange.src = ""
    //}

    // function changeImg() {
    //     let btnMG = document.querySelector('.like')
    
    //     if (imgchange.src.match("https://icons8.com/icon/87/heart")) {
    //         imgchange.src = "https://icons8.com/icon/7697/heart"
    //     } else {
    //         imgchange.src = "https://icons8.com/icon/87/heart"
    //     }
    // }

    return(
        <>
            <Header/>
            <div className="contenedorPelicula">
                <div className="detalleImagen">
                    <img src={imgURL} alt={pelicula.title} className="ImgPelicula"/>
                </div>
                <div className="detallePelicula">
                    <div className="detalleInfo">
                        <h3>{pelicula.title}</h3> 
                        <p><strong>Género: </strong>{pelicula.genres.map((genre)=>genre.name).join("  -  ")}</p>
                        <p><strong>Descripción: </strong>{pelicula.overview}</p>
                    </div> 
                    <div className="detalleAlquiler">Alquilar durante: <Contador /> </div>
                    <div className="detalleBotones">
                        <botton className="like"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2ZS2xNURSGv2olaCkDIU0x8ChC0DLwSIzExCNCg4kYCErFSBkQBEmnpJ5BVJuYeM2olmEjRBAJYuCtiXhTVaKtrOQ/yU573J57e3q7m9wvOcm9Z+299lpnr73P2utAhgwZMmTwnCJgJ9AAPAGagVagCagHdgOTk9A3Bdijvk3S1Szddq8CmBSnA7OBm0BHhKsduA7MTKBvltq0R9TZAJT0xIGBQJUz4CfgNLBMs5MLDALGAEuB48Bntf0L7AeyHX32+6Bkgb5jwBLpMF250r0cOKM2wQM6AuQk68QI4JaU/AQOAMMi9BsK7FOYWN/zcsCuWt0z2V617Y5hcr7FmZ3hycxE4MRrhUKyWGi9ko5ax4mXwIwU9JUAbxxnIs1MleNEAakzTjqCWDfHxvZAX4HjzOEoC7td4ZTKTIQ9yVZdxTHoK1aYtXWnL9idbE3ERYWuuDgkG22LDqXI2U2iLOyoBIs9LvKd3XFiWINdEtoW6ztnZeuOMGG9hLaH+84K2XojTPhMwgn4T5FsfRom/CFhHv6TJ1vN5i4Eb09LFXxniJN1dOGdhD15CaaLQtlqL8guPJSwR5lmmpgjWx+ECWsk3Iz/bJWt58KE5RJW4z81snXL/05sJvzi+YIfDHyTrbYNh3JPDUrxlzWy8U6iRtvUyBzKwj+ygPuysay7aWtSw5X4xyrZ9jZK+Jc7e7Rlmr6QLwf+u8g7Y8fIu+pgWaYvVMum28kcC6Y7BYRN9D1lsuUXMDXZzhvU+TewiL5jsWwwW9anqiQoRFgFcB7pZ4ESw0gFh0RYLF5wnEnnzCwEvmvsi3Ecl63OddWJ0bX0Pms1lo15STbEQrZKmEGN6mQq5cuI41Q6Zdqa3hgnS+XQNg1yTaXVuDBdddLdprJqr2YXVrD+qgGfA3Nj0DkfeOEkrVbYTgtWoHjkVN4rU4zjHH1z+SNdT5SFp70AcMpZN43A+CQfRqPz2eCEPiv06QsrOO+36AkPSNDe4n6jU7V5r28uXjASuOzMTp0KBJ0pVFGtw9lara93lAIfZKRtCKsdmVUwPzoL2mbFa0YDV5ynbmnOUee/zdwo+hHrlNYEDtibejv9lGnAY132u1+T79lJMwPp4B+umggDgRN8wAAAAABJRU5ErkJggg==" alt="like" />Agregar a Favoritos</botton>
                        <botton className="carrito">Agregar al Carrito 🛒</botton>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}