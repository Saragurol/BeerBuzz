import React, { Component } from 'react'
import {fetchStudents} from '../reducers/subStudentReducer'
import {connect} from 'react-redux'

export class AllStudents extends Component {
    componentDidMount () {
        this.props.fetchInitialStudents()
    }
    render() {
        const students = this.props.students
        return (
        <div>
            <ul className = "student-list" >
                {students.map(student => <li key={student.id}>Name: {student.name}</li>)}
            </ul>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInitialStudents: () => dispatch(fetchStudents())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents)

// QUE:
//am i connecting correctly now that we have a root reducer???
