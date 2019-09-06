import {RECEIVE_BENCHES} from '../actions/bench_actions'
import {RECEIVE_BENCH} from '../actions/bench_actions'


const benchReduer = (state = {}, action) => {
    const newState = Object.assign({}, state)

    
    switch (action.type) {
        case RECEIVE_BENCHES:
            return action.benches
        case RECEIVE_BENCH:
            newState[action.bench.id] = action.bench
            return newState
        default:
            return state
            break;
    }
}

export default benchReduer