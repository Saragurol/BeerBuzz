import axios from 'axios'

//action types
const GET_CAMPUSES = 'GET_CAMPUSES'

// action creators
export const getCampuses = (campuses) => ({
    type: GET_CAMPUSES,
    campuses
})

//thunks
export const fetchCampuses = () => {
    return async dispatch => {
        const response = await axios.get('/api/campuses')
        dispatch(getCampuses(response.data))
    }
}

//initial state
const initialState = {
    campuses: []
}

// Reducer- campus subReducer
const campusSubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CAMPUSES:
        return {...state, campuses: action.campuses}
        default:
        return state
    }
}

export default campusSubReducer
