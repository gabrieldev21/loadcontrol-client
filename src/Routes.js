import React from 'react'
import { useSelector } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import {
  Login,
  Dashboard,
  Logout,
  MatReserv,
  RegisterReserve,
  EditReserve,
} from 'pages'

const PrivateRoute = (props) => {
  const isLogged = useSelector((state) => !!state.user.token)
  return isLogged ? <Route {...props} /> : <Redirect to="/login" />
}

const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/reserve" exact>
          <MatReserv />
        </PrivateRoute>
        <PrivateRoute path="/reserve/cadastrar" exact>
          <RegisterReserve />
        </PrivateRoute>
        <PrivateRoute path="/reserve/editar/:id" exact>
          <EditReserve />
        </PrivateRoute>
        <PrivateRoute path="/logout" exact>
          <Logout />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default Routes
