import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  avatar: {
    backgroundColor: 'rgb(27, 36, 48)',
    width: props => props.size,
    height: props => props.size,
    padding: 8,
    animation: 'spin 20s linear infinite',
  },
}))

const StyledAvatar = props => {
  const classes = useStyles(props)
  return <Avatar className={classes.avatar} {...props} />
}

export default StyledAvatar
