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
        const response = await axios.get('/api/students')
        dispatch(getStudents(response.data))
    }
}

//initial state
const initialState = {
    students: [{id: 1, firstName: 'Tim', lastName: 'Lu', email: 'tim@gmail.com', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', gpa: '4.0'}, {id: 2, firstName: 'Eileen', lastName: 'Saraguro', email: 'Eileen@gmail.com', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', gpa: '4.0'}, {id: 3, firstName: 'Mars', lastName: 'Saraguro', email: 'Mars@gmail.com', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', gpa: '4.0'}]
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
