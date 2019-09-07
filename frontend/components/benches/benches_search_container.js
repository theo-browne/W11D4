import { connect } from "react-redux"
import BenchesIndex from "./benches_index"
import { fetchBenches, updateFilter } from "../../actions/bench_actions"
import BenchesSearch from "./bench_search";
import { updateBounds } from '../../actions/filter_actions'


// const mSTP = state => ({
//     benches: state.entities.benches,
//     filters: state.filters
// })
const mSTP = (state, props) => {
    
    return{
    benches: state.entities.benches,
    filters: state.ui.filters
    }
}


const mDTP = dispatch => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    fetchBench: benchId => dispatch(fetchBench(benchId))
})

export default connect(mSTP, mDTP)(BenchesSearch)