import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

import Text from 'components/Text'
import Avatar from 'components/Avatar'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: '11px 16px',
    height: '60px',
  },
  text: {
    color: 'rgb(238, 238, 238)',
  },
  propity: {
    marginLeft: '8px',
  },
}))

const User = (props) => {
  const { name } = useSelector((state) => state.user)
  const classes = useStyles(props)
  return (
    <div className={classes.container}>
      <Avatar />
      <div className={classes.propity}>
        <Text variant="body2" className={classes.text}>
          {name}
        </Text>
        <Text variant="caption" className={classes.text}>
          Aux do Pel
        </Text>
      </div>
    </div>
  )
}

export default User
