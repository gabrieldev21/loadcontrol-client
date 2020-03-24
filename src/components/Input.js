import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  input: {
    margin: '20px 0',
  },
})

const StyledInput = props => {
  const classes = useStyles(props)
  return <TextField className={classes.input} {...props} />
}

export default StyledInput
