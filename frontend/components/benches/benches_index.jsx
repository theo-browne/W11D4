import React from 'react'
import BenchMap from './bench_map'
import {Link, Route} from 'react-router-dom'
import {ProtectedRoute} from '../../util/route_util'
import BenchShowContainer from './bench_show_container'

export default class BenchesIndex extends React.Component {
    constructor(props) {
        super(props)
        
    }

    componentDidMount(){
        // this.props.fetchBenches()
    }

    render() {
        if (this.props.benches === undefined) return null
        return (
            <div className="bench-list">
                <ul className="bench-descriptions">
                    {Object.values(this.props.benches).map(bench => 
                        <Link key={bench.id} to={`/benches/${bench.id}`} style={{ textDecoration: 'none' }}>
                            <li key={bench.id}>{bench.description}</li>
                        </Link>
                    )}
                </ul>
            </div>
        )
    }
}