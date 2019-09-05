import React from "react";

export default class SignIn extends React.Component {
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
    this.props.login(this.state).then(this.props.history.push("/"))
  }

  render() {
    return(
      <form>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.handleInput("username")}/>
        </label>
        <label>Password:
          <input type="text" value={this.state.password} onChange={this.handleInput("password")} />
        </label>
        <button onClick={this.handleSubmit}>Sign In</button>
      </form>
    )
  }
}