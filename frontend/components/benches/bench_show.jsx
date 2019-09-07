import React from 'react'
import BenchMap from './bench_map'
import MarkerManager from '../../util/marker_manager'
import BenchReviewFrom from './bench_review_form'

export default class BenchShow extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bench: this.props.bench
        }
    }

    componentDidMount() {
        this.props.fetchBench(this.props.match.params.id)
        this.props.fetchReviews(this.props.match.params.id)
    }

    render(){
        if (this.props.bench === undefined ){
            return null
        } 
        return(
            <div>
                <div className="show-map-box">
                    <div className="map-and-review">
                <BenchMap benches={[this.props.bench]} />
                        <div>
                            <h3>Review This Bench!</h3>
                            <BenchReviewFrom fetchReviews={this.props.fetchReviews} history={this.props.history} benchId={this.props.bench.id} createReview={this.props.createReview} />
                        </div>
                    </div>
                <div className="bench-show-details">
                    <h2>
                        Average Rating: {this.props.averageRating}
                    </h2>
                    
                    <h3>Description:</h3>

                    <p>{this.props.bench.description}</p>
                         <h3>Seating</h3>
        
                         <p>{this.props.bench.seating}</p>
                    <div>
                        <h3>Comments:</h3>
                        {this.props.reviews.map(review => <li key={review.id}>{review.comment}</li>)}
                    </div>
                </div>
                
                </div>
            </div>
        )
    }
}