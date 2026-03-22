import React from 'react'
import "../style/nav.scss"
import { useNavigate } from 'react-router'

const Nav = () => {
    const navigate = useNavigate()
  return (
    <nav className='nav-bar'>
        <p>Insta</p>
        <button onClick={()=>{navigate("/createPost")}}
        className='button primary-button'>Create</button>
    </nav>
  )
}

export default Nav
