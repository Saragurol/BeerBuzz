import React, { Component } from 'react'
import {fetchStudents, fetchCreatedStudent} from '../reducers/subStudentReducer'
import {connect} from 'react-redux'
import Student from './Student'
import CreateStudent from './createStudent'
import axios from 'axios'

export class AllStudents extends Component {
    constructor () {
        super()
        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this)
    }

    async componentDidMount () {
        this.props.fetchInitialStudents()
    }

    async addStudent (newStudent) {
        const response = await axios.post('/api/students', newStudent)
        this.setState({
            students: [...this.state.students, response.data]
        })
    }
    render() {
        const students = this.props.students
        return (
        <div id="student-list">
            <CreateStudent addStudent= {this.addStudent} />
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
        createStudentFunc: () => dispatch(fetchCreatedStudent())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)
