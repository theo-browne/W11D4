import React from "react";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(str) {
    return (e) => {
      this.setState({ [str]: e.target.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.createUser(this.state).then(this.props.history.push("/"))
  }

  render() {
    return (
      <form className="auth-form">
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleInput("username")} />
        </label>
        <label>Password:
          <input type="text" value={this.state.password} onChange={this.handleInput("password")} />
        </label>
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    )
  }
}