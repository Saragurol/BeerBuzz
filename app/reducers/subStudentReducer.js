import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_ONE_STUDENT = 'GET_ONE_STUDENT'

export const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})

export const getOneStudent = (student) => ({
    type: GET_ONE_STUDENT,
    student
})

export const fetchStudents = () => {
    return async dispatch => {
        const response = await axios.get('/api/students')
        dispatch(getStudents(response.data))
    }
}

export const fetchOneStudent = (student) => {
    return async dispatch => {
        const response = await axios.get(`/api/students/${student}`)
        dispatch(getOneStudent(response.data))
    }
}

const initialState = {
    students: [],
    student: {},
}

const studentSubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
        return {...state, students: action.students}
        case GET_ONE_STUDENT:
        return {...state, student: action.student}
        default:
        return state
    }
}

export default studentSubReducer
