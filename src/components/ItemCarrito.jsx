import React from 'react';


export const ItemCarrito = ({peliculaMap}) => {

    const [peliculas,setPeliculas]= useState([])
    useEffect(()=>{
        get("/discover/movie")
        .then((data)=>{
            // console.log(data);
            setPeliculas(data.results)
        })
        .catch((error) => {
            console.error("Error recuperando películas:", error);
            // Manejar el error de forma adecuada, por ejemplo mostrando un mensaje de error al usuario
        });
    },[])

  return (
    <div className="item-carrito">
      <div className="imagen">
        <img src={imagen} alt="Producto" />
      </div>
      <div className="descripcion">
        <p>{peliculaMap.title}</p>
        <div className="contador">
          <button>-</button>
          <span>{cantidad}</span>
          <button>+</button>
        </div>
      </div>
      <div className="precio">
        <span>${precio}</span>
        <button onClick={onEliminar}>Eliminar</button>
      </div>
    </div>
  );
};

