import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  text: {},
}))
const StyledText = props => {
  const classes = useStyles(props)
  return <Typography className={classes.text} {...props} />
}

export default StyledText
