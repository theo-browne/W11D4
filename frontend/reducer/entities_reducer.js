import userReducer from "./users_reducer"
import { combineReducers } from "redux"
import benchReducer from './benches_reducer'

export default combineReducers({
  users: userReducer,
  benches: benchReducer
})