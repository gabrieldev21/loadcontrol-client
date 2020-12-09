import { createReducer } from 'utils/redux-utils'

// Constants
const SET_ROWS = 'RESERVATION/SET_ROWS'

// Action Creators
export const setRows = (payload) => ({ type: SET_ROWS, payload })

// Initial State
const initialState = {
  rows: [
    {
      id: 1,
      name: 'Falcon 2',
      serialNumber: 'JK46958',
      price: 'R$ 10.000,00',
    },
    {
      id: 2,
      name: 'Falcon 3',
      serialNumber: 'ZICOIDE2305',
      price: 'R$ 30.000,00',
    },
  ],
}

// Reducer

export default createReducer(initialState, {
  [SET_ROWS]: (state, action) => ({
    rows: action.payload,
  }),
})
