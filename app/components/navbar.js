import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h3>Welcome!</h3>
        <Link to= "/campuses">Campuses</Link>
        <Link to="/students">Students</Link>
    </nav>
  )
}

export default Navbar
