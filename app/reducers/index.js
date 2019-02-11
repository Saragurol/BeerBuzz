// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import {combineReducers} from 'redux'
import studentSubReducer from './subStudentReducer'
import campusSubReducer from './subCampusReducer'

const rootReducer = combineReducers({
  studentSubReducer,
  campusSubReducer
})

export default rootReducer


//double check if this syntax for combine-reducer is correct
