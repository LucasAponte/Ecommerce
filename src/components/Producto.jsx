import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FavImg from '../img/cLleno.png'
import NoFavImg from '../img/cVacio.png'

export default function Producto({producto,agregarAFavoritos,eliminarDeFavoritos}) {

 
  const[favorito, setfavorito] = useState(false)

  function handleClick(){
  if (favorito) {
    eliminarDeFavoritos(producto)
    setfavorito(false)
  } else {
    agregarAFavoritos(producto)
    setfavorito(true)
  }
  }


  return (
    <div className='producto'>
      <Link to={`/producto/${producto.id}`}><img src={producto.image} alt="" /></Link>
      <div className="info">
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
    {   
        favorito ?
        <img className='fav-icon' src={FavImg} onClick={handleClick}/>
        :
        <img className='fav-icon' src={NoFavImg} onClick={handleClick}/>      
      }
    </div>
  )
}
