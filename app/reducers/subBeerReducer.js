import axios from 'axios'

const GET_BEERS = 'GET_BEERS'
const GET_ONE_BEER = 'GET_ONE_BEER'


export const getBeers = (beers) => ({
    type: GET_BEERS,
    beers
})

export const getOneBeer = (beer) => ({
    type: GET_ONE_BEER,
    beer
})

export const fetchBeers = () => {
    return async dispatch => {
        const response = await axios.get('/api/beers')
        dispatch(getBeers(response.data))
    }
}

export const fetchOneBeer = (beerId) => {
    return async dispatch => {
        const response = await axios.get(`/api/beers/${beerId}`)
        dispatch(getOneBeer(response.data))
    }
}

const initialState = {
    beers: [],
    beer: {},
}

const beersubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BEERS:
        return {...state, beers: action.beers}
        case GET_ONE_BEER:
        return {...state, beer: action.beer}
        default:
        return state
    }
}

export default beersubReducer
