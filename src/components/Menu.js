import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: (props) => props.drawerWidth,
      flexShrink: 0,
    },
  },

  drawerPaper: {
    width: (props) => props.drawerWidth,
    backgroundColor: 'rgb(35, 47, 62)',
  },
  list: {
    flex: 1,
    maxHeight: 'calc(62px - 100vh)',
    // height: 'auto',
    backgroundColor: 'rgb(27, 36, 48)',
    color: 'rgb(238, 238, 238)',
    '& svg': { color: 'rgb(238, 238, 238)' },
  },
}))

const User = () => {
  return (
    <div style={{ height: 40, padding: '11px 16px' }}>
      <p>XXXXXX</p>
    </div>
  )
}

const Menu = (props) => {
  const { mobileOpen, handleDrawerToggle, list } = props
  const classes = useStyles(props)
  const theme = useTheme()
  const history = useHistory()
  const handleChangeRoute = (route) => {
    history.replace(route)
  }

  const drawer = (
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

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
          <User />
        </Drawer>
      </Hidden>
    </nav>
  )
}

Menu.defaultProps = { list: [], drawerWidth: '260px' }
export default Menu
