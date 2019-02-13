import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_ONE_STUDENT = 'GET_ONE_STUDENT'
const GET_POSTED_STUDENT = 'GET_POSTED_STUDENT'

export const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})

export const getOneStudent = (student) => ({
    type: GET_ONE_STUDENT,
    student
})

export const getPostedStudent = (students) => ({
    type: GET_POSTED_STUDENT,
    students
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

export const fetchCreatedStudent = (student) => {
    return async dispatch => {
        const response = await axios.post('/api/students', student)
        dispatch(getPostedStudent(response.data))
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
        case GET_POSTED_STUDENT:
        return {...state, students: [...state.students, action.students]}
        default:
        return state
    }
}

export default studentSubReducer
