import React from 'react'
import {Link} from 'react-router-dom'

const Student = (props) => {
  const student = props.student
  const removeAStudent = props.removeAStudent

  return (
    <div className="student row" key={student.id}>
      <div className="column">
        <Link to={`/students/${student.id}`}>
          <h3>{`${student.firstName} ${student.lastName}`}</h3>
        </Link>
        <button type = "button" className="remove" onClick={() => removeAStudent(student.id)} >X</button>
      </div>
    </div>
  )
}

export default Student

