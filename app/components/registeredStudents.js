import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchAllRegisteredStudents} from '../reducers/subCampusReducer'

export class RegisteredStudents extends Component {
    async componentDidMount () {
        if (this.props.campusId) {
            this.props.fetchCampus(this.props.campusId)
        }
    }   
    render () {
        const students = this.props.students
        let result;
        if (students.length === 0) {
            result = <li>Sorry no students attend this campus.</li>
        } else {
            result = students.map(student => <li key= {student.id}>{`${student.firstName} ${student.lastName}`}</li>)
        }

        return (
            <div className="student-list row">
            <div className="column">
                <ul>
                    {result}
                </ul>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.campusSubReducer.students
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCampus: (campusId) => dispatch(fetchAllRegisteredStudents(campusId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredStudents)
