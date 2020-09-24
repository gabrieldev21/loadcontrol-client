import React from 'react'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  paper: {
    boxShadow: '0 0 14px 0 rgba(53,64,82,.05)',
    background: '#fff',
    height: 500,

    display: 'flex',
    flexDirection: 'column',
    
    padding: 40,
    maxWidth: props => props.maxWidth,
    width: '100%',
  },
})

const StyledPaper = props => {
  const classes = useStyles(props)
  return <Paper elevation={1} className={classes.paper} {...props} />
}

export default StyledPaper
