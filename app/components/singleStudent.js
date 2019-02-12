import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOneStudent} from '../reducers/subStudentReducer'


export class SingleStudent extends Component {


  async componentDidMount () {
    const studentId = Number(this.props.match.params.studentId)
    this.props.fetchStudent(studentId)
  }
  render () {
    const student = this.props.student
    return (
      <div id="single-student">
        <div className="student row" key={student.id}>
          <div className="column">
            <h3>{`${student.firstName} ${student.lastName}`}</h3>
            <h4>Email: {student.email} GPA: {student.gpa}</h4>
            <h5>Student's Campus</h5>
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
      fetchStudent: () => dispatch(fetchOneStudent())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent)