import React from "react"
import { Link } from "react-router-dom"

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let content = this.props.username ? (
      <div className="user-message">
        <h1>hi {this.props.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
        <div className="Greeting">
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    )
    return (
      <div className="Greeting">
        <h1> <h1>Bench Bnb</h1></h1>
      {content}
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
      )
  }
}