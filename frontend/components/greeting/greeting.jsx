import React from "react"
import { Link } from "react-router-dom"

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let content = this.props.username ? (
      <div>
      <div className="user-message">
        <h1>hi {this.props.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
        </div>
        <div className="profile-info">
          <li>
            Saved
        </li>
          <li>
            Benches
        </li>
          <li>
            Messages
        </li>
          <li>
            Profile
        </li>

        </div>
      </div>
    ) : (
        <div className="SignIn">
        <Link to="/signin" >
          <button>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    )
    return (
      <div className="Greeting">
        <div >
        <Link to="/" style={{ textDecoration: 'none', color: "black" }}> <h1 >Bench Bnb</h1></Link> 
      {content}
        </div>
      </div>
      )
  }
}