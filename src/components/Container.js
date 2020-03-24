import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: props => (props.full ? '100vw' : '100%'),
    height: props => (props.full ? '100vh' : 'auto'),
    display: 'flex',
    alignItems: props => (props.center ? 'center' : 'stretch'),
    justifyContent: props => (props.center ? 'center' : 'flex-start'),
    flexDirection: props => (props.column ? 'column' : 'row'),
  },
})

const Container = props => {
  const classes = useStyles(props)
  return <div className={classes.root} {...props} />
}

export default Container
