import axios from 'axios'

const GET_BEERS = 'GET_BEERS'
const GET_ONE_BEER = 'GET_ONE_BEER'
const ADD_BEER = 'ADD_BEER'
const UPDATE_BEER = 'UPDATE_BEER'
const REMOVE_BEER = 'REMOVE_BEER'

const getBeers = (beers) => ({
    type: GET_BEERS,
    beers
})

const getOneBeer = (beer) => ({
    type: GET_ONE_BEER,
    beer
})

const addBeer = (beer) => ({
    type: ADD_BEER,
    beer
})

const updateBeer = (beer) => ({
    type: UPDATE_BEER,
    beer
})

export const removeBeer = (beerId) => ({
    type: REMOVE_BEER,
    beerId
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

export const postBeer = (beer) => {
    return async dispatch => {
        const response = await axios.post('/api/beers', beer)
        console.log('reaches beer_sub_reducer thunk')
        console.log("reached route")
        dispatch(addBeer(response.data))
    }
}

export const putBeer = (beerId, beer) => {
    return async dispatch => {
        const response = await axios.put(`/api/beers/${beerId}`, beer)
        dispatch(updateBeer(response.data))
    }
}

export const deleteBeer = (beerId) => {
    return async dispatch => {
        await axios.delete(`/api/beers/${beerId}`)
        dispatch(removeBeer(beerId))
    }
}

const initialState = {
    beers: [],
    beer: {},
    brewery: {}
}

const beersubReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BEERS:
            return {...state, beers: action.beers}
        case GET_ONE_BEER:
            return {...state, beer: action.beer, brewery: action.beer.brewery}
        case ADD_BEER:
            return {...state, beers: [...state.beers, action.beer]}
        case UPDATE_BEER:
            return {...state, beer: action.beer}
        case REMOVE_BEER:
            return {...state, beers: state.beers.filter(beer => beer.id !== action.beerId)}
        default:
            return state
    }
}

export default beersubReducer
