import React from 'react'

export default class FilterForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            min: 0,
            max: 10
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
        Object.keys(this.state).forEach(filter => {
            this.props.updateFilter(filter, this.state[filter] )
        })
    }



    render(){
        return(
            <div className="filter-form">
                <form action="">
                    <label > Minimum Seating
                        <input type="number" value={this.state.min} onChange={this.handleInput('min')}/>
                    </label>
                    <br/>
                    <label > Maximum Seating
                        <input type="number" value={this.state.max} onChange={this.handleInput('max')} />
                    </label>
                    <br/>
                    <button onClick={this.handleSubmit}>Apply Filter</button>
                </form>
            </div>
        )
    }
}