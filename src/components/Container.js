import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const Container = props => {
  const classes = useStyles(props)
  return <div className={classes.root} {...props} />
}

export default Container
