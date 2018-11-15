
import { connect } from 'react-redux'
import { logIn } from '../actions/SessionActions'
import LoginPage from '../components/LoginPage'

const mapStateToProps = state => ({
  errorMsg: state.sessionReducer.errorMsg,
})

const mapDispatchToProps = dispatch => ({
  logIn: (params, cb) => dispatch(logIn(params, cb))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)