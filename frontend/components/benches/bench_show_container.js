import { connect } from 'react-redux'
import BenchShow from './bench_show'
import { fetchBench} from '../../actions/bench_actions'
import { benchReviews } from '../../reducer/selectors'
import {fetchReviews, createReview} from '../../actions/review_actions'

// const mSTP = (state, props) => ({
//     bench: state.entities.benches[props.match.params.id]
//     })

const mSTP = (state, props) => {
    return {
    bench: state.entities.benches[props.match.params.id],
    reviews: benchReviews(state, props.match.params.id),
    averageRating: state.entities.reviews.average_rating
    }
}

const mDTP = dispatch => ({
    fetchBench: benchId => dispatch(fetchBench(benchId)),
    fetchReviews: benchId => dispatch(fetchReviews(benchId)),
    createReview: (benchId, review) => dispatch(createReview(benchId, review))
})



export default connect(mSTP, mDTP)(BenchShow)