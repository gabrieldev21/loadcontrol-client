import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Collapse from '@material-ui/core/Collapse'

const useStyles = makeStyles((theme) => ({
  list: {
    flex: 1,
    minHeight: 'calc(100vh - 60px)',
    backgroundColor: 'rgb(27, 36, 48)',
    color: 'rgb(238, 238, 238)',
    '& svg': { color: 'rgb(238, 238, 238)' },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))

const Item = ({ text, icon, route, subList, ...others }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const history = useHistory()
  const handleClick = () => {
    if (subList) setOpen(!open)
    else history.replace(route)
  }

  return (
    <>
      <ListItem onClick={handleClick} button {...others} >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
        {!!subList && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {!!subList && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subList.map((item) => (
              <Item key={item.text} {...item} className={classes.nested} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

const MenuList = (props) => {
  const { list } = props
  const classes = useStyles(props)

  return (
    <List className={classes.list}>
      {list.map((item) => (
        <Item key={item.text} {...item} />
      ))}
    </List>
  )
}

export default MenuList
