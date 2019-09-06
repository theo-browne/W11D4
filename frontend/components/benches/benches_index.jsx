import React from 'react'
import BenchMap from './bench_map'

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
                    {Object.values(this.props.benches).map(bench => <li key={bench.id}>{bench.description}</li>)}
                </ul>
            </div>
        )
    }
}