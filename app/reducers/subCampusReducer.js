import axios from 'axios'

//action types
const GET_CAMPUSES = 'GET_CAMPUSES'
const GET_ONE_CAMPUS = 'GET_ONE_CAMPUS'

// action creators
export const getCampuses = (campuses) => ({
    type: GET_CAMPUSES,
    campuses
})

export const getOneCampus = (campus) => ({
    type: GET_ONE_CAMPUS,
    campus
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

//initial state
const initialState = {
    campuses: [],
    campus: {}
}

// Reducer- campus subReducer
const campusSubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
        return {...state, campuses: action.campuses}
        case GET_ONE_CAMPUS:
        return {...state, campus: action.campus}
        default:
        return state
    }
}

export default campusSubReducer
