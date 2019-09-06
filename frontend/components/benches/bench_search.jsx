import React from 'react'
import BenchesIndex from './benches_index'
import BenchMap from './bench_map'
import FilterForm from './filter_form'

export default class BenchesSearch extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <div className="bench-index">
                <BenchesIndex benches={this.props.benches} updateBounds={this.props.updateBounds} fetchBenches={this.props.fetchBenches} />
                <div className="map-box">
                <BenchMap benches={this.props.benches} fetchBenches={this.props.fetchBenches} updateBounds={this.props.updateBounds} />
                <FilterForm updateFilter={this.props.updateFilter} />
                </div>
            </div>
        )
    }
}