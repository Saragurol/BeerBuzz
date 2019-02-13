import axios from 'axios'

//action types
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'
const GET_ALL_REGISTERED_STUDENTS = 'GET_ALL_REGISTERED_STUDENTS '

// action creators
export const getCampuses = (campuses) => ({
    type: GET_CAMPUSES,
    campuses
})

export const getOneCampus = (campus) => ({
    type: GET_ONE_CAMPUS,
    campus
})

export const getAllRegisteredStudents = (students) => ({
    type: GET_ALL_REGISTERED_STUDENTS,
    students
})

//thunks
export const fetchCampuses = () => {
    return async dispatch => {
        const response = await axios.get('/api/campuses')
        dispatch(getCampuses(response.data))
    }
}

export const fetchOneCampus = (campusId) => {
    return async dispatch => {
        const response = await axios.get(`/api/campuses/${campusId}`)
        dispatch(getOneCampus(response.data))
    }
}

export const fetchAllRegisteredStudents = (campusId) => {
    console.log("IM CAMPUS ID", campusId)
    return async dispatch => {
        const response = await axios.get(`/api/campuses/${campusId}/students`)
        dispatch(getAllRegisteredStudents(response.data))
    }
}

//initial state
const initialState = {
    campuses: [],
    campus: {},
    students: []
}

// Reducer- campus subReducer
const campusSubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
        return {...state, campuses: action.campuses}
        case GET_ONE_CAMPUS:
        return {...state, campus: action.campus}
        case GET_ALL_REGISTERED_STUDENTS:
        return {...state, students: action.students}
        default:
        return state
    }
}

export default campusSubReducer
