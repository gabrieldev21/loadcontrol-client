import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { Login } from 'pages'
import 'assets/normalize.css'
import theme from 'utils/theme.json'

const themeProvider = createMuiTheme(theme)

function App() {
  return (
    <ThemeProvider theme={themeProvider}>
      <Login />
    </ThemeProvider>
  )
}

serviceWorker.unregister()
ReactDOM.render(<App />, document.getElementById('root'))
