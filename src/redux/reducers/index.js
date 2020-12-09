import { combineReducers } from 'redux'
import user from '../modules/user'
import reservation from '../modules/reservation'

const reducer = combineReducers({
  user,
  reservation,
})

export default reducer
