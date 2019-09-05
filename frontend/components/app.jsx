import React from 'react'
import SignInContainer from './session/signin_container';
import GreetingContainer from './greeting/greeting_container'
import SignUpContainer from './session/signup_container'
import { Route } from 'react-router-dom'

const App = (props) => (
  <div>
    <Route path="/signin" component={SignInContainer}/>
    <Route path="/signup" component={SignUpContainer} />
    <Route path="/" component={GreetingContainer}/>
  </div>
)

export default App;