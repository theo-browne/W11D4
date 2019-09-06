import { connect } from "react-redux"
import BenchesIndex from "./benches_index"
import { fetchBenches, updateFilter } from "../../actions/bench_actions"
import BenchesSearch from "./bench_search";
import { updateBounds } from '../../actions/filter_actions'

const mSTP = state => ({
    benches: state.entities.benches
})

const mDTP = dispatch => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    updateBounds: (bounds) => dispatch(updateBounds(bounds)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(BenchesSearch)