import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneStudent} from '../reducers/subStudentReducer'

export class SingleStudent extends Component {
  async componentDidMount () {
    const studentId = Number(this.props.match.params.id)
    this.props.fetchStudent(studentId)
  }
  
  render () {
    const student = this.props.student
    const campus = this.props.student.campus
     console.log('I AM CAMPUS INFO', campus)
    // console.log('CAMPUS NAME', campus.name)
    //why is there an error message for campus.name
    console.log('I AM STUDENT PROPS', student)
    return (
      <div id="single-student">
        <div className="student row" key={student.id}>
          <div className="column">
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <h4>Email: {student.email}</h4>
            <h4>GPA: {student.gpa}</h4>
            {student.campusId === null ? <h4> Campus: Sorry no campus available</h4> : <h4> Campus: {student.campusId} </h4> }
            <a href="#">
              <img className="media-object" src={student.imageUrl} alt="image" />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        student: state.studentSubReducer.student
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchStudent: (studentId) => dispatch(fetchOneStudent(studentId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)
