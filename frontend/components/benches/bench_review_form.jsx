import React from 'react'

export default class BenchReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: "",
            rating: "",
            bench_id: this.props.benchId
        }
        this.selected = null
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRating = this.handleRating.bind(this)

    }
    handleInput(cat) {
        return (e) => {
            this.setState({ [cat]: e.target.value })
            console.log(this.state)
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        
        this.props.createReview(this.props.benchId, this.state).then(() => this.props.fetchReviews(this.props.benchId)).then(() => this.setState({comment: "", rating: ""}))
        
        let inputs = document.getElementsByClassName("review-rating")[0].childNodes
        for (let i = 0; i < inputs.length; i++) {
            inputs[i]["selected"] = false
        }
    }

    handleRating(e){
        this.setState({rating: +e.target.value})
        e.target.selected = true
        // this.selected = e.target
    }

    render() {
        return (
            <div>
                <form action="">
                    <label className="review-rating"> Rating 
                        1<input type="radio" onClick={this.handleRating} checked={this.state.rating === 1} name={this.state.rating} value={1} />
                        2<input type="radio" onClick={this.handleRating} checked={this.state.rating === 2} name={this.state.rating} value={2} />
                        3<input type="radio" onClick={this.handleRating} checked={this.state.rating === 3} name={this.state.rating} value={3} />
                        4<input type="radio" onClick={this.handleRating} checked={this.state.rating === 4} name={this.state.rating} value={4} />
                        5<input type="radio" onClick={this.handleRating} checked={this.state.rating === 5} name={this.state.rating} value={5} />
                    </label>
                    <br/>
                    <label className="review-comment" > Comment
                    <br/>
                        <textarea name="" value={this.state.comment} onChange={this.handleInput('comment')} ></textarea>
                {/* <input type="text" onChange={this.handleInput('comment')} value={this.state.comment} /> */}
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Add a Review</button>
                </form>
            </div>
        )
    }
}