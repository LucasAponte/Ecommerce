import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { obtenerProductosPorId } from "../services/productoService";

export default function Detalle() {

const[producto,setproducto] =useState([])

const{id} = useParams()

useEffect(()=>{
  obtenerProductosPorId(id).then(data=> {
      setproducto(data)
  })
},[id])

  return (
    <div className="detalle">
      <img src={producto.image}></img>
      <div>
        <h3>{producto.title}</h3>
        <blockquote>{producto.description}</blockquote>
        <mark>{producto.price}</mark>
      </div>

    </div>
  )
}
