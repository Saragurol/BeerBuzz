import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
        <div className="nav-wrapper">
            <Link to="/" className="brand-logo">Home</Link>
            <ul id="nav" className="right hide-on-med-and-down">
                <li><Link to= "/breweries">Breweries</Link></li>
                <li><Link to= "/beers">Beers</Link></li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar

