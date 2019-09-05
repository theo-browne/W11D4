import React from "react"
import { Link } from "react-router-dom"

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let content = this.props.username ? (
      <div>
        <h1>hi {this.props.username}</h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/signin">
          <button>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
      </div>
    )
    return content;
  }
}