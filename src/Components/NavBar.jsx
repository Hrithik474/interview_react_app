import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
        <ul>
          <li><NavLink to={'/'}>Home</NavLink></li>
          <li><NavLink to={'/display'}>Question</NavLink></li>
          <li><NavLink to={'/add'}>AddQuestion</NavLink></li>
        </ul>
      </div>
  )
}

export default NavBar
