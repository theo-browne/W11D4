import filterReducer from "./users_reducer"
import { combineReducers } from "redux"
import benchReducer from './benches_reducer'

export default combineReducers({
    filter: filterReducer,
})