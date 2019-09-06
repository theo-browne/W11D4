import * as ApiBenchUtils from '../util/bench_api_util'

export const RECEIVE_BENCH = 'RECEIVE_BENCH'
export const RECEIVE_BENCHES = 'RECEIVE_BENCHES'
export const UPDATE_FILTER = "UPDATE_FILTER"


export const receiveBench = (bench) => ({
    type: RECEIVE_BENCH,
    bench
})

export const receiveBenches = (benches) => ({
    type: RECEIVE_BENCHES,
    benches
})

export const updateFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const createBench = (bench) => dispatch => {
    return ApiBenchUtils.createBench(bench).then(bench => dispatch(receiveBench(bench)))
}

export const fetchBenches = (bounds) => dispatch => {
    return ApiBenchUtils.fetchBenches(bounds).then(benches => dispatch(receiveBenches(benches)))
}