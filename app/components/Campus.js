import React from 'react'
import {Link} from 'react-router-dom'

const Campus = (props) => {
  const campus = props.campus

  return (
    <div className="campus row" key={campus.id}>
      <div className="column">
        <Link to={`/campuses/${campus.id}`}>
          <h3>{campus.name}</h3>
        </Link>
        <a href="#">
            <img className="media-object" src={campus.imageUrl} alt="image" />
        </a>
      </div>
    </div>
  )
}

export default Campus
