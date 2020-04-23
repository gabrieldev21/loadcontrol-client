import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'

import Routes from './Routes'
import store from 'redux/store'
import 'assets/normalize.css'
import theme from 'utils/theme.json'

const themeProvider = createMuiTheme(theme)

function App() {
  return (
    <ThemeProvider theme={themeProvider}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  )
}

serviceWorker.unregister()
ReactDOM.render(<App />, document.getElementById('root'))
