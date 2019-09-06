import {connect} from 'react-redux'
import BenchesShow from './bench_show'

const mSTP = state => ({
    bench: state.entities.benches[props.match.params.id]
    })





export default connect(mSTP, null)(BenchesShow)