import axios from 'axios'

const GET_BREWERIES = 'GET_BREWERIES'
const GET_ONE_BREWERY = 'GET_ONE_BREWERY'
const GET_ALL_REGISTERED_BEERS = 'GET_ALL_REGISTERED_BEERS'

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
        default:
        return state
    }
}

export default brewerySubReducer
