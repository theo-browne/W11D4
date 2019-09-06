import { connect } from "react-redux"
import BenchesIndex from "./benches_index"
import { fetchBenches } from "../../actions/bench_actions"
import { updateBounds } from '../../actions/filter_actions' 

const mSTP = state => ({
    benches: Object.values(state.entities.benches)
})

const mDTP = dispatch => ({
    fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
    // updateBounds: (bounds) => dispatch(updateBounds(bounds))
})

// export default connect(mSTP, mDTP)(BenchesIndex)