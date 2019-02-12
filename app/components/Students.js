import React, { Component } from 'react'
import {fetchStudents} from '../reducers/subStudentReducer'
import {connect} from 'react-redux'
import Student from './Student'

export class AllStudents extends Component {
    async componentDidMount () {
        this.props.fetchInitialStudents()
    }
    render() {
        const students = this.props.students
        return (
        <div id="student-list">
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
        fetchInitialStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
