import userReducer from "./users_reducer"
import { combineReducers } from "redux"
import benchReducer from './benches_reducer'
import reviewsReducer from './reviews_reducer'

export default combineReducers({
  users: userReducer,
  benches: benchReducer,
  reviews: reviewsReducer
})