import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { Container } from 'components'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Login = () => {
  const classes = useStyles(props)
  return (
    <Container>
      <Paper>
        <TextField required id="standard-required" label="Username" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="contained" color="primary">
          Sign In
        </Button>
      </Paper>
    </Container>
  )
}
export default Login
