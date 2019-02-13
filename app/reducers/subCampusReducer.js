import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'
const GET_ALL_REGISTERED_STUDENTS = 'GET_ALL_REGISTERED_STUDENTS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'


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

export const addCampus = (campuses) => ({
    type: ADD_CAMPUS,
    campuses
})

export const deleteCampus = (campuses) => ({
    type: DELETE_CAMPUS,
    campuses
})

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
    return async dispatch => {
        const response = await axios.get(`/api/campuses/${campusId}/students`)
        dispatch(getAllRegisteredStudents(response.data))
    }
}

export const postCampus = (newCampus) => {
    return async dispatch => {
        const response = await axios.post('/api/campuses', newCampus)
        dispatch(addCampus(response.data))
    }
}

export const removeCampus = (campusId) => {
    return async dispatch => {
        const response = await axios.delete(`/api/campuses/${campusId}`)
        dispatch(deleteCampus(response.data))
    }
}

const initialState = {
    campuses: [],
    campus: {},
    students: []
}

const campusSubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
        return {...state, campuses: action.campuses}
        case GET_ONE_CAMPUS:
        return {...state, campus: action.campus}
        case GET_ALL_REGISTERED_STUDENTS:
        return {...state, students: action.students}
        case ADD_CAMPUS:
        return {...state, campuses: [...state.campuses, action.campuses]}
        case DELETE_CAMPUS:
        return {...state, campuses: state.campuses.filter(campus => campus.id !== action.campuses.id)}
        default:
        return state
    }
}

export default campusSubReducer
