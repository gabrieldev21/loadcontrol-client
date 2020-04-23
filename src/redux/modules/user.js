import { createReducer } from 'utils/redux-utils'
import api from 'utils/api'

// Constants
const SET_USER_AUTH = 'SET_USER_AUTH'
const LOGOUT_USER = 'LOGOUT_USER'

// Action Creators
const setUser = payload => ({ type: SET_USER_AUTH, payload })
const logoutUser = payload => ({ type: LOGOUT_USER, payload })

export const authentication = ({ username, password }) => async dispatch => {
  try {
    if (!username || !password) {
      alert('ta vazio porra!')
      return false
    }
    const { data } = await api.post('auth/token', { username, password })
    localStorage.setItem('user', JSON.stringify(data))
    dispatch(setUser(data))
    return true
  } catch (e) {
    alert('Deu merda')
    return false
  }
}

export const logout = () => dispatch => {
  dispatch(logoutUser())
}

// Initial State
const initialState = {
  ...JSON.parse(localStorage.getItem('user')),
  errors: [],
}

// Reducer

export default createReducer(initialState, {
  [SET_USER_AUTH]: (state, action) => ({
    ...state,
    ...action.payload,
  }),

  [LOGOUT_USER]: (state, action) => ({
    errors: [],
  }),
})
