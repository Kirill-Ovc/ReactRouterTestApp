import { combineReducers } from 'redux'
import sessionReducer from './session'
import newsReducer from './news'

export default combineReducers({
  sessionReducer,
  newsReducer,
})