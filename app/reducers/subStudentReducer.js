import axios from 'axios'

const GET_STUDENTS = 'GET_STUDENTS'
const GET_ONE_STUDENT = 'GET_ONE_STUDENT'
const ADD_STUDENT = 'ADD_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

export const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})

export const getOneStudent = (student) => ({
    type: GET_ONE_STUDENT,
    student
})

export const addStudent = (students) => ({
    type: ADD_STUDENT,
    students
})

export const deleteStudent = (studentId) => ({
    type: DELETE_STUDENT,
    studentId
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

export const postStudent = (newStudent) => {
    return async dispatch => {
        const response = await axios.post('/api/students', newStudent)
        dispatch(addStudent(response.data))
    }
}

export const removeStudent = (studentId) => {
    return async dispatch => {
        await axios.delete(`/api/students/${studentId}`)
        dispatch(deleteStudent(studentId))
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
        case ADD_STUDENT:
        return {...state, students: [...state.students, action.students]}
        case DELETE_STUDENT:
        return {...state, students: state.students.filter(student => student.id !== action.studentId)}
        default:
        return state
    }
}

export default studentSubReducer
