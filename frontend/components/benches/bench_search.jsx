import React from 'react'
import BenchesIndex from './benches_index'
import BenchMap from './bench_map'
import FilterForm from './filter_form'
import { AuthRoute, ProtectedRoute } from '../../util/route_util'
import BenchShowContainer from './bench_show_container'
import {Route} from 'react-router-dom'

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
                    <FilterForm updateFilter={this.props.updateFilter} fetchBenches={this.props.fetchBenches} filters={this.props.filters} />
                {/* <Route  path="/benches/:id" component={BenchShowContainer} /> */}
                {/* <BenchShowContainer /> */}
                </div>
            </div>
        )
    }
}