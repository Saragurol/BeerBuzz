import React from 'react'
import {Link} from 'react-router-dom'

const Beer = (props) => {
  const beer = props.beer

  return (
    <div className="beer row" key={beer.id}>
      <div className="column">
        <Link to={`/beers/${beer.id}`}>
          <h3>{beer.name}</h3>
        </Link>
      </div>
    </div>
  )
}

export default Beer

