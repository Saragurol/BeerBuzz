
import React from 'react'
import {Link} from 'react-router-dom'

const Brewery = (props) => {
  const brewery = props.brewery

  return (
    <div className="brewery row" key={brewery.id}>
      <div className="column">
        <Link to={`/breweries/${brewery.id}`}>
          <h3>{brewery.name}</h3>
        </Link>
        <a href="#">
            <img className="media-object" src={brewery.imageUrl} alt="image" />
        </a>
      </div>
    </div>
  )
}

export default Brewery
