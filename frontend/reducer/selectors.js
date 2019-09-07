// export function selectCorrectBenches(state) {
//     const benches 
//     if (!state.fil)
//     return Object.values(state.entities.benches).filter(bench => {

//     }
// }

export function benchReviews(state, benchId) {
    
    return Object.values(state.entities.reviews).filter(review => review.bench_id === +benchId)
}