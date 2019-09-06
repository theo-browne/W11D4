import React from 'react'
import MarkerManager from '../../util/marker_manager'
import {withRouter} from 'react-router-dom'

 class BenchMap extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        const that = this
        this.map.addListener('idle', () => {
            const bounds = {}
            bounds["maxlng"] = this.map.getBounds().getNorthEast().lng()
            bounds["maxlat"] = this.map.getBounds().getNorthEast().lat()
            bounds["minlng"] = this.map.getBounds().getSouthWest().lng()
            bounds["minlat"] = this.map.getBounds().getSouthWest().lat()
            
            that.props.fetchBenches(bounds)
            that.props.updateBounds(bounds)
        })
        this.map.addListener('click', (e) => {
            that.handleClick(e)
        })
        // this.props.fetchBenches(pos)
        this.MarkerManager.updateMarkers(this.props.benches)
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.benches)
    }

    handleClick(e) {
        this.props.history.push({
            pathname: "benches/new",
            search: `lat=${e.latLng.lat()}&lng=${e.latLng.lng()}`
        });
    }

    render(){
        
        // if (this.map)  console.log(this.map.getBounds())
        
        return(
            <div className='bench-map'  id="map-container" ref={map => this.mapNode = map}>>
            
            </div>
        )
    }
}

export default withRouter(BenchMap)