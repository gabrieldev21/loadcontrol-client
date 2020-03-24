import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  button: {
    textTransform: 'capitalize',
    padding: '10px 0',
  },
})

const StyledButton = props => {
  const classes = useStyles(props)
  return (
    <Button
      variant="contained"
      color="primary"
      className={classes.button}
      disableElevation
      {...props}
    />
  )
}

export default StyledButton
