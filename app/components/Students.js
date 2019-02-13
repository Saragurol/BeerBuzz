import React, { Component } from 'react'
import {fetchStudents, postStudent} from '../reducers/subStudentReducer'
import {connect} from 'react-redux'
import Student from './Student'
import CreateStudent from './createStudent'

export class AllStudents extends Component {
    
    async componentDidMount () {
        this.props.fetchInitialStudents()
    }
    render() {
        const students = this.props.students
        const postAStudent = this.props.postAStudent
        return (
        <div id="student-list">
            <CreateStudent postAStudent= {postAStudent} />
            <h1>All Students</h1>
            {
                students.map(student => <Student student={student}key={student.id} />)
            }
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.studentSubReducer.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialStudents: () => dispatch(fetchStudents()),
        postAStudent: (studentInfo) => dispatch(postStudent(studentInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
