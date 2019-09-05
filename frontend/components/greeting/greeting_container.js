import { connect } from "react-redux"
import Greeting from "./greeting"
import { logout } from "../../actions/session_actions"

const mSTP = state => ({
  username: state.session.username
})

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Greeting)