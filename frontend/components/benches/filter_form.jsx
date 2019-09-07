import React from 'react'

export default class FilterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            min_seating: 0,
            max_seating: 10
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(str) {
        return (e) => {
            this.setState({[str]: e.target.value})
        }
    }
    handleSubmit(){
        // e.preventDefault()
        // Object.keys(this.state).forEach(filter => {
        //     this.props.updateFilter(filter, this.state[filter] )
        // })
        
        let filters = Object.assign({}, this.props.filters.bounds, this.state )
        this.props.fetchBenches(filters)
    }



    render(){
        
        return(
            <div className="filter-form">
                <form action="">
                    <label > Minimum Seating
                        <input type="number" value={this.state.min_seating} onChange={this.handleInput('min_seating')}/>
                    </label>
                    <br/>
                    <label > Maximum Seating
                        <input type="number" value={this.state.max_seating} onChange={this.handleInput('max_seating')} />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Apply Filter</button>
                </form>
            </div>
        )
    }
}