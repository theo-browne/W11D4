

export default class MarkerManager {
    constructor(map) {

        this.map = map
        this.markers = {}
    }

    updateMarkers(benches){

        Object.keys(this.markers).forEach(benchId => {
            if (!benches[benchId]) {
                this.removeMarker(benchId)
            }
        })
        
        Object.keys(benches).forEach(benchId => {
            if (!this.markers[benchId]) {
                this.createMarkerFromBench(benches[benchId])
            } 
        })
    }

      

    

    removeMarker(benchId) {
        const marker = this.markers[benchId]
        if (marker === null) return null
        marker.setMap(null)
        // marker = null
        this.markers[benchId] = null
    }
    createMarkerFromBench(bench){
        // const pos = new google.maps.LatLng(37.7758, -122.435)
        const pos = new google.maps.LatLng(bench.lat, bench.lng)
        // { lat: 37.7758, lng: -122.435 }
        // const pos = { lat: 37.7758, lng: -122.435 }

        const marker = new google.maps.Marker({
            position: pos,
            map: this.map,
            title: bench.description
        })
        this.markers[bench.id] = marker
        // 
        // marker.setMap(this.map)
    }
}