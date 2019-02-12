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

export const fetchOneCampus = (studentId) => {
    return async dispatch => {
        const response = await axios.get(`/api/campuses/${studentId}`)
        dispatch(getOneCampus(response.data))
    }
}

//initial state
const initialState = {
    campuses: [{id: 1, name: 'StonyBrook', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', address: '10 old drive', description: 'cool school' },
    {id: 2, name: 'Oswego', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', address: '9 old drive', description: 'cool school' },
    {id: 3, name: 'Fordham', imageUrl: 'http://www.ocsaccess.com/admin/clientfiles/ucsne/images/xlarge/mm%20choc.jpg', address: '8 old drive', description: 'cool school' }],
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
