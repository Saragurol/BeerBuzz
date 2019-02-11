import axios from 'axios'

// action type
const GET_STUDENTS = 'GET_STUDENTS'

//action creator
export const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})

//thunks
export const fetchStudents = () => {
    return async dispatch => {
        const response = await axios.get('/api/campuses')
        dispatch(getStudents(response.data))
    }
}

//initial state
const initialState = {
    students: []
}

//Reducer -  studentSubReducer
const studentSubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
        return {...state, students: action.students}
        default:
        return state
    }
}

export default studentSubReducer
