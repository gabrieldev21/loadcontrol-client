import React from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import { Container } from 'components'

const useStyles = makeStyles({
  paper: {
    background: '',
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    width: 300,
  },
  input: {
    margin: '16px 0',
    marginBottom: '32',
  },
  button: {
    textTransform: 'capitalize',
    // marginTop: 'auto',
  },
})

const Login = props => {
  const classes = useStyles(props)
  return (
    <Container>
      <Paper elevation={3} className={classes.paper}>
        <TextField required id="standard-required" label="Username" />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          className={classes.input}
        />
        <Button variant="contained" color="primary" className={classes.button}>
          Sign In
        </Button>
      </Paper>
    </Container>
  )
}
export default Login
