import filtersReducer from "./filters_reducer"
import { combineReducers } from "redux"
// import benchReducer from './benches_reducer'

export default combineReducers({
    filters: filtersReducer
})