import React from 'react'
import SignInContainer from './session/signin_container';
import GreetingContainer from './greeting/greeting_container'
import SignUpContainer from './session/signup_container'
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute} from '../util/route_util'
//  import BenchesIndexContainer from './benches/benches_index_container'
import BenchesSearchContainer from './benches/benches_search_container'
import BenchMap from './benches/bench_map'
import BenchFromContainer from './benches/bench_form_container'
import BenchesShowContainer from './benches/bench_show_container'

const App = (props) => (
  <div>
    <Route path="/" component={GreetingContainer} />
    <AuthRoute path="/signin" component={SignInContainer}/>
    <AuthRoute path="/signup" component={SignUpContainer} />
    
    <Switch >
    <ProtectedRoute path="/benches/new" component={BenchFromContainer} />
    <ProtectedRoute path="/benches/:id" component={BenchesShowContainer} />
      <ProtectedRoute exact path="/" component={BenchesSearchContainer} />
    </Switch>
  </div>
)

export default App;