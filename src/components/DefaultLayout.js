import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import DashboardIcon from '@material-ui/icons/Dashboard'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import RadioIcon from '@material-ui/icons/Radio';
import SettingsPhoneIcon from '@material-ui/icons/SettingsPhone';

import { Menu, Header } from 'components'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const list = [
  { text: 'Dashboard', icon: <DashboardIcon />, route: '/' },
  { text: 'Reserva', icon: <AssignmentIcon />, route: '/booking' },
  { text: 'Motorola', icon: <RadioIcon />, route: '/' },
  { text: 'Harris', icon: <SettingsPhoneIcon />, route: '/' },
  { text: 'Logout', icon: <PowerSettingsNewIcon />, route: '/logout' },

]

const DefaultLayout = (props) => {
  const { children } = props
  const classes = useStyles()

  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Menu
        list={list}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  )
}

export default DefaultLayout
