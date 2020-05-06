import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  list: {
    flex: 1,
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: 'rgb(27, 36, 48)',
    color: 'rgb(238, 238, 238)',
    '& svg': { color: 'rgb(238, 238, 238)' },
  },
}))

const MenuList = (props) => {
  const { list } = props
  const classes = useStyles(props)
  const history = useHistory()
  const handleChangeRoute = (route) => {
    history.replace(route)
  }
  return (
    <List className={classes.list}>
      {list.map((item, index) => (
        <ListItem
          onClick={() => handleChangeRoute(item.route)}
          button
          key={item.text}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  )
}

export default MenuList
