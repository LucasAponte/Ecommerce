import React from 'react'
import { Link } from 'react-router-dom'
import Logoimg from '../img/Logo.png'

export default function Header() {
  return (
    <header className='header'> 
        <Link className='icon' to={"/"}> <img src={Logoimg} alt="" /></Link>
        <nav className='navbar'>
          <Link to={"/"}>Productos</Link>
          <Link to={"/favoritos"}>Favoritos</Link>
        </nav>
    </header>
  )
}
