// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import beerSubReducer from './subBeerReducer'
import brewerySubReducer from './subBreweryReducer'

const rootReducer = combineReducers({
  beerSubReducer,
  brewerySubReducer
})

export default rootReducer


//double check if this syntax for combine-reducer is correct
