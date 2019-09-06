import React from 'react'

export default class BenchForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            description: "",
            lat: this.props.lat,
            lng: this.props.lng,
            seating: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }
    handleInput(cat){
       return (e) => {
            this.setState({[cat]: e.target.value})
            console.log(this.state)
        }
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.createBench(this.state).then(this.props.history.push("/"))
    }

    render(){
        return(
            <div>
            <form action="">
            <label > Description
                <input type="text" onChange={this.handleInput('description')} value={this.state.description}/>
            </label>
            <label > Seating
                <input type="number" onChange={this.handleInput('seating')} value={this.state.seating} />
            </label>
            <button onClick={this.handleSubmit}>Create a New Bench</button>
            </form>
            </div>
        )
    }
}