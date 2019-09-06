import {UPDATE_BOUNDS} from '../actions/filter_actions'
import {UPDATE_FILTER} from '../actions/bench_actions'

const filtersReducer = (state = {}, action) => {
    Object.freeze(state)

    let newState = Object.assign({}, state)
    
    switch (action.type) {

        case UPDATE_FILTER:
            newState[action.filter] = action.value
            return newState
        case UPDATE_BOUNDS:
            
            newState = action.bounds
            return newState
        default:
        return state;
    }
}

export default filtersReducer;