import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import User from './User'
import MenuList from './MenuList'

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
}))

const Menu = (props) => {
  const { mobileOpen, handleDrawerToggle, list } = props
  const classes = useStyles(props)
  const theme = useTheme()

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
          <MenuList list={list} />
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
          <div>
            <MenuList list={list} />
            <User />
          </div>
        </Drawer>
      </Hidden>
    </nav>
  )
}

Menu.defaultProps = { list: [], drawerWidth: '260px' }
export default Menu
