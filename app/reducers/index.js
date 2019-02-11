// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'

const initialState = {}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer

// Syntax example!!!!!

// import Axios from 'axios'

// //action types
// const GET_CANDIES = 'GET_CANDIES'

// //action creators
// export const getCandies = (candies) => ({
//   type: GET_CANDIES,
//   candies: candies
// })

// //thunk creators
// export const fetchCandies = () => {
//     return async dispatch => {
//     const response = await Axios.get('/api/candies')
//     dispatch(getCandies(response.data))
//   }
// }

// //inital state
// const initialState = {
//   candies: []
// }

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_CANDIES:
//     return {...state, candies: action.candies}
//     default:
//       return state
//   }
// }

// export default rootReducer