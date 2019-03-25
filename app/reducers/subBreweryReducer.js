import axios from 'axios'

const GET_BREWERIES = 'GET_BREWERIES'
const GET_ONE_BREWERY = 'GET_ONE_BREWERY'
const GET_ALL_REGISTERED_BEERS = 'GET_ALL_REGISTERED_BEERS'
const REMOVE_BREWERY = 'REMOVE_BREWERY'
const ADD_BREWERY = 'ADD_BREWERY'
const UPDATE_BREWERY = 'UPDATE_BREWERY '

export const getBreweries = (breweries) => ({
    type: GET_BREWERIES,
    breweries
})

export const getOneBrewery = (brewery) => ({
    type: GET_ONE_BREWERY,
    brewery
})

export const gettAllRegisteredBeers = (beers) => ({
    type: GET_ALL_REGISTERED_BEERS,
    beers
})

export const removeBrewery = (breweryId) => ({
    type: REMOVE_BREWERY,
    breweryId
})

export const addBrewery = (brewery) => ({
    type: ADD_BREWERY,
    brewery
})

export const updateBrewery = (brewery) => ({
    type: UPDATE_BREWERY,
    brewery
})

export const fetchBreweries = () => {
    return async dispatch => {
        const response = await axios.get('/api/breweries')
        dispatch(getBreweries(response.data))
    }
}

export const fetchOneBrewery = (breweryId) => {
    return async dispatch => {
        const response = await axios.get(`/api/breweries/${breweryId}`)
        dispatch(getOneBrewery(response.data))
    }
}

export const fetchAllRegisteredBeers = (breweryId) => {
    return async dispatch => {
        const response = await axios.get(`/api/breweries/${breweryId}/beers`)
        dispatch(gettAllRegisteredBeers(response.data))
    }
}

export const deleteBrewery = (breweryId) => {
    return async dispatch => {
        await axios.delete(`/api/breweries/${breweryId}`)
        dispatch(removeBrewery(breweryId))
    }
}

export const postBrewery = (brewery) => {
    return async dispatch => {
        const response = await axios.post('/api/breweries', brewery)
        console.log("REACHING SUB_REDUC_BREWERY")
        dispatch(addBrewery(response.data))
    }
}

export const putBrewery = (breweryId, brewery) => {
    return async dispatch => {
        const response = await axios.put(`/api/breweries/${breweryId}`, brewery)
        dispatch(updateBrewery(response.data))
    }
}

const initialState = {
    breweries: [],
    brewery: {},
    beers: []
}

const brewerySubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BREWERIES:
        return {...state, breweries: action.breweries}
        case GET_ONE_BREWERY:
        return {...state, brewery: action.brewery}
        case GET_ALL_REGISTERED_BEERS:
        return {...state, beers: action.beers}
        case REMOVE_BREWERY:
        return {...state, breweries: state.breweries.filter(brewery => brewery.id !== action.breweryId)}
        case ADD_BREWERY:
        return {...state, breweries: [...state.breweries, action.brewery]}
        case UPDATE_BREWERY:
        return {...state, brewery: action.brewery}
        default:
        return state
    }
}

export default brewerySubReducer
