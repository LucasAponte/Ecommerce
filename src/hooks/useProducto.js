import { useEffect, useState } from 'react'
import { obtenerProductos } from '../services/productoService'

export default function useProducto() {
    const[productos, setproductos]=useState([])
    const[favoritos, setfavoritos]=useState([])

    useEffect(()=>{
        obtenerProductos().then(data=> {
            setproductos(data)
        })
    },[])


    function agregarAFavoritos(producto){
        const newFavoritos =[...favoritos]
        newFavoritos.push(producto)
        setfavoritos(newFavoritos)
    }

    function eliminarDeFavoritos(producto){
        const newFavoritos = favoritos.filter(e => e.id !== producto.id)
        setfavoritos(newFavoritos)
    }

    return {productos, favoritos, agregarAFavoritos,eliminarDeFavoritos}
}
