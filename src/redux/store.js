import { applyMiddleware, compose, createStore } from 'redux'

import Middlewares from './middlewares'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...Middlewares)),
)
