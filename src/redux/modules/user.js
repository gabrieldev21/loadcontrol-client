import { createReducer } from 'utils/redux-utils'

import api from 'utils/api'

// Constants
const SET_USER_AUTH = 'SET_USER_AUTH'
const JEDI_SET_ERROR = 'JEDI_SET_ERROR'

// Action Creators
const setUser = payload => ({ type: SET_USER_AUTH, payload })
const fetchJedisError = () => ({
  type: JEDI_SET_ERROR,
  payload: 'Unfortunately, there was an error listing jedis',
})

export const authentication = ({ username, password }) => async dispatch => {
  try {
    if (!username || !password) {
      alert('ta vazio porra!')
      return
    }
    const { data } = await api.post('auth/token', { username, password })
    dispatch(setUser(data))
  } catch (e) {
    alert('Deu merda')
  }
}

// Initial State
const initialState = {
  errors: [],
}

// Reducer

export default createReducer(initialState, {
  [SET_USER_AUTH]: (state, action) => ({
    ...state,
    ...action.payload,
  }),

  [JEDI_SET_ERROR]: (state, action) => ({
    ...state,
    error: action.payload,
  }),
})
